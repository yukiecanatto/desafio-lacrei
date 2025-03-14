"use client";

import { FooterContainer, SocialIconsContainer, SocialIcon } from "./Footer.styles";

export default function Footer() {
  return (
    <FooterContainer>

      <p>Nos siga nas nossas redes</p>
      <SocialIconsContainer>
        <SocialIcon href="https://www.facebook.com/lacrei.saude/" target="_blank" aria-label="Facebook">
          <span className="material-icons">facebook</span>
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/lacrei.saude/" target="_blank" aria-label="Instagram">
          <span className="material-icons">camera</span>
        </SocialIcon>
        <SocialIcon href="https://x.com" target="_blank" aria-label="X">
          <span className="material-icons">link</span>
        </SocialIcon>
      </SocialIconsContainer>

      <p>Lacrei Saúde &copy; 2025</p>
    </FooterContainer>
  );
}