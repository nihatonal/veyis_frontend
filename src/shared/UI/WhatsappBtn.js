import React from 'react';
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import './WhatsappBtn.css'
function WhatsappBtn(props) {
    return (
        <motion.a
            href="https://wa.me/905079870088"
            className="whatsapp_btn"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            target="_blank"
        >
            <FaWhatsapp style={{ fontSize: "var(--text-2xl)" }} />
        </motion.a>
    );
}

export default WhatsappBtn;