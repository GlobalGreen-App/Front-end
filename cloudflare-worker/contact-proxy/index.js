export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
    }

    const CF_SECRET = env.CF_TURNSTILE_SECRET;
    const FORMSPREE_FORM_ID = env.FORMSPREE_FORM_ID;

    try {
      const body = await request.json();

      // If a turnstile token was provided, verify it
      if (body.cf_turnstile_token) {
        const token = body.cf_turnstile_token;
        const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=${CF_SECRET}&response=${token}`6+
        });
        const verifyJson = await verifyRes.json();
        if (!verifyJson.success) {
          return new Response(JSON.stringify({ error: 'Turnstile verification failed' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }
      }

      // Forward the payload to Formspree
      const formspreeRes = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(body)
      });

      const formspreeJson = await formspreeRes.json().catch(() => ({}));

      return new Response(JSON.stringify(formspreeJson), { status: formspreeRes.status, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
  }
};
