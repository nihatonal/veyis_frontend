import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { blogPostData } from '../../assets/blogPostData';
import './Blog.css';



const VineyardKonya = () => {
    const blogData = blogPostData["konyada_bag_yatirimi"]
    useEffect(() => {
        document.title = blogData.title;
    }, [blogData.title]);
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blogData.title,
        description: blogData.description,
        image: blogData.image,
        author: {
            "@type": "Person",
            name: "Nihat Onal",
        },
        publisher: {
            "@type": "Organization",
            name: "century21karun",
        },
        datePublished: blogData.date,
    };
    return (
        <div className="page_container">
            <HelmetProvider>
                <Helmet>
                    <title>{blogData.title} | Bağ Yatırımı</title>
                    <meta name="description" content={blogData.description} />
                    <meta name="keywords" content="Konya bağcılık, üzüm bağları, bağ yatırımı, organik tarım" />
                    <meta property="og:title" content={blogData.title} />
                    <meta property="og:description" content={blogData.description} />
                    <meta property="og:image" content={blogData.image} />
                    <meta property="og:url" content={blogData.link} />
                    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
                </Helmet>
            </HelmetProvider>
            <h1 className="section_title">{blogData.title}</h1>
            <p className="blog_date">Yayınlanma Tarihi: {blogData.date}</p>
            <img src={blogData.image} alt={blogData.title} className="blog_image" />
            <p className="section_desc">{blogData.description}</p>

            {blogData.sections.map((section, index) => (
                <div key={index} className="blog_trend_section blog_konya">
                    <h2 className="blog_section_title">{section.heading}</h2>
                    <p className="blog_section_desc">{section.text}</p>
                    <img src={section.image} alt={section.section_title} />
                    <ul className="blog_section_description trend_items">
                        {section.bullets.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
            <section className="blog_author">
                <p>{blogData.author.name}</p>
                <p>{blogData.author.job}</p>
            </section>
        </div>
    );
};

export default VineyardKonya;
