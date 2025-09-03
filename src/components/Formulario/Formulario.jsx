import React, { useState } from "react";
import "./Formulario.css";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

const Formulario = ({ secoes, onProdutoInserido }) => {
  const [seccao, setSeccao] = useState("");
  const [marca, setMarca] = useState("");
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [estado, setEstado] = useState("");

  const marcas = ["HP", "Dell", "Positivo", "Asus", "XingLing"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const produto = { seccao, marca, nome, preco, estado };
    onProdutoInserido(produto);
    setSeccao("");
    setMarca("");
    setNome("");
    setPreco("");
    setEstado("");
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Cadastrar Produto</h2>
      <ListaSuspensa
        label="Seção"
        itens={secoes}
        valor={seccao}
        onChange={setSeccao}
      />
      <ListaSuspensa
        label="Marca"
        itens={marcas}
        valor={marca}
        onChange={setMarca}
      />
      <input
        type="text"
        placeholder="Nome do Produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />
      <div className="estado">
        <label>
          <input
            type="radio"
            name="estado"
            value="Novo"
            checked={estado === "Novo"}
            onChange={(e) => setEstado(e.target.value)}
          />{" "}
          Novo
        </label>
        <label>
          <input
            type="radio"
            name="estado"
            value="Usado"
            checked={estado === "Usado"}
            onChange={(e) => setEstado(e.target.value)}
          />{" "}
          Usado
        </label>
      </div>
      <Botao texto="Inserir Produto" />
    </form>
  );
};

export default Formulario;
