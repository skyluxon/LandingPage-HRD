import { useState } from 'react';
import { 
  Sparkles, 
  PhoneCall, 
  FileText, 
  Menu, 
  X, 
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Building2,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: (curriculumTitle?: string) => void;
  onOpenQuickGuide: () => void;
  onNavigateSection?: (id: string) => void;
}

export default function Header({ onOpenConsultation, onOpenQuickGuide, onNavigateSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopBanner, setShowTopBanner] = useState(true);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      
      {/* Top Promotional Banner */}
      {showTopBanner && (
        <div className="bg-slate-900 px-4 py-2.5">
          <div className="max-w-6xl mx-auto rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white px-5 py-2 flex items-center justify-between shadow-md text-xs sm:text-sm">
            <div className="flex-1 text-center font-bold tracking-tight px-2">
              <span>AX Campus for Teams 30% 지원 특별 프로모션 | 기업 맞춤형 AI 역량 강화 교육</span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                id="banner-save-today-btn"
                onClick={() => onOpenConsultation('AX Campus for Teams 30% 프로모션')}
                className="px-3.5 py-1 rounded-full bg-white text-blue-800 hover:bg-blue-50 font-extrabold text-xs transition-colors shadow-xs"
              >
                프로모션 확인
              </button>
              <button
                onClick={() => setShowTopBanner(false)}
                className="text-white/80 hover:text-white p-0.5 transition-colors"
                aria-label="닫기"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo & Navigation */}
          <div className="flex items-center gap-8">
            {/* AX Campus for Business Logo */}
            <button 
              id="header-brand-logo"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="flex items-baseline gap-1 text-left group"
            >
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#0056D2] font-sans">
                AX Campus
              </span>
              <span className="text-sm sm:text-base font-semibold text-slate-500 tracking-normal ml-1">
                for Business
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-700">
              <button 
                id="nav-why-axcampus"
                onClick={() => scrollToSection('dashboard-section')}
                className="flex items-center gap-1 hover:text-[#0056D2] transition-colors py-2"
              >
                <span>플랫폼 소개</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              <button 
                id="nav-solutions"
                onClick={() => scrollToSection('curriculum-catalog')}
                className="flex items-center gap-1 hover:text-[#0056D2] transition-colors py-2"
              >
                <span>교육 솔루션</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              <button 
                id="nav-resources"
                onClick={() => scrollToSection('enterprise-cases')}
                className="flex items-center gap-1 hover:text-[#0056D2] transition-colors py-2"
              >
                <span>도입 사례</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              <button 
                id="nav-for-teams"
                onClick={() => scrollToSection('workshops-section')}
                className="hover:text-[#0056D2] transition-colors py-2"
              >
                팀·부서 교육
              </button>

              <button 
                id="nav-compare-plans"
                onClick={() => scrollToSection('curriculum-catalog')}
                className="hover:text-[#0056D2] transition-colors py-2"
              >
                플랜 비교
              </button>
            </nav>
          </div>

          {/* Action Button: 기업 교육 문의 */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-btn-quickguide"
              onClick={onOpenQuickGuide}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2"
            >
              소개서 다운로드
            </button>

            <button
              id="header-btn-contact-sales"
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-[#0056D2] hover:bg-blue-700 rounded-lg transition-all shadow-sm active:scale-95"
            >
              기업 교육 문의
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-contact-sales-btn"
              onClick={() => onOpenConsultation()}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#0056D2] rounded-md shadow-sm"
            >
              교육 문의
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl">
          <button 
            onClick={() => scrollToSection('curriculum-catalog')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between"
          >
            <span>📚 전체 커리큘럼 카탈로그</span>
            <span className="text-xs font-bold text-blue-600">상세 보기</span>
          </button>
          <button 
            onClick={() => scrollToSection('workshops-section')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between"
          >
            <span>🛠️ 실무 중심 워크숍</span>
            <span className="px-2 py-0.5 text-xs bg-rose-50 text-rose-700 font-bold rounded">실습 85%</span>
          </button>
          <button 
            onClick={() => scrollToSection('dashboard-section')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between"
          >
            <span>📊 AX Campus 소개 / HRD 대시보드</span>
            <span className="px-2 py-0.5 text-xs bg-blue-50 text-blue-700 font-bold rounded">Live</span>
          </button>
          <button 
            onClick={() => scrollToSection('recommendation-engine')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            🎯 AI 맞춤 추천 엔진
          </button>
          <button 
            onClick={() => scrollToSection('consulting-section')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            💼 기업 AX 전사 컨설팅
          </button>
          <button 
            onClick={() => scrollToSection('enterprise-cases')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            🏆 도입 사례
          </button>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-center text-sm font-bold text-white bg-[#0056D2] rounded-lg shadow-md"
            >
              기업 교육 문의 (상담 신청)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuickGuide();
              }}
              className="w-full py-2.5 text-center text-sm font-medium text-slate-700 border border-slate-300 rounded-lg"
            >
              교육 안내서(PDF) 다운로드
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
