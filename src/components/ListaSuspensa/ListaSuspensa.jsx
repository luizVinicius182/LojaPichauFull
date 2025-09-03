import React from "react";
import './ListaSuspensa.css';

const ListaSuspensa = ({ label, itens, valor, onChange }) => {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select value={valor} onChange={e => onChange(e.target.value)}>
                <option value="">Selecione...</option>
                {itens.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

export default ListaSuspensa;
