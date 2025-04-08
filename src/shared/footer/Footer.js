import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import instagram from '../../assets/icons/instagram.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import facebook from '../../assets/icons/facebook.png';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer_wrapper">
                {/* Company Info */}
                <div>
                    <h3 className="footer_title">{t('footer.company')}</h3>
                    <p>{t('footer.location')}</p>
                    <p className="footer_contact_item">
                        <FaPhone /> <a href="tel:+905079870088">{t('footer.contact.phone')}</a>
                    </p>
                    <p className="footer_contact_item">
                        <FaEnvelope /> <a href="mailto:info@bagyatirimi.com">{t('footer.contact.email')}</a>
                    </p>
                </div>

                {/* Quick Menu */}
                <div>
                    <h3 className="footer_title">{t('footer.quickMenu')}</h3>
                    <ul className="footer_navlinks">
                        <li><Link to="/">{t('footer.links.home')}</Link></li>
                        <li><Link to="/satilik">{t('footer.links.forSale')}</Link></li>
                        <li><Link to="/hakkimizda">{t('footer.links.aboutUs')}</Link></li>
                        <li><Link to="/iletisim">{t('footer.links.contact')}</Link></li>
                        <li><Link to="/blog">{t('footer.links.blog')}</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="footer_title">{t('footer.followUs')}</h3>
                    <div className="footer_social_links">
                        <a href="https://www.facebook.com/share/19phEu29m5/" target='_blank' rel="noreferrer">
                            <motion.img src={facebook} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} alt="facebook" />
                        </a>
                        <a href="https://www.instagram.com/bagbahce_yatirim/" target='_blank' rel="noreferrer">
                            <motion.img src={instagram} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} alt="instagram" />
                        </a>
                        <a href="https://wa.me/905079870088" target='_blank' rel="noreferrer">
                            <motion.img src={whatsapp} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} alt="whatsapp" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer_policy">
                <p>{t('footer.copyright')}</p>
                <p>
                    <Link to="/gizlilik" className="footer_policy_item">{t('footer.privacyPolicy')}</Link> |
                    <Link to="/kullanim" className="footer_policy_item">{t('footer.termsOfUse')}</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
