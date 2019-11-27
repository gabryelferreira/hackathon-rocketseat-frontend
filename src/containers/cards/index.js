import React from 'react';
import './index.css';
import CardImage1 from '../../assets/imgs/img_card_1.svg';
import CardImage2 from '../../assets/imgs/img_card_2.svg';
import CardImage3 from '../../assets/imgs/img_card_3.svg';

const Cards = () => (

    <div id="cards-container">
        <div className="padding page-content">
            <h3 className="why-label">Porque contratar o Hack-a-class?</h3>
            <div className="cards-container">

                <div className="card">
                    <h2>Estrutura</h2>
                    <h3>Independente</h3>
                    <img src={CardImage1} alt="Estrutura" />
                    <div className="text-info">
                        <p>Com a Hack-a-class, sua escola só precisa fornecer o espaço físico.
                            Nos responsabilizamos pelos equipamentos, didática e orientação
                            dos alunos.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <h2>Instrutores</h2>
                    <h3>Qualificados</h3>
                    <img src={CardImage2} alt="Instrutores" />
                    <div className="text-info">
                        <p>Nossos instrutores são qualificados
                            e associados às marcas top notch de
                            tecnologia e programação do mercado.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <h2>Oportunidades</h2>
                    <h3>Para os melhores alunos</h3>
                    <img src={CardImage3} alt="Oportunidades" />
                    <div className="text-info">
                        <p>Alunos que se destacarem nos cursos
                            são direcionados para oportunidades
                            reais de trabalho, junto às marcas parceiras.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>

);

export default Cards;