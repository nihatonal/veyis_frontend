import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import notfound from '../../assets/images/path-to-your-404-illustration.webp';


import './NotFoundPage .css';
const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <title>Sayfa Bulunamadı | Bağ Bahçe Yatırım</title>
                <meta name="description" content="Aradığınız sayfa bulunamadı. Üzüm bağlarımızı keşfetmek için ana sayfamıza dönebilirsiniz." />
            </Helmet>
            <motion.div
                className="notfoundpage_container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-6xl font-bold text-green-700 mb-4"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    404
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-700 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    Aradığınız sayfa bulunamadı. Belki de yeni bir üzüm bağı keşfetmek istersiniz!
                </motion.p>

                <motion.img
                    src={notfound}
                    alt="Vineyard Illustration"
                    className="notfound_image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <Link
                        to="/"
                        className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
                    >
                        Ana Sayfaya Dön
                    </Link>
                </motion.div>
            </motion.div>
        </>
    );
};

export default NotFoundPage;
