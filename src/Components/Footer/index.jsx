// import React, { useState, useEffect } from "react"
// import "./style.css"
// import {
//   FaPhone,
//   FaEnvelope,
//   FaLinkedin,
//   FaInstagram,
//   FaFacebook,
// } from "react-icons/fa"

// function Footer() {
//   const [language, setLanguage] = useState("en")

//   useEffect(() => {
//     const savedLang = localStorage.getItem("language") || "en"
//     setLanguage(savedLang)
//   }, [])

//   const handleLanguageChange = (e) => {
//     const selectedLang = e.target.value
//     setLanguage(selectedLang)
//     localStorage.setItem("language", selectedLang)

//     if (selectedLang === "en") {
//       window.location.href = "/en"
//     } else if (selectedLang === "pt") {
//       window.location.href = "/pt"
//     }
//   }

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Column 1 - Logo & Contact */}
//         <div className="footer-left">
//           <h1 className="logo">
//             PRO<span className="highlight">K</span>
//           </h1>
//           <p className="contact-item">
//             <FaPhone /> +61 1800 PROKCC (776522)
//           </p>
//           <p className="contact-item">
//             <FaEnvelope /> conveyors.au@prok.com
//           </p>
//           <div className="social-icons">
//             <FaLinkedin />
//             <FaInstagram />
//             <FaFacebook />
//           </div>
//         </div>

//         {/* Column 2 - Conveyor Equipment */}
//         <div className="footer-column">
//           <h3>Conveyor Equipment</h3>
//           <p>Rollers</p>
//           <p>Pulleys</p>
//           <p>Idlers</p>
//           <p>Accessories</p>
//         </div>

//         {/* Column 3 - Expertise */}
//         <div className="footer-column">
//           <h3>Expertise</h3>
//           <p>Pulley Refurbishment</p>
//           <p>Engineering Services</p>
//           <p>US Capabilities</p>
//         </div>

//         {/* Column 4 - Links */}
//         <div className="footer-column-3">
//           <h3>Contact</h3>
//           <p>About PROK</p>
//           <p>Projects</p>
//           <p>Careers</p>
//           <p>Graduate Program</p>
//           <p>Innovation Hub</p>
//           <p>Sustainability</p>
//           <p>News</p>
//         </div>
//       </div>

//       {/* Bottom row */}
//       <div className="footer-bottom">
//         {/* 🔤 Language Switcher */}
//         <div className="language-switcher-inline">
//           <select value={language} onChange={handleLanguageChange}>
//             <option value="en"> English</option>
//             <option value="es"> Spanish</option>
//             <option value="pt"> Portuguese</option>
//           </select>
//         </div>

//         <p>Privacy Policy</p>
//         <p>Internet Policy</p>
//         <p>Terms & Conditions of Sale</p>
//         <p>Terms & Conditions of Purchase</p>
//         <p>
//           Digital Experience by <span className="juicebox">Juicebox</span>
//         </p>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import React from "react";
import "./style.css";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

import LanguageSwitcher from "../LanguageSwitcher"; // ✅ import the component

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - Logo & Contact */}
        <div className="footer-left">
          <h1 className="logo">
            PRO<span className="highlight">K</span>
          </h1>
          <p className="contact-item">
            <FaPhone /> +61 1800 PROKCC (776522)
          </p>
          <p className="contact-item">
            <FaEnvelope /> conveyors.au@prok.com
          </p>
          <div className="social-icons">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
          </div>
        </div>

        {/* Column 2 - Conveyor Equipment */}
        <div className="footer-column">
          <h3>Conveyor Equipment</h3>
          <p>Rollers</p>
          <p>Pulleys</p>
          <p>Idlers</p>
          <p>Accessories</p>
        </div>

        {/* Column 3 - Expertise */}
        <div className="footer-column">
          <h3>Expertise</h3>
          <p>Pulley Refurbishment</p>
          <p>Engineering Services</p>
          <p>US Capabilities</p>
        </div>

        {/* Column 4 - Links */}
        <div className="footer-column-3">
          <h3>Contact</h3>
          <p>About PROK</p>
          <p>Projects</p>
          <p>Careers</p>
          <p>Graduate Program</p>
          <p>Innovation Hub</p>
          <p>Sustainability</p>
          <p>News</p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="footer-bottom">
        {/* 🔤 Language Switcher */}
        <div className="language-switcher-inline">
          <LanguageSwitcher /> {/* ✅ used here */}
        </div>

        <p>Privacy Policy</p>
        <p>Internet Policy</p>
        <p>Terms & Conditions of Sale</p>
        <p>Terms & Conditions of Purchase</p>
        <p>
          Digital Experience by <span className="juicebox">Juicebox</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

