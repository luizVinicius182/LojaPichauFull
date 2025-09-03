import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario/Formulario";
import CardProduto from "./components/CardProduto/CardProduto";

function App() {
  const [produtos, setProdutos] = useState([]);

  const secoes = [
    { nome: "Computadores", corPrimaria: "#82cffa", corSecundaria: "#e8f8ff" },
    { nome: "Acessórios", corPrimaria: "#a6d157", corSecundaria: "#f0f8e2" },
    { nome: "Impressoras", corPrimaria: "#e06b69", corSecundaria: "#fde7e8" },
    { nome: "Games", corPrimaria: "#57c278", corSecundaria: "#d9f7e9" },
    { nome: "Gadgets", corPrimaria: "#db6ebf", corSecundaria: "#fae9f5" },
  ];

  const adicionarProduto = (produto) => {
    setProdutos([...produtos, produto]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        secoes={secoes.map((secao) => secao.nome)}
        onProdutoInserido={adicionarProduto}
      />

      {secoes.map((secao) => {
        const produtosDaSecao = produtos.filter((p) => p.seccao === secao.nome);

        if (produtosDaSecao.length === 0) return null;

        return (
          <section
            key={secao.nome}
            className="area"
            style={{ backgroundColor: secao.corSecundaria }}
          >
            <h3 style={{ borderColor: secao.corPrimaria }}>{secao.nome}</h3>
            <div className="produtos">
              {produtosDaSecao.map((produto, index) => (
                <CardProduto
                  key={index}
                  produto={produto}
                  cor={secao.corPrimaria}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default App;
