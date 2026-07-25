import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Container, Titulo } from "./style";

export const Animes = () => {
  const [animes, setAnimes] = useState();
  async function buscarAnimes() {
    try {
      const { data } = await axios.get(
        "https://proj-animes-back.onrender.com/animes",
      );
      setAnimes(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    buscarAnimes();
  }, []);
  return (
    <>
      <Titulo>Lista de Animes</Titulo>
      <Container>{animes && animes.map((e) => <Card anime={e} />)}</Container>
    </>
  );
};
