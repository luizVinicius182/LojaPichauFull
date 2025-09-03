import React from "react";
import "./Area.css";
import CardProduto from "../CardProduto/CardProduto";

const Area = (props) => {
  const corDeFundo = { backgroundColor: props.corSecundaria };
  const corSublinhado = { borderColor: props.corPrimaria };

  if (props.CardProduto == null || props.CardProduto.length === 0) {
    return null;
  }

  return (
    <section className="area" style={corDeFundo}>
      <h3 style={corSublinhado}>{props.nome}</h3>
      <div className="produtos">
        {props.CardProduto.map((prod) => (
          <CardProduto key={prod.nome} produto={prod} cor={props.corPrimaria} />
        ))}
      </div>
    </section>
  );
};

export default Area;
