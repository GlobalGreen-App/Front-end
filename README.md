# GlobalGreen App

This repository contains the GlobalGreen single-page application (React + TypeScript) used for showcasing the GlobalGreen product and collecting leads.

## Tech stack
- React + TypeScript
- Vite
- Tailwind CSS
- framer-motion
- lucide-react icons

## Local dev
1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
npm run preview
```

## Environment variables
Create a `.env` file (in the repository root) with the following variables. Vite requires a restart after changing `.env`.

- VITE_FORMSPREE_FORM_ID (optional): Formspree form ID (e.g. `xzzjbboz`). When `VITE_CONTACT_PROXY_URL` is not set, the frontend will POST directly to Formspree using this ID.
- VITE_CONTACT_PROXY_URL (optional, preferred): If you have a backend or serverless endpoint that accepts contact/schedule POSTs and relays them to webmail, set this to that URL (e.g. `https://your-proxy.example.com/api/contact`). When present, the frontend will POST to this URL instead of Formspree.
- VITE_TURNSTILE_SITE_KEY (optional): Cloudflare Turnstile site key used by the Contact page for bot protection.

Example `.env`:

```
VITE_FORMSPREE_FORM_ID=xzzjbboz
VITE_TURNSTILE_SITE_KEY=0x4AAAAAAB2yXox59kTlViVM
```

> Note: Do not commit secrets to git. If you add a server with SendGrid/SMTP credentials, keep those in `server/.env` and never commit them.

## How the contact & schedule forms work
- `src/pages/Contact.tsx` contains the main contact form. On submit it will POST JSON to either `VITE_CONTACT_PROXY_URL` (preferred) or to the Formspree endpoint constructed from `VITE_FORMSPREE_FORM_ID`.
- `src/components/UI/ScheduleModal.tsx` and `src/components/UI/ScheduleForm.tsx` were wired to the same POST logic (they post JSON: name, email, phone, preferredDate, preferredTime, message).
- The frontend expects the endpoint to return a JSON response and an HTTP 200 on success. If you use Formspree, the response body should include `{"ok":true}`.

## Recommended production setup (reliable email delivery)
Third-party form services (Formspree) are quick to set up, but for reliable delivery and better deliverability control we recommend using a server-side relay:

1. Add a minimal serverless function or small Express app that accepts POST `/api/contact`:
   - Validate the payload server-side
   - Send email using a transactional email provider (SendGrid, Mailgun, Amazon SES)
   - Return JSON `{ ok: true }` on success
2. Set `VITE_CONTACT_PROXY_URL` in the frontend to point to that endpoint.

If you'd like, I can scaffold a minimal Express server and README for it (SendGrid example included).

## Debugging tips
- If you don't receive emails:
  - Confirm the frontend actually does a POST (use browser DevTools → Network tab).
  - If the POST returns 200, check Formspree inbox or your backend logs.
  - Check spam/junk folder on the recipient address.
  - If using Formspree, log into the Formspree dashboard to verify forwarding/recipient settings.

## Next steps I can help with
- Scaffold a `server/` folder with an Express relay using SendGrid and a `server/README.md` with run/deploy instructions.
- Add serverless function examples (Vercel/Netlify) that accept POSTs and forward to SendGrid.
- Add automated tests for form submission flows.

If you want me to scaffold the backend relay (Express + SendGrid) now, say "Scaffold backend" and I will create the files and instructions.
