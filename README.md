# LandingPage-HRD

## Local development

Use Node.js 22.18+ (or Node.js 24). Run `npm install`, then `npm run dev` and open http://localhost:3000.

## Consultation email with Resend

Create a local `.env` file and set these server-only values:

```dotenv
RESEND_API_KEY=re_your_api_key
RESEND_FROM_EMAIL="AX Campus <consulting@your-verified-domain.com>"
INQUIRY_TO_EMAIL=your-inbox@example.com
```

Use a domain verified in Resend for the sender. Multiple recipients can be separated by commas. Restart the server after changing `.env`; configure the same variables on your deployment host. Never commit the real API key or put it in a `VITE_` variable.

Submitting the consultation form sends the full inquiry to `INQUIRY_TO_EMAIL`. Replying to that email addresses the applicant. The form reports success only after Resend accepts the message; acceptance does not guarantee inbox delivery. Check the Resend dashboard for delivery status. This does not automatically send a proposal or confirmation to the applicant.

Missing configuration or a provider error displays an error and preserves the form values. A network timeout can occur after provider acceptance, so check Resend before repeating a submission if delivery is uncertain.

Inquiries are stored only in memory. The `GET /api/inquiries` demo endpoint is disabled in production and on Vercel.

## Vercel deployment

`vercel.json` builds the Vite frontend and routes `/api/*` to the Express function in `api/index.ts`. Set `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `INQUIRY_TO_EMAIL` in Vercel's production environment before deploying. Set `GEMINI_API_KEY` separately if using AI diagnostics. Local `.env` files are not committed.

The `onboarding@resend.dev` sender only supports testing to the email address associated with the Resend account. Use a verified domain sender for broader delivery. Vercel instances do not share in-memory inquiry history; notification emails are the durable record of submissions.

API reference: https://resend.com/docs/api-reference/emails/send-email

## Verification

- `node --test server/inquiry-mail.test.ts`: validates inputs and tests mail payloads and failure handling using mocked requests; sends no real email.
- `npm run lint`: TypeScript checking.
- `npm run build`: production frontend/backend build.
- Set `NODE_ENV=production`, then `npm start` to serve the build.

For a live check, submit synthetic contact details through the form, confirm the success screen, and inspect the configured inbox and Resend dashboard.
