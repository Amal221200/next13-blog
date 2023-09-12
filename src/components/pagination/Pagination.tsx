"use client"
import styles from "./pagination.module.css";
import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

const Pagination: React.FC<PaginationProps> = ({ hasNext, hasPrev, page }) => {
  const router = useRouter();
  const pathname = usePathname();
  
  const setPage = useCallback((abc: 'next' | 'prev') => {
    if (abc === 'next') {
      router.push(`${pathname}?page=${page + 1}`)
    } else {
      router.push(`${pathname}?page=${page - 1}`)
    }
  }, [page, router, pathname])

  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={!hasPrev} onClick={() => setPage('prev')}>Previous</button>
      <button className={styles.button} disabled={!hasNext} onClick={() => setPage('next')}>Next</button>
    </div>
  )
}
export default Pagination