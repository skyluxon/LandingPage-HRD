import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory store for consultation requests
interface ConsultationRequest {
  id: string;
  createdAt: string;
  companyName: string;
  contactName: string;
  jobTitle: string;
  email: string;
  phone: string;
  targetDepartment: string;
  employeeCount: string;
  preferredFormat: string;
  budgetRange?: string;
  inquiryDetails: string;
  selectedCurriculums: string[];
}

const mockConsultations: ConsultationRequest[] = [
  {
    id: "REQ-2026-089",
    createdAt: "2026-09-18T10:30:00.000Z",
    companyName: "한양정밀제조(주)",
    contactName: "김인재",
    jobTitle: "인재개발팀 수석",
    email: "hrd.kim@hanyang-mfg.co.kr",
    phone: "010-3849-1120",
    targetDepartment: "생산기술 및 스마트팩토리 연구소",
    employeeCount: "50-100명",
    preferredFormat: "오프라인 집중 워크숍 + 온라인 VOD",
    inquiryDetails: "설비 예지보전 및 현장 공정 데이터 분석을 위한 사내 LLM/Agent 도입 워크숍 요청",
    selectedCurriculums: ["제조/공정 데이터 분석 AI Agent 실습", "엔지니어 특화 GenAI 프롬프트 엔지니어링"],
  },
  {
    id: "REQ-2026-090",
    createdAt: "2026-09-19T14:15:00.000Z",
    companyName: "넥스트파이낸셜(주)",
    contactName: "이지원",
    jobTitle: "피플팀 리드",
    email: "jiwon.lee@nextfin.com",
    phone: "010-9921-4321",
    targetDepartment: "마케팅, 리스크관리, 경영지원",
    employeeCount: "100-300명",
    preferredFormat: "하이브리드 (전사 온라인 + 부서별 1박2일 해커톤)",
    inquiryDetails: "금융 보안 가이드라인을 준수한 사내 데이터 비유출 환경(Private LLM) 기반 전사 AX 교육 기획",
    selectedCurriculums: ["금융 특화 보고서 및 시장 리서치 자동화", "HR & 컴플라이언스 AI 에이전트"],
  }
];

// Lazy initialize Gemini client
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
}

