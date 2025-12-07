
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail,
    AiFillPhone } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="w-full bg-neutral-950 border-t border-neutral-800 py-2 mt-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row
                justify-between items-center gap-6">
                {/* Left Side: Name & Tagline */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">Teja Janga</h3>
                    <p className="text-gray-400 text-sm">
                        Building digital experiences with <br /> code and creativity.
                    </p>
                </div>
                {/* Center: Contact Info */}
                <div className="flex flex-col items-center md:items-start gap-2
                    text-gray-400 text-sm">
                    <a href="mailto:tejat7927@gmail.com" className="flex items-center
                        gap-2 hover:text-cyan-400 transition-colors">
                        <AiFillMail size="1.2rem" /> tejat7927@gmail.com
                    </a>
                    <a href="tel:+917032769461" className="flex items-center
                        gap-2 hover:text-cyan-400 transition-colors">
                        <AiFillPhone size="1.2rem" /> +91 7032769461
                    </a>
                </div>
                {/* Right Side: Social Icons */}
                <div className="flex gap-6 text-white text-3xl">
                    <a href="https://github.com/Teja-Janga" target="_blank"
                        className="hover:text-gray-400 transition-colors">
                        <AiFillGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/Teja-Janga" target="_blank"
                        className="hover:text-blue-500 transition-colors">
                        <AiFillLinkedin />
                    </a>
                    <a href="https://www.instagram.com/teja70327/" target="_blank"
                        className="hover:text-pink-400 transition-colors">
                        <AiFillInstagram />
                    </a>
                </div>
            </div>
            {/* Copyright Line */}
            <div className="text-center text-gray-600 text-sm mt-4 pt-3 border-t
            border-neutral-900 mx-4">
                © {new Date().getFullYear()} Teja Janga. All rights reserved.
            </div>
        </footer>
    );
}
export default Footer;