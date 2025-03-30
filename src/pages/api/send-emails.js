import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({ request }) {
  try {
    const { name, phone, email, subject, message } = await request.json(); // Añadí `email`

    const data = await resend.emails.send({
      from: "GestoFinca <onboarding@resend.dev>",
      to: "david4100ggx@gmail.com",
      subject: subject,
      html: `
        <h1>Nombre: ${name}</h1> 
        <p>Ha aceptado las politicas de privacidad</p>
        <p>Te ha dejado el siguiente mensaje:</p>
        <blockquote>${message}</blockquote>
        <p><strong>Teléfono del cliente:</strong> ${phone}</p>
        <p><strong>Email del cliente:</strong> ${email}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
