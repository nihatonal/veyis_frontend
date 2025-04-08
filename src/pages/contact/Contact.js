import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from "../../shared/util/validators";
import Input from "../../shared/components/Input";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useTranslation } from "react-i18next";
import './Contact.css';

const Contact = () => {
    const { isLoading, sendRequest } = useHttpClient();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { t } = useTranslation();

    const [formState, inputHandler] = useForm(
        {
            name: { value: "", isValid: false },
            email: { value: "", isValid: false },
            newsletter: { value: "", isValid: false },
            message: { value: "", isValid: false }
        },
        false
    );

    useEffect(() => {
        if (formSubmitted) {
            const timer = setTimeout(() => setFormSubmitted(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [formSubmitted]);

    const sendHandler = async (e) => {
        e.preventDefault();
        try {
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/sendmail`,
                "POST",
                JSON.stringify({
                    name: formState.inputs.name.value,
                    email: formState.inputs.email.value,
                    message: formState.inputs.message.value,
                }),
                { "Content-Type": "application/json" }
            );
            setFormSubmitted(true);
        } catch (err) { }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/subscribe`,
                "POST",
                JSON.stringify({
                    email: formState.inputs.newsletter.value,
                }),
                { "Content-Type": "application/json" }
            );
        } catch (err) { }
    };

    const containerStyle = { width: "100%", height: "300px" };
    const center = { lat: 37.8716, lng: 32.4846 };
    const GoogleMapMemo = useMemo(() => (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    ), []);

    return (
        <>
            <Helmet>
                <title>{t("contact_page.meta.title")}</title>
                <meta name="description" content={t("contact_page.meta.description")} />
            </Helmet>

            <motion.div className="page_container contact_container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <motion.h1 className="section_title" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    {t("contact_page.title")}
                </motion.h1>

                <motion.p className="section_subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    {t("contact_page.subtitle")}
                </motion.p>

                <motion.div className="contact_content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                    <div className="contact_content_items">
                        <h2 className="page_title">{t("contact_page.infoTitle")}</h2>
                        <p className="mb-2"><span>{t("contact_page.phone")}:</span> <a href="tel:+905079870088" className="text-green-600">+90 507 987 00 88</a></p>
                        <p className="mb-2"><span>{t("contact_page.email")}:</span> <a href="mailto:info@bagyatirimi.com" className="text-green-600">info@bagyatirimi.com</a></p>
                        <p><span>{t("contact_page.address")}:</span> Konya Bozkır Hamzalar</p>

                        <div className="contact_social_items">
                            <a href="https://www.facebook.com/share/19phEu29m5/" target='_blank' rel="noreferrer" style={{ color: "#1877F2" }}><FaFacebook /></a>
                            <a href="https://www.instagram.com/bagbahce_yatirim/" target='_blank' rel="noreferrer" style={{ color: "#F56040" }}><FaInstagram /></a>
                            <a href="https://wa.me/905079870088" style={{ color: "#25D366" }}><FaWhatsapp /></a>
                        </div>
                    </div>

                    <div>
                        <h2 className="page_title">{t("contact_page.formTitle")}</h2>
                        <form onSubmit={sendHandler} className="contact_form">
                            <Input id="name" element="input" type="text" placeholder={t("contact_page.placeholders.name")} validators={[VALIDATOR_REQUIRE()]} onInput={inputHandler} label={t("contact_page.labels.name")} />
                            <Input id="email" element="input" type="email" placeholder={t("contact_page.placeholders.email")} validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]} onInput={inputHandler} label={t("contact_page.labels.email")} />
                            <Input id="message" element="textarea" placeholder={t("contact_page.placeholders.message")} validators={[VALIDATOR_REQUIRE()]} onInput={inputHandler} label={t("contact_page.labels.message")} />
                            <button type="submit" className="contact_form_btn" disabled={!formState.inputs.name.isValid && !formState.inputs.email.isValid && !formState.inputs.message.isValid}>
                                {isLoading ? <PropagateLoader color="white" size={4} /> : t("contact_page.buttons.send")}
                            </button>
                        </form>
                    </div>
                </motion.div>

                <motion.div className="contact_newsletter" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                    <h2 className="page_title">{t("contact_page.newsletterTitle")}</h2>
                    <p className="page_desc">{t("contact_page.newsletterDesc")}</p>
                    <form className="newsletter_form" onSubmit={handleSubmit}>
                        <Input id="newsletter" element="input" type="email" placeholder={t("contact_page.placeholders.email")} validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]} onInput={inputHandler} label={t("contact_page.labels.email")} />
                        <button type="submit" className="contact_form_btn">{t("contact_page.buttons.subscribe")}</button>
                    </form>
                </motion.div>

                <motion.div className="map_container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                    {GoogleMapMemo}
                </motion.div>
            </motion.div>
        </>
    );
};

export default Contact;
