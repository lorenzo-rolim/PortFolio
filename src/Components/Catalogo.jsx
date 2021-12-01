import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Catalogo = ({ livros }) => {
    return (
        <main className="principal">
            <h2>Catálogo de Livros</h2>
            <ol>
                {livros
                    .filter(livro => livro.categoria === "frontend")
                    .map(livro => (
                        <li key={livro.id}>
                            <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
                        </li>
                    ))}
            </ol>
            <h2>Categoria Programação</h2>
            <ol>
                {livros
                    .filter(livro => livro.categoria === "programacao")
                    .map(livro => (
                        <li key={livro.id}>
                            <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
                        </li>
                    ))}
            </ol>
        </main>
    )
}
export default Catalogo;