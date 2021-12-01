import React from "react";
import { Link } from "react-router-dom";

let linkCorrente = {
    color: "#027399"
};

const Navegacao = () => {
    return (
        <ul>
            <li>
                <Link activestyle={linkCorrente} to="/">Home</Link>
            </li>
            <li>
                <Link activestyle={linkCorrente} to="/frontend">Frontend</Link>
            </li>
            <li>
                <Link activestyle={linkCorrente} to="/programacao">Programacao</Link>
            </li>
            <li>
                <Link activestyle={linkCorrente} to="/design">Design</Link>
            </li>
            <li>
                <Link activestyle={linkCorrente} to="/catalogo">Catálogo</Link>
            </li>
        </ul>
    )
}
export default Navegacao;