import styled from "styled-components";
import { tema } from "../utils/tema";

export const HeaderStyled = styled.header`
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${tema.cores.primary};
  padding: 0px 30px;
  img {
    max-width: 200px;
  }
`;

export const MenuStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  a {
    font-size: 32px;
    color: ${tema.cores.text};
    font-family: "Bangers", system-ui;
  }
`;

export const MainStyled = styled.main`
  min-height: 70vh;
  height: 100%;
`;

export const FooterStyled = styled.footer`
  height: 10vh;
  background-color: ${tema.cores.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  h2 {
    font-size: 18px;
    font-weight: bold;
    font-family: "Bangers", system-ui;
  }
  p {
    font-size: 16px;
    font-style: italic;
  }
`;
