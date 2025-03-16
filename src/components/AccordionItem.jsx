import image from "../assets/icons/bags.svg";
export const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0 w-full">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full p-4 text-left focus:outline-none hover:bg-gray-50 transition-colors"
      >
        <span>{title}</span>
        <span className="text-gray-500 text-lg">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <>
          <div className="p-4 bg-gray-50 text-gray-500 font-normal">
            {content}
          </div>
        </>
      )}
    </div>
  );
};
