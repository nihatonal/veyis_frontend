import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../../../shared/UI/Modal";
import CallForm from "../../../shared/components/CallForm";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import { useForm } from "../../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE, VALIDATOR_PHONE } from "../../../shared/util/validators";
import { useTranslation } from "react-i18next";
import "./Hero.css";

function Hero() {
    const [modal, showModal] = useState(false);
    const { isLoading, sendRequest } = useHttpClient();
    const [success, setSuccess] = useState(false);
    const [formState, inputHandler] = useForm(
        {
            name: { value: "", isValid: false },
            phone: { value: "", isValid: false },
        },
        false
    );
    const { t } = useTranslation();

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
                    message: t("hero.orderCallMessage")
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

    return (
        <section className="hero_container">
            <img
                src={"https://i.imgur.com/JeQl9s5.webp"}
                alt={t("hero.imageAlt")}
                className="hero_image"
                loading="eager"
                width="1920" height="1080"
            />
            <div className="hero_wrapper">
                <div className="hero_content">
                    <h1 className="hero_title priority">{t("hero.title")}</h1>
                    <p className="hero_subtitle">
                        {t("hero.subtitle")}
                    </p>
                    <div className="hero_buttons">
                        <motion.button
                            onClick={() => showModal(true)}
                            className="hero_button primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t("hero.getSupport")}
                        </motion.button>
                        <motion.a
                            href="/neden-bag-yatirimi"
                            className="hero_button secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t("hero.moreInfo")}
                        </motion.a>
                    </div>
                </div>
                <Modal onClose={() => showModal(false)} show={modal} onCancel={() => showModal(false)}>
                    <CallForm
                        validators_name={[VALIDATOR_REQUIRE()]}
                        validators_phone={[VALIDATOR_REQUIRE(), VALIDATOR_PHONE()]}
                        isLoading={isLoading}
                        isValid={formState.isValid}
                        inputHandler={inputHandler}
                        form_title={t("hero.callFormTitle")}
                        sendHandler={sendHandler}
                        success={success}
                    />
                </Modal>
            </div>
        </section>
    );
}

export default Hero;
