// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import styles from "../Header/page.module.css";
// import Image from "next/image";
// import { FaFacebook, FaInstagram } from "react-icons/fa";
// import { FaX, FaXTwitter } from "react-icons/fa6";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

  
//   return (
//     <header className={styles.header}>
//       <div className={styles.logoContainer}>
//         <h1 className={styles.title}><strong>WLHF</strong></h1>
//         {/* <img src="/logo.png" alt="NENGS Logo" className={styles.logo} /> */}
//       </div>
//       <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
//         <Link href="#about" className={styles.navItem}>About</Link>
//         <Link href="#contact" className={styles.navItem}>Contact</Link>
//         <Link href="#projects" className={styles.navItem}>Projects</Link>
//         <Link href="#policies" className={styles.navItem}>Policies</Link>
//       </nav>

//       <div className={styles.socials}>
//         <a href="#"><FaFacebook /></a>
//         <a href="#"><FaXTwitter/></a>
//         <a href="#"><FaInstagram /></a>
//       </div>
      
//       <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>
//     </header>
//   );
// } 



"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "../Header/page.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <h1 className={styles.logo}><strong>WLHF</strong></h1>
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
        <Link href="/about" className={styles.navItem}>About</Link>
        <Link href="#contact" className={styles.navItem}>Contact</Link>
        <Link href="#projects" className={styles.navItem}>Projects</Link>
        <Link href="/" className={styles.navItem}>Home</Link>
      </nav>

      <div className={styles.rightSection}>
        <div className={styles.socials}>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
