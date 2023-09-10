import CardList from "@/components/cardList/CardList";
import styles from "./blog.module.css";
import Menu from "@/components/menu/Menu";

export default function BlogPage() {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Style Blogs</h1>
            <div className={styles.content}>
                <CardList />
                <Menu />
            </div>
        </div>
    )
}