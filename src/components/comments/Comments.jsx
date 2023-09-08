import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comment = () => {
    return (
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src="/p1.jpeg" width={50} height={50} alt="user" className={styles.image} />
                <div className={styles.userInfo}>

                    <span>Bettie Allen</span>
                    <span className={styles.date}>12.02.2023</span>
                </div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sed odit iusto dolorum eum suscipit perspiciatis neque debitis ipsa aut enim, consequuntur temporibus ipsum nihil, exercitationem dolores quasi magnam. Perspiciatis.</p>
        </div>
    )
}

const Comments = () => {
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
                    [1, 2, 3, 4, 5].map((elem) => (
                        <Comment key={elem} />
                    ))
                }
            </div>
        </div>
    )
}
export default Comments