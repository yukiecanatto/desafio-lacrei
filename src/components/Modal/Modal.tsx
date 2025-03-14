"use client";

import { ModalOverlay, ModalContent } from "./Modal.styles";

interface ModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <p>{message}</p>
        <button onClick={onClose}>Fechar</button>
      </ModalContent>
    </ModalOverlay>
  );
};
