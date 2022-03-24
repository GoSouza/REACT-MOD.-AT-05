
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PacotesService from "../../services/PacotesService";

export default function Destinos() {

    const [pacotes, setPacotes] = useState([]);

    const getAllPacotes = () => {
      PacotesService.getAllPacotes()
        .then((response) => {
          setPacotes(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
      getAllPacotes();
    }, []);
  
    const deletePacotes = (pacotesId) => {
      PacotesService.deletePacotes(pacotesId)
        .then((response) => {
          getAllPacotes();
        })
        .catch((error) => {
          console.log(error);
          const { data } = error.response;
          if (data.status === 500) {
            alert("Erro na API");
          }
        });
    };

    return (

        <>
            <section className="corpo-destino">
                <section id="hero">
                    <h1>Destinos</h1>
                </section>
                <br />
                <br />
                <h4 className="text-center">
                    <Link to="/Pacotes-Create">Criar Pacotes</Link>
                </h4>
                <br />
                <div className="table-responsive container-fluid">
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Origem</th>
                                <th>Destino</th>
                                <th>Preço</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {pacotes.map((pacotes) => (
                                <tr key={pacotes.idpacotes}>
                                    <td>{pacotes.origem}</td>
                                    <td>{pacotes.destino}</td>
                                    <td>{pacotes.preco}</td>
                                  
                                    <td className="d-flex">
                                        <Link
                                            to={`/Pacotes-Update/${pacotes.idpacotes}`}
                                            className="btn btn-info"
                                        >
                                            Editar
                                        </Link>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deletePacotes(pacotes.idpacotes)}
                                            style={{ marginLeft: "10px" }}
                                        >
                                            Deletar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <br />
                <br />
            </section>
        </>
    );
}