// API Route: AI-powered Curriculum Diagnostic & Proposal Generation
app.post("/api/diagnose", async (req, res) => {
  try {
    const {
      companyName,
      industry,
      targetDepartment,
      aiMaturity,
      participantCount,
      goals,
    } = req.body;

    const ai = getGeminiClient();

    if (ai) {
      const prompt = `
당신은 한국 최고 수준의 기업 맞춤형 AX(AI Transformation / 인공지능 전환) 교육 컨설턴트 및 HRD 전문 디렉터입니다.
Coursera for Business 수준의 높은 신뢰도와 체계적인 엔터프라이즈 교육 제안을 제공합니다.

다음 기업의 정보를 바탕으로 HRD 담당자를 위한 맞춤형 AX 교육 로드맵 및 워크숍 커리큘럼 제안서를 JSON 형식으로 생성해주세요.

[기업 정보]
- 기업/기관명: ${companyName || "미지정 기업"}
- 산업 분야: ${industry || "일반 기업"}
- 대상 직무/부서: ${targetDepartment || "전사 임직원"}
- 현재 AI 활용 성숙도: ${aiMaturity || "기초/입문 (ChatGPT 기본 사용)"}
- 교육 대상 인원: ${participantCount || "30명"}
- 주요 고민 및 목표: ${goals || "업무 생산성 극대화 및 실무 AI 워크플로우 내재화"}

반드시 아래 JSON 구조로만 유효한 JSON을 반환해주세요:
{
  "curriculumTitle": "과정명",
  "programSummary": "3~4문장의 핵심 요약 및 기획 배경",
  "recommendedFormat": "추천 교육 형태 (예: 오프라인 실무 워크숍 16시간 + 온라인 VOD 30일)",
  "recommendedDuration": "권장 교육 시간 (예: 총 24시간 / 4주 코스)",
  "expectedRoi": "구체적인 정량적 기대효과 (예: 반복 문서 작성 업무 65% 감축, 연간 인당 180시간 절감)",
  "modules": [
    {
      "step": 1,
      "title": "모듈명",
      "hours": 4,
      "type": "온라인 VOD or 실습 워크숍",
      "summary": "모듈 설명",
      "keyTopics": ["핵심 주제 1", "핵심 주제 2", "핵심 주제 3"],
      "deliverable": "산출물 (예: 사내 표준 프롬프트 라이브러리 v1.0)"
    }
  ],
  "consultingAdvice": "HRD 담당자를 위한 성공적인 AX 교육 안착 제언 (사내 보안, 변화관리 등 2문장)",
  "recommendedWorkshops": ["추천 연계 워크숍 1", "추천 연계 워크숍 2"]
}
`;

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.3,
        },
      });

      const responseText = response.text?.trim();
      if (responseText) {
        const parsed = JSON.parse(responseText);
        return res.json({ success: true, data: parsed, isAiGenerated: true });
      }
    }

    // Fallback if no API key or API call issue
    const fallbackCurriculum = {
      curriculumTitle: `${industry || "기업"} 맞춤형 엔터프라이즈 AX 실무 마스터 트랙`,
      programSummary: `${companyName || "귀사"}의 ${targetDepartment || "실무 부서"} 임직원을 위해 단순 프롬프트 입문을 넘어 실무 시스템 및 업무 워크플로우에 직접 연동되는 인공지능 전환(AX) 프로그램입니다. 전사 생산성 향상과 실질적 결과물 도출을 보장합니다.`,
      recommendedFormat: "하이브리드 (온라인 마이크로러닝 8h + 오프라인 집중 워크숍 16h)",
      recommendedDuration: "총 24시간 (4주 집중 과정)",
      expectedRoi: "핵심 리서치 및 문서 작성 소요시간 68% 단축, 부서별 실무 AI 자동화 에이전트 3종 이상 완성",
      modules: [
        {
          step: 1,
          title: "Enterprise AX 인식과 사내 데이터 보안 가이드라인",
          hours: 4,
          type: "온라인 VOD & 퀴즈",
          summary: "생성형 AI의 원리와 사내 보안 준수, 지적재산권 보호 및 엔터프라이즈 프롬프트 디자인 기초",
          keyTopics: ["생성형 AI 모델 특성 및 선택 기준", "기업 데이터 비유출(Private AI) 보안 수칙", "고급 프롬프트 체이닝 기법"],
          deliverable: "사내 보안 준수 AI 사용 서약 및 개인별 기본 프롬프트 셋"
        },
        {
          step: 2,
          title: "직무별 실무 워크플로우 자동화 및 멀티모달 도구 실습",
          hours: 8,
          type: "오프라인 실무 워크숍",
          summary: "업무 영역별 실제 데이터셋을 활용한 보고서, 분석표, 시각화 자료 원클릭 자동화 실습",
          keyTopics: ["비정형 보고서/엑셀 데이터 요약 및 시각화", "도메인 맞춤형 지식검색(RAG) 프레임워크", "부서별 맞춤 프롬프트 엔지니어링"],
          deliverable: "실무 활용 가능한 직무별 표준 프롬프트 템플릿 10선"
        },
        {
          step: 3,
          title: "사내 노코드/로코드 AI Agent 및 업무 파이프라인 구축",
          hours: 8,
          type: "오프라인 프로젝트 워크숍",
          summary: "부서 내 반복 업무(이메일, VOC 분석, 회의록, 시장조사)를 처리하는 전용 AI 어시스턴트 제작",
          keyTopics: ["노코드 AI 에이전트 빌더 활용법", "API 및 협업툴(Slack, Teams) 연계", "팀 단위 피드백 루프 설계"],
          deliverable: "부서 전용 맞춤형 AI 업무 비서(Agent) 프로토타입 1종"
        },
        {
          step: 4,
          title: "AX 성과 공유회(Demo Day) 및 사내 확산 전략",
          hours: 4,
          type: "온·오프라인 하이브리드",
          summary: "각 팀의 프로젝트 결과물 시연, 경영진 및 HRD 피드백, 전사 확대 로드맵 도출",
          keyTopics: ["프로젝트 발표 및 효과성 검증", "AX 챔피언 사내 멘토링 방안", "LMS 기반 학습 성과 대시보드 리뷰"],
          deliverable: "부서별 AX 프로젝트 결과 보고서 및 전사 도입 가이드"
        }
      ],
      consultingAdvice: "교육 전 사전 직무 설문을 통해 실무 난제를 수집하고, 교육 후 HRD 분석 대시보드를 통해 부서별 활용도와 ROI를 가시화하여 전사 확산 동력을 확보하십시오.",
      recommendedWorkshops: [
        "GenAI 기반 경영·기획 문서 자동화 워크숍",
        "사내 비즈니스 데이터 분석 AI Agent 구축 캠프"
      ]
    };

    res.json({ success: true, data: fallbackCurriculum, isAiGenerated: false });
  } catch (error: any) {
    console.error("Diagnosis error:", error);
    res.status(500).json({ error: "AI 커리큘럼 분석 중 오류가 발생했습니다." });
  }
});

// API Route: Submit Consultation Request
app.post("/api/inquiries", (req, res) => {
  try {
    const {
      companyName,
      contactName,
      jobTitle,
      email,
      phone,
      targetDepartment,
      employeeCount,
      preferredFormat,
      budgetRange,
      inquiryDetails,
      selectedCurriculums,
    } = req.body;

    if (!companyName || !contactName || !email || !phone) {
      return res.status(400).json({ error: "필수 정보(회사명, 담당자명, 이메일, 연락처)를 모두 입력해주세요." });
    }

    const newRequest: ConsultationRequest = {
      id: `REQ-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
      createdAt: new Date().toISOString(),
      companyName,
      contactName,
      jobTitle: jobTitle || "HRD 담당자",
      email,
      phone,
      targetDepartment: targetDepartment || "전사 임직원",
      employeeCount: employeeCount || "미정",
      preferredFormat: preferredFormat || "상담 후 결정",
      budgetRange: budgetRange || "협의 필요",
      inquiryDetails: inquiryDetails || "맞춤형 AX 교육 커리큘럼 제안 및 견적 요청",
      selectedCurriculums: selectedCurriculums || [],
    };

    mockConsultations.unshift(newRequest);

    res.json({
      success: true,
      message: "상담 신청이 성공적으로 접수되었습니다. 전문 AX 컨설턴트가 24시간 이내에 맞춤 제안서와 함께 연락드립니다.",
      inquiryId: newRequest.id,
      data: newRequest,
    });
  } catch (err: any) {
    console.error("Inquiry error:", err);
    res.status(500).json({ error: "상담 신청 처리 중 오류가 발생했습니다." });
  }
});

// API Route: Get recent inquiries (for demo/admin visibility)
app.get("/api/inquiries", (_req, res) => {
  res.json({ success: true, count: mockConsultations.length, data: mockConsultations });
});

// API Route: Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

async function start() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`AX Campus Enterprise server running on http://0.0.0.0:${PORT}`);
  });
}

start();
