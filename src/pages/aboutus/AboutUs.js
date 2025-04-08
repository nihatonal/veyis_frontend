import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // i18n hook
import history from '../../assets/images/aboutus/firma-tarihi-company-history.png';
import partnership from '../../assets/images/aboutus/partnership-ortaklik-el-sikisma.png';
import century21 from '../../assets/images/partners/century21-fav-300x300.png';
import karum from '../../assets/images/partners/karun-160x43.png';
import './AboutUs.css';

const AboutUs = () => {
  const { t } = useTranslation(); // i18n hook'u ile metin çevirisi

  return (
    <div className="about-us_container">
      {/* Hero Section */}
      <section className="about-us_hero">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 className="about-us_hero_title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0 * 0.2 }}
          >
            {t('aboutUs.heroTitle')}
          </motion.h1>
          <motion.p className="about-us_section_subtitle"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 1 * 0.2 }}
          >
            {t('aboutUs.heroSubtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Company History Section */}
      <section className="about-us_history">
        <motion.div
          className="about-us_section_content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 className="about-us_section_title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0 * 0.2 }}
          >
            {t('aboutUs.historyTitle')}
          </motion.h2>
          <motion.p className="about-us_section_subtitle"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 1 * 0.2 }}
          >
            {t('aboutUs.historySubtitle')}
          </motion.p>
        </motion.div>
        <motion.img
          src={history}
          alt="Company History"
          className="about-us_section_image"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 1 * 0.2 }}
        />
      </section>

      {/* Mission and Vision Section */}
      <section className="about-us_mission">
        <motion.div
          style={{ textAlign: "center" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 className="about-us_section_title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0 * 0.2 }}
          >
            {t('aboutUs.missionVisionTitle')}
          </motion.h2>
          <motion.p className="about-us_section_subtitle" style={{ marginBottom: "calc(var(--spacing)*4)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 1 * 0.2 }}
          >
            <strong>{t('aboutUs.missionSubtitle')}</strong>
          </motion.p>
          <motion.p className="about-us_section_subtitle"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 2 * 0.2 }}
          >
            <strong>{t('aboutUs.visionSubtitle')}</strong>
          </motion.p>
        </motion.div>
      </section>

      {/* Partnership Section */}
      <section className="about-us_partnership about-us_history">
        <motion.div
          className="about-us_section_content about-us_partnership_content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 className="about-us_section_title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0 * 0.2 }}
          >
            {t('aboutUs.partnershipTitle')}
          </motion.h2>
          <motion.p className="about-us_section_subtitle"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 1 * 0.2 }}
          >
            {t('aboutUs.partnershipSubtitle')}
          </motion.p>
          <motion.img
            src={century21}
            alt="century21"
            className="about-us_partner_image"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 2 * 0.2 }}
          />
          <motion.img
            src={karum}
            alt="karum"
            className="about-us_partner_image"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 2 * 0.2 }}
          />
        </motion.div>
        <motion.img
          src={partnership}
          alt="Partnership"
          className="about-us_section_image"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 1 * 0.2 }}
        />
      </section>

      {/* Call to Action Section */}
      <section className="about-us_cta">
        <motion.div
          className="about-us_cta_content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 className="about-us_cta_title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0 * 0.2 }}
          >
            {t('aboutUs.ctaTitle')}
          </motion.h2>
          <motion.p className="about-us_cta_subtitle"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 1 * 0.2 }}
          >
            {t('aboutUs.ctaSubtitle')}
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}

export default AboutUs;
