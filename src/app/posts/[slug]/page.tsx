import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import React from "react";
import { getPost } from "@/utils";
import { formatDate } from "@/utils/constants";

const SinglePage: React.FC<ServerComponentsProps> = async ({ params }) => {
    const { slug } = params
    const post = await getPost(slug)
// console.log(post.comments)
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        {post.title}
                    </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            {post.user.image && <Image src={post.user.image} fill className={styles.avatar} alt="post" />}
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{post.user.name}</span>
                            <span className={styles.date}>{formatDate(post.createdAt)}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    {post.img && <Image src={post.img} fill className={styles.image} alt="post" />}
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        {post.body}
                    </div>
                    <div className={styles.comment}>
                        <Comments comments={post.comments} />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
}

export default SinglePage;