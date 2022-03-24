import React from "react";

export default function Contato() {
    return (
        <>
            <section className="corpo-destino">
                <section id="hero">
                    <h1>Contato</h1>
                </section>
                <br />
                <br />
                <form className="container-fluid corpo-destino">
                    <div className="form-row offset-md-4">
                        <div className="form-group col-md-4 col-md-3 col-md-1">
                            <label htmlFor="Nome">Nome</label>
                            <input type="text" className="form-control" id="Nome" placeholder="Nome" />
                        </div>
                    </div>
                    <div className="form-row offset-md-4">
                        <div className="form-group col-md-4 col-md-3 col-md-1">
                            <label htmlFor="Sobrenome">Sobrenome</label>
                            <input type="text" className="form-control" id="Sobrenome" placeholder="Sobrenome" />
                        </div>
                    </div>
                    <div className="form-row offset-md-4">
                        <div className="form-group col-md-4 col-md-3 col-md-1">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email*" />
                        </div>
                    </div>
                    <div className="form-group col-md-4 col-md-1">
                        <label htmlFor="exampleFormControlTextarea1">Mensagem*</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark col-md-4 col-md-1">Enviar</button>
                </form>
                <br />
                <br />
            </section>
        </>
    );
}