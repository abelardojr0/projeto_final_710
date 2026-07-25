import { useState } from "react";
import {
  DivisoriaFormulario,
  FormularioCadastro,
  TitleCadastro,
} from "./style";
import axios from "axios";

export const Cadastro = () => {
  const [anime, setAnime] = useState();
  const [genero, setGenero] = useState();
  const [protagonista, setProtagonista] = useState();
  const [imagem, setImagem] = useState();

  async function cadastrarAnime(){
    try{
      const novo_anime = {
        titulo: anime,
        genero: genero,
        protagonista: protagonista,
        url_img: imagem
      }
      const {data} = await axios.post("https://proj-animes-back.onrender.com/animes", novo_anime)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
      <TitleCadastro>Cadastro de Animes</TitleCadastro>
      <FormularioCadastro onSubmit={(e)=>{
        e.preventDefault()
        cadastrarAnime()
      }}>
        <DivisoriaFormulario>
          <label htmlFor="anime">Anime</label>
          <input
            type="text"
            name="anime"
            id="anime"
            placeholder="Digite o nome do anime"
            required
            onChange={(e) => setAnime(e.target.value)}
          />
        </DivisoriaFormulario>

        <DivisoriaFormulario>
          <label htmlFor="genero">Gênero</label>
          <input
            type="text"
            name="genero"
            id="genero"
            placeholder="Digite o nome do genero"
            required
            onChange={(e) => setGenero(e.target.value)}
          />
        </DivisoriaFormulario>

        <DivisoriaFormulario>
          <label htmlFor="protagonista">Protagonista</label>
          <input
            type="text"
            name="protagonista"
            id="protagonista"
            placeholder="Digite o nome do protagonista"
            required
            onChange={(e) => setProtagonista(e.target.value)}
          />
        </DivisoriaFormulario>

        <DivisoriaFormulario>
          <label htmlFor="img">URL da Imagem</label>
          <input
            type="text"
            name="img"
            id="img"
            placeholder="Cole a URL do Poster do Anime"
            required
            onChange={(e) => setImagem(e.target.value)}
          />
        </DivisoriaFormulario>

        <button>Cadastrar</button>
      </FormularioCadastro>
    </>
  );
};
