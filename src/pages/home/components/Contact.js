import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import { useForm } from "../../../shared/hooks/form-hook";
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
} from "../../../shared/util/validators";
import Input from "../../../shared/components/Input";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useTranslation } from 'react-i18next';  // Importing the translation hook
import "./Contact.css";

const containerStyle = { width: "100%", height: "300px" };
const center = { lat: 37.8716, lng: 32.4846 };

const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
        type: "tween",
        duration: 0.6, // default duration for this transition
        scale: {
            duration: 0.3 // custom duration for opacity property only
        },
        ease: "easeOut",
        delay,
    },
});

const Contact = () => {
    const { t } = useTranslation(); // Initialize translation hook
    const { isLoading, sendRequest } = useHttpClient();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formState, inputHandler] = useForm(
        {
            name: { value: "", isValid: false },
            email: { value: "", isValid: false },
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

    const GoogleMapMemo = useMemo(() => (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    ), []);

    return (
        <section id="iletisim" className="contact_section_container">
            <div className="section_wrapper contact_wrapper">
                <h2 className="section_title">{t('contact.title')}</h2> {/* Using translation key */}
                <p className="section_subtitle">{t('contact.subtitle')}</p> {/* Using translation key */}

                <motion.div className="contact_items contact_left_side" {...fadeInUp(0 * 0.2)}>
                    <h3 className="contact_item_title">{t('contact.contactInfoTitle')}</h3> {/* Using translation key */}
                    <p className="contact_item"><FaPhone className="contact_item_icon" /><a href="tel:+905555555555">+90 507 987 00 88</a></p>
                    <p className="contact_item"><FaEnvelope className="contact_item_icon" /><a href="mailto:info@bagyatirimi.com">info@bagyatirimi.com</a></p>
                    <p className="contact_item"><FaMapMarkerAlt className="contact_item_icon" />Konya</p>
                    <div className="contact_item_socials">
                        <a href="https://wa.me/905079870088" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="contact_item_social_icon" /></a>
                        <a href="https://www.instagram.com/bagbahce_yatirim/" target="_blank" rel="noopener noreferrer"><FaInstagram className="contact_item_social_icon" /></a>
                        <a href="https://www.facebook.com/share/19phEu29m5/" target="_blank" rel="noopener noreferrer"><FaFacebook className="contact_item_social_icon" /></a>
                    </div>
                </motion.div>

                <motion.div className="contact_items contact_right_side" {...fadeInUp(1 * 0.2)}>
                    <h3 className="contact_item_title">{t('contact.contactFormTitle')}</h3> {/* Using translation key */}
                    <form onSubmit={sendHandler} className="contact_form">
                        <Input id="name" element="input" type="text" placeholder={t('contact.namePlaceholder')} validators={[VALIDATOR_REQUIRE()]} onInput={inputHandler} label={t('contact.nameLabel')} />
                        <Input id="email" element="input" type="email" placeholder={t('contact.emailPlaceholder')} validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]} onInput={inputHandler} label={t('contact.emailLabel')} />
                        <Input id="message" element="textarea" placeholder={t('contact.messagePlaceholder')} validators={[VALIDATOR_REQUIRE()]} onInput={inputHandler} label={t('contact.messageLabel')} />
                        <button type="submit" className="contact_form_btn" disabled={!formState.isValid}>
                            {isLoading ? <PropagateLoader color="white" size={4} /> : t('contact.submitButton')}
                        </button>
                    </form>
                </motion.div>
            </div>

            <motion.div className="map_container" {...fadeInUp(2 * 0.2)}>{GoogleMapMemo}</motion.div>
        </section>
    );
};

export default Contact;
