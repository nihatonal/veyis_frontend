import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
//import blogContent from './bag_yatirimi_trendler.json';
import { blogPostData } from '../../assets/blogPostData';
import './Blog.css';
const VineyardTrend = () => {
    const blogContent = blogPostData["vineyardtrend"]
    useEffect(() => {
        document.title = blogContent.title;
    }, [blogContent.title]);
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blogContent.title,
        description: blogContent.description,
        image: blogContent.image,
        author: {
            "@type": "Person",
            name: "Nihat Onal",
        },
        publisher: {
            "@type": "Organization",
            name: "century21karun",
        },
        datePublished: blogContent.date,
    };

    return (
        <div className="page_container">
            <HelmetProvider>
                <Helmet>
                    <title>{blogContent.title}</title>
                    <meta name="description" content={blogContent.description} />
                    <meta property="og:title" content={blogContent.title} />
                    <meta property="og:description" content={blogContent.description} />
                    <meta property="og:image" content={blogContent.image} />
                    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
                </Helmet>
            </HelmetProvider>
            <h1 className='section_title'>{blogContent.title}</h1>
            <p className='section_desc'>{blogContent.description}</p>
            <p className="blog_date">Yayınlanma Tarihi: {blogContent.date}</p>
            <img src={blogContent.image} alt={blogContent.title} className="blog_image" />


            {blogContent.content.map((section, index) => (
                <section key={index} className="blog_trend_section">
                    <h2 className='blog_section_title'>{section.heading}</h2>
                    <p className='blog_section_desc'>{section.text}</p>
                    <img src={section.image} alt={section.section_title} />
                    <div>
                        <h3 className='blog_section_subtitle'>{section.bullets_title}</h3>
                        {section.bullets && section.bullets.length > 0 && (

                            <ul className='blog_section_description trend_items' >
                                {section.bullets.map((point, pointIndex) => (
                                    point.includes(":") ? <li key={pointIndex}>
                                        <span>{`${point.split(":")[0]} :`}</span>{point.split(":")[1]}
                                    </li> : <li>{point}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                </section>
            ))}
            <section className='blog_section_summary'>
                <h2 className='blog_section_title'>Sonuç</h2>
                <p className='blog_section_desc'> {blogContent.summary}</p>

            </section>
            <section className="blog_author">
                <p>{blogContent.author.name}</p>
                <p>{blogContent.author.job}</p>
            </section>

        </div>
    );
};

export default VineyardTrend;
