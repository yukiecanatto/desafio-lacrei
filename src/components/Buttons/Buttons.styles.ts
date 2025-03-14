import styled from "styled-components";


export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;  // Adiciona espaçamento entre os botões
`;


export const StyledButton = styled.button`
  background-color: #018762;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 10px;
  
  &:hover {
    background-color: #016f53;
  }
`;
