import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(API_KEY);

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message, phone } = req.body;
  try {
    await resend.emails.send({
      from: "GestoFinca <onboarding@resend.dev>",
      to: "david4100ggx@gmail.com",
      subject: subject,
      html: `<h1>Nombre: ${name}</h1> 
      <p>Te ha dejado el siguiente mensaje: ${message}<p/>
      <p>Telefono del cliente: ${phone}<p/>
      <p>Email del cliente: ${email}<p/>`,
    });
    res.status(200).send("Email enviado");
  } catch (error) {
    res.status(500).send("Error al enviar el email");
  }
});

app.listen(3000, () => {
  console.log("Servidor de emails en funcionamiento en el puerto 3000");
});
