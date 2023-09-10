import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt="post" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1 className={styles.title}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                </Link>
                <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque, alias libero reiciendis explicabo officia voluptatibus doloremque eum necessitatibus recusandae!</p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}
export default Card