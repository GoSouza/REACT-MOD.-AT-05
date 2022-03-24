import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <section id="hero">
                <h1>GSViaje</h1>
                <p>Venha Realizar Aquela tão sonhada <strong>Viagem.</strong></p>
                <Link className="bt bt-yellow" to="Destinos">Confira já</Link>
            </section>
            
        </>
    );
}