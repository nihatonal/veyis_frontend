import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { bozkir } from '../../assets/bozkir';
import map from '../../assets/images/konya-bozkir-hamzalar-harita.png';
import './Vineyards.css';

export default function Vineyards() {
    const { t, i18n } = useTranslation();
    const current_lang = i18n.language;
    const data = bozkir[current_lang]
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: data["sayfa_info"].title,
        description: data["sayfa_info"].description,
        image: data["sayfa_info"].image,
        author: {
            "@type": "Person",
            name: "Nihat Onal"
        },
        publisher: {
            "@type": "Organization",
            name: "century21karun"
        }
    };

    return (
        <div className="page_container">
            <HelmetProvider>
                <Helmet>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>{t("bozkir.helmet.title")}</title>
                    <meta name="description" content={t("bozkir.helmet.description")} />
                    <meta name="keywords" content={t("bozkir.helmet.keywords")} />
                    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
                </Helmet>
            </HelmetProvider>

            <motion.section className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <h1 className="section_title">{t("bozkir.hero.title")}</h1>
                <p className="section_subtitle">{data["bolge_tanitimi"].aciklama}</p>
            </motion.section>

            <motion.section className="baglarimiz-details vineyards_sections" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <h2 className='page_title'>{t("bozkir.sections.region_features")}</h2>
                <div className="climate-soil">
                    <p className="page_desc">{data["bolge_tanitimi"].tarihce}</p>
                    <div className="map_image_wrapper">
                        <img src={map} alt="konya-bozkir-hamzalar-harita" />
                    </div>
                    <h3 className='page_subtitle'>{t("bozkir.sections.climate_soil")}</h3>
                    <p className="page_desc">{data["iklim_ve_toprak"].iklim}</p>
                    <p className="page_desc">{data["iklim_ve_toprak"].toprak}</p>
                </div>

                <div className="grape-varieties vineyards_sections">
                    <h3 className='page_subtitle'>{t("bozkir.sections.grape_varieties")}</h3>
                    <p className="page_desc">{t("bozkir.grape_varieties_description")}</p>
                    <ul>
                        {data["uzum_turleri"].map((grape, index) => (
                            <li key={index}><span>{grape.isim}:</span> {grape.ozellikler}</li>
                        ))}
                    </ul>
                </div>

                <div className="farming-methods vineyards_sections">
                    <h3 className='page_subtitle'>{t("bozkir.sections.farming_methods")}</h3>
                    <p className="page_desc">{t("bozkir.farming_description")}</p>
                    <ul>
                        {data["bagcilik_yontemleri"].map((method, index) => (
                            <li key={index}><span>{method.yontem}:</span> {method.aciklama}</li>
                        ))}
                    </ul>
                </div>

                <div className="harving-methods vineyards_sections">
                    <h3 className='page_subtitle'>{t("bozkir.sections.harvest")}</h3>
                    <p className="page_desc">{t("bozkir.harvest_description")}</p>
                    <div className="image_wrapper">
                        <img src="https://i.imgur.com/aKIq7yL.webp" alt="uzum-hasadi-sepette-uzum-kara-uzum" />
                    </div>
                    <ul>
                        {data["hasat_ve_isleme"].map((method, index) => (
                            <li key={index}><span>{method.type}:</span> {method.desc}</li>
                        ))}
                    </ul>
                </div>

                <div className="economic_types vineyards_sections">
                    <h3 className='page_subtitle'>{t("bozkir.sections.economy")}</h3>
                    <p className="page_desc">Bağcılık, Hamzalar bölgesinde önemli bir geçim kaynağıdır...</p>
                    <ul>
                        {data["ekonomik_etki"].map((item, index) => (
                            <li key={index}><span>{item.type}:</span> {item.desc}</li>
                        ))}
                    </ul>
                </div>
            </motion.section>

            <motion.section className="photo-gallery vineyards_sections" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <h2 className='page_title'>{t("bozkir.sections.gallery")}</h2>
                <p>{t("bozkir.sections.gallery_note")}</p>
            </motion.section>
        </div>
    );
}
