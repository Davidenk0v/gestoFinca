import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({ request }) {
  try {
    const { name, phone, email, subject, message } = await request.json(); // Añadí `email`

    const data = await resend.emails.send({
      from: "GestoFinca <no-reply@gestofinca.com>",
      to: "gestofinca@gmail.com",
      subject: subject,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Mensaje de GestoFinca</title>
          <style>
            body {
              font-family: Arial, Helvetica, sans-serif;
              line-height: 1.6;
              color: #333333;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #1a5276;
              color: white;
              padding: 20px;
              text-align: center;
              border-top-left-radius: 5px;
              border-top-right-radius: 5px;
            }
            .content {
              background-color: #ffffff;
              padding: 20px;
              border-left: 1px solid #dddddd;
              border-right: 1px solid #dddddd;
            }
            .message-box {
              background-color: #f8f9fa;
              border-left: 4px solid #1a5276;
              padding: 15px;
              margin: 20px 0;
            }
            .client-info {
              background-color: #f2f6f9;
              padding: 15px;
              margin-top: 20px;
              border-radius: 5px;
            }
            .footer {
              background-color: #f2f2f2;
              padding: 15px;
              text-align: center;
              font-size: 12px;
              color: #666666;
              border-bottom-left-radius: 5px;
              border-bottom-right-radius: 5px;
              border: 1px solid #dddddd;
            }
            h1 {
              color: #1a5276;
              margin-top: 0;
              font-size: 24px;
            }
            .logo {
              max-width: 180px;
              height: auto;
              margin: 10px auto;
              display: block;
            }
            @media only screen and (max-width: 600px) {
              .container {
                width: 100%;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <p>GestoFinca</p>
            </div>
            
            <div class="content">
              <h1>Nuevo mensaje de ${name}</h1>
              
              <p>Hemos recibido un nuevo mensaje a través del formulario de contacto. El cliente ha aceptado nuestras políticas de privacidad.</p>
              
              <div class="message-box">
                <strong>Mensaje:</strong>
                <p>${message}</p>
              </div>
              
              <div class="client-info">
                <h3>Información del cliente:</h3>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Teléfono:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
              </div>
            </div>
            
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} GestoFinca - Todos los derechos reservados</p>
              <p>Este es un mensaje automático, por favor no responda a este correo.</p>
            </div>
          </div>
        </body>
        </html>
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
