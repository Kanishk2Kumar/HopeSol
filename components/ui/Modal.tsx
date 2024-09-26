// Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, description, onClose }) => {
  if (!isOpen) return null; // Do not render modal if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2">{description}</p>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
