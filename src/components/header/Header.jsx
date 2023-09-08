import styles from "./header.module.css";
import Image from 'next/image';
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.social}>
        <Image src={"/facebook.png"} width={24} height={24} alt="facebook" />
        <Image src={"/instagram.png"} width={24} height={24} alt="instagram" />
        <Image src={"/tiktok.png"} width={24} height={24} alt="tiktok" />
        <Image src={"/youtube.png"} width={24} height={24} alt="youtube" />
      </div>
      <div className={styles.logo}>
        lamablog
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </header>
  )
}
export default Header