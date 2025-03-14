"use client";

import { useState } from "react";
import { HeaderContainer, HeaderContent, Logo, LinkStyled, MenuLinks, HamburgerMenu, NavItems } from "./Header.styles";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/" passHref>
          <Logo src="/logo_lacrei1linha.svg" alt="Lacrei Saúde" />
        </Link>


        <HamburgerMenu onClick={toggleMenu}>
          <span className="material-icons">menu</span>
        </HamburgerMenu>

       
        <NavItems open={isMenuOpen}>
          <LinkStyled href="https://lacreisaude.com.br/quem-somos/">Quem Somos</LinkStyled>
          <LinkStyled href="/ajuda">Ajuda</LinkStyled>
        </NavItems>
      </HeaderContent>

      
      <MenuLinks open={isMenuOpen}>
        <LinkStyled href="https://lacreisaude.com.br/quem-somos/">Quem Somos</LinkStyled>
        <LinkStyled href="/ajuda">Ajuda</LinkStyled>
      </MenuLinks>
    </HeaderContainer>
  );
}
