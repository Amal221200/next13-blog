import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";
import { FooterLinks } from "@/utils/constants";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" width={50} height={50} alt="logo" />
          <h1>Lama Blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In suscipit molestiae fugit nihil illo sed unde totam doloremque perspiciatis voluptas asperiores sint obcaecati enim laudantium debitis, ut maxime placeat ad?
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="facebook" width={18} height={18} />
          <Image src="/instagram.png" alt="instagram" width={18} height={18} />
          <Image src="/youtube.png" alt="youtube" width={18} height={18} />
          <Image src="/tiktok.png" alt="tiktok" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        {
          FooterLinks.map((FooterLink, index) => (
            <div className={styles.lists} key={index}>
              <span className={styles.listTitle}>{FooterLink.name}</span>
              {FooterLink.links.map((link, index) => (
                <Link href={link.href} key={index}>{link.text}</Link>
              ))}
            </div>
          ))
        }
      </div>
    </footer>
  )
}
export default Footer