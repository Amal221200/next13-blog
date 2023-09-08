"use client";
import styles from "./authLinks.module.css";
import { useState } from "react";
import Link from 'next/link';

const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  //temporary
  const status = "notauthenticated";
  return (
    <>
      {status === 'notauthenticated' ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen((state) => !state)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      {
        open && (
          <div className={styles.responsiveMenu}>
            <Link href="/">Homepage</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            {status === 'notauthenticated' ? (
              <Link href="/login">Login</Link>
            ) : (
              <>
                <Link href="/write">Write</Link>
                <span className={styles.link}>Logout</span>
              </>
            )}
          </div>
        )
      }
    </>
  )
}
export default AuthLinks