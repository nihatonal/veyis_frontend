import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        requestAnimationFrame(() => {
            window.scrollTo({ top: 0});
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
