const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-slate-800 rounded-lg shadow-lg p-6 w-11/12 max-w-md relative"
          onClick={(e) => e.stopPropagation()} // Prevent closing on content click
        >
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 hover:bg-red-500 w-5 text-lg"
            onClick={onClose}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  