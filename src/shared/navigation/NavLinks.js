import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './NavLinks.css';

function NavLinks({ className, classNavItem, onClick, children }) {
    const [drop, setDrop] = useState(false);
    const { pathname } = useLocation();
    const { t } = useTranslation();

    const navlinks = [
        { id: "home", to: "/", label: t("nav.home") },
        { id: "baglarimiz", to: "/konya-bozkir-hamzalar-baglarimiz", label: t("nav.vineyards") },
        { id: "hakkimizda", to: "/hakkimizda", label: t("nav.about") },
        { id: "iletisim", to: "/iletisim", label: t("nav.contact") },
        { id: "blog", to: "/blog", label: t("nav.blog") },
    ];

    const drop_menu = [
        { id: "yatirim", to: "/neden-bag-yatirimi", label: t("nav.investment") },
        { id: "alim", to: "/bag-alim-sureci", label: t("nav.purchase") },
        { id: "hizmetler", to: "/hizmetler", label: t("nav.management") },
    ];

    useEffect(() => {
        setDrop(false);
    }, [pathname]);

    return (
        <div className="navbar_items_wrapper">
            <div className="navlink_item_btn_wrapper">
                <button className='nav_item' onClick={() => setDrop(!drop)}>
                    <span></span>
                    {t("nav.vineyardInvestment")} {!drop ? <IoIosArrowDown className='nav_button_arrow' /> : <IoIosArrowUp className='nav_button_arrow' />}
                </button>

                <div className={!drop ? "navlink_dropmenu" : "navlink_dropmenu open_drop"}>
                    {drop_menu.map(({ to, label }) => (
                        <NavLink key={to} className="navlink_item" to={to} onClick={onClick}>
                            <span>—</span>{label}
                        </NavLink>
                    ))}
                </div>
            </div>

            {navlinks.map(({ to, label }) => (
                <NavLink
                    key={to}
                    className={({ isActive }) => isActive ? "nav_item active_link" : "nav_item"}
                    to={to}
                    onClick={onClick}
                >
                    <span></span>{label}
                </NavLink>
            ))}

            {children}
        </div>
    );
}

export default NavLinks;
