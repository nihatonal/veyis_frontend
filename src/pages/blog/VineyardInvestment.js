import React from 'react';
import { motion } from "framer-motion";
import { blogPostData } from '../../assets/blogPostData';
import { Helmet, HelmetProvider } from "react-helmet-async";
import './Blog.css';
const BlogPost = () => {

    const post = blogPostData["bag_yatirimi"]
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: post.image,
        author: {
            "@type": "Person",
            name: "Nihat Onal",
        },
        publisher: {
            "@type": "Organization",
            name: "century21karun",
        },
        datePublished: post.date,
    };
    return (
        <div className="page_container">
            {/* SEO için Meta etiket */}
            <HelmetProvider>
                <Helmet>
                    <title>{post.title}</title>
                    <meta name="description" content={post.description} />
                    <meta property="og:title" content={post.title} />
                    <meta property="og:description" content={post.description} />
                    <meta property="og:image" content={post.image} />
                    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
                </Helmet>
            </HelmetProvider>
            <motion.h1
                className="section_title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                {post.title}
            </motion.h1>
            <p className="blog_date">Yayınlanma Tarihi: {post.date}</p>
            <img src={post.image} alt={post.title} className="blog_image" />
            {post.content.map((section, index) => (
                <section key={index} className='blog_section investment_section'>
                    <h2 className='blog_section_title'>{section.section_title}</h2>
                    <p className='blog_section_desc'>{section.text}</p>
                    <img src={section.image} alt={section.section_title} />
                    {section.subsections && section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className='blog_subsection'>
                            <h3 className='blog_section_subtitle'>{subsection.subsection_title}</h3>

                            <ul className='blog_section_description'>
                                {subsection.points.map((point, pointIndex) => (
                                    point.includes(":") ? <li key={pointIndex}>
                                        <span>{`${point.split(":")[0]} :`}</span>{point.split(":")[1]}
                                    </li> : <li>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            ))}
            <section className="blog_author">
                <p>{post.author.name}</p>
                <p>{post.author.job}</p>
            </section>

        </div>
    );
};

export default BlogPost;















// import { useParams } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { blogPosts } from '../../assets/blogPosts';
// import './BlogPost.css'
// const BlogPost = () => {
//     const { id } = useParams();
//     const post = blogPosts.find(post => post.id === id);
//     if (!post) {
//         return <div className="text-center text-gray-500">Blog yazısı bulunamadı.</div>;
//     }

//     return (
//         <>
//             <Helmet>
//                 <title>{post.title} | Bağcılık Blogu</title>
//                 <meta name="description" content={post.description.substring(0, 150)} />
//             </Helmet>
//             <motion.div
//                 className="page_container"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <motion.h1
//                     className="section_title"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                 >
//                     {post.title}
//                 </motion.h1>
//                 <p className="blog_date">Yayınlanma Tarihi: {post.date}</p>
//                 <img src={post.image} alt={post.title} className="blog_image" />
//                 <p className="blog_desc">{post.description}</p>

//                 <Link to="/blog" className="text-green-600 font-bold hover:underline">← Blog Ana Sayfasına Dön</Link>
//             </motion.div>
//         </>
//     );
// };

// export default BlogPost;