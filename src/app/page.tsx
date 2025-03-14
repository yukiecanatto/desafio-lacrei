"use client";

import { useState } from "react";
import { Modal } from "../components/Modal/Modal";
import { StyledButton } from "../components/Buttons/Buttons.styles";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleOpenModal = (message: string) => {
    setMessage(message);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Dia ruim hoje né</h1>
      <div>
        <StyledButton onClick={() => handleOpenModal("Hoje é um dia ruim, e está tudo bem")}>
          Aperta aqui
        </StyledButton>
        <StyledButton onClick={() => handleOpenModal("Dias ruins acontecem, não se cobre por isso")}>
          Dá um click
        </StyledButton>
        <StyledButton onClick={() => handleOpenModal("O que você sente é válido")}>
          Me aperta
        </StyledButton>
      </div>

      <Modal isOpen={isModalOpen} message={message} onClose={handleCloseModal} />
    </div>
  );
}
