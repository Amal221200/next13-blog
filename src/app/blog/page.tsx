import CardList from "@/components/cardList/CardList";
import styles from "./blog.module.css";
import Menu from "@/components/menu/Menu";

const BlogPage: React.FC<BlogPageProps> = ({ searchParams }) => {
    const page: number = parseInt(searchParams.page) || 1
    const category: string = searchParams.category
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Style Blogs</h1>
            <div className={styles.content}>
                <CardList page={page} category={category} />
                <Menu />
            </div>
        </div>
    )
}

export default BlogPage;