import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topo from "./Components/Topo";
import Home from "./Components/Home";
import Catalogo from "./Components/Catalogo";
import NotFound from "./Components/NotFound";
import Rodape from "./Components/Rodape";
import Programacao from "./Components/Programacao";
import Design from "./Components/Design";
import Livro from "./Components/Livro"
import Frontend from "./Components/Frontend";
import axios from "axios";

import "./index.css";

class App extends Component {
  state = {
    livros: []
  };

  async componentDidMount() {
    try {
      const { data: livros } = await axios.get("/api/todosOsLivros.json");
      this.setState({ livros });
    } catch (error) {
      console.log(error);
      document
        .querySelectorAll(".principal")[0]
        .insertAdjacentHTML(
          "beforeend",
          "<p class='erro'>Mensagem de erro</p>"
        );
    }
  }

  render() {
    return (
      <Router>
        <>
          <Topo />
          <Routes>
            <Route path="/" element={<Home livros={this.state.livros} />}></Route>
            <Route path="/frontend" element={<Frontend livros={this.state.livros} />}></Route>
            <Route path="/programacao" element={<Programacao livros={this.state.livros} />}></Route>
            <Route path="/design" element={<Design livros={this.state.livros} />}></Route>
            <Route path="/catalogo" element={<Catalogo livros={this.state.livros} />}></Route>
            <Route path="/livro/:livroSlug" element={props => {
              const livro = this.state.livros.find(
              livro => livro.slug === props.match.params.livroSlug);
                if (livro) return <Livro livro={livro} />;
                else return <NotFound />;
            }}
            />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Rodape />
        </>
      </Router>
    )
  }
}

export default App;
