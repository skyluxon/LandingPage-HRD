import { 
  Building2, 
  Quote, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  Award,
  ArrowRight
} from 'lucide-react';

interface EnterpriseCasesProps {
  onOpenConsultation: () => void;
}

export default function EnterpriseCases({ onOpenConsultation }: EnterpriseCasesProps) {
  const cases = [
    {
      company: '글로벌 제조 대기업 S사',
      industry: '전자 & 반도체 제조',
      participant: '전사 임직원 및 연구소 인원 450명',
      format: '온라인 VOD 8h + 부서별 오프라인 워크숍 16h',
      headline: '연구소 기술 문서 분석 기간 80% 단축 & 전사 1호 프롬프트 표준집 완성',
      testimonial: '“기존 타사 AI 특강은 교양 수준에 그쳐 현업 반응이 냉담했습니다. 하지만 AX Campus는 우리 연구소의 실제 특허 및 시험 성적서 데이터를 기반으로 워크숍을 진행해, 교육 수료 당일 현업 자동화 봇이 즉시 탄생했습니다.”',
      leaderInfo: '인재개발원 차장 (HRD 책임자)',
      impacts: [
        { label: '기술 논문/특허 요약', value: '2주 -> 2일 단축' },
        { label: '사내 표준 봇 배포', value: '38개 프로젝트 완료' },
        { label: '교육생 만족도', value: '4.95 / 5.0' }
      ]
    },
    {
      company: '국내 선도 핀테크 금융사 T사',
      industry: '금융 & 디지털 결제',
      participant: '마케팅, 리스크관리, 컴플라이언스 120명',
      format: '오프라인 실무 집중 캠프 2일',
      headline: '엄격한 금융 보안 가이드라인 준수 하에 고객 VOC 분석 자동화 성공',
      testimonial: '“금융사는 고객 데이터 유출에 대해 극도로 보수적입니다. AX Campus는 사내 Private LLM 환경과 데이터 마스킹 기법을 완벽히 교육에 접목해 주었고, HRD 대시보드로 임원진께 명확한 시간 절감액을 증명할 수 있었습니다.”',
      leaderInfo: 'People Operations 리드',
      impacts: [
        { label: 'VOC 상담 분류 시간', value: '일 4시간 -> 40분' },
        { label: '금융 보안 사고율', value: '0건 (철저한 가이드라인 준수)' },
        { label: '실무 재활용률', value: '92.4%' }
      ]
    },
    {
      company: '대형 유통·이커머스 H그룹',
      industry: '유통 & 리테일 이커머스',
      participant: '상품기획(MD), 마케팅팀 85명',
      format: '사내 해커톤 1박 2일 + 코칭',
      headline: '신상품 런칭 마케팅 캠페인 에셋 생성 속도 4배 향상',
      testimonial: '“신제품 하나를 런칭할 때마다 카피라이터와 디자이너의 병목이 심했습니다. 마케팅팀 전원이 멀티모달 AI 도구를 능숙하게 다루게 되면서 캠페인 런칭 주기가 1개월에서 1주일로 줄었습니다.”',
      leaderInfo: 'HRD 교육기획팀장',
      impacts: [
        { label: '광고 카피 작성 속도', value: '3.5배 가속' },
        { label: 'A/B 테스트 시안 수', value: '월 12개 -> 80개 확대' },
        { label: '조직 역량 성장률', value: '+54% 향상' }
      ]
    }
  ];

  return (
    <section id="enterprise-cases" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>기업 HRD 고객사 성공 스토리</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            숫자와 데이터로 증명된 <br />
            <span className="text-blue-600">선도 기업들의 실제 AX 교육 성과</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            대기업, 금융사, 테크 유니콘의 HRD 담당자들이 왜 AX Campus를 재구매율 91%로 신뢰하는지 확인해보세요.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((cs, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg transition-all p-7 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Company Tag */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">
                      {cs.company}
                    </h3>
                    <span className="text-[11px] text-slate-700">{cs.industry}</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                    {cs.participant.split(' ')[0]}
                  </span>
                </div>

                {/* Headline */}
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  "{cs.headline}"
                </h4>

                {/* Testimonial Quote */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 relative text-xs text-slate-700 leading-relaxed italic">
                  <Quote className="w-5 h-5 text-blue-300 absolute -top-2.5 -left-1 fill-blue-100" />
                  <p className="relative z-10 pt-1">
                    {cs.testimonial}
                  </p>
                  <p className="text-right text-[11px] font-bold text-slate-900 not-italic mt-2">
                    — {cs.leaderInfo}
                  </p>
                </div>

                {/* Quantitative Impact Points */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                    주요 정량적 혁신 성과
                  </span>
                  <div className="grid grid-cols-3 gap-1.5 text-center bg-blue-50/60 p-3 rounded-xl border border-blue-100">
                    {cs.impacts.map((imp, i) => (
                      <div key={i} className="space-y-0.5">
                        <span className="text-[10px] text-slate-700 block truncate">{imp.label}</span>
                        <span className="text-xs font-black text-blue-700 block">{imp.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Details */}
              <div className="pt-6 border-t border-slate-100 mt-4 text-xs text-slate-700 flex justify-between items-center">
                <span>진행 형태: {cs.format}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-base">
                사내 데이터 보안 100% 보장 &amp; 고용보험 환급 과정 연계
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                기업 고객 전용 NDA 체결, 사내망 설치 지원, 정부지원 AI 바우처 및 고용보험 환급(비용 최대 80% 절감)을 지원합니다.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
          >
            우리 기업 출강 견적 및 환급 상담받기
          </button>
        </div>

      </div>
    </section>
  );
}
