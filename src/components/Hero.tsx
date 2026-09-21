import { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  ShieldCheck
} from 'lucide-react';
import AskAxCampusModal from './AskAxCampusModal';

interface HeroProps {
  onStartDiagnosis: () => void;
  onOpenConsultation: (curriculumTitle?: string) => void;
  onScrollToWorkshops: () => void;
  onScrollToDashboard: () => void;
  onExploreCurriculums?: () => void;
}

export default function Hero({ 
  onStartDiagnosis, 
  onOpenConsultation, 
  onScrollToWorkshops,
  onScrollToDashboard,
  onExploreCurriculums
}: HeroProps) {
  const [isAskModalOpen, setIsAskModalOpen] = useState(false);

  const clientLogos = [
    { name: '삼성전자 C-Lab', category: '제조·테크' },
    { name: '현대자동차그룹', category: '모빌리티' },
    { name: 'SK텔레콤', category: '통신·AI' },
    { name: 'LG에너지솔루션', category: '배터리·첨단제조' },
    { name: 'NAVER Cloud', category: '클라우드·플랫폼' },
    { name: '토스(비바리퍼블리카)', category: '핀테크' },
    { name: '수도권 ICT 이노베이션 스퀘어', category: '생성형 AI 프로덕트 마스터' },
    { name: '한화시스템', category: '방산·ICT' }
  ];

  const scrollToCurriculums = () => {
    if (onExploreCurriculums) {
      onExploreCurriculums();
      return;
    }
    const el = document.getElementById('curriculum-catalog') || document.getElementById('curriculum-detail-bundle');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="relative bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden border-b border-slate-200">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Hero: Text on Left, Photo on Right (Side-by-side horizontal layout) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Column: Value Proposition in Korean (7 cols on md+) */}
            <div className="md:col-span-7 space-y-4 sm:space-y-5 text-left">
              
              {/* Category Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0056D2] text-xs font-bold border border-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-[#0056D2]" />
                <span>기업 맞춤형 실무 AX(AI 전환) 러닝 솔루션</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-[1.25]">
                기업의 비즈니스 성장을 견인하는 <br className="hidden sm:inline" />
                <span className="text-[#0056D2]">실무 전문가 중심 AI 러닝 플랫폼</span>
              </h1>

              {/* Sub-paragraph */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                현업 최고 전문가의 검증된 강의, 기업 맞춤형 학습 트랙, 전사 AI 생산성 도구를 결합하여 임직원의 실질적 업무 생산성 혁신과 조직 성장을 지원합니다.
              </p>

              {/* Korean HRD localized caption */}
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                국내 주요 대기업 및 엔터프라이즈가 검증한 실무 85% 핸즈온 AX(AI 전환) 교육 솔루션
              </p>

              {/* Three Checkmark Bullet Points (All Korean) */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#0056D2] stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    글로벌 최고 수준의 콘텐츠로 현업 핵심 AI 실무 역량 내재화
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#0056D2] stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    직무 및 숙련도별 맞춤형 러닝 트랙을 제공하는 종합 교육 플랫폼
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#0056D2] stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    최신 AI 도구와 사내 보안(Private LLM)을 반영한 맞춤형 프로그램
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  id="hero-btn-contact-sales"
                  onClick={() => onOpenConsultation()}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-[#0056D2] hover:bg-blue-700 shadow-md transition-all text-sm sm:text-base active:scale-98"
                >
                  기업 맞춤 교육 문의
                </button>

                <button
                  id="hero-btn-explore-curriculums"
                  onClick={scrollToCurriculums}
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 shadow-2xs transition-all text-sm sm:text-base"
                >
                  <span>전체 커리큘럼 둘러보기</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Quick Trust Guarantee */}
              <div className="pt-1 flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>기업 데이터 기밀 비유출(Zero-Data Retention) & 고용보험 환급 최대 80% 지원</span>
              </div>

            </div>

            {/* Right Column: Photo + Floating "AX Campus에 질문하기" (5 cols on md+) */}
            <div className="md:col-span-5 flex justify-center md:justify-end items-center">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-slate-100 w-full max-w-[340px] sm:max-w-[380px] md:max-w-none aspect-[4/4.6] lg:aspect-[4/4.8]">
                
                {/* Professional Photo */}
                <img 
                  src="/hero_woman.jpg" 
                  alt="AX Campus for Business - 전문 비즈니스 인재" 
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Floating "AX Campus에 질문하기" Pill */}
                <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-20">
                  <button
                    id="hero-ask-axcampus-pill"
                    onClick={() => setIsAskModalOpen(true)}
                    className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-white/95 backdrop-blur-md text-slate-900 font-bold text-xs sm:text-sm shadow-xl border border-slate-200/90 hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
                    title="AX Campus에 질문하기"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0056D2] flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform">
                      <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white text-white" />
                    </div>
                    <span className="tracking-tight text-slate-900 font-bold">AX Campus에 질문하기</span>
                  </button>
                </div>

              </div>
            </div>

          </div>

          {/* Client Logos Wall */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 sm:mb-5">
              국내 주요 대기업 및 엔터프라이즈가 신뢰하는 AX 교육 파트너
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 items-center">
              {clientLogos.map((client, idx) => (
                <div 
                  key={idx} 
                  title={`${client.name} (${client.category})`}
                  className="bg-slate-50/80 px-2.5 py-2.5 rounded-lg border border-slate-200/80 text-center hover:bg-white hover:border-blue-300 transition-colors flex flex-col justify-center min-h-[58px]"
                >
                  <span className="text-xs font-extrabold text-slate-700 block tracking-tight truncate">
                    {client.name}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5 truncate font-medium">
                    {client.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Interactive "AX Campus에 질문하기" Assistant Modal */}
      <AskAxCampusModal
        isOpen={isAskModalOpen}
        onClose={() => setIsAskModalOpen(false)}
        onOpenConsultation={(topic) => {
          setIsAskModalOpen(false);
          onOpenConsultation(topic);
        }}
      />
    </>
  );
}
