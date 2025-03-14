import styled from "styled-components";
import Link from "next/link";


export const HeaderContainer = styled.header`
  background: #b2dfd0;
  color: white;
  padding: 16px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;


export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;


export const Logo = styled.img`
  height: 40px;
  width: auto;
  padding-left: 80px;
`;


export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 24px;
  font-weight: normal;
  padding-right: 40px;
  &:hover {
    text-decoration: underline;
  }
`;


export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;

  @media (max-width: 767px) {
    display: none; /* Esconde os links normais em telas pequenas */
  }
`;


export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  .hamburger-icon {
    width: 30px;
    height: 3px;
    background-color: white;
    border-radius: 5px;
  }

  @media (max-width: 767px) {
    display: flex; /* Exibe o hambúrguer em telas pequenas */
  }
`;


interface MenuLinksProps {
  open: boolean;
}

export const MenuLinks = styled.div<MenuLinksProps>`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: #b2dfd0;
  position: absolute;
  top: 60px;
  right: 20px;
  width: 150px;
  padding: 10px;
  border-radius: 10px;

  @media (max-width: 767px) {
    display: ${(props) => (props.open ? "flex" : "none")}; /* Exibe ou esconde o menu */
  }
`;


export const NavItems = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "none" : "flex")}; /* Esconde os links normais quando o menu está aberto */
  gap: 20px;
  margin-left: auto;

  @media (max-width: 767px) {
    display: none; /* Esconde os links em telas pequenas */
  }
`;
