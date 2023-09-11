import styles from "./pagination.module.css";

const Pagination: React.FC<PaginationProps> = ({ hasNext, hasPrev }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={!hasPrev}>Previous</button>
      <button className={styles.button} disabled={!hasNext}>Next</button>
    </div>
  )
}
export default Pagination