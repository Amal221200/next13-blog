import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import { formatDate } from "@/utils/constants";

const Comment: React.FC<CommentProps> = ({ comment }) => {
    return (
        <div className={styles.comment}>
            <div className={styles.user}>
               {comment.user?.image && <Image src={comment.user.image} width={50} height={50} alt="user" className={styles.image} />}
                <div className={styles.userInfo}>
                    <span>{comment.user?.name}</span>
                    <span className={styles.date}>{formatDate(comment.createdAt)}</span>
                </div>
            </div>
            <p className={styles.body}>{comment.desc}</p>
        </div>
    )
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
    const status = 'authenticated'
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Comments</h2>
            {
                status === 'authenticated' ?
                    (
                        <form className={styles.write}>
                            <textarea placeholder="Write a comment..." className={styles.input} />
                            <button type="submit" className={styles.button}>Send</button>
                        </form>
                    ) : (
                        <Link href="/login">Login to write a comment</Link>
                    )
            }

            <div className={styles.comments}>
                {
                    comments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))
                }
            </div>
        </div>
    )
}
export default Comments