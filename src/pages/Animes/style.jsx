import styled from "styled-components";

export const Titulo = styled.h1`
  font-family: "Bangers", system-ui;
  font-size: 36px;
  margin: 20px;
`;

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 20px;
  max-width: 90vw;
`;
