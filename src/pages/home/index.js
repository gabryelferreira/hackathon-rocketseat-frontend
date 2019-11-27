import React from 'react';
import './index.css';
import Cards from '../../containers/cards';
import ContactForm from '../../containers/contact-form';
import MainContent from '../../containers/main-content';
import Header from '../../components/header';

export default function Home() {

    function onMainContentClick(anchor) {
        var element = document.getElementById(anchor);
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }

    return (
        <>
            <Header />
            <div id="home-page">
                <div className="page-section">
                    <MainContent onKnowMoreClick={() => onMainContentClick("cards-container")}
                        onContactClick={() => onMainContentClick("contact-form-container")} />
                </div>

                <div className="page-section">
                    <Cards />
                </div>

                <div className="page-section">
                    <ContactForm />
                </div>

            </div>
        </>
    );

}