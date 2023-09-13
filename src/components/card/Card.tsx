import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";
import { formatDate } from "@/utils/constants";

interface CardProps {
    post: PostType
}

const Card: React.FC<CardProps> = ({ post }) => {

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                {post.img && <Image src={post.img} alt="post" fill className={styles.image} />}
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{formatDate(post.createdAt)} - </span>
                    <span className={styles.category}>{post.catSlug.toUpperCase()}</span>
                </div>
                <Link href={`/posts/${post.slug}`}>
                    <h1 className={styles.title}>{post.title}</h1>
                </Link>
                <p className={styles.desc}>{post.desc.slice(0, 300)}...</p>
                <Link href={`/posts/${post.slug}`} className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}
export default Card