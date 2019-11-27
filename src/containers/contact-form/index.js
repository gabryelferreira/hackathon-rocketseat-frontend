import React, { useState, useEffect } from 'react';
import './index.css';
import api from '../../services/api';
import NumberFormat from 'react-number-format';
import { toast } from 'react-toastify';

export default function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [identification, setIdentification] = useState("");
    const [sendedForm, setSendedForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [phoneMask, setPhoneMask] = useState("(##) ####-#####");

    function isFormValid() {
        if (!identification || identification.trim().length === 0
            || !email || email.trim().length === 0) {
            return false;
        }
        return true;
    }

    useEffect(() => {
        setPhoneMaskValue();
    }, [phone]);
    
    function setPhoneMaskValue() {
        if (phone.length === 11) {
            setPhoneMask("(##) #####-####");
        } else {
            setPhoneMask("(##) ####-#####");
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!isFormValid()) return false;
        setLoading(true);
        try {
            const result = await api.post("contact", { name, email, phone, identification });
            console.log("result", result);
            setSendedForm(true);
        } catch (e) {
            toast.error("Ocorreu um erro! Tente novamente.");
        }
        setLoading(false);

    }

    function renderContent() {
        if (sendedForm) return (
            <h3>Obrigado por se interessar pelo nosso produto.
                        A equipe Hack-a-class retornará o mais breve possível.</h3>
        );

        return (
            <>
                <h3>Conte com nossos professores e estrutura para
                            inserir a tecnologia em sua escola.
                                </h3>

                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <i className="fas fa-school"></i>
                        <input type="text"
                            value={identification}
                            onChange={(e) => setIdentification(e.target.value)}
                            placeholder="Nome de sua escola *" />
                    </div>
                    <div className="input-container">
                        <i className="fas fa-envelope"></i>
                        <input type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail *" />
                    </div>

                    <div className="input-container">
                        <i className="fas fa-user"></i>
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nome do responsável" />
                    </div>
                    <div className="input-container">
                        <i className="fas fa-phone"></i>
                        <NumberFormat value={phone}
                            placeholder="Telefone"
                            format={phoneMask}
                            onValueChange={(e) => setPhone(e.value)} />
                    </div>

                    <div className="buttons">
                        <button type="submit"
                            disabled={!isFormValid() || loading}
                            className="default-button">
                            {loading ? 'ENVIANDO...' : 'ENTRE EM CONTATO'}
                        </button>
                    </div>
                </form>
            </>
        );
    }

    return (
        <div id="contact-form-container">
            <div className="padding page-content">
                <div className="content">

                    {renderContent()}

                </div>
            </div>
        </div>
    );

}