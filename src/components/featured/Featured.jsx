import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Amal Murikkoli here!</b> Discover my cover stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" fill alt="post1" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, iste?</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quo quam deleniti quaerat, quos sunt. Nulla, odio quos maiores odit commodi ducimus voluptatem voluptas, dolor incidunt laboriosam, corrupti suscipit fugit.</p>
          <button className={styles.button} type="button">Read More</button>
        </div>
      </div>
    </div>
  )
}
export default Featured