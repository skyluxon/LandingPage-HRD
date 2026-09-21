import { 
  X, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Download, 
  Users, 
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { CurriculumItem, WorkshopItem } from '../types';

interface SyllabusModalProps {
  curriculum?: CurriculumItem | null;
  workshop?: WorkshopItem | null;
  onClose: () => void;
  onApplyProposal: (title: string) => void;
}

export default function SyllabusModal({
  curriculum,
  workshop,
  onClose,
  onApplyProposal
}: SyllabusModalProps) {
  if (!curriculum && !workshop) return null;

  const isWorkshop = !!workshop;
  const title = isWorkshop ? workshop.title : curriculum?.title;
  const subtitle = isWorkshop ? workshop.subtitle : curriculum?.subtitle;
  const duration = isWorkshop ? workshop.duration : curriculum?.duration;
  const targetAudience = isWorkshop ? workshop.targetAudience : curriculum?.targetAudience;

  const handleDownloadPDF = () => {
    alert(`"${title}" 세부 실습 강의계획서 요약 PDF가 클립보드에 복사 및 준비되었습니다.`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-300 bg-blue-900/60 px-2 py-0.5 rounded">
                {isWorkshop ? '실무 집중 워크숍 실습 일정표' : '정규 커리큘럼 세부 강의계획서'}
              </span>
              <h3 className="font-extrabold text-base sm:text-lg text-white mt-0.5 line-clamp-1">
                {title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-xs sm:text-sm">
          
          {/* Top Intro */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {subtitle}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-200/80 text-xs">
              <div>
                <span className="text-slate-700 block">교육 시간:</span>
                <span className="font-bold text-slate-900">{duration}</span>
              </div>
              <div>
                <span className="text-slate-700 block">권장 대상:</span>
                <span className="font-bold text-slate-900">{targetAudience}</span>
              </div>
              <div>
                <span className="text-slate-700 block">과제 평가:</span>
                <span className="font-bold text-blue-600">실무 봇/에이전트 제출</span>
              </div>
            </div>
          </div>

          {/* Detailed Syllabus Timeline */}
          {isWorkshop && workshop ? (
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-slate-900 flex items-center justify-between">
                <span>세션별 실습 세부 시나리오 (Hands-on Breakdown)</span>
                <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                  실습 비중 {workshop.handsOnRatio}%
                </span>
              </h4>

              <div className="space-y-3">
                {workshop.detailedSyllabus.map((sess, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-600 text-xs bg-blue-50 px-2 py-0.5 rounded">
                        {sess.session} ({sess.duration})
                      </span>
                      <h5 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                        {sess.title}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sess.content}
                    </p>
                    <div className="bg-amber-50/80 p-2 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-start gap-1.5">
                      <span className="font-bold shrink-0">🛠️ 실습 과제:</span>
                      <span>{sess.exercise}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Instructor */}
              {workshop.instructorProfile && (
                <div className="bg-slate-900 text-white p-4 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400">대표 출강 강사진 프로필</span>
                    <span className="text-xs text-slate-400">{workshop.instructorProfile.role}</span>
                  </div>
                  <p className="text-sm font-extrabold text-white">{workshop.instructorProfile.name}</p>
                  <p className="text-xs text-slate-300">{workshop.instructorProfile.companyCareer}</p>
                </div>
              )}
            </div>
          ) : curriculum ? (
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-slate-900">
                단계별 학습 모듈 구성 ({curriculum.modules.length}개 모듈)
              </h4>

              <div className="space-y-3">
                {curriculum.modules.map((mod, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-600 text-xs bg-blue-50 px-2 py-0.5 rounded">
                        {mod.hours}시간 코스
                      </span>
                      <h5 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                        {mod.title}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {mod.description}
                    </p>
                    <div className="pt-1">
                      <span className="text-xs font-bold text-slate-700 block mb-1">핵심 학습 토픽:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {mod.topics.map((t, i) => (
                          <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-xs text-emerald-900 space-y-1">
                <span className="font-bold block">🎯 최종 산출물:</span>
                <p>{curriculum.expectedOutput}</p>
              </div>
            </div>
          ) : null}

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleDownloadPDF}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>강의계획서 요약본 복사/저장</span>
          </button>

          <button
            onClick={() => {
              onClose();
              if (title) onApplyProposal(title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-all"
          >
            <span>이 커리큘럼으로 출강 및 제안서 신청</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
