
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;

  button {
    background-color: #018762;
    color: white;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    border-radius: 24px;


    &:hover {
      background-color: #016f56;
    }
  }
`;
