import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function required(v, name) {
  if (!v || !String(v).trim()) throw new Error(`${name} is required`);
  return String(v).trim();
}

export async function POST(req) {
  try {
    const contentType = req.headers.get('content-type') || '';
    if (!contentType.includes('multipart/form-data')) {
      return new Response(JSON.stringify({ error: 'Invalid content type' }), { status: 400 });
    }

    const formData = await req.formData();
    const variant = formData.get('variant') || 'referral';
    const fullName = required(formData.get('fullName'), 'Full Name');
    const email = required(formData.get('email'), 'Email');
    const phone = formData.get('phone') || '';
    const position = formData.get('position') || formData.get('jobRole') || '';
    const jobId = formData.get('jobId') || '';
    const resumeLink = formData.get('resumeLink') || '';
    const company = formData.get('company') || '';
    const jobPosting = formData.get('jobPosting') || '';
    const interviewType = formData.get('interviewType') || '';
    const experience = formData.get('experience') || '';
    const file = formData.get('resume');

    let attachment = [];
    if (file && typeof file === 'object') {
      const blob = file;
      if (blob.size > 20 * 1024 * 1024) {
        return new Response(JSON.stringify({ error: 'File too large (max 20MB)' }), { status: 400 });
      }
      const arrayBuffer = await blob.arrayBuffer();
      attachment.push({
        filename: blob.name || 'resume',
        content: Buffer.from(arrayBuffer),
        contentType: blob.type || 'application/octet-stream'
      });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipients = process.env.RECIPIENT_EMAIL;

    if (!smtpHost || !smtpUser || !smtpPass || !recipients) {
      console.error('Email config missing', { hasHost: !!smtpHost, hasUser: !!smtpUser, hasPass: !!smtpPass, hasRecipients: !!recipients });
      return new Response(JSON.stringify({ error: 'Server email config missing' }), { status: 500 });
    }

    // Diagnostics (does not log secrets)
    const debugEnabled = process.env.FORM_DEBUG === '1';
    if (debugEnabled) {
      console.log('Form submit diagnostics', {
        port: smtpPort,
        secure: smtpPort === 465,
        runtime: process.env.NEXT_RUNTIME || 'unknown',
        node: process.version,
        recipientsCount: recipients.split(',').length,
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
      requireTLS: smtpPort === 587,
      tls: smtpPort === 587 ? { minVersion: 'TLSv1.2' } : undefined,
      connectionTimeout: 15000,
      greetingTimeout: 10000,
      socketTimeout: 20000
    });

    // Verify connection/auth before attempting send
    try {
      await transporter.verify();
    } catch (verifyErr) {
      console.error('SMTP verify failed', {
        code: verifyErr.code,
        command: verifyErr.command,
        message: verifyErr.message,
        name: verifyErr.name
      });
      let reason = 'Email transport not ready';
      if (verifyErr.code === 'EAUTH') reason = 'SMTP auth failed (check username/password or SMTP AUTH disabled)';
      else if (verifyErr.code === 'ENOTFOUND' || verifyErr.code === 'EAI_AGAIN') reason = 'SMTP host DNS not reachable from server';
      else if (verifyErr.code === 'ECONNECTION' || verifyErr.code === 'ETIMEDOUT') reason = 'Cannot reach SMTP server (network/port blocked)';
      return new Response(JSON.stringify({ error: reason }), { status: 500 });
    }

    const lines = [
      `Variant: ${variant}`,
      `Full Name: ${fullName}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      position && `Position: ${position}`,
      jobId && `Job Id: ${jobId}`,
      resumeLink && `Example Resume Link: ${resumeLink}`,
      company && `Company: ${company}`,
      jobPosting && `Job Posting: ${jobPosting}`,
      interviewType && `Interview Type: ${interviewType}`,
      experience && `Experience Level: ${experience}`
    ].filter(Boolean);

    const html = `<h2>New Form Submission (${variant})</h2><pre style="font-size:14px;line-height:1.4">${lines.join('\n')}</pre>`;

    try {
      await transporter.sendMail({
        from: `Mapkie Form <${smtpUser}>`,
        to: recipients,
        subject: `Mapkie Form Submission - ${variant} - ${fullName}`,
        text: lines.join('\n'),
        html,
        attachments: attachment
      });
    } catch (sendErr) {
      console.error('sendMail error', {
        code: sendErr.code,
        command: sendErr.command,
        response: sendErr.response,
        message: sendErr.message
      });
      return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Form submit error', { message: err.message, stack: err.stack });
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
  }
}
