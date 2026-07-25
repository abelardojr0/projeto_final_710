import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Inicio } from "./pages/Inicio";
import { Animes } from "./pages/Animes";
import { Cadastro } from "./pages/Cadastro";
import { Detalhes } from "./pages/Detalhes";
import { Page404 } from "./pages/Page404";
import { GlobalStyles } from "./utils/globalStyles";

function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyles/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Inicio/>}/>
            <Route path="animes" element={<Animes/>}/>
            <Route path="cadastro-animes" element={<Cadastro/>}/>
            <Route path="detalhes-animes" element={<Detalhes/>}/>
            <Route path="*" element={<Page404/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
