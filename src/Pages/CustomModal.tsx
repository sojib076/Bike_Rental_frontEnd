import React, { useState } from "react";
import { toast } from "sonner";

type CustomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (startTime: string) => void;
  isLoading: boolean;
};

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading,
}) => {
  const [startTime, setStartTime] = useState("");

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (startTime) {
      onConfirm(startTime);
    } else {
      toast.error("Please select a start time");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full dark:bg-slate-800">
        <h2 className="text-lg font-semibold mb-4">Book Now</h2>
        <div className="mb-4">
          <label
            htmlFor="startTime"
            className="block text-sm font-medium text-gray-700
            
            dark:text-gray-300
            "
          >
            Start Time
          </label>
          <input
            type="datetime-local"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full dark:bg-gray-800"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            {
              isLoading ? 'Processing...' : 'Pay Tk 100 to Book'
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
