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
      return new Response(JSON.stringify({ error: 'Server email config missing' }), { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass }
    });

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

    await transporter.sendMail({
      from: `Mapkie Form <${smtpUser}>`,
      to: recipients,
      subject: `Mapkie Form Submission - ${variant} - ${fullName}`,
      text: lines.join('\n'),
      html,
      attachments: attachment
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Form submit error', err);
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
  }
}
