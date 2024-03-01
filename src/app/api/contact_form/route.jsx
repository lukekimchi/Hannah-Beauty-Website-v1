import { Resend } from 'resend';
import ContactFormThanks from '../../emails/ContactFormThanks';

const resend = new Resend(process.env.REACT_APP_EMAIL_KEY);

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: 'hannahbeautynz@gmail.com',
    subject: 'Thanks for reaching out! 😊',
    react: <ContactFormThanks />
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
