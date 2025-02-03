import { useState } from "react";
import sendEmail from "../services/emailService";

const ContactFormReact = () => {
  const dataUser = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(dataUser);
  const [polityCheck, setPolityCheck] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleCheck = (event) => {
    setPolityCheck(event.target.checked);
    console.log(polityCheck);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!polityCheck) {
      setError("Debe aceptar la política de privacidad");
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Todos los campos son obligatorios");
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    } else {
      const data = await sendEmail(formData);
    }
  };

  const handleChangeValue = (event, dataUser) => {
    setFormData({ ...formData, [dataUser]: event.target.value });
  };

  return (
    <div className="flex justify-center bg-slate-100">
      <form onSubmit={handleSubmit} className="max-w-sm mx-4">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center">
            <strong className="font-bold">{error}</strong>
          </div>
        )}
        {message && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center">
            <strong className="font-bold">{message}</strong>
          </div>
        )}
        <div>
          <label
            htmlFor="small-input"
            className="block m-2 text-sm font-medium text-gray-900 :text-white"
          >
            Nombre*
          </label>
          <input
            onChange={(event) => handleChangeValue(event, "name")}
            value={formData.name}
            name="name"
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-green-700 focus:border-green-700 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-green-700 :focus:border-green-700"
          />
        </div>
        <div>
          <label
            htmlFor="small-input"
            className="block m-2 text-sm font-medium text-gray-900 :text-white"
          >
            Teléfono*
          </label>
          <input
            onChange={(event) => handleChangeValue(event, "phone")}
            value={formData.phone}
            name="phone"
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-green-700 focus:border-green-700 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-green-700 :focus:border-green-700"
          />
        </div>
        <div>
          <label
            htmlFor="small-input"
            className="block m-2 text-sm font-medium text-gray-900 :text-white"
          >
            Correo electrónico*
          </label>
          <input
            onChange={(event) => handleChangeValue(event, "email")}
            value={formData.email}
            name="email"
            type="email"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-green-700 focus:border-green-700"
          />
        </div>
        <div>
          <label
            htmlFor="small-input"
            className="block m-2 text-sm font-medium text-gray-900 :text-white"
          >
            Asunto*
          </label>
          <input
            onChange={(event) => handleChangeValue(event, "subject")}
            value={formData.subject}
            name="subject"
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-green-700 focus:border-green-700"
          />
        </div>
        <div>
          <label
            htmlFor="small-input"
            className="block m-2 text-sm font-medium text-gray-900 :text-white"
          >
            Mensaje*
          </label>
          <textarea
            onChange={(event) => handleChangeValue(event, "message")}
            value={formData.message}
            name="message"
            id="small-input"
            className="mb-2 h-20 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-green-700 focus:border-green-700"
          />
        </div>

        <div className="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            checked={polityCheck}
            onChange={handleCheck}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
          />
          <label
            htmlFor="link-checkbox"
            className="ms-2 mb-2 text-sm font-medium text-gray-900"
          >
            Consiento el uso de mis datos para los fines indicados en la{" "}
            <a
              href="/politica-de-privacidad"
              className="text-blue-600 :text-blue-500 hover:underline"
            >
              política de privacidad*
            </a>
            .
          </label>
        </div>
        <div className="flex justify-center m-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-5 py-3 text-base text-center text-white font-semibold bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:ring-blue-300"
          >
            Contactar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormReact;
