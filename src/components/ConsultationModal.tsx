import { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  Loader2, 
  Building2, 
  PhoneCall, 
  Mail, 
  Users, 
  Calendar,
  FileCheck
} from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCurriculumTitle?: string;
  initialDetails?: any;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  selectedCurriculumTitle = '',
  initialDetails
}: ConsultationModalProps) {
  const [formData, setFormData] = useState<ConsultationFormData>({
    companyName: '',
    contactName: '',
    jobTitle: '',
    email: '',
    phone: '',
    targetDepartment: '전사 공통 실무',
    employeeCount: '10~25명 (부서 핵심인력 파일럿)',
    preferredFormat: '온·오프라인 융합 (추천)',
    budgetRange: '협의 필요 (견적서 요청)',
    inquiryDetails: '',
    selectedCurriculums: []
  });

  const [agreedPrivacy, setAgreedPrivacy] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedId, setSubmittedId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (selectedCurriculumTitle) {
      setFormData(prev => ({
        ...prev,
        selectedCurriculums: [selectedCurriculumTitle],
        inquiryDetails: prev.inquiryDetails 
          ? prev.inquiryDetails 
          : `[선택 과정] "${selectedCurriculumTitle}" 과정에 대한 귀사 맞춤 출강 견적 및 일정 문의드립니다.`
      }));
    }
  }, [selectedCurriculumTitle]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!agreedPrivacy) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, agreedPrivacy })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setIsSuccess(true);
        setSubmittedId(data.inquiryId || 'REQ-2026-CONFIRMED');
      } else {
        setErrorMessage(data.error || '신청 처리 중 오류가 발생했습니다.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('서버와의 통신에 실패했습니다. 유선(02-588-3490)으로 문의해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Top Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                기업 맞춤형 AX 교육 제안서 &amp; 출강 견적 신청
              </h3>
              <p className="text-xs text-slate-300">
                HRD 담당자를 위한 맞춤 커리큘럼 설계 및 고용보험 환급 안내 (24시간 내 회신)
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Success State */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                접수 번호: {submittedId}
              </span>
              <h4 className="text-2xl font-extrabold text-slate-900">
                상담 신청이 정상적으로 접수되었습니다!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                <strong className="text-slate-900">{formData.companyName} {formData.contactName}</strong> 님, 
                남겨주신 연락처({formData.phone})와 이메일({formData.email})로 담당 전문 AX 디렉터가 
                24시간 이내에 <strong>맞춤 제안서 초안과 견적서</strong>를 발송해 드리겠습니다.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 text-left max-w-md mx-auto space-y-1.5">
              <div><strong>선택된 교육 과정:</strong> {formData.selectedCurriculums[0] || '전사 맞춤 종합 과정'}</div>
              <div><strong>희망 진행 형태:</strong> {formData.preferredFormat}</div>
              <div><strong>교육 대상 부서/인원:</strong> {formData.targetDepartment} ({formData.employeeCount})</div>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 shadow-md transition-all"
              >
                확인 및 닫기
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5">
            
            {/* Selected Curriculum Notice Pill */}
            {selectedCurriculumTitle && (
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-blue-900 font-semibold">
                  <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>문의 대상 과정: <strong>{selectedCurriculumTitle}</strong></span>
                </div>
                <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded font-bold">
                  선택됨
                </span>
              </div>
            )}

            {/* Form Fields: Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  회사명 / 기관명 <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: (주)한국정밀제조"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  담당자 성함 <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: 김인재"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                />
              </div>
            </div>

            {/* Form Fields: Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  직책 / 소속 부서 <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: 인재개발팀 수석, HRD 매니저"
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  회사 이메일 주소 <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                />
              </div>
            </div>

            {/* Form Fields: Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  담당자 연락처(휴대폰) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="010-0000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  예상 교육 대상 인원
                </label>
                <select
                  value={formData.employeeCount}
                  onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs bg-white"
                >
                  <option value="10~25명 (부서 핵심인력 파일럿)">10~25명 (부서 핵심인력 파일럿)</option>
                  <option value="30~50명 (팀장 및 실무자 집중)">30~50명 (팀장 및 실무자 집중)</option>
                  <option value="50~100명 (사업본부 단위 워크숍)">50~100명 (사업본부 단위 워크숍)</option>
                  <option value="100~300명 (전사 하이브리드)">100~300명 (전사 하이브리드)</option>
                  <option value="300명 이상 (대규모 전사 롤아웃)">300명 이상 (대규모 전사 롤아웃)</option>
                </select>
              </div>
            </div>

            {/* Form Fields: Row 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  선호 진행 방식
                </label>
                <select
                  value={formData.preferredFormat}
                  onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs bg-white"
                >
                  <option value="온·오프라인 융합 (추천)">온·오프라인 융합 (추천)</option>
                  <option value="오프라인 집중 워크숍 (1~2일)">오프라인 집중 워크숍 (1~2일)</option>
                  <option value="온라인 VOD 마이크로러닝">온라인 VOD 마이크로러닝</option>
                  <option value="전사 AX 컨설팅 및 CoE 구축">전사 AX 컨설팅 및 CoE 구축</option>
                  <option value="상담 후 최적 방식 결정">상담 후 최적 방식 결정</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  교육 대상 부서
                </label>
                <select
                  value={formData.targetDepartment}
                  onChange={(e) => setFormData({ ...formData, targetDepartment: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs bg-white"
                >
                  <option value="전사 공통 실무">전사 공통 실무</option>
                  <option value="전략기획 & 경영지원">전략기획 & 경영지원</option>
                  <option value="마케팅 & 영업">마케팅 & 영업</option>
                  <option value="인사(HR) & 인재개발(HRD)">인사(HR) & 인재개발(HRD)</option>
                  <option value="재무 & 회계 & 구매">재무 & 회계 & 구매</option>
                  <option value="개발 & IT 엔지니어링">개발 & IT 엔지니어링</option>
                  <option value="R&D 연구소 & 스마트팩토리">R&D 연구소 & 스마트팩토리</option>
                  <option value="임원 & 경영진 마스터클래스">임원 & 경영진 마스터클래스</option>
                </select>
              </div>
            </div>

            {/* Inquiries Details Textarea */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                문의 사항 및 특별 요구사항 (선택)
              </label>
              <textarea
                rows={3}
                placeholder="예: 4월 중 사내 1박2일 워크숍으로 진행 희망합니다. 고용보험 환급 가능 여부와 사내 보안(망분리) 환경 적용 가능한지 견적서와 함께 알려주세요."
                value={formData.inquiryDetails}
                onChange={(e) => setFormData({ ...formData, inquiryDetails: e.target.value })}
                className="w-full p-3 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Privacy Agreement */}
            <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-700">
              <input
                type="checkbox"
                id="privacy-check"
                checked={agreedPrivacy}
                onChange={(e) => setAgreedPrivacy(e.target.checked)}
                className="mt-0.5 rounded text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="privacy-check" className="cursor-pointer">
                [필수] 맞춤 교육 상담 및 제안서 발송을 위한 개인정보(이름, 회사명, 연락처, 이메일) 수집 및 이용에 동의합니다.
              </label>
            </div>

            {errorMessage && (
              <p role="alert" className="text-xs text-rose-600 font-bold bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                {errorMessage}
              </p>
            )}

            {/* Actions */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-slate-700 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                기업 정보 및 기밀 보호 NDA 철저 준수
              </span>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>상담 메일 전송 중...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>교육 제안서 &amp; 견적 신청 완료</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
