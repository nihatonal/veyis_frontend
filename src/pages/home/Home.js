import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from './components/Hero';
import Advantage from './components/Advantage';
import VineyardListings from './components/VineyardListings';
import VineyardBanner from './components/VineyardBanner';
import VineyardManagement from './components/VineyardManagement';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';
import './Home.css';
function Home() {




    return (
        <div className="main_container">
            <HelmetProvider>
                <Helmet>
                    <title>Bağ Bahçe Yatırım</title>
                    <meta name="description" content={`üzüm bağı ve yatırımı hakkında giriş`} />
                    <link rel="canonical" href={`https://seninsite.com/satilik-uzum-bagi/`} />
                </Helmet>
            </HelmetProvider>
            <Hero />
            <Advantage />
            <VineyardBanner />
            {/* <VineyardListings /> */}
            <VineyardManagement />
            <Testimonials />
            <BlogSection />
            <Contact />

        </div>
    );
}

export default Home;

