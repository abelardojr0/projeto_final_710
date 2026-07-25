import styled from "styled-components";
import { tema } from "../../utils/tema";

export const TitleCadastro = styled.h1`
  font-family: "Bangers", system-ui;
  font-size: 42px;
  letter-spacing: 6px;
  text-align: center;
  margin: 20px;
`;

export const FormularioCadastro = styled.form`
  background-color: ${tema.cores.surface};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    background-color: ${tema.cores.primary};
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 10px;
    border: none;
    margin-top: 20px;
    color: ${tema.cores.text};
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      transform: scale(1.06);
    }
  }
`;

export const DivisoriaFormulario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  label {
    font-size: 18px;
    font-style: italic;
  }
  input {
    background-color: transparent;
    outline: none;
    border: 1px solid ${tema.cores.border};
    font-size: 18px;
    padding: 5px;
    color: ${tema.cores.text};
  }
`;
