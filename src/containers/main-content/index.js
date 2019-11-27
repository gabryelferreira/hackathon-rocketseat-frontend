import React from 'react';
import './index.css';

const MainContent = ({ onKnowMoreClick, onContactClick }) => (
    <div id="main-content-container">
        <div className="padding page-content">
            <div className="content">
                <h2>Uma estrutura completa de treinamento em desenvolvimento em tecnologia</h2>
                <p>O Hack-a-class oferece ensino de programação para alunos do ensino médio.
                    Proporcione aos seus alunos uma imersão tecnológica independente da estrutura
                    de sua escola.
                            </p>
                <div className="buttons">
                    <button type="button" className="default-button"
                    onClick={onContactClick}>
                        CONTRATE NOSSA EQUIPE
                    </button>
                    <button type="button" className="default-button no-color"
                    onClick={onKnowMoreClick}>
                        SAIBA MAIS
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default MainContent;