export async function onRequestPost(context) {
  const { request } = context;
  
  try {
    const formData = await request.json();
    
    console.log('Received lead data:', JSON.stringify(formData, null, 2));
    
    // Check honeypot
    if (formData.honeypot) {
      console.log('Bot detected via honeypot');
      return new Response(JSON.stringify({ success: true, isBot: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Prepare payload for CRM
    const crmPayload = {
      name: formData.name,
      mobile: formData.mobile,
      city: formData.city,
      source: formData.source,
      project: formData.project,
      ...formData
    };
    
    // Remove honeypot from payload
    delete crmPayload.honeypot;
    
    // Call CRM webhook
    const crmUrl = 'https://connector.b2bbricks.com/api/Integration/hook/53b3d0b4-ffd1-4ba6-b633-f736c36d924f';
    console.log('Sending to CRM:', crmUrl);
    
    const crmResponse = await fetch(crmUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(crmPayload),
    });
    
    console.log('CRM response status:', crmResponse.status);
    
    // Call Google Sheets
    const googleSheetUrl = 'https://script.google.com/macros/s/AKfycbzUChL241GLYuSeUxn6iUUnJR3a0SilBr3iOtiGthwQPy8LSg6us-HshuY7Lmfwtkqo/exec';
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
      project_name: formData.project || "Keshavaa La Arena"
    };
    
    fetch(googleSheetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sheetData),
    }).catch(err => console.error('Google Sheets error:', err));
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Lead submission error:', error);
    return new Response(JSON.stringify({ success: false, message: 'Submission failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
