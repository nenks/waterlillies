import styles from '../Footer/page.module.css';
import Image from 'next/image';
import Link from 'next/link';

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
          <p>Email: info@wlhf.org</p>
          <p>Phone: +234 123 456 7890</p>
          <div className={styles.socials}>
            <Link href="#">Facebook</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Instagram</Link>
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
