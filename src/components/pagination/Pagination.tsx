"use client"
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const Pagination: React.FC<PaginationProps> = ({ hasNext, hasPrev, page }) => {
  const router = useRouter();
  const setPage = useCallback((abc: 'next' | 'prev') => {
    if (abc === 'next') {
      router.push(`/?page=${page + 1}`)
    } else {
      router.push(`/?page=${page - 1}`)
    }
  }, [page, router])
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={!hasPrev} onClick={() => setPage('prev')}>Previous</button>
      <button className={styles.button} disabled={!hasNext} onClick={() => setPage('next')}>Next</button>
    </div>
  )
}
export default Pagination