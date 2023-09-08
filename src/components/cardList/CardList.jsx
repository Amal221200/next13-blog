import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../card/Card";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Posts</h2>
      <div className={styles.posts}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Card key={i} />
        ))}
      </div>
      <Pagination />
    </div>
  )
}
export default CardList