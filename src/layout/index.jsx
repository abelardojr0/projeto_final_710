import { Link, Outlet } from "react-router-dom";
import { FooterStyled, HeaderStyled, MainStyled, MenuStyled } from "./style";

export const Layout = () => {
  return (
    <>
      <HeaderStyled>
        <img
          src="https://www.pngall.com/wp-content/uploads/13/Anime-Logo-PNG-HD-Image.png"
          alt="Logo do Projeto"
        />
        <nav>
          <MenuStyled>
            <li>
              <Link to={"/"}>Início</Link>
            </li>
            <li>
              <Link to={"/animes"}>Animes</Link>
            </li>
            <li>
              <Link to={"/cadastro-animes"}>Cadastro</Link>
            </li>
          </MenuStyled>
        </nav>
      </HeaderStyled>

      <MainStyled>
        <Outlet />
      </MainStyled>

      <FooterStyled>
        <h2>Projeto de Animes</h2>
        <p>Todos os Direitos Reservados</p>
        <p>Desenvolvido por: Abel Jr - 2026</p>
      </FooterStyled>
    </>
  );
};
