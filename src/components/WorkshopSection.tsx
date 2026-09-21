import { useState } from 'react';
import { 
  Laptop, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Flame, 
  Award, 
  FileText, 
  Sparkles,
  Layers,
  Building,
  Target
} from 'lucide-react';
import { ENTERPRISE_WORKSHOPS } from '../data/workshops';
import { WorkshopItem, JobDepartment } from '../types';

interface WorkshopSectionProps {
  onSelectWorkshopForProposal: (workshopTitle: string) => void;
  onOpenWorkshopSyllabus: (workshop: WorkshopItem) => void;
}

export default function WorkshopSection({
  onSelectWorkshopForProposal,
  onOpenWorkshopSyllabus
}: WorkshopSectionProps) {
  const [activeTab, setActiveTab] = useState<JobDepartment>('all');

  const filteredWorkshops = activeTab === 'all'
    ? ENTERPRISE_WORKSHOPS
    : ENTERPRISE_WORKSHOPS.filter(w => w.department === activeTab);

  const categories: { key: JobDepartment; label: string; count: number }[] = [
    { key: 'all', label: '전체 워크숍', count: ENTERPRISE_WORKSHOPS.length },
    { key: 'all', label: '전사 공통 실무', count: 1 },
    { key: 'marketing', label: '마케팅 & 영업', count: 1 },
    { key: 'it_dev', label: '개발 & IT 엔지니어', count: 1 },
    { key: 'hr', label: '인사 & HRD 특화', count: 1 },
    { key: 'rnd', label: 'R&D 연구소 & 제조', count: 1 },
    { key: 'cx_cs', label: '고객경험(CX) & CS', count: 1 },
  ];

  return (
    <section id="workshops-section" className="py-16 sm:py-24 bg-slate-900 text-white scroll-mt-12 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-800">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 text-xs font-bold border border-rose-500/30">
              <Flame className="w-3.5 h-3.5 text-rose-400" />
              <span>실무 중심 핸즈온 프로젝트 랩 (Hands-on Workshops)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              이론은 15% 이하, <br />
              <span className="text-blue-400">85% 이상 직접 만들고 해결하는</span> 실전 워크숍
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              수강 후 서랍 속에 들어가는 교재는 의미가 없습니다. 
              부서의 실제 업무 데이터와 과제를 가져와 현장에서 <strong className="text-white">실무 자동화 봇</strong>과 
              <strong className="text-white"> 표준 프롬프트 라이브러리</strong>를 직접 완성하여 돌아갑니다.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-4 text-xs text-slate-300 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
            <div>
              <span className="text-white font-extrabold text-lg block">85%+</span>
              <span className="text-slate-300">평균 실습 비중</span>
            </div>
            <div className="w-px h-8 bg-slate-700" />
            <div>
              <span className="text-emerald-400 font-extrabold text-lg block">100%</span>
              <span className="text-slate-300">실무 산출물 도출</span>
            </div>
            <div className="w-px h-8 bg-slate-700" />
            <div>
              <span className="text-amber-400 font-extrabold text-lg block">4.93</span>
              <span className="text-slate-300">수강생 평점</span>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat, idx) => (
            <button
              key={`${cat.key}-${idx}`}
              onClick={() => setActiveTab(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === cat.key
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-bold'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Workshop Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredWorkshops.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-slate-800/90 rounded-2xl border border-slate-700/80 hover:border-blue-500/80 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/20"
            >
              <div>
                {/* Card Top Pill */}
                <div className="p-5 pb-0 flex items-center justify-between">
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    {workshop.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-rose-400 font-bold">
                    <Flame className="w-3.5 h-3.5" />
                    <span>실습 비중 {workshop.handsOnRatio}%</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="p-5 pt-3 space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {workshop.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {workshop.subtitle}
                  </p>
                </div>

                {/* Meta Attributes */}
                <div className="px-5 py-3 mx-5 bg-slate-900/80 rounded-xl border border-slate-700/60 grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>권장 {workshop.recommendedSize}</span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2 text-[11px] text-slate-300">
                    <span className="font-semibold text-slate-200">사용 툴:</span>
                    <span className="truncate">{workshop.keyTools.slice(0, 3).join(', ')} 등</span>
                  </div>
                </div>

                {/* Tangible Deliverables */}
                <div className="p-5 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    🎁 최종 산출물 (수료 시 납품)
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {workshop.deliverables.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Real Case Quote */}
                <div className="px-5 pb-3">
                  <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-800/40 text-[11px] text-blue-200 flex items-start gap-2">
                    <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{workshop.caseStudy}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-5 pt-3 border-t border-slate-700/70 flex flex-col gap-2">
                <button
                  id={`btn-syllabus-${workshop.id}`}
                  onClick={() => onOpenWorkshopSyllabus(workshop)}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold bg-slate-700/70 hover:bg-slate-700 text-white transition-all flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-300" />
                  <span>세부 일정표(Syllabus) 확인</span>
                </button>

                <button
                  id={`btn-quote-${workshop.id}`}
                  onClick={() => onSelectWorkshopForProposal(workshop.title)}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-1.5"
                >
                  <span>이 워크숍 출강 견적 문의</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Feature Pill: Why Our Workshops Work */}
        <div className="mt-14 p-6 sm:p-8 bg-slate-800/60 rounded-2xl border border-slate-700/80 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">사내 전용 데이터셋 활용</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                더미 샘플이 아닌, 사전 인터뷰를 통해 귀사의 실제 보고서 양식과 실무 과제를 교재로 구성합니다.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">1조 1코치 집중 멘토링</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                단순 1인 강사 강의가 아닌, 실습 시 전문 보조 코치가 조별로 밀착 배치되어 비개발자도 낙오 없이 완성합니다.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">사내 해커톤 & 데모데이 지원</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                임원진과 HR 리더들이 참여하는 최종 시연회를 통해 우수 과제를 선발하고 전사 배포를 연계합니다.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
