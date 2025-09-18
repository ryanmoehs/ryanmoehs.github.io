import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
    >
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black dark:hover:text-white cursor-pointer text-2xl z-10"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
