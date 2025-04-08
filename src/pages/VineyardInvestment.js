import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import vine from '../assets/images/uzum-asmasi.webp';
import investment from '../assets/images/uzum-hasati-bag-yatirimi.webp';

import './VineyardInvestment.css'

const VineyardInvestment = () => {
    const { t } = useTranslation();

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>{t("vineyardInvestment.meta.title")}</title>
                    <meta name="description" content={t("vineyardInvestment.meta.description")} />
                </Helmet>
            </HelmetProvider>

            <div className="page_container vineyard_investment_container">
                <section>
                    <motion.h1
                        className="section_title"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {t("vineyardInvestment.hero.title")}
                    </motion.h1>
                    <motion.p
                        className="section_subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {t("vineyardInvestment.hero.description")}
                    </motion.p>
                </section>

                <motion.h2
                    className="page_title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}>
                    {t("vineyardInvestment.advantages.title")}
                </motion.h2>
                <div className="page_section">
                    <motion.ul
                        className="page_list"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        {[1, 2, 3, 4].map((i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                            >
                                {t(`vineyardInvestment.advantages.items.${i}`)}
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.div
                        className="page_image_wrapper"
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 1 * 0.2 }}
                        initial={{ opacity: 0, x: 50 }}
                        style={{ margin: "0" }}
                    >
                        <img src={vine} alt="üzüm-bağı-yatırımı" />
                    </motion.div>
                </div>

                <motion.div className="vinyard_investment_section"
                    whileInView={{ opacity: 1, }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 1 * 0.2 }}
                    initial={{ opacity: 0, }}
                    style={{ background: "rgba(127, 255, 212,0.25)" }}>
                    <motion.h2 className="page_title" style={{
                        fontSize: "var(--text-2xl)",
                        fontWeight: "500",
                        padding: "calc(var(--spacing)*0)",
                        margin: "0",
                        borderRadius: "1rem 1rem 0 0"
                    }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 1 * 0.2 }}
                        initial={{ opacity: 0, y: -50 }}
                    >
                        {t("vineyardInvestment.profitability.title")}
                    </motion.h2>

                    <motion.p
                        className="mt-4 text-lg bg-black bg-opacity-50 p-4 rounded-lg"
                        style={{
                            fontSize: "var(--text-xl)",
                            padding: "calc(var(--spacing)*4) 0",
                            borderRadius: "0 0 1rem 1rem"
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 1 * 0.4 }}
                        initial={{ opacity: 0, y: 50 }}
                    >
                        {t("vineyardInvestment.profitability.text1")}{" "}
                        <span style={{ color: "var(--color-yellow-500)", fontWeight: "bold" }}>
                            {t("vineyardInvestment.profitability.priceRange")}
                        </span>{" "}
                        {t("vineyardInvestment.profitability.text2")}{" "}
                        <span style={{ color: "var(--color-green-600)", fontWeight: "bold" }}>
                            {t("vineyardInvestment.profitability.returnYears")}
                        </span>{" "}
                        {t("vineyardInvestment.profitability.text3")}
                    </motion.p>
                </motion.div>

                <motion.h2
                    className="page_title"
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 1 * 0.2 }}
                    initial={{ opacity: 0, x: 50 }}
                >{t("vineyardInvestment.howToStart.title")}
                </motion.h2>
                <div className="page_section">
                    <motion.div
                        className="page_image_wrapper"
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 1 * 0.2 }}
                        style={{ margin: "0" }}
                    >
                        <img src={investment} alt="üzüm asması-bağ yatırımı" />
                    </motion.div>

                    <motion.ol
                        className="page_list"
                        style={{ listStyle: "decimal" }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        {[1, 2, 3, 4, 5].map((i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                            >
                                {t(`vineyardInvestment.howToStart.steps.${i}`)}
                            </motion.li>
                        ))}
                    </motion.ol>
                </div>

                <motion.h2
                    className="page_title"
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 1 * 0.2 }}
                    initial={{ opacity: 0, x: 50 }}
                >{t("vineyardInvestment.risks.title")}</motion.h2>
                <motion.p style={{ marginBottom: "calc(var(--spacing)*6)" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 1 * 0.4 }}
                    initial={{ opacity: 0, y: 50 }}
                >
                    {t("vineyardInvestment.risks.intro")}
                </motion.p>

                <motion.ul
                    className="page_list"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    {[1, 2, 3, 4, 5].map((i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                        >
                            {t(`vineyardInvestment.risks.items.${i}`)}
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.p style={{ margin: "calc(var(--spacing)*10) 0 calc(var(--spacing)*4)" }}>
                    {t("vineyardInvestment.risks.conclusion")}
                </motion.p>
                <motion.div
                    className="page_footer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 }}
                    aria-labelledby="footer-contact"
                >
                    <h2 id="footer-contact" className="sr-only">{t("vineyardInvestment.footer.title")}</h2>
                    <div className="contact-info">
                        <p className="contact-description">
                            {t("vineyardInvestment.footer.title")}
                        </p>
                        <div className="contact-links">
                            <a
                                href="tel:+905555555555"
                                className="page_footer_link"
                                aria-label={t("vineyardInvestment.footer.phone")}>
                                <i className="phone-icon"></i> {t("vineyardInvestment.footer.phone")}
                            </a>
                            <a
                                href="mailto:info@bagyatirimi.com"
                                className="page_footer_link"
                                aria-label={t("vineyardInvestment.footer.email")}>
                                <i className="email-icon"></i> {t("vineyardInvestment.footer.email")}
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </>
    );
};

export default VineyardInvestment;
