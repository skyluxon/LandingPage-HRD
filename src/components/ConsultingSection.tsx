import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Users2, 
  Compass, 
  GitMerge, 
  Cpu, 
  BarChart4
} from 'lucide-react';

interface ConsultingSectionProps {
  onOpenConsultation: () => void;
}

export default function ConsultingSection({ onOpenConsultation }: ConsultingSectionProps) {
  const steps = [
    {
      step: '01',
      title: '사내 AX 성숙도 진단 & 보안 가이드라인 수립',
      desc: '전사 임직원 설문 및 인터뷰를 통해 부서별 AI 활용 현황을 측정하고, 기밀 유출 방지를 위한 사내 보안 규정 및 가이드북을 제정합니다.',
      icon: ShieldCheck,
      deliverables: 'AX 성숙도 진단 보고서, 사내 생성형 AI 사용 보안 가이드라인'
    },
    {
      step: '02',
      title: '부서별 핵심 Quick-win 과제 & 비즈니스 유스케이스 발굴',
      desc: '경영지원, 마케팅, R&D, 재무 등 각 사업부 실무자들과 워크숍을 진행하여 3개월 내 즉시 가시적 생산성 향상이 가능한 10대 과제를 정의합니다.',
      icon: Compass,
      deliverables: '부서별 AX 과제 기회 지도(Opportunity Map) 및 우선순위 매트릭스'
    },
    {
      step: '03',
      title: '맞춤형 프라이빗 환경(Private LLM) & 교재 데이터셋 설계',
      desc: '기업의 실제 보고서 양식, 기술 용어집, 과거 프로젝트 데이터를 분석하여 사외 유출 없는 안전한 실습 샌드박스 환경을 구축합니다.',
      icon: Cpu,
      deliverables: '사내 맞춤 실습 샌드박스, 직무별 표준 프롬프트 라이브러리 v1.0'
    },
    {
      step: '04',
      title: '사내 AX 챔피언(CoE) 육성 및 전사 롤아웃 워크숍',
      desc: '각 부서 핵심 인재를 선발하여 심도 있는 AX 챔피언 트레이닝을 진행하고, 이들이 동료들의 멘토로서 실무 전환을 가속하도록 이끕니다.',
      icon: Users2,
      deliverables: '사내 AX 챔피언 20인 수료, 부서별 1호 업무 자동화 봇 배포'
    },
    {
      step: '05',
      title: 'HRD 애널리틱스 대시보드를 통한 ROI 측정 및 지속 개선',
      desc: '전사 도입 후 30일/90일 추적 조사를 통해 실질적인 업무 시간 절감액과 프로젝트 활용률을 경영진에게 정량 데이터로 보고합니다.',
      icon: BarChart4,
      deliverables: '임원진 보고용 최종 AX ROI 분석 리포트, 차기 고도화 로드맵'
    }
  ];

  return (
    <section id="consulting-section" className="py-16 sm:py-24 bg-slate-900 text-white scroll-mt-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
            <Building2 className="w-3.5 h-3.5" />
            <span>기업 맞춤형 AX 전사 컨설팅</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            단순 교육을 넘어, <br />
            <span className="text-blue-400">전사 AI 내재화 체계(CoE)</span>를 함께 만듭니다
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            조직의 AI 준비도 진단부터 보안 컴플라이언스 수립, 부서별 유스케이스 발굴, 
            사내 AX 챔피언 양성까지 대한민국 최고의 AX 전문가 팀이 원스톱으로 동행합니다.
          </p>
        </div>

        {/* 5-Step Consulting Process */}
        <div className="mt-14 space-y-4">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-800/80 p-6 sm:p-7 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                {/* Step badge & Icon */}
                <div className="flex items-center gap-4 shrink-0">
                  <span className="font-mono text-2xl font-black text-blue-400 w-10">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-1.5">
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="pt-1 text-xs text-emerald-400 font-medium">
                    <span className="text-slate-400 font-semibold">산출물:</span> {item.deliverables}
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="shrink-0 hidden lg:block text-right">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-700/80 text-slate-300">
                    2~4주 소요
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-extrabold text-white">
              우리 회사 전사 AX 도입 로드맵 상담이 필요하신가요?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              전문 AX 파트너 컨설턴트가 직접 방문 또는 온라인 미팅을 통해 귀사 맞춤 진단 보고서를 브리핑해 드립니다.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 px-6 py-3.5 bg-white text-blue-900 font-extrabold text-sm rounded-xl hover:bg-blue-50 transition-all shadow-md active:scale-95"
          >
            전사 AX 컨설팅 상담 신청하기
          </button>
        </div>

      </div>
    </section>
  );
}
