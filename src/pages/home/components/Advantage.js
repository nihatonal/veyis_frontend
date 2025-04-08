import React from "react";
import { RiRecycleFill } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Advantage.css";

function Advantage() {
    const { t } = useTranslation();

    const benefits = [
        {
            title: t("advantage.passiveIncome.title"),
            description: t("advantage.passiveIncome.description"),
            icon: "₺"
        },
        {
            title: t("advantage.quickAmortization.title"),
            description: t("advantage.quickAmortization.description"),
            icon: <FaChartLine />
        },
        {
            title: t("advantage.longTermValue.title"),
            description: t("advantage.longTermValue.description"),
            icon: <BsGraphUp />
        },
        {
            title: t("advantage.sustainableInvestment.title"),
            description: t("advantage.sustainableInvestment.description"),
            icon: <RiRecycleFill />
        }
    ];

    return (
        <section className="section_container">
            <div className="section_wrapper">
                <h2 className="section_title">{t("advantage.title")}</h2>
                <p className="section_subtitle">{t("advantage.subtitle")}</p>
                <div className="advantage_content">
                    {benefits.map((item, i) => (
                        <motion.div
                            className="advantage_content_item"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            key={i}
                        >
                            <span>{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Advantage;
