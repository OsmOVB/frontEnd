
import { useEffect, useState } from "react";
import "./SimulateApi.css";

const infoCampoMourao = {
    dataCriacao: "10/10/1947",
    nome: "Campo Mourão",
    populacao: 100000,
    estado: "PR",
    universidades: [
        "UTFPR",
        "UNESPAR",
        "UNICAMPO",            
    ]
};

export const SimulateApi = () => {
    const [info, setInfo] = useState();

    console.log(info);
    useEffect(() => {
        setTimeout(() => {
            setInfo(infoCampoMourao);
        }, 2000);
    }, []);

    return (
        <div className="container">
            {info ? (
                <div>
                    <h1>{info.nome}</h1>
                    <p>Data de Criação: {info.dataCriacao}</p>
                    <p>População: {info.populacao}</p>
                    <p>Estado: {info.estado}</p>
                    <p>Universidades: {info.universidades.join(", ")}</p>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}