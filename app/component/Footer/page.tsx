import styles from '../Footer/page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoSection}>
          <Image src="/image/wlhf.JPG" alt="NGO Logo" width={60} height={60} />
          <p className={styles.orgName}>Watery Lillies Hope Foundation</p>
        </div>

        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/donate">Donate</Link>
        </div>

        <div className={styles.contact}>
          <p>Email: infowlhf@gmail.com</p>
          <p>Phone: 09162270997 | 08161113412 | 07033126784 </p>
          <div className={styles.socials}>
            <Link
            href="https://www.facebook.com/share/1AvuDiXbgi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socials__link__li}
          >
            <FaFacebook />
          </Link>

          <Link
            href="https://www.instagram.com/infowlhf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socials__link__li}
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://www.x.com/infowlhf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socials__link__li}
          >
            <FaXTwitter />
          </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Watery Lillies Hope Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
