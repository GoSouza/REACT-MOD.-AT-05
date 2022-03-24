import React from "react";

export default function Promocoes() {
    return (
        <>
            <section id="hero">
                <h1>Promoções</h1>
            </section>
            <section id="product1" className="section-p1">
                <div className="pro-container">
                    <div className="pro">
                        <img src="./img/Belem.jpg" alt="" />
                        <div className="des">
                            <span>Brasil</span>
                            <h5>Belém</h5>
                            <h4 className="preco">R$580,00</h4>
                            <p>Em até 12x com juros no cartão de crédito</p>
                        </div>
                        <i className='fal fa-shopping-cart cart'></i>
                    </div>
                    <div className="pro">
                        <img src="./img/Belo horizonte.jpg" alt="" />
                        <div className="des">
                            <span>Brasil</span>
                            <h5>Belo Horizonte</h5>
                            <h4 className="preco">R$589,00</h4>
                            <p>Em até 12x com juros no cartão de crédito</p>
                        </div>
                        <i className='fal fa-shopping-cart cart'></i>
                    </div>
                    <div className="pro">
                        <img src="./img/Brasilia.jpg" alt="" />
                        <div className="des">
                            <span>Brasil</span>
                            <h5>Brasília</h5>
                            <h4 className="preco">R$770,00</h4>
                            <p>Em até 12x com juros no cartão de crédito</p>
                        </div>
                        <i className='fal fa-shopping-cart cart'></i>
                    </div>
                    <div className="pro">
                        <img src="./img/Natal.jpg" alt="" />
                        <div className="des">
                            <span>Brasil</span>
                            <h5>Natal</h5>
                            <h4 className="preco">R$650,00</h4>
                            <p>Em até 12x com juros no cartão de crédito</p>
                        </div>
                        <i className='fal fa-shopping-cart cart'></i>
                    </div>
                    <div className="pro">
                        <img src="./img/Noronha.jpeg" alt="" />
                        <div className="des">
                            <span>Brasil</span>
                            <h5>Fernando de Noronha</h5>
                            <h4 className="preco">R$720,00</h4>
                            <p>Em até 12x com juros no cartão de crédito</p>
                        </div>
                        <i className='fal fa-shopping-cart cart'></i>
                    </div>
                    <div className="pro">
                        <img src="./img/Salvador.jpeg" alt="" />
                        <div className="des">
                            <span>Brasil</span>
                            <h5>Salvador</h5>
                            <h4 className="preco">R$696,00</h4>
                            <p>Em até 12x com juros no cartão de crédito</p>
                        </div>
                        <i className='fal fa-shopping-cart cart'></i>
                    </div>
                </div>
            </section>
        </>
    );
}