import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import './VineyardBanner.css';

const VineyardBanner = () => {
    const { t } = useTranslation();

    return (
        <section className="vineyard_banner">
            <div className="vineyard_banner_overlay"></div>
            <motion.div
                className="vineyard_banner_content"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="vineyard_banner_title">{t("vineyardBanner.title")}</h2>
                <div className="vineyard_banner_content_items">
                    <div className="vineyard_banner_content_item">
                        <p className="text-xl font-semibold">{t("vineyardBanner.area")}</p>
                    </div>
                    <div className="vineyard_banner_content_item">
                        <p className="text-xl font-semibold">{t("vineyardBanner.price")}</p>
                    </div>
                    <div className="vineyard_banner_content_item">
                        <p className="text-xl font-semibold">{t("vineyardBanner.income")}</p>
                    </div>
                </div>
                <a href="/bag-alim-sureci" className="vineyard_banner_button">
                    {t("vineyardBanner.cta")}
                </a>
            </motion.div>
        </section>
    );
};

export default VineyardBanner;
