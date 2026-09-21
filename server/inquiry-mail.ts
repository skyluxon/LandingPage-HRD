import type { ConsultationFormData } from '../src/types';

export class InquiryMailError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export function validateInquiry(body: any): body is ConsultationFormData & { agreedPrivacy: true } {
  if (!body || typeof body !== 'object' || body.agreedPrivacy !== true) return false;
  const required = ['companyName', 'contactName', 'jobTitle', 'email', 'phone'];
  if (required.some(key => typeof body[key] !== 'string' || !body[key].trim() || body[key].length > 254)) return false;
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(body.email.trim())) return false;
  const optional = ['targetDepartment', 'employeeCount', 'preferredFormat', 'budgetRange', 'inquiryDetails'];
  if (optional.some(key => body[key] != null && (typeof body[key] !== 'string' || body[key].length > 5000))) return false;
  return body.selectedCurriculums == null || (Array.isArray(body.selectedCurriculums)
    && body.selectedCurriculums.length <= 30
    && body.selectedCurriculums.every((item: unknown) => typeof item === 'string' && item.length <= 300));
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
