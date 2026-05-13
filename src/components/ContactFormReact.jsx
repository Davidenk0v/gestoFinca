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

  // Función para obtener mensajes según el idioma
  const getMessages = (lang) => {
    const messages = {
      es: {
        privacyRequired: "Debe aceptar la política de privacidad",
        fieldsRequired:
          "Los campos nombre, teléfono y mensaje son obligatorios",
        successMessage:
          "Mensaje enviado correctamente. Pronto nos pondremos en contacto.",
        errorMessage: "Hubo un error. Inténtelo de nuevo más tarde.",
        noSubject: "sin asunto",
      },
      en: {
        privacyRequired: "You must accept the privacy policy",
        fieldsRequired: "Name, phone and message fields are required",
        successMessage: "Message sent successfully. We will contact you soon.",
        errorMessage: "There was an error. Please try again later.",
        noSubject: "no subject",
      },
      de: {
        privacyRequired: "Sie müssen die Datenschutzrichtlinie akzeptieren",
        fieldsRequired: "Name, Telefon und Nachricht sind Pflichtfelder",
        successMessage:
          "Nachricht erfolgreich gesendet. Wir werden uns bald bei Ihnen melden.",
        errorMessage:
          "Es gab einen Fehler. Bitte versuchen Sie es später erneut.",
        noSubject: "kein Betreff",
      },
    };
    return messages[lang] || messages.es;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const messages = getMessages(lang);

    if (!polityCheck) return showMessage(messages.privacyRequired, "error");

    // Validar solo campos obligatorios (name, phone, message)
    const requiredFields = {
      name: formData.name,
      phone: formData.phone,
      message: formData.message,
    };
    if (Object.values(requiredFields).some((field) => !field.trim())) {
      return showMessage(messages.fieldsRequired, "error");
    }

    try {
      // Preparar datos para envío, agregando "sin asunto" si no hay asunto
      const dataToSend = {
        ...formData,
        subject: formData.subject.trim() || messages.noSubject,
      };

      const response = await fetch("/api/send-emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) throw new Error("Error al enviar el mensaje");

      showMessage(messages.successMessage, "success");
      setFormData(initialFormData);
      setPolityCheck(false);
    } catch {
      showMessage(messages.errorMessage, "error");
    }
  };

  // Función para determinar si un campo es obligatorio
  const isRequiredField = (key) => {
    return key === "name" || key === "phone" || key === "message";
  };

  // Función para obtener el texto "(opcional)" según el idioma
  const getOptionalText = (lang) => {
    const texts = {
      es: "(opcional)",
      en: "(optional)",
      de: "(optional)",
    };
    return texts[lang] || texts.es;
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
          className="w-full max-w-lg bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
        >
          {feedback.message && (
            <div
              className={`flex items-start gap-3 p-4 mb-5 rounded-xl text-sm font-medium ${
                feedback.type === "error"
                  ? "bg-red-50 text-red-700 border border-red-100"
                  : "bg-green-50 text-green-700 border border-green-100"
              }`}
            >
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                {feedback.type === "error" ? (
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                )}
              </svg>
              {feedback.message}
            </div>
          )}

          {Object.keys(initialFormData).map((key) => (
            <div key={key} className="mb-4">
              <label
                htmlFor={key}
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                {fields[key]?.label || key}
                {isRequiredField(key) && (
                  <span className="text-orange-500 ml-0.5">*</span>
                )}
                {!isRequiredField(key) && (
                  <span className="text-gray-400 font-normal text-xs ml-1.5">
                    {getOptionalText(lang)}
                  </span>
                )}
              </label>
              {key === "message" ? (
                <textarea
                  id={key}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blueFinca/30 focus:border-brand-blueFinca transition-all duration-200 resize-none"
                  aria-invalid={
                    isRequiredField(key) && formData[key] === ""
                      ? "true"
                      : "false"
                  }
                  placeholder={fields[key]?.placeholder || ""}
                />
              ) : (
                <input
                  id={key}
                  type={key === "email" ? "email" : "text"}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blueFinca/30 focus:border-brand-blueFinca transition-all duration-200"
                  aria-invalid={
                    isRequiredField(key) && formData[key] === ""
                      ? "true"
                      : "false"
                  }
                  placeholder={fields[key]?.placeholder || ""}
                />
              )}
            </div>
          ))}

          <div className="flex items-start gap-3 mb-5">
            <input
              id="privacy-policy"
              type="checkbox"
              checked={polityCheck}
              onChange={handleCheck}
              className="w-4 h-4 mt-0.5 accent-orange-500 border-gray-300 rounded cursor-pointer flex-shrink-0"
            />
            <label htmlFor="privacy-policy" className="text-sm text-gray-600 cursor-pointer leading-relaxed">
              {fields.privacy_policy ? (
                <a
                  href={fields.privacy_policy.link || `/${lang}/privacy-policy`}
                  className="text-brand-blueFinca hover:text-brand-blueFinca/80 underline underline-offset-2"
                >
                  {fields.privacy_policy.label ||
                    "He leído y acepto la política de privacidad"}
                </a>
              ) : (
                <span className="text-brand-blueFinca">
                  He leído y acepto la política de privacidad
                </span>
              )}
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 text-white font-semibold bg-orange-500 rounded-xl shadow-sm transition-all duration-200 hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-md focus:ring-4 focus:outline-none focus:ring-orange-300"
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
