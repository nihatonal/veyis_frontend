import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import './InvestmentGuide.css';

const steps = [
    { id: 1, step: "Yatırım yapılacak tarlanın seçimi", desc: ["Bölgenin iklimi, toprak kalitesi ve su kaynakları değerlendirilir.", "Uzun vadeli verimlilik açısından en uygun lokasyon belirlenir."] },
    { id: 2, step: "Kaparo alınması", desc: ["Satıcı ile anlaşma sağlandıktan sonra ön ödeme yapılır.", "Bu aşamada alım süreci resmileştirilir."] },
    { id: 3, step: "Tapu başvurusu (vekaletname)", desc: ["Tapu devri için gerekli belgeler hazırlanır.", "Resmi işlemler tamamlanarak vekaletname verilir."] },
    { id: 4, step: "Tapu sahibinin hesabına paranın gönderilmesi", desc: ["Tapu işlemleri tamamlandığında ödeme gerçekleştirilir.", "Ödeme dekontu resmi kayıtlara işlenir."] },
    { id: 5, step: "Century 21 Karun ile Yarıcılık sözleşmesi yapılması", desc: ["Bağın işletilmesi için profesyonel hizmet anlaşması imzalanır.", "Bağ bakımı ve hasat süreci planlanır."] },
    { id: 6, step: "Toprağın hazırlanması, bağ bakım işlemleri ve ürün takibi", desc: ["Toprak işlenir ve bağlar budanır.", "Gübreleme ve ilaçlama yapılır, ürün gelişimi takip edilir."] },
    { id: 7, step: "Gelir raporu sunulması ve tapu sahibine ödeme yapılması", desc: ["Hasat sonrası satış işlemi tamamlanır.", "Gelir raporu hazırlanarak yatırımcıya ödeme yapılır."] },
];

const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
});

const CTASection = () => {
    return (
        <motion.section
            className="investment_cta_wrapper"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="investment_cta_content">
                <h2 className="text-3xl font-bold mb-4">Fırsatları Kaçırmayın</h2>
                <p className="mb-6 text-lg">Bağ yatırım sürecini öğrendiniz. Şimdi harekete geçme zamanı! Size özel avantajlı fırsatlar ve detaylar için hemen bizimle iletişime geçin.</p>
                <Link
                    to="/iletisim"
                    className="investment_cta_link"
                >
                    Hemen İletişime Geçin
                </Link>
            </div>
        </motion.section>
    );
};

const InvestmentGuide = () => (
    <>
        <HelmetProvider>
            <Helmet>
                <title>Bağ Alım Süreci | Güvenli ve Kârlı Bağ Yatırımı</title>
                <meta name="description" content="Bağ alım sürecini adım adım öğrenin. Güvenli yatırım yaparak üzüm bağlarına sahip olun." />
            </Helmet>
        </HelmetProvider>

        <motion.div className="page_container">
            <motion.h1
                className="section_title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                Bağ Alım Süreci
            </motion.h1>

            <ol className="investment_guide_items">
                {steps.map(({ id, step, desc, i }) => (
                    <motion.li key={id} className="investment_guide_item"
                        {...fadeInUp(i * 0.2)}
                    >
                        <span className="investment_guide_item_number">{id}</span>
                        <span>{step}</span>

                        <ul className="investment_guide_item_desc">
                            {desc.map((descItem, descIndex) => (
                                <li key={descIndex}>{descItem}</li>
                            ))}
                        </ul>
                    </motion.li>
                ))}
            </ol>
            <CTASection />

        </motion.div>
    </>
);

export default InvestmentGuide;