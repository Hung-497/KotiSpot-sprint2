const nodemailer = require('nodemailer');

let transporter = null;

async function getTransporter() {
    if (transporter) return transporter;

    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    });
    console.log('=== EMAIL (Ethereal test mode) ===');
    console.log(`Inbox: https://ethereal.email/login (user: ${testAccount.user}, pass: ${testAccount.pass})`);
    console.log('==================================');
    return transporter;
}

async function sendEmail({ to, subject, text, html }) {
  const t = await getTransporter();
  const info = await t.sendMail({
    from: process.env.EMAIL_FROM || 'Estate <noreply@estate.app>',
    to,
    subject,
    text,
    html
  });
  return info;
}

// Branded HTML login-code email
async function sendLoginCode(email, code) {
  const html = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f7f6f3;font-family:Georgia,serif;">
  <div style="max-width:480px;margin:40px auto;background:#ffffff;border:1px solid #ececec;border-radius:16px;overflow:hidden;">
    <div style="background:#1a1a1a;padding:24px 32px;">
      <span style="color:#c9a96e;font-size:22px;font-weight:bold;">● Estate</span>
    </div>
    <div style="padding:32px;">
      <h1 style="margin:0 0 8px;font-size:22px;color:#1a1a1a;">Your login code</h1>
      <p style="margin:0 0 24px;color:#5b5b5b;font-size:14px;line-height:1.5;">
        Enter this code to sign in to your Estate account. It expires in 10 minutes.
      </p>
      <div style="background:#f7f6f3;border:1px solid #ececec;border-radius:12px;text-align:center;padding:20px;margin-bottom:24px;">
        <span style="font-size:36px;letter-spacing:8px;font-weight:bold;color:#1a1a1a;">${code}</span>
      </div>
      <p style="margin:0;color:#8a8a8a;font-size:12px;line-height:1.5;">
        If you didn't request this code, you can safely ignore this email.
      </p>
    </div>
  </div>
</body>
</html>`;

  await sendEmail({
    to: email,
    subject: `${code} is your Estate login code`,
    text: `Your Estate login code is: ${code}\n\nIt expires in 10 minutes. If you didn't request it, ignore this email.`,
    html
  });
}

module.exports = { 
    sendEmail, 
    sendLoginCode, 
};
