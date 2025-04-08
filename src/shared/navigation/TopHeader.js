import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import instagram from '../../assets/icons/instagram.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import facebook from '../../assets/icons/facebook.png';
import CallBtn from '../UI/CallBtn';
import logo from '../../assets/images/Logo__.png';
import './TopHeader.css';
import Hamburger from './Hamburger';
import NavLinks from './NavLinks';

function TopHeader({ style, onClick, classCallBtn, phoneClass }) {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen);
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className='top_header_container' style={style}>
            <div className="top_header_logo">
                <NavLink to="/" className='logo_link'>
                    <img
                        src={logo}
                        alt="logo"
                        className='logo'
                        loading="eager"
                    />
                </NavLink>
                <p className="top_header_motto" role="heading" aria-level="1">
                    {t("header.motto")}
                </p>
            </div>

            <div className="top_header_phone_number">
                <a href='tel:+905079870088' className={phoneClass}>
                    +90 507 987 00 88
                </a>
            </div>

            <div className="top_header_social_links">
                <a href='https://www.instagram.com/bagbahce_yatirim/' className='top_header_social_link instagram_icon' aria-label="Instagram">
                    <img src={instagram} alt="instagram" />
                </a>
                <a href='https://www.facebook.com/share/19phEu29m5/' className='top_header_social_link' target='_blank' rel="noreferrer" aria-label="Facebook">
                    <img src={facebook} alt="facebook" />
                </a>
                <a href='https://api.whatsapp.com/send?phone=905079870088' className='top_header_social_link' target='_blank' rel="noreferrer" aria-label="WhatsApp">
                    <img src={whatsapp} alt="whatsapp" />
                </a>
            </div>

            <CallBtn onClick={onClick} classCallBtn={classCallBtn}>
                {t("header.call")}
            </CallBtn>

            <div className="lang_btns">
                <button aria-label="Change language to English" onClick={() => changeLanguage("en")} className="text-white">EN</button>
                <button aria-label="Change language to Turkish" onClick={() => changeLanguage("tr")} className="text-white">TR</button>
            </div>

            <Hamburger show={drawerIsOpen} onClick={toggleDrawer} />
            <div className={`backdrop ${drawerIsOpen ? 'active' : ''}`}></div>
            <div className={!drawerIsOpen ? "sidemenu_wrapper" : "sidemenu_wrapper open_menu"}>
                <div className='sidemenu_nav_items'>
                    <NavLinks onClick={() => setDrawerIsOpen(false)} />
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
