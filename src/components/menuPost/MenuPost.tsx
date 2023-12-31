import Link from "next/link";
import styles from "./menuPost.module.css";
import Image from "next/image";
import { categoryMenuBg } from "../../utils/constants";
import { capitalizeWord } from "../../utils";
import React from "react";

interface MenuPostsProps {
    withImage?: boolean,
    category: string
}

const MenuPosts: React.FC<MenuPostsProps> = ({ withImage, category }) => {

    return (
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                {
                    withImage && <div className={styles.imgContainer}>
                        <Image src="/p1.jpeg" alt="posts" fill className={styles.image} />
                    </div>
                }
                <div className={styles.textContainer}>
                    <span className={`${styles.category}`} style={{ background: categoryMenuBg[category] }}>{capitalizeWord(category)}</span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>10.03.2023</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default MenuPosts