import { Resend } from "resend";

const resend = new Resend("re_gQusCgDr_GFX6kHRgxVpdoAGko4zXzCT2");

resend.emails.send({
  from: "tu-email@example.com",
  to: "david4100ggx@gmail.com",
  subject: "Datos del formulario",
  html: "<p>Nombre: ${nombre}</p><p>Email: ${email}</p><p>Mensaje: ${mensaje}</p>",
});
