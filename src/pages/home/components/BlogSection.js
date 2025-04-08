import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../../../assets/blogPosts";
import { useTranslation } from "react-i18next";
import './BlogSection.css';

const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
        type: "tween",
        duration: 0.6,
        scale: {
            duration: 0.3
        },
        ease: "easeOut",
        delay,
    },
});

const BlogSection = () => {
    const { t, i18n } = useTranslation();

    return (
        <section className="section_container">
            <div className="section_wrapper">
                <h2 className="section_title">
                    {t("blog.title")}
                </h2>
                <p className="section_subtitle">
                    {t("blog.subtitle")}
                </p>
                <div className="blog_section_items">
                    {blogPosts.map((post, i) => (
                        <motion.div
                            key={post.id}
                            className="blog_section_item"
                            whileHover={{ scale: 1.05 }}
                            {...fadeInUp(i * 0.2)}
                        >
                            <img src={post.image} alt={post.title} className="blog_section_item_image" />
                            <div className="blog_section_item_content">
                                <h3 className="blog_section_item_title">
                                    {i18n.language === "tr" ? post.title_tr : post.title_en}
                                </h3>
                                <p className="blog_section_item_desc">
                                    {i18n.language === "tr" ? post.description_tr : post.description_en}
                                </p>
                                <Link to={post.link} className="section_item_button">
                                    {t("blog.readMore")}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.a href="/blog" className="section_item_button" {...fadeInUp(0.3)}>
                    {t("blog.viewAll")}
                </motion.a>
            </div>
        </section>
    );
};

export default BlogSection;
