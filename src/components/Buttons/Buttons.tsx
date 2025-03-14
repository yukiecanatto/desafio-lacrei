"use client";

import { ButtonsContainer, StyledButton } from "./Buttons.styles";

export default function Buttons({ onOpenModal }: { onOpenModal: (index: number) => void }) {
  return (
    <ButtonsContainer>
      <StyledButton onClick={() => onOpenModal(0)}>Mensagem 1</StyledButton>
      <StyledButton onClick={() => onOpenModal(1)}>Mensagem 2</StyledButton>
      <StyledButton onClick={() => onOpenModal(2)}>Mensagem 3</StyledButton>
    </ButtonsContainer>
  );
}
