import { CurriculumItem } from '../types';

export const ENTERPRISE_CURRICULUMS: CurriculumItem[] = [
  {
    id: 'curriculum-all-01',
    title: '전사 임직원 AX 리터러시 & 업무 자동화 실무 트랙',
    subtitle: '보안 가이드 준수 하에 전 임직원의 일상 업무를 3배 빠르게 혁신하는 기본-실무 통합 코스',
    department: 'all',
    targetAudience: '전사 전 직원, 신임 팀장, 실무자 전원',
    format: 'hybrid',
    duration: '총 16시간 (온라인 6h + 오프라인 실습 10h)',
    level: 'beginner',
    tag: 'HRD 베스트셀러',
    isPopular: true,
    highlights: [
      '사내 비공개 데이터 및 기밀 유출 방지(Private AI) 보안 수칙 체화',
      '문서 작성, 보고서 요약, 회의록 자동화 8종 템플릿 실습',
      '비개발자를 위한 일상 업무 자동화(Custom GPTs / Gems 제작)',
      '실무 적용률 94.8% 기록'
    ],
    tools: ['ChatGPT Enterprise', 'Claude 3.7', 'Gemini Advanced', '사내 Private LLM'],
    expectedOutput: '개인별 즉시 사용 가능한 표준 프롬프트 모음집 & 사내 보안 가이드 수료증',
    onlineHours: 6,
    offlineHours: 10,
    satisfactionScore: 4.92,
    completionRate: 96.4,
    modules: [
      {
        title: '모듈 1: 생성형 AI 이해와 사내 보안 컴플라이언스',
        description: 'LLM의 기본 메커니즘과 기업 데이터 보안 사고 예방, 올바른 AI 활용 윤리',
        hours: 3,
        topics: ['LLM 작동 원리와 환각(Hallucination) 검증법', '기업 정보 비유출 환경 설정', '저작권 및 사내 보안 규정 가이드']
      },
      {
        title: '모듈 2: 고성과자를 위한 엔터프라이즈 프롬프트 디자인',
        description: '단문형 질문을 넘어 역할(Persona)-맥락(Context)-제약(Constraint)-출력형식 체이닝',
        hours: 4,
        topics: ['RTF/CARE 프레임워크 기반 프롬프트', '페르소나 지정 및 몇 단계 추론(Few-shot)', '표/JSON/Markdown 구조화 출력']
      },
      {
        title: '모듈 3: 실무 직무별 문서 & 리서치 고속 자동화',
        description: '기획서 초안, 경쟁사 리서치, 이메일 커뮤니케이션, 영문 서신 실전 작성',
        hours: 5,
        topics: ['PDF/Excel 비정형 데이터 질의응답', '방대한 보고서 3분 핵심 요약', '회의 오디오/텍스트 전사 및 실행 과제 추출']
      },
      {
        title: '모듈 4: 나만의 업무 보조 AI Agent 제작 워크숍',
        description: '코딩 없이 우리 팀 전용 챗봇 에이전트를 직접 구축하고 공유하는 실습',
        hours: 4,
        topics: ['Custom GPTs / Google Gems 설계', '팀별 지식 베이스 업로드 및 테스트', '사내 공유 및 성과 발표회']
      }
    ]
  },
  {
    id: 'curriculum-plan-01',
    title: '전략기획 및 경영지원 특화 AX 프로페셔널',
    subtitle: '시장 분석, 신사업 기획, 경영 보고서 작성 시간을 70% 단축하는 기획자 전용 심화 과정',
    department: 'planning',
    targetAudience: '경영기획, 전략기획, 사업개발, 사업관리 담당자',
    format: 'offline',
    duration: '총 16시간 (오프라인 2일 집중 워크숍)',
    level: 'intermediate',
    tag: '기획 부서 추천 1위',
    isPopular: true,
    highlights: [
      '국내외 시장/산업 동향 Deep Research 멀티 에이전트 파이프라인',
      '임원 보고용 Executive Summary 및 슬라이드 개요 자동 생성',
      '신사업 아이디에이션 및 SWOT/비즈니스 모델 캔버스 고도화',
      '경쟁사 재무 및 IR 공시 자료 AI 분석'
    ],
    tools: ['Gemini Deep Research', 'Perplexity Pro', 'Claude 3.7 Projects', 'Gamma'],
    expectedOutput: '실제 부서 추진 중인 신규 전략 보고서 초안 및 슬라이드 개요서',
    onlineHours: 0,
    offlineHours: 16,
    satisfactionScore: 4.88,
    completionRate: 97.1,
    modules: [
      {
        title: '모듈 1: 전략 리서치 자동화 & 경쟁 인텔리전스',
        description: '검색 엔진 그라운딩 및 다중 소스 교차 검증을 통한 시장 조사 자동화',
        hours: 4,
        topics: ['신규 시장 진입 전략 리서치 프롬프트', '정부 정책/규제 동향 파악', '경쟁사 IR 및 애널리스트 리포트 종합 분석']
      },
      {
        title: '모듈 2: 논리적 의사결정 프레임워크 & 시나리오 분석',
        description: '맥킨지 식 문제해결 기법(MECE, 이슈 트리)과 AI의 결합',
        hours: 4,
        topics: ['핵심 가설 수립 및 반론 시뮬레이션', '리스크 시나리오 A/B/C 예측', '경영진 관점 질의응답 시뮬레이션']
      },
      {
        title: '모듈 3: 경영진 보고서 & 프레젠테이션 고속 빌드',
        description: '1페이지 보고서(1-Pager), 기안문, 시각화 차트 구조화',
        hours: 4,
        topics: ['Executive Summary 작성 정밀 튜닝', '복잡한 숫자 데이터 인사이트 도출', '발표 슬라이드 스토리라인 기획']
      },
      {
        title: '모듈 4: 사내 전략 에이전트 빌드 & 데모데이',
        description: '부서 전용 사내 지식 검색(RAG) 기반 기획 어시스턴트 구축',
        hours: 4,
        topics: ['사내 기획 가이드 연동', '부서별 실전 과제 발표', '전문가 1:1 피드백']
      }
    ]
  },
  {
    id: 'curriculum-mkt-01',
    title: '마케팅 & 영업 직무를 위한 멀티모달 AX 실무 캠프',
    subtitle: '카피라이팅, 비주얼 에셋 생성, 페르소나 분석 및 CRM 영업 제안서 자동화',
    department: 'marketing',
    targetAudience: '브랜드 마케터, 퍼포먼스 마케터, 콘텐츠 제작자, B2B 영업대표',
    format: 'hybrid',
    duration: '총 20시간 (온라인 8h + 오프라인 12h)',
    level: 'intermediate',
    tag: '마케팅 실무 적용률 1위',
    highlights: [
      '타깃 고객 페르소나 5종 인터뷰 시뮬레이션 및 구매 장벽 분석',
      '고전환율 광고 카피 100종 30분 생성 & A/B 테스트 기획',
      '생성형 이미지/영상 AI 도구를 활용한 크리에이티브 시안 제작',
      'B2B 영업 고객사 맞춤형 제안서 및 콜드 메일 개인화 자동화'
    ],
    tools: ['Midjourney v6', 'Claude 3.7 Sonnet', 'Make.com', 'Canva AI', 'Runway Gen-3'],
    expectedOutput: '실제 집행 가능한 마케팅 캠페인 에셋 팩 & B2B 영업 제안 템플릿',
    onlineHours: 8,
    offlineHours: 12,
    satisfactionScore: 4.95,
    completionRate: 95.8,
    modules: [
      {
        title: '모듈 1: AI 기반 고객 심층 분석 및 페르소나 구축',
        description: '리뷰 데이터와 고객 VOC를 분석하여 구매 결정 요인 추출',
        hours: 4,
        topics: ['소셜/이커머스 리뷰 감성 분석', '가상 페르소나와 1:1 심층 인터뷰', '고객 여정 맵(CJM) 작성']
      },
      {
        title: '모듈 2: 고효율 카피라이팅 & 멀티채널 콘텐츠 생성',
        description: 'SNS, 검색광고, 블로그, 보도자료 채널별 맞춤 어조 적용',
        hours: 5,
        topics: ['AIDA/PAS 공식 기반 카피 생성', 'SEO 최적화 콘텐츠 발행 파이프라인', '브랜드 톤앤매너(Tone of Voice) 학습']
      },
      {
        title: '모듈 3: 생성형 이미지/비주얼 제작 실습',
        description: '고품질 제품 연출 컷, 배너 시안, 짧은 숏폼 영상 기획',
        hours: 6,
        topics: ['프롬프트 가중치 조절 및 스타일 레퍼런스', '상업적 이용 가이드 및 인페인팅/업스케일링', '영상 스토리보드 생성']
      },
      {
        title: '모듈 4: B2B 영업 제안서 및 리드 육성 자동화',
        description: '고객사 뉴스 기반 개인화 콜드메일 및 제안서 초안 1분 빌더',
        hours: 5,
        topics: ['타깃 기업 최근 공시/뉴스 크롤링 요약', '1:1 맞춤 피칭 제안서 작성', '영업 FAQ 및 반론 극복 챗봇']
      }
    ]
  },
  {
    id: 'curriculum-hr-01',
    title: 'HR & 인재개발(HRD) 담당자를 위한 피플 AX 마스터',
    subtitle: '채용 공고 최적화, 역량 모델링, 교육 설계 및 사내 제도 상담 봇 구축',
    department: 'hr',
    targetAudience: '인사기획, 채용담당자, HRD/교육담당자, 노무/복리후생 담당자',
    format: 'hybrid',
    duration: '총 14시간 (온라인 4h + 오프라인 실습 10h)',
    level: 'intermediate',
    tag: 'HRD 전용 특화 코스',
    highlights: [
      'JD(직무기술서) 기반 이력서 적합도 스크리닝 및 면접 질문 자동 생성',
      '사내 취업규칙/복리후생 규정 기반 24시간 HR 헬프데스크 챗봇 제작',
      '신임자 온보딩 프로그램 기획 및 직무 교육 커리큘럼 자동 설계',
      '임직원 만족도 조사 서술형 응답 3,000건 감성/키워드 분석'
    ],
    tools: ['ChatGPT Enterprise', 'Claude Projects', 'NotebookLM', 'Typeform AI'],
    expectedOutput: '사내 규정 상담 챗봇 프로토타입 & 채용 역량 면접 평가표',
    onlineHours: 4,
    offlineHours: 10,
    satisfactionScore: 4.96,
    completionRate: 98.2,
    modules: [
      {
        title: '모듈 1: AI 시대 HR 트렌드와 데이터 거버넌스',
        description: '인사 데이터 민감 정보 보호와 채용 공정성 확보 방안',
        hours: 3,
        topics: ['개인정보보호법 준수 AI 환경', '채용 편향(Bias) 방지 가이드', 'HR 테크 최신 동향']
      },
      {
        title: '모듈 2: 스마트 채용 & 온보딩 프로세스 혁신',
        description: '최적 인재 소싱부터 입사 첫날까지의 경험 자동화',
        hours: 4,
        topics: ['직무기술서(JD) 고도화', '구조화 면접 질문지 및 평가지 생성', '신규 입사자 30-60-90 온보딩 계획서']
      },
      {
        title: '모듈 3: 사내 규정 & 복리후생 지식 챗봇 구축',
        description: '취업규칙, 여비규정, 휴가제도 PDF 기반 24/7 HR 어시스턴트',
        hours: 4,
        topics: ['NotebookLM 및 프로젝트 지식 베이스 세팅', '자주 묻는 질문(FAQ) 100선 튜닝', '상담 로그 모니터링 체계']
      },
      {
        title: '모듈 4: 임직원 서베이 분석 및 HRD 커리큘럼 기획',
        description: '정성 피드백 대량 분석 및 교육 요구도 기반 모듈 기획',
        hours: 3,
        topics: ['설문 정성 텍스트 군집화', '교육 요구도 분석(TNA) 자동화', '맞춤형 교육 평가 설문 설계']
      }
    ]
  },
  {
    id: 'curriculum-finance-01',
    title: '재무·회계·구매 직무를 위한 정밀 데이터 AX 트랙',
    subtitle: '비정형 인보이스 데이터 추출, 결산 점검, 계약서 리스크 검토 및 재무제표 AI 분석',
    department: 'finance',
    targetAudience: '재경팀, 회계팀, 자금팀, 전략구매팀 실무자',
    format: 'offline',
    duration: '총 16시간 (오프라인 실습 워크숍 2일)',
    level: 'advanced',
    tag: '오류 0% 정밀 분석',
    highlights: [
      '스캔 영수증/인보이스 비정형 문서 OCR 및 ERP 입력용 정형화',
      '표준 구매 계약서 조항별 독소 조항 및 법적 리스크 사전 스크리닝',
      '재무제표 3개년 추이 분석 및 이상치(Anomaly) 조기 감지',
      '정확도 100%를 위한 이중 검증 프롬프트 아키텍처'
    ],
    tools: ['Claude 3.7 with Artifacts', 'Python in Excel', 'Custom OCR LLM', 'OpenAI Advanced Data Analysis'],
    expectedOutput: '계약서 자동 검토 체크리스트 봇 & 재무제표 분석 엑셀 자동화 템플릿',
    onlineHours: 0,
    offlineHours: 16,
    satisfactionScore: 4.87,
    completionRate: 94.5,
    modules: [
      {
        title: '모듈 1: 금융·재무 데이터 보안과 환각 제로 검증법',
        description: '숫자 연산 검증 및 근거 기반 답변 추출(Strict Grounding)',
        hours: 3,
        topics: ['수치 데이터 오차 방지 기법', '회계 감사 기준(K-IFRS) 적합성 검토', '데이터 마스킹 실습']
      },
      {
        title: '모듈 2: 계약서 및 법률 문서 고속 리스크 진단',
        description: '방대한 계약서 중 불리한 배상 조항 및 누락 조항 자동 하이라이트',
        hours: 5,
        topics: ['표준 계약서 템플릿과 비교 분석', '독소 조항 및 불공정 거래 요소 적발', '수정 대안 조항 자동 제안']
      },
      {
        title: '모듈 3: 비정형 증빙 서류 추출 및 엑셀 데이터 정제',
        description: '거래명세서, 세금계산서, 은행 입출금 내역 통합 정리',
        hours: 4,
        topics: ['다국어 인보이스 정형 JSON 변환', '복수 파일 일괄 정제 파이프라인', '월말 마감 결산 체크리스트']
      },
      {
        title: '모듈 4: 공급망 단가 분석 및 원가 절감 시뮬레이션',
        description: '원자재 가격 변동에 따른 구매 단가 협상 시나리오 도출',
        hours: 4,
        topics: ['공급업체 제안서 단가 비교 분석', '원가 절감 협상 포인트 추출', '재무 보고서 자동 생성']
      }
    ]
  },
  {
    id: 'curriculum-it-01',
    title: '개발자 및 엔지니어를 위한 AI 페어 프로그래밍 & Agent 빌딩',
    subtitle: 'GitHub Copilot, Cursor 활용 코드 생산성 400% 향상 및 기업용 사내 LLM RAG 시스템 구현',
    department: 'it_dev',
    targetAudience: '소프트웨어 엔지니어, 데이터 분석가, 시스템 엔지니어, 테크 리드',
    format: 'offline',
    duration: '총 24시간 (오프라인 3일 실전 해커톤)',
    level: 'advanced',
    tag: '개발팀 필수 코스',
    isPopular: true,
    highlights: [
      'Cursor IDE 기반 레거시 코드 리팩토링 및 단위 테스트 자동화',
      '사내 위키/문서 검색을 위한 맞춤형 RAG(검색 증강 생성) 아키텍처 실습',
      '멀티 에이전트 프레임워크(LangGraph, AutoGen) 실무 구현',
      'API 보안 키 관리 및 토큰 비용 최적화(FinOps)'
    ],
    tools: ['GitHub Copilot', 'Cursor', 'LangChain', 'ChromaDB', 'Gemini API'],
    expectedOutput: '사내 배포 가능한 맞춤형 사내 지식 RAG 에이전트 서비스',
    onlineHours: 0,
    offlineHours: 24,
    satisfactionScore: 4.97,
    completionRate: 98.9,
    modules: [
      {
        title: '모듈 1: AI 어시스턴트 기반 모던 코딩 워크플로우',
        description: '단순 코드 완성을 넘어 컨텍스트 파일 주입과 아키텍처 설계',
        hours: 6,
        topics: ['Cursor .cursorrules 최적화', 'TDD(테스트 주도 개발) 테스트 코드 자동 생성', '코드 리뷰 봇 파이프라인']
      },
      {
        title: '모듈 2: 엔터프라이즈 RAG(검색 증강 생성) 엔지니어링',
        description: '사내 PDF, Confluence, DB를 연결하는 실시간 지식 검색기 구축',
        hours: 6,
        topics: ['청킹(Chunking) 및 임베딩 전략', '하이브리드 검색(BM25 + Dense)', '재순위화(Reranking) 기법']
      },
      {
        title: '모듈 3: 자율 실행 AI Agent & Tool Calling 구현',
        description: 'LLM이 직접 사내 API를 호출하고 복합 업무를 완수하는 시스템',
        hours: 6,
        topics: ['함수 호출(Function Calling) 마스터', 'LangGraph 기반 상태 머신 제어', '에러 핸들링 및 가드레일(NeMo)']
      },
      {
        title: '모듈 4: 사내 AI 서비스 배포 및 성능 최적화',
        description: '도커 컨테이너 패키징 및 사내 서버/클라우드 배포 실습',
        hours: 6,
        topics: ['토큰 레이턴시 및 캐싱 전략', '로깅 및 모니터링(LangSmith)', '최종 프로젝트 시연 및 심사']
      }
    ]
  },
  {
    id: 'curriculum-exec-01',
    title: 'C-Level 및 사업본부장을 위한 AX 경영 전략 & 거버넌스',
    subtitle: '비즈니스 모델 혁신, 투자 ROI 산정, 조직 문화 변화관리 및 AI 보안 거버넌스 마스터클래스',
    department: 'executive',
    targetAudience: 'CEO, 사장단, 본부장, 사업부장, HR 총괄 임원',
    format: 'consulting',
    duration: '총 8시간 (임원 전용 1일 세미나 + 1:1 컨설팅 세션)',
    level: 'intermediate',
    tag: '경영진 전용 프라이빗',
    highlights: [
      '글로벌 선도 기업(Fortune 500)의 AX 추진 실패와 성공 팩터 해부',
      '우리 회사 핵심 사업 밸류체인별 AX 기회 지도(Opportunity Map) 도출',
      'AI 도입 비용(Capex/Opex) 대비 생산성 증대 ROI 모델링',
      '전사 저항 극복 및 AX 챔피언 조직 설계 가이드'
    ],
    tools: ['Executive Decision Matrix', 'AX Readiness Assessment Framework', 'Enterprise AI Cost Calculator'],
    expectedOutput: '귀사 맞춤형 전사 AX 3개년 마스터플랜 보고서 & 거버넌스 가이드라인',
    onlineHours: 0,
    offlineHours: 8,
    satisfactionScore: 4.99,
    completionRate: 100,
    modules: [
      {
        title: '세션 1: 글로벌 AI 패러다임 변화와 산업별 파괴적 혁신',
        description: '경쟁사가 앞서가는 AI 적용 사례와 산업별 지형 변화 분석',
        hours: 2,
        topics: ['AI 3단계 진화: 비서 -> 협업자 -> 자율 에이전트', '국내외 대기업 실제 도입 성패 사례', '이사회 및 주주 관점의 AI 전략']
      },
      {
        title: '세션 2: 사내 AX 기회 지도 및 우선순위 포트폴리오',
        description: '도입 난이도 대비 비즈니스 임팩트 매트릭스 도출',
        hours: 2,
        topics: ['Quick-win 과제 선별', '데이터 자산 가치 평가', 'Make vs Buy vs Partner 결정 기준']
      },
      {
        title: '세션 3: 기업 리스크 관리 & 컴플라이언스 체계',
        description: 'EU AI Act, 국내 AI 기본법 및 지적재산권 분쟁 방지',
        hours: 2,
        topics: ['사내 AI 사용 윤리 강령 제정', '임직원 프롬프트 감사 체계', '사내 보안 방화벽 설계 원칙']
      },
      {
        title: '세션 4: AX 조직 구축과 전사 변화관리(Change Management)',
        description: '직원들의 심리적 저항 극복과 성공적인 인재 리스킬링 로드맵',
        hours: 2,
        topics: ['AX 전담 CoE(Center of Excellence) 조직 구성', '사내 AX 평가 및 인센티브 연계', 'HRD 리더십 행동 지침']
      }
    ]
  }
];
