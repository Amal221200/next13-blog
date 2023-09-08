import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

export default function SinglePage() {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
                        vel!
                    </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" fill className={styles.avatar} alt="post" />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Derrick Alexander</span>
                            <span className={styles.date}>01.07.2023</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" fill className={styles.image} alt="post" />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
                            pariatur. Veritatis perferendis, explicabo exercitationem facilis
                            odio quam distinctio nulla necessitatibus accusamus debitis
                            aperiam voluptatum illo repellendus quos! Doloremque cupiditate
                            aspernatur, officiis impedit beatae quod exercitationem, similique
                            quaerat ullam earum cumque! Numquam eaque, error quibusdam
                            adipisci natus modi iure velit culpa.
                        </p>
                        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing.</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                            accusantium doloremque eius et ex ab fugit dolores cum atque
                            commodi magni ipsam, odio delectus voluptatibus? Qui debitis sed
                            consequuntur dolores eaque quia, officia enim quidem accusantium
                            aut provident sequi mollitia vitae optio. Tempore aliquam
                            perspiciatis vitae, repellat consequuntur quidem nam?
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
                            quos sit illo sequi expedita soluta dolore impedit vero cumque!
                            Impedit aliquam illo deleniti eius dolorum recusandae accusantium
                            quis. Alias in distinctio quasi odio dolores, iste sit facere
                            adipisci fugit ad neque enim a quis asperiores sed praesentium
                            animi dignissimos voluptates. Cum reiciendis quod eligendi velit
                            provident recusandae amet corporis!
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
}
