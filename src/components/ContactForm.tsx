const ContactForm = () => {
  return (
    <form className="max-w-sm mx-auto">
      <div>
        <label
          htmlFor="small-input"
          className="block m-2 text-sm font-medium text-gray-900 :text-white"
        >
          Nombre*
        </label>
        <input
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
          id="small-input"
          className="mb-2 h-20 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-green-700 focus:border-green-700"
        />
      </div>

      <div className="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
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
        <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-blue-300">
          Contactar
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
