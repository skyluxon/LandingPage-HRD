import type { ConsultationFormData } from '../src/types';

export class InquiryMailError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export function validateInquiry(body: any): body is ConsultationFormData & { agreedPrivacy: true } {
  return getInquiryValidationError(body) === null;
}

export function getInquiryValidationError(body: any): string | null {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return '신청 정보를 확인할 수 없습니다. 새로고침 후 다시 입력해주세요.';
  const required: Record<string, string> = {
    companyName: '회사명 / 기관명', contactName: '담당자 성함', jobTitle: '직책 / 소속 부서',
    email: '회사 이메일 주소', phone: '담당자 연락처',
  };
  for (const [key, label] of Object.entries(required)) {
    if (typeof body[key] !== 'string' || !body[key].trim()) return `${label} 항목을 입력해주세요. 공백만 입력할 수 없습니다.`;
    if (body[key].length > 254) return `${label} 항목은 254자 이하로 입력해주세요.`;
  }
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(body.email.trim())) return '회사 이메일 주소를 name@company.com 형식으로 입력해주세요.';
  if (body.agreedPrivacy !== true) return '개인정보 수집 및 이용에 동의해주세요.';
  const optional: Record<string, string> = {
    targetDepartment: '교육 대상 부서', employeeCount: '예상 교육 대상 인원',
    preferredFormat: '선호 진행 방식', budgetRange: '예산', inquiryDetails: '문의 사항',
  };
  for (const [key, label] of Object.entries(optional)) {
    if (body[key] != null && (typeof body[key] !== 'string' || body[key].length > 5000)) return `${label} 항목은 5,000자 이하의 텍스트로 입력해주세요.`;
  }
  if (body.selectedCurriculums != null && (!Array.isArray(body.selectedCurriculums)
    || body.selectedCurriculums.length > 30
    || body.selectedCurriculums.some((item: unknown) => typeof item !== 'string' || item.length > 300))) {
    return '선택한 교육 과정 정보를 확인할 수 없습니다. 새로고침 후 과정을 다시 선택해주세요.';
  }
  return null;
}

export async function sendInquiryMail(
  inquiry: Omit<ConsultationFormData, 'budgetRange'> & { id: string; budgetRange?: string },
  fetcher: typeof fetch = fetch,
  env: NodeJS.ProcessEnv = process.env,
) {
  const apiKey = env.RESEND_API_KEY?.trim();
  const from = env.RESEND_FROM_EMAIL?.trim();
  const to = env.INQUIRY_TO_EMAIL?.split(',').map(value => value.trim()).filter(Boolean);
  if (!apiKey || !from || !to?.length) {
    throw new InquiryMailError(503, '현재 상담 메일 접수를 준비 중입니다. 잠시 후 다시 시도하거나 전화로 문의해주세요.');
  }

  const rows = [
    ['접수 번호', inquiry.id], ['회사명 / 기관명', inquiry.companyName],
    ['담당자', inquiry.contactName], ['직책 / 소속 부서', inquiry.jobTitle],
    ['이메일', inquiry.email], ['연락처', inquiry.phone],
    ['교육 대상 부서', inquiry.targetDepartment], ['교육 대상 인원', inquiry.employeeCount],
    ['선호 진행 방식', inquiry.preferredFormat], ['예산', inquiry.budgetRange || '협의 필요'],
    ['선택 과정', inquiry.selectedCurriculums.join(', ') || '전사 맞춤 종합 과정'],
    ['문의 사항', inquiry.inquiryDetails || '없음'], ['개인정보 수집 및 이용 동의', '동의함'],
  ];
  const text = ['기업 맞춤형 AX 교육 상담 신청', ...rows.map(([label, value]) => `${label}: ${value}`)].join('\n\n');
  // Plain text preserves user input without interpreting HTML from the form.
  let response: Response;
  try {
    response = await fetcher('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from, to, reply_to: inquiry.email.trim(),
        subject: `[AX 교육 상담] ${inquiry.companyName.replace(/[\r\n]/g, ' ')} (${inquiry.id})`,
        text,
      }),
      signal: AbortSignal.timeout(15000),
    });
    const result = await response.json();
    if (!response.ok || typeof result.id !== 'string' || !result.id) {
      console.error('Resend inquiry send failed:', response.status);
      throw new Error('Resend rejected the request');
    }
    return result.id as string;
  } catch {
    throw new InquiryMailError(502, '상담 메일 전송을 확인하지 못했습니다. 잠시 후 다시 시도하거나 전화로 문의해주세요.');
  }
}
