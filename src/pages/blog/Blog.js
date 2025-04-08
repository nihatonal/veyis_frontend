import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { blogPosts } from '../../assets/blogPosts';
import './Blog.css';

const Blog = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("blogPage.metaTitle")}</title>
                <meta name="description" content={t("blogPage.metaDescription")} />
            </Helmet>
            <motion.div
                className="page_container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="section_title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {t("blogPage.title")}
                </motion.h1>
                <motion.div className="blogs_container">
                    {blogPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            className="blog_item"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src={post.image} alt={i18n.language === "tr" ? post.title_tr : post.title_en} className="blog_item_image" />
                            <div className="blog_item_content">
                                <h2 className="text-xl font-semibold mb-2"> {i18n.language === "tr" ? post.title_tr : post.title_en}</h2>
                                <p className="text-gray-600 text-sm mb-2">{post.date}</p>
                                <p className="text-gray-600 mb-4">{i18n.language === "tr" ? post.description_tr : post.description_en}</p>
                                <Link to={post.link} className="blog_item_btn">
                                    {t("blogPage.readMore")} →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </>
    );
};

export default Blog;
