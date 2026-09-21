import { Sparkles, ShieldCheck, PhoneCall, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                AX Campus <span className="text-blue-400 text-xs font-semibold">for Business</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              대한민국 1위 기업 맞춤형 인공지능 전환(AX) 교육 및 전사 컨설팅 솔루션입니다.
              이론 중심을 탈피한 85% 이상 실습 중심 워크숍과 HRD 분석 대시보드로 임직원의 업무 생산성 향상과 정량적 ROI를 보장합니다.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>고용노동부 직업능력개발훈련 위탁기관 / 기업 데이터 보안 NDA 보장</span>
            </div>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">주요 솔루션</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('recommendation-engine')} className="hover:text-white transition-colors">
                  직무별 커리큘럼 추천
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('workshops-section')} className="hover:text-white transition-colors">
                  실무 핸즈온 워크숍
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('dashboard-section')} className="hover:text-white transition-colors">
                  HRD 분석 대시보드
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('curriculum-catalog')} className="hover:text-white transition-colors">
                  전체 코스웨어 카탈로그
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('consulting-section')} className="hover:text-white transition-colors">
                  전사 AX 및 CoE 컨설팅
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Cases */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">기업 고객 지원</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('enterprise-cases')} className="hover:text-white transition-colors">
                  대기업 도입 성공 사례
                </button>
              </li>
              <li>
                <a href="#recommendation-engine" onClick={(e) => { e.preventDefault(); scrollTo('recommendation-engine'); }} className="hover:text-white transition-colors">
                  AI 맞춤 제안서 자동 생성
                </a>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-white transition-colors">
                  고용보험 환급 및 정부지원 안내
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-white transition-colors">
                  사내 LMS 연동 API 가이드
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">기업 교육 직통 문의</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-white font-bold">
                <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                <span>02-588-3490</span>
              </div>
              <p className="text-[11px] text-slate-500">평일 09:00 ~ 18:00 (점심시간 12:00~13:00)</p>
              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>enterprise@axcampus.co.kr</span>
              </div>
              <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>서울특별시 강남구 테헤란로 427 엔터프라이즈 타워 14층</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © 2026 AX Campus for Business Inc. All rights reserved. | 대표이사: 홍길동 | 사업자등록번호: 214-88-90123
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-slate-300">개인정보처리방침</a>
            <a href="#" className="hover:text-slate-300">기업 서비스 이용약관</a>
            <a href="#" className="hover:text-slate-300">보안 및 컴플라이언스</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
