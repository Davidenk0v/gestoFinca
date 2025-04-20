import { useState, useEffect } from "react";

const ContactForm = ({ data, lang, title }) => {
  // Usar destructuración con valores por defecto para evitar undefined
  const { fields = {}, buttons = {} } = data || {};
  const initialFormData = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [polityCheck, setPolityCheck] = useState(false);
  const [feedback, setFeedback] = useState({ message: "", type: "" });

  useEffect(() => {
    if (feedback.message) {
      const timer = setTimeout(
        () => setFeedback({ message: "", type: "" }),
        5000
      );
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheck = (event) => setPolityCheck(event.target.checked);

  const showMessage = (message, type) => setFeedback({ message, type });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!polityCheck)
      return showMessage("Debe aceptar la política de privacidad", "error");
    if (Object.values(formData).some((field) => !field.trim())) {
      return showMessage("Todos los campos son obligatorios", "error");
    }

    try {
      const response = await fetch("/api/send-emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error al enviar el mensaje");

      showMessage(
        "Mensaje enviado correctamente. Pronto nos pondremos en contacto.",
        "success"
      );
      setFormData(initialFormData);
      setPolityCheck(false);
    } catch {
      showMessage("Hubo un error. Inténtelo de nuevo más tarde.", "error");
    }
  };

  return (
    <section>
      <div className="text-center mb-12">
        <span className="inline-block text-orange-500 font-semibold mb-2 tracking-wide">
          {lang === "es"
            ? "RESUELVE TUS DUDAS"
            : lang === "en"
            ? "SOLVE YOUR DOUBTS"
            : "KLÄREN SIE IHRE ZWEIFEL"}
        </span>
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-800 sm:text-4xl">
          {lang === "es"
            ? "¿Tienes alguna pregunta?"
            : lang === "en"
            ? "Do you have any questions?"
            : "Haben Sie Fragen?"}
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="flex justify-center p-4 bg-slate-100 animate-fade-in">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          {feedback.message && (
            <div
              className={`text-center p-3 mb-4 rounded ${
                feedback.type === "error"
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              <strong>{feedback.message}</strong>
            </div>
          )}

          {Object.keys(initialFormData).map((key) => (
            <div key={key} className="mb-4">
              <label
                htmlFor={key}
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                {fields[key]?.label || key}*
              </label>
              {key === "message" ? (
                <textarea
                  id={key}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg focus:ring-orange-500 focus:border-orange-500 transition-all"
                  aria-invalid={formData[key] === "" ? "true" : "false"}
                  placeholder={fields[key]?.placeholder || ""}
                />
              ) : (
                <input
                  id={key}
                  type={key === "email" ? "email" : "text"}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg focus:ring-orange-500 focus:border-orange-500 transition-all"
                  aria-invalid={formData[key] === "" ? "true" : "false"}
                  placeholder={fields[key]?.placeholder || ""}
                />
              )}
            </div>
          ))}

          {/* Verificar que fields.privacy_policy existe antes de acceder a sus propiedades */}
          <div className="flex items-center mb-4">
            <input
              id="privacy-policy"
              type="checkbox"
              checked={polityCheck}
              onChange={handleCheck}
              className="w-4 h-4 text-orange-500 border-gray-300 rounded"
            />
            <label htmlFor="privacy-policy" className="ml-2 text-sm">
              {fields.privacy_policy ? (
                <a
                  href={fields.privacy_policy.link || `/${lang}/privacy-policy`}
                  className="text-orange-500 hover:underline"
                >
                  {fields.privacy_policy.label ||
                    "He leído y acepto la política de privacidad"}
                </a>
              ) : (
                <span className="text-orange-500">
                  He leído y acepto la política de privacidad
                </span>
              )}
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-5 py-3 text-white font-semibold bg-orange-500 rounded-lg shadow-md transition-all hover:bg-orange-600 hover:translate-y-[-2px] focus:ring-4 focus:outline-none focus:ring-orange-300"
              aria-label="Enviar formulario de contacto"
            >
              {buttons.send_form || "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
