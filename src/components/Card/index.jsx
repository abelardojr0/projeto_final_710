import axios from "axios";
import { CardStyled } from "./style";

export const Card = ({ anime }) => {
  async function deletarAnime() {
    try {
      const { data } = await axios.delete(
        `https://proj-animes-back.onrender.com/animes/${anime.id}`,
      );
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <CardStyled>
      <h2>{anime.titulo}</h2>
      <img src={anime.url_img} />
      <p>Protagonista: {anime.protagonista}</p>
      <p>Gênero: {anime.genero}</p>
      <button onClick={deletarAnime}>Excluir</button>
    </CardStyled>
  );
};
