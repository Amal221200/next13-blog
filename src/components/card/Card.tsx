import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

interface CardProps {
    post: PostType
}
const Card: React.FC<CardProps> = ({ post }) => {
    const { slug, title, desc, img } = (post)
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                {img && <Image src={img} alt="post" fill className={styles.image} />}
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>{slug.toUpperCase()}</span>
                </div>
                <Link href="/">
                    <h1 className={styles.title}>{title}</h1>
                </Link>
                <p className={styles.desc}>{desc}</p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}
export default Card