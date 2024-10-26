import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (returnTime: string) => void; // Function to handle confirm action
  bikeName: string; // Name of the bike being returned
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm, bikeName }) => {
  const [returnTime, setReturnTime] = useState("");

  if (!isOpen) return null; // Don't render anything if modal is closed

  const handleConfirm = () => {
    onConfirm(returnTime);
    onClose(); // Close modal after confirmation
    setReturnTime(""); // Reset return time
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded shadow-lg w-11/12 md:w-1/3 lg:w-1/4 p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <h3 className="text-xl font-semibold mb-4">Confirm Return for {bikeName}</h3>
        <p>Select the return time:</p>
        <input
          type="datetime-local"
          value={returnTime}
          onChange={(e) => setReturnTime(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full mb-4"
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 text-gray-600 hover:text-gray-800">
            Cancel
          </button>
          <button onClick={handleConfirm} className="bg-blue-500 text-white rounded px-4 py-2">
            Confirm Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
