import React from "react";
import "./CardProduto.css";

const CardProduto = ({ produto, cor }) => {
  return (
    <div className="card-produto">
      <div className="cabecalho" style={{ backgroundColor: cor }}>
        <img
          src={`/imagens/marcas/${produto.marca.toLowerCase()}.png`}
          alt={produto.marca}
        />
      </div>
      <div className="rodape">
        <h4>{produto.nome}</h4>
        <h5>{produto.preco}</h5>
        <p>{produto.estado}</p>
      </div>
    </div>
  );
};

export default CardProduto;
