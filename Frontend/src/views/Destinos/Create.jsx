import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PacotesService from "../../services/PacotesService";


export default function Create() {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [preco, setPreco] = useState("");
  const [dataIda, setdataIda] = useState("");
  const [dataVolta, setdataVolta] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarPacotes = (e) => {
    e.preventDefault();

    const pacotes = { origem, destino, preco, dataIda, dataVolta };

    if (id) {
      PacotesService.updatePacotes(id, pacotes).then((response) => {
        navigate("/Pacotes");
      });
    } else {
      PacotesService.createPacotes(pacotes).then((response) => {
        navigate("/Pacotes");
      });
    }
  };

  useEffect(() => {
      function getPacotesById() {
        if (id) {
            PacotesService.getPacotesById(id)
            .then((response) => {
                setOrigem(response.data.origem);
                setDestino(response.data.destino);
                setPreco(response.data.preco);
                setdataIda(response.data.dataIda);
                setdataVolta(response.data.dataVolta);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getPacotesById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Origem" className="form-label">
              Origem
            </label>
            <input
              type="text"
              id="Origem"
              className="form-control"
              placeholder="Origem"
              value={origem}
              onChange={(e) => setOrigem(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Destino" className="form-label">
              Destino
            </label>
            <input
              type="text"
              id="Destino"
              className="form-control"
              placeholder="Destino"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Preco" className="form-label">
              Preço
            </label>
            <input
              type="numeric"
              id="Preco"
              className="form-control"
              placeholder="Preço"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dataIda" className="form-label">
              Data (Ida)
            </label>
            <input
              type="text"
              id="dataIda"
              className="form-control"
              placeholder="Data Ida"
              value={dataIda}
              onChange={(e) => setdataIda(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dataVolta" className="form-label">
              Data (Volta)
            </label>
            <input
              type="text"
              id="dataVolta"
              className="form-control"
              placeholder="Data Volta"
              value={dataVolta}
              onChange={(e) => setdataVolta(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarPacotes(e)}>
            Enviar
          </button>
          <Link
            to="/Pacotes"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
