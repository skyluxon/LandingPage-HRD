import assert from 'node:assert/strict';
import { test } from 'node:test';
import { InquiryMailError, sendInquiryMail, validateInquiry } from './inquiry-mail.ts';

const inquiry = {
  id: 'REQ-test', companyName: '테스트 회사', contactName: '테스트 담당자',
  jobTitle: 'HRD', email: 'applicant@example.com', phone: '010-0000-0000',
  targetDepartment: '인사', employeeCount: '10명', preferredFormat: '온라인',
  budgetRange: '협의', inquiryDetails: '<script>test</script>\n문의 내용',
  selectedCurriculums: ['AX 실무'], agreedPrivacy: true,
};
const env = { RESEND_API_KEY: 'test-key', RESEND_FROM_EMAIL: 'AX <sender@example.com>', INQUIRY_TO_EMAIL: 'hr@example.com' };

test('validates required fields, consent, email and curriculum types', () => {
  assert.equal(validateInquiry(inquiry), true);
  for (const invalid of [null, {}, { ...inquiry, agreedPrivacy: false },
    { ...inquiry, email: 'invalid' }, { ...inquiry, companyName: ' ' },
    { ...inquiry, selectedCurriculums: [123] }, { ...inquiry, inquiryDetails: 'x'.repeat(5001) }]) {
    assert.equal(validateInquiry(invalid), false);
  }
});

test('sends all form content to configured recipient with applicant reply-to', async () => {
  const fetcher: typeof fetch = async (url, options) => {
    assert.equal(url, 'https://api.resend.com/emails');
    const body = JSON.parse(options!.body as string);
    assert.deepEqual(body.to, ['hr@example.com']);
    assert.equal(body.from, env.RESEND_FROM_EMAIL);
    assert.equal(body.reply_to, inquiry.email);
    assert.equal(body.html, undefined);
    for (const value of [inquiry.companyName, inquiry.phone, inquiry.inquiryDetails, 'AX 실무', inquiry.id]) {
      assert.ok(body.text.includes(value));
    }
    return Response.json({ id: 'email-id' });
  };
  assert.equal(await sendInquiryMail(inquiry, fetcher, env), 'email-id');
});

test('missing configuration does not call provider', async () => {
  await assert.rejects(sendInquiryMail(inquiry, async () => {
    assert.fail('must not send');
  }, {}), (error: unknown) => error instanceof InquiryMailError && error.status === 503);
});

test('provider rejection, malformed response and network failure never report success', async () => {
  for (const fetcher of [
    async () => Response.json({ message: 'rejected' }, { status: 403 }),
    async () => Response.json({}),
    async () => { throw new Error('timeout'); },
  ]) {
    await assert.rejects(sendInquiryMail(inquiry, fetcher, env),
      (error: unknown) => error instanceof InquiryMailError && error.status === 502);
  }
});
