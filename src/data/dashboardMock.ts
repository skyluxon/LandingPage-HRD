import { DepartmentProgress, EnterpriseMetric } from '../types';

export const ENTERPRISE_METRICS: EnterpriseMetric[] = [
  {
    label: '전사 AX 교육 이수율',
    value: '94.2%',
    subtext: '목표치(85%) 대비 +9.2%p 초과 달성',
    change: '+14.6%'
  },
  {
    label: '실무 즉시 적용률 (30일 추적)',
    value: '89.7%',
    subtext: '주 3회 이상 사내 실무에 AI 도구 적극 활용',
    change: '+38.2%'
  },
  {
    label: '연간 예상 업무시간 절감액 (ROI)',
    value: '₩4.2억 / 100인',
    subtext: '인당 주당 평균 6.4시간 절감 산출 기준',
    change: '3.8배 ROI'
  },
  {
    label: '사내 실무 자동화 에이전트 배포',
    value: '78건',
    subtext: '부서별 업무 파이프라인 정착 완료',
    change: '+42건'
  }
];

export const DEPARTMENT_STATS: DepartmentProgress[] = [
  {
    name: '전략기획실 / 경영지원',
    department: 'planning',
    enrolled: 42,
    completionRate: 97.6,
    avgHours: 18.4,
    activeProjects: 14,
    skillGrowth: 46
  },
  {
    name: '디지털 마케팅 & 브랜드팀',
    department: 'marketing',
    enrolled: 38,
    completionRate: 94.7,
    avgHours: 21.2,
    activeProjects: 19,
    skillGrowth: 52
  },
  {
    name: '인사(HR) & 인재개발팀',
    department: 'hr',
    enrolled: 26,
    completionRate: 100.0,
    avgHours: 16.5,
    activeProjects: 9,
    skillGrowth: 41
  },
  {
    name: '재경관리 & 구매전략팀',
    department: 'finance',
    enrolled: 31,
    completionRate: 90.3,
    avgHours: 17.8,
    activeProjects: 8,
    skillGrowth: 38
  },
  {
    name: 'IT 개발본부 & 데이터팀',
    department: 'it_dev',
    enrolled: 64,
    completionRate: 98.4,
    avgHours: 25.0,
    activeProjects: 22,
    skillGrowth: 64
  },
  {
    name: '스마트팩토리 & R&D 연구소',
    department: 'rnd',
    enrolled: 55,
    completionRate: 92.7,
    avgHours: 19.8,
    activeProjects: 15,
    skillGrowth: 49
  },
  {
    name: '고객경험(CX) & 운영팀',
    department: 'cx_cs',
    enrolled: 48,
    completionRate: 89.5,
    avgHours: 14.2,
    activeProjects: 11,
    skillGrowth: 37
  }
];

export const SKILL_GAP_DATA = [
  { category: '프롬프트 정밀 엔지니어링', before: 32, after: 88, benchmark: 75 },
  { category: '사내 보안 및 AI 윤리 준수', before: 45, after: 96, benchmark: 85 },
  { category: '반복 업무 자동화(No-code)', before: 21, after: 84, benchmark: 70 },
  { category: '사내 RAG / 지식 에이전트', before: 14, after: 79, benchmark: 65 },
  { category: '데이터 분석 & 시각화 자동화', before: 28, after: 86, benchmark: 72 },
  { category: 'AX 과제 발굴 및 ROI 기획', before: 25, after: 82, benchmark: 68 },
];

export const RECENT_SUBMITTED_PROJECTS = [
  {
    id: 'PRJ-102',
    dept: '디지털 마케팅팀',
    title: '신규 프로모션 채널별 카피 100종 및 배너 시안 3분 자동 생성기',
    impact: '캠페인 세팅 시간 5일 -> 4시간 단축',
    evaluatorScore: '98점 (우수 과제 선정)',
    status: '사내 배포 완료'
  },
  {
    id: 'PRJ-103',
    dept: '재경관리팀',
    title: '글로벌 벤더 영수증 OCR 정제 및 ERP 전표 분개 자동 검증 봇',
    impact: '월말 결산 잔업 시간 62% 감축',
    evaluatorScore: '95점',
    status: '사내 배포 완료'
  },
  {
    id: 'PRJ-104',
    dept: '인사기획팀',
    title: '사내 취업규칙 및 복리후생 실시간 문답 Slack 어시스턴트',
    impact: '인사팀 단순 문의 응답 74% 처리',
    evaluatorScore: '96점',
    status: '사내 배포 완료'
  },
  {
    id: 'PRJ-105',
    dept: '생산기술연구소',
    title: '글로벌 선진 반도체 특허 선행기술 탐색 및 회피 설계 요약 파이프라인',
    impact: '특허 검토 기간 3주 -> 2일 단축',
    evaluatorScore: '99점 (최우수 과제)',
    status: '연구소 표준 채택'
  }
];
