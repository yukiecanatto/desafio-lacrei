import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #b2dfd0;
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const SocialIconsContainer = styled.div`
  margin-top: 10px;
`;

export const SocialIcon = styled.a`
  color: white;
  font-size: 24px;
  margin: 0 15px;
  transition: color 0.3s;

  .material-icons {
    font-size: 30px;
  }

  &:hover {
    color: #018762; /* cor para o hover */
  }
`;
