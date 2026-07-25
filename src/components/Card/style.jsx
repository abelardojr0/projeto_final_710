import styled from "styled-components";
import { tema } from "../../utils/tema";

export const CardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  background-color: ${tema.cores.surface};
  padding: 10px;
  border-radius: 10px;
  h2 {
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 4px;
  }
  img {
    max-width: 300px;
    border-radius: 10px;
  }
  p {
    font-size: 16px;
  }
`;
