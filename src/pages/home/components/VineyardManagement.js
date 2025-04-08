import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../../../shared/UI/Modal";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import { useForm } from "../../../shared/hooks/form-hook";
import Success from "../../../shared/components/Success";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_PHONE,
  VALIDATOR_EMAIL,
} from "../../../shared/util/validators";
import Input from "../../../shared/components/Input";
import PropagateLoader from "react-spinners/PropagateLoader";
import { FaTint, FaSeedling, FaLeaf, FaTractor, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import "./VineyardManagement.css";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

function VineyardManagement() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { isLoading, sendRequest } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      name: { value: "", isValid: false },
      email: { value: "", isValid: false },
      phone: { value: "", isValid: false },
    },
    false
  );

  const services = [
    {
      icon: <FaTint className="text-green-600 text-4xl" />,
      title: t("vineyard.services.irrigation.title"),
      description: t("vineyard.services.irrigation.description"),
    },
    {
      icon: <FaSeedling className="text-green-600 text-4xl" />,
      title: t("vineyard.services.care.title"),
      description: t("vineyard.services.care.description"),
    },
    {
      icon: <FaLeaf className="text-green-600 text-4xl" />,
      title: t("vineyard.services.organic.title"),
      description: t("vineyard.services.organic.description"),
    },
    {
      icon: <FaTractor className="text-green-600 text-4xl" />,
      title: t("vineyard.services.harvest.title"),
      description: t("vineyard.services.harvest.description"),
    },
  ];

  const sendHandler = async (e) => {
    e.preventDefault();
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/sendmail`,
        "POST",
        JSON.stringify({
          name: formState.inputs.name.value,
          email: formState.inputs.email.value,
          phone: formState.inputs.phone.value,
          message: "Order call from client",
        }),
        { "Content-Type": "application/json" }
      );
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormOpen(false);
        setModalOpen(false);
      }, 3000);
    } catch (err) { }
  };

  return (
    <section className="section_container">
      <div className="section_wrapper">
        <motion.h2 className="section_title" {...fadeInUp(0)}>
          {t("vineyard.title")}
        </motion.h2>
        <motion.p className="section_subtitle" {...fadeInUp(0.2)}>
          {t("vineyard.subtitle")}
        </motion.p>

        <div className="vineyard_management_items">
          {services.map((service, index) => (
            <motion.div key={index} className="vineyard_management_item" {...fadeInUp(index * 0.2)}>
              <span className="vineyard_management_item_icon">{service.icon}</span>
              <h3 className="vineyard_management_item_title">{service.title}</h3>
              <p className="vineyard_management_item_desc">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="section_item_button"
          onClick={() => setModalOpen(true)}
          {...fadeInUp(0.7)}
        >
          {t("vineyard.button")}
        </motion.button>
      </div>

      <Modal
        onClose={() => {
          setModalOpen(false);
          setFormSubmitted(false);
          setFormOpen(false);
        }}
        show={modalOpen}
        onCancel={() => {
          setModalOpen(false);
          setFormSubmitted(false);
          setFormOpen(false);
        }}
      >
        <div className="vineyard_management_form">
          {formSubmitted ? (
            <Success />
          ) : !formOpen ? (
            <>
              <h3 className="vineyard_management_form_title">{t("form.title")}</h3>
              <p className="vineyard_management_form_subtitle">
                {t("form.subtitle")}
              </p>
              <a
                href="https://wa.me/905XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="vineyard_management_form_icon"
              >
                <FaWhatsapp className="mr-2" /> {t("form.whatsapp")}
              </a>
              <button onClick={() => setFormOpen(true)} className="vineyard_management_form_btn">
                {t("form.button")}
              </button>
            </>
          ) : (
            <form id="CallForm" name="CallForm" method="post" onSubmit={sendHandler} className="call_form">
              <h3 className="vineyard_management_form_title">{t("form.title")}</h3>
              <Input
                className="call_form_input"
                id="name"
                element="input"
                type="text"
                placeholder={t("form.namePlaceholder")}
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                label={t("form.nameLabel")}
              />
              <Input
                className="call_form_input"
                id="email"
                element="input"
                type="email"
                placeholder={t("form.emailPlaceholder")}
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                onInput={inputHandler}
                label={t("form.emailLabel")}
              />
              <Input
                className="call_form_input"
                id="phone"
                element="input"
                type="text"
                placeholder={t("form.phonePlaceholder")}
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_PHONE()]}
                onInput={inputHandler}
                label={t("form.phoneLabel")}
              />
              <div className={`call_modal_btn_wrapper ${formState.isValid ? "" : "call_modal_btn_wrapper_disabled"}`}>
                <button type="submit" className="call_form_btn" disabled={!formState.isValid}>
                  {isLoading ? <PropagateLoader color={"white"} loading={true} size={4} /> : t("form.submit")}
                </button>
              </div>
            </form>
          )}
        </div>
      </Modal>
    </section>
  );
}

export default VineyardManagement;
