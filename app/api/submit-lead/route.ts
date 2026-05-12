import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token, honeypot, ...formData } = body;

    // 1. Honeypot check: If the hidden field is filled, it's a bot
    if (honeypot) {
      console.log('Bot detected via honeypot');
      // Return a 200 to trick the bot into thinking it succeeded, 
      // but don't actually forward to CRM or redirect to thank-you.
      // Actually, the user said "if the user is bot we're not taking it to the thank-you page"
      return NextResponse.json({ success: true, isBot: true });
    }

    // 2. Cloudflare Turnstile verification
    const secretKey = '0x4AAAAAADN02fAylurgo3OamETY5F71yZ0';
    const verifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    
    const verifyResponse = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secretKey,
        response: token
      })
    });

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      console.log('Turnstile verification failed:', verifyData['error-codes']);
      return NextResponse.json({ success: false, message: 'Captcha verification failed' }, { status: 400 });
    }

    // 3. Forward to CRM
    const crmUrl = 'https://connector.b2bbricks.com/api/Integration/hook/53b3d0b4-ffd1-4ba6-b633-f736c36d924f';
    
    const crmResponse = await fetch(crmUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    // 4. Forward to Google Sheets
    const googleSheetUrl = 'https://script.google.com/macros/s/AKfycbzUChL241GLYuSeUxn6iUUnJR3a0SilBr3iOtiGthwQPy8LSg6us-HshuY7Lmfwtkqo/exec';
    
    // Prepare data for Google Sheets as per the Apps Script expectation
    const sheetData = {
      name: formData.name,
      mobile: formData.mobile,
      configuration: formData.configuration || "",
      form_name: formData.source || "",
      gclid: formData.gclid || "",
      utm_source: formData.utm_source || "",
      utm_medium: formData.utm_medium || "",
      utm_campaign: formData.utm_campaign || "",
      utm_term: formData.utm_term || "",
      device: formData.device || "",
      trigger: formData.trigger || "",
      page_url: formData.page_url || "",
      cf_turnstile_token: token, // Sending hCaptcha token here
      project_name: formData.project || "Keshavaa La Arena"
    };

    await fetch(googleSheetUrl, {
      method: 'POST',
      body: JSON.stringify(sheetData),
    });

    // Even if CRM or Sheets fails, we return success so the user sees the thank-you page
    return NextResponse.json({ success: true, isBot: false });

  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
