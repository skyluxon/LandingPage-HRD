import { WorkshopItem } from '../types';

export const ENTERPRISE_WORKSHOPS: WorkshopItem[] = [
  {
    id: 'ws-01',
    title: '전사 업무 3배 가속: 생성형 AI 실무 워크플로우 해커톤',
    subtitle: '단순 강의는 끝났다! 사내 실제 데이터와 문서를 가져와 1박 2일 동안 즉시 적용 가능한 5대 업무 자동화 파이프라인을 완성합니다.',
    department: 'all',
    category: '전사 공통 실무',
    targetAudience: '전사 실무자, 기획자, 지원부서 담당자',
    duration: '2일 (총 16시간) 또는 1일 집중 (8시간)',
    recommendedSize: '20명 ~ 40명 (팀당 4~5인 1조)',
    format: '사내 해커톤',
    keyTools: ['ChatGPT Team/Enterprise', 'Claude 3.7', 'Gemini Advanced', 'Make.com', 'Gamma'],
    handsOnRatio: 85,
    deliverables: [
      '부서별 업무 표준 프롬프트 플레이북 (PDF & 웹 노션 템플릿)',
      '실무 보고서 원클릭 생성 파이프라인',
      '사내 지식 기반 맞춤형 커스텀 에이전트 1종',
      '팀별 실전 프로젝트 최종 발표 영상 및 산출물'
    ],
    detailedSyllabus: [
      {
        session: 'Day 1 오전',
        title: '실무 프롬프트 체이닝 & 보안 가이드라인 준수 실습',
        duration: '4시간',
        content: '기업 기밀 마스킹, 사내 규정 준수 하에 단일 프롬프트 한계를 돌파하는 Multi-turn 프롬프트 체이닝 실습',
        exercise: '부서별 대표 반복 업무(주간 보고, 데이터 정리 등) 선정 및 프롬프트 초안 작성'
      },
      {
        session: 'Day 1 오후',
        title: '비정형 데이터 분석 & 고속 리포팅 템플릿 빌드',
        duration: '4시간',
        content: '수백 페이지 시장조사 보고서, 엑셀 데이터, 고객 피드백을 단 3분 만에 정량 요약하고 시각화 차트 생성',
        exercise: '실제 부서 내 최근 보고서 자료를 활용한 1페이지 Executive 요약본 생성'
      },
      {
        session: 'Day 2 오전',
        title: '노코드 AI 워크플로우 자동화 (API & Webhook 연동)',
        duration: '4시간',
        content: '이메일 수신 -> AI 요약 -> Slack/Teams 알림 -> Google Sheet/Excel 기록을 자동 수행하는 업무 흐름 구현',
        exercise: '팀별 1개 이상의 실제 반복 업무 자동화 트리거 구축 및 라이브 테스트'
      },
      {
        session: 'Day 2 오후',
        title: '부서 전용 맞춤형 AI 비서 빌드 & 파이널 데모데이',
        duration: '4시간',
        content: '사내 가이드와 업무 매뉴얼을 주입한 팀별 AI 에이전트 완성, 심사위원 및 경영진 앞 시연회',
        exercise: '팀별 5분 라이브 데모 발표 및 상호 평가, 우수팀 시상 및 사내 공유'
      }
    ],
    instructorProfile: {
      name: '강민구 마스터',
      role: 'AX 엔터프라이즈 수석 컨설턴트',
      companyCareer: '전 삼성SDS AI 연구소 / 현 카이스트 겸임교수, 50+ 대기업 AX 출강'
    },
    caseStudy: 'S 제조사 120명 교육 후 반복 문서작성 시간 주당 평균 5.8시간 절감, 사내 자동화 봇 34개 실무 배치 완료'
  },
  {
    id: 'ws-02',
    title: '마케팅 & 신제품 기획을 위한 생성형 AI 크리에이티브 스프린트',
    subtitle: '타깃 리서치부터 컨셉 도출, 고전환 카피 100종 및 비주얼 에셋 시안까지 하루 만에 완결하는 프로젝트 랩',
    department: 'marketing',
    category: '마케팅 & 영업',
    targetAudience: '브랜드 마케터, 퍼포먼스 마케터, 상품기획(MD), 콘텐츠 크리에이터',
    duration: '1일 집중 (8시간)',
    recommendedSize: '15명 ~ 30명',
    format: '오프라인 실습',
    keyTools: ['Midjourney v6', 'Claude 3.7 Projects', 'Runway', 'Canva AI', 'Google Trends'],
    handsOnRatio: 90,
    deliverables: [
      '신제품 캠페인 전략 기획서 (AIDA 구조)',
      '채널별 맞춤 카피라이팅 50종 (SNS, 배너, 뉴스레터)',
      '실사급 고화질 키비주얼 이미지 5컷',
      '숏폼 영상 스토리보드 및 시안 영상'
    ],
    detailedSyllabus: [
      {
        session: '세션 1 (2시간)',
        title: 'AI 기반 타깃 고객 심층 페르소나 및 경쟁사 분석',
        duration: '2시간',
        content: '경쟁사 리뷰 1,000건을 AI로 즉시 마이닝하여 고객의 미충족 니즈(Unmet Needs)와 전환 트리거 추출',
        exercise: '3개 가상 페르소나 인터뷰 시뮬레이션 및 차별화 소구점 도출'
      },
      {
        session: '세션 2 (2시간)',
        title: '전환율 200% 카피라이팅 & 스토리텔링 생성기 제작',
        duration: '2시간',
        content: '브랜드 가이드라인 톤앤매너를 주입하여 타깃 심리를 자극하는 헤드카피와 상세페이지 스토리 작성',
        exercise: '인스타그램/네이버 검색광고/이메일 카피 A/B 테스트 세트 구축'
      },
      {
        session: '세션 3 (2.5시간)',
        title: 'Midjourney & 생성 AI 활용 상업용 비주얼 제작 실습',
        duration: '2.5시간',
        content: '조명, 앵글, 렌즈 스펙, 스타일 레퍼런스를 제어하여 스튜디오 렌더링 수준의 제품 컷 완성',
        exercise: '브랜드 신제품 런칭 키비주얼 및 프로모션 배너 3종 완결'
      },
      {
        session: '세션 4 (1.5시간)',
        title: '캠페인 종합 발표 및 실무 광고 집행 계획 공유',
        duration: '1.5시간',
        content: '팀별 완성된 마케팅 에셋 팩 리뷰 및 강사 1:1 디렉팅 피드백',
        exercise: '실제 다음 주 집행 예정인 캠페인 최종 검수'
      }
    ],
    instructorProfile: {
      name: '이수연 디렉터',
      role: '멀티모달 AI 크리에이티브 디렉터',
      companyCareer: '전 제일기획 시니어 카피라이터 / 글로벌 테크 브랜드 AX 캠페인 총괄'
    },
    caseStudy: 'L 이커머스 기업 마케팅팀 교육 후 신제품 런칭 준비 기간 3주 -> 4일로 단축'
  },
  {
    id: 'ws-03',
    title: '개발 생산성 4배 혁신: GitHub Copilot & Cursor 엔터프라이즈 캠프',
    subtitle: '레거시 코드 분석, 테스트 코드 자동화, 리팩토링 및 사내 맞춤 AI 페어 프로그래밍 실무 집중 훈련',
    department: 'it_dev',
    category: 'IT & 소프트웨어',
    targetAudience: '사내 웹/앱 백엔드, 프론트엔드 엔지니어, 데이터 엔지니어',
    duration: '2일 (총 16시간)',
    recommendedSize: '15명 ~ 25명',
    format: '오프라인 실습',
    keyTools: ['GitHub Copilot Enterprise', 'Cursor IDE', 'Claude Code', 'v0.dev', 'Docker'],
    handsOnRatio: 90,
    deliverables: [
      '사내 코딩 컨벤션 기반 `.cursorrules` 설정 파일',
      '단위 테스트(Unit Test) 커버리지 40% -> 85% 달성 코드',
      '복잡한 레거시 모듈 리팩토링 및 자동 API 문서화',
      '사내 개발자 생산성 지표 측정 리포트'
    ],
    detailedSyllabus: [
      {
        session: 'Day 1 오전',
        title: 'AI 네이티브 개발 환경 구성 & 컨텍스트 주입 기법',
        duration: '4시간',
        content: 'Cursor / Copilot의 인덱싱 원리와 사내 프레임워크 룰셋 세팅, 보안 토큰 보호',
        exercise: '팀별 저장소 규칙 및 아키텍처 가이드라인 AI 튜닝'
      },
      {
        session: 'Day 1 오후',
        title: 'TDD 및 레거시 리팩토링 자동화 실습',
        duration: '4시간',
        content: '작성하기 까다로운 엣지 케이스 테스트 케이스 수백 줄을 5분 만에 생성하고 검증',
        exercise: '실제 사내 골칫거리 스파게티 코드 모듈 리팩토링 실습'
      },
      {
        session: 'Day 2 오전',
        title: '자연어 기반 풀스택 피처 고속 프로토타이핑',
        duration: '4시간',
        content: '기획서 명세서로부터 DB 스키마, 백엔드 API, 프론트엔드 UI를 원스톱 구현하는 파이프라인',
        exercise: '사내 신규 백오피스 기능 하나를 2시간 만에 빌드 및 배포'
      },
      {
        session: 'Day 2 오후',
        title: '사내 AI 페어 프로그래밍 문화 정착 & 코드 리뷰 봇 연동',
        duration: '4시간',
        content: 'PR(Pull Request) 자동 리뷰, 보안 취약점 사전 감지 가드레일 구축',
        exercise: 'GitHub Actions 연동 사내 자동 코드 리뷰 시스템 구축'
      }
    ],
    instructorProfile: {
      name: '박준형 테크리드',
      role: 'AI 엔지니어링 마스터',
      companyCareer: '전 네이버 클라우드 AI 리서처 / 현 테크 스타트업 CTO, 실무 엔지니어 1,200명 수료'
    },
    caseStudy: 'F 핀테크사 개발팀 30명 수료 후 주간 PR 머지 속도 2.8배 증가, 버그 리포트 43% 감소'
  },
  {
    id: 'ws-04',
    title: 'HR & 인재개발(HRD) 전용: 사내 AI 헬프데스크 & 온보딩 Agent 구축',
    subtitle: '취업규칙, 인사평가 가이드, 사내 복지 FAQ를 학습시켜 인사팀의 단순 반복 문의를 80% 없애는 실전 워크숍',
    department: 'hr',
    category: '인사 & HRD',
    targetAudience: 'HR팀장, 인사기획, 채용담당자, 교육(HRD) 기획자',
    duration: '1일 (7시간)',
    recommendedSize: '15명 ~ 30명',
    format: '온·오프라인 융합',
    keyTools: ['NotebookLM Enterprise', 'Claude Projects', 'Typeform AI', 'Slack Bot / Teams Webhook'],
    handsOnRatio: 80,
    deliverables: [
      '사내 규정 PDF 기반 24시간 정확 응답 HR 챗봇',
      '신규 입사자 온보딩 가이드북 및 30일 체크리스트 자동화',
      '직무별 역량 평가 질문지 & 면접관 가이드 템플릿',
      '교육 만족도 및 직원 피드백 정성 데이터 자동 대시보드'
    ],
    detailedSyllabus: [
      {
        session: '오전 세션',
        title: 'HR 문서 지식 베이스 구축과 정확도(Grounding) 100% 튜닝',
        duration: '3.5시간',
        content: '인사 규정, 취업규칙, 경조사비 지급 기준 등 문서 청킹 및 환각 없는 답변 추출 설정',
        exercise: '사내 복지 규정 파일 업로드 후 복잡한 예외 조항 질의응답 테스트'
      },
      {
        session: '오후 세션',
        title: '사내 메신저(Slack/Teams) 연동 및 HR 업무 자동화',
        duration: '3.5시간',
        content: '신규 입사자 맞춤형 질문 응대, 연차 신청 가이드, 평가 피드백 작성 보조 에이전트 구축',
        exercise: '실제 부서에 적용할 수 있는 인사 지원 봇 1종 완성 및 시연'
      }
    ],
    instructorProfile: {
      name: '최정민 컨설턴트',
      role: '피플테크 & HRD AX 디렉터',
      companyCareer: '전 현대카드 인사전략팀 / 대기업 30개사 사내 HRD AX 프로젝트 총괄'
    },
    caseStudy: 'K 대기업 인사지원팀 20명 수료 후 사내 단순 복지 규정 문의 73% 감소'
  },
  {
    id: 'ws-05',
    title: '제조·연구소 특화: 기술 문서 분석 및 R&D 지식 탐색 AI 워크숍',
    subtitle: '특허 문서, 시험 성적서, 논문 및 설계 변경 보고서를 초고속 비교 분석하는 엔지니어 전용 실무 과정',
    department: 'rnd',
    category: '연구개발 & 제조기술',
    targetAudience: '연구원, 생산기술 엔지니어, 품질관리(QC) 담당자, 특허/IP 담당자',
    duration: '2일 (총 14시간)',
    recommendedSize: '15명 ~ 25명',
    format: '오프라인 실습',
    keyTools: ['Gemini 3.8 Pro', 'SciSpace', 'Python for Engineers', '사내 Private LLM'],
    handsOnRatio: 85,
    deliverables: [
      '경쟁사 핵심 특허 100건 침해 여부 및 기술 트렌드 맵',
      '실험 데이터(CSV/Excel) 이상 패턴 탐지 및 보고서 템플릿',
      '기술 문서 다국어(영/일/중) 정밀 번역 및 전문 용어 사전 구축',
      '설비 에러 코드 대응 매뉴얼 지능형 검색 시스템'
    ],
    detailedSyllabus: [
      {
        session: 'Day 1',
        title: '특허 및 방대한 기술 논문 고속 스크리닝 & R&D 가설 검증',
        duration: '7시간',
        content: '복잡한 수식과 도면이 포함된 다국어 기술 문서를 AI 멀티모달로 정밀 파독하고 핵심 차별점 추출',
        exercise: '우리 연구소 핵심 기술 관련 글로벌 특허 10건 심층 비교 분석'
      },
      {
        session: 'Day 2',
        title: '품질 불량 원인 분석 및 설계 변경 리포트 자동 생성',
        duration: '7시간',
        content: '과거 5년간의 공정 불량 이력 텍스트를 분석하여 유사 결함 원인과 대책을 3초 만에 제시',
        exercise: '공정 시험 성적서 기반 최종 품질 분석 보고서 템플릿 완성'
      }
    ],
    instructorProfile: {
      name: '정동혁 공학박사',
      role: '스마트제조 & 산업 AI 수석연구위원',
      companyCareer: '서울대 기계공학 박사 / 글로벌 반도체 장비사 기술 고문'
    },
    caseStudy: 'H 중공업 연구소 40명 수료 후 선진 특허 분석 소요 기간 2주 -> 2일로 80% 단축'
  },
  {
    id: 'ws-06',
    title: 'CX & 고객센터: VOC 감성 분석 및 지능형 상담 어시스턴트 구축',
    subtitle: '매일 쏟아지는 수만 건의 고객 문의를 실시간 분류하고, 상담원용 표준 응대 답변을 1초 만에 추천',
    department: 'cx_cs',
    category: '고객경험 & CS',
    targetAudience: 'CX 팀장, 고객상담 리드, 서비스 기획자, VOC 분석가',
    duration: '1일 (8시간)',
    recommendedSize: '20명 ~ 35명',
    format: '오프라인 실습',
    keyTools: ['Claude 3.7 Projects', 'Make.com', 'Tableau / Looker AI', 'ChatGPT'],
    handsOnRatio: 80,
    deliverables: [
      '사내 VOC 자동 분류 및 감성 지수 스코어링 시스템',
      '불만 고객 유형별 맞춤 대응 매뉴얼 & 스크립트',
      '상담사 업무 보조 실시간 답변 추천 봇',
      '주간/월간 경영진 보고용 CX 대시보드 리포트'
    ],
    detailedSyllabus: [
      {
        session: '오전',
        title: '비정형 상담 텍스트 클러스터링 & 감성 분석',
        duration: '4시간',
        content: '고객의 진짜 불만 요인과 긴급 처리 건(이탈 위험 고객)을 자동 감지하는 프롬프트 필터 설계',
        exercise: '최근 1개월 고객 인바운드 문의 500건 자동 라벨링 및 이상 징후 포착'
      },
      {
        session: '오후',
        title: '지능형 상담 지식베이스(FAQ) 고도화 및 실시간 보조 봇 구축',
        duration: '4시간',
        content: '복잡한 정책과 환불 기준을 상담원이 키워드 하나로 즉시 찾아 안내할 수 있는 화면 제작',
        exercise: '상담사 전용 코파일럿(Copilot) 시연 및 상담 시간 50% 단축 검증'
      }
    ],
    instructorProfile: {
      name: '송유진 수석',
      role: 'CX 테크 & 고객 여정 설계 전문가',
      companyCareer: '전 쿠팡 고객경험총괄 매니저 / 유통·통신사 상담 자동화 컨설팅 40회'
    },
    caseStudy: 'W 플랫폼 고객센터 도입 후 평균 고객 대기 시간 4분 30초 -> 1분 10초 개선'
  }
];
