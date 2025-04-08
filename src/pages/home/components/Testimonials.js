import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const testimonials = [
    {
        name: "Ahmet Y.",
        text_tr: "Bağ yatırımına ilk kez girdim ve çok memnun kaldım. Süreç çok şeffaf ve profesyoneldi.",
        text_en: "It was my first time investing in a vineyard and I was very pleased. The process was very transparent and professional.",
    },
    {
        name: "Zeynep K.",
        text_tr: "Hem yatırım yaptım hem de organik üzüm üretimiyle ilgilenmeye başladım. Harika bir deneyim!",
        text_en: "I both invested and started getting involved in organic grape production. A wonderful experience!",
    },
    {
        name: "Mehmet D.",
        text_tr: "Bağımı aldım, yönetimini profesyonellere bıraktım. Gelir kaynağı oluşturmak için mükemmel bir fırsat.",
        text_en: "I bought my vineyard and left the management to professionals. A perfect opportunity to create income.",
    },
    {
        name: "Elif T.",
        text_tr: "Doğru yönlendirmeler sayesinde kârlı bir yatırım yaptım. Profesyonel destek için teşekkürler!",
        text_en: "Thanks to proper guidance, I made a profitable investment. Thank you for the professional support!",
    },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { t, i18n } = useTranslation();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        beforeChange: (_, newIndex) => setActiveIndex(newIndex),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    return (
        <section className="section_container testimonials_container">
            <div className="section_wrapper">
                <h2 className="section_title">{t("testimonials.title")}</h2>
                <p className="section_subtitle">{t("testimonials.subtitle")}</p>
                <div className="testimonials_items">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                className="testimonials_item"
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{
                                    opacity: activeIndex === index ? 1 : 0,
                                    y: activeIndex === index ? 0 : 50,
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <FaQuoteLeft className="testimonials_item_icon" />
                                <p>
                                    "
                                    {i18n.language === "tr"
                                        ? testimonial.text_tr
                                        : testimonial.text_en}
                                    "
                                </p>
                                <h3>- {testimonial.name}</h3>
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
