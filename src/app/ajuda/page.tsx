"use client";

import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { StyledButton } from "../../components/Buttons/Buttons.styles";


export default function Ajuda() {
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
      <h1>Opa, parece que você precisa de ajuda!</h1>
      <div>
      <p>9 em cada 10 vezes, o problema é resolvido reiniciando o modem.
        Tenta, mas se não der certo, você pode tentar nossas três opções aqui</p>
       <StyledButton onClick={() => handleOpenModal("Mas também uma pizza ajuda muito")}>
                Aperta aqui
      </StyledButton>
      <StyledButton onClick={() => handleOpenModal("Um chocolate ou um guaraná, também ajudam")}>
                Me clica
      </StyledButton>
      <StyledButton onClick={() => handleOpenModal("Melhor, uma pizza, um chocolate e um guaraná, pronto, resolvido!")}>
                Eu primeiro!
      </StyledButton>
      </div>
      <Modal isOpen={isModalOpen} message={message} onClose={handleCloseModal} />
    </div>
  );
}