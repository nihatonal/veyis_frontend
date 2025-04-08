import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import TopHeader from './TopHeader';
import MainNavigation from './MainNavigation';
import Modal from '../UI/Modal';
import CallForm from '../components/CallForm';
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE, VALIDATOR_PHONE } from "../../shared/util/validators";

import './Header.css';


function Header() {
    const { pathname } = useLocation();
    const [success, setSuccess] = useState(false);
    const [modal, showModal] = useState(false);
    const { isLoading, sendRequest } = useHttpClient();
    const [formState, inputHandler] = useForm(
        {
            name: { value: "", isValid: false },
            phone: { value: "", isValid: false },
        },
        false
    );

    const sendHandler = async (e) => {
        e.preventDefault();
        try {
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/sendmail`,
                "POST",
                JSON.stringify({
                    name: formState.inputs.name.value,
                    email: '',
                    phone: formState.inputs.phone.value,
                    message: `${formState.inputs.name.value} adlı müşteri aramanızı bekliyor.`
                }),
                { "Content-Type": "application/json" }
            );
            setSuccess(true)
            setTimeout(() => {
                showModal(false)
                setSuccess(false)
            }, 3000);
        } catch (err) { }
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.pageYOffset > 90);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`header_fixed ${scrolled ? 'scrolled' : ''}`}
            style={pathname !== "/" && !scrolled ? { backgroundColor: "var(--color-gray-900)" } : {}}
        >
            <TopHeader onClick={() => showModal(true)} />
            <MainNavigation />

            <Modal onClose={() => showModal(false)} show={modal} onCancel={() => showModal(false)}>
                <CallForm
                    validators_name={[VALIDATOR_REQUIRE()]}
                    validators_phone={[VALIDATOR_REQUIRE(), VALIDATOR_PHONE()]}
                    isLoading={isLoading}
                    isValid={formState.isValid}
                    inputHandler={inputHandler}
                    form_title="Çağrı bırakın! Sizi Arayalım."
                    sendHandler={sendHandler}
                    success={success}
                />
            </Modal>
        </div >
    );
}

export default Header;
