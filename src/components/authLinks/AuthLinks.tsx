"use client";
import styles from "./authLinks.module.css";
import Link from 'next/link';
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState<boolean>(false)
  //temporary
  const { status } = useSession();
  return (
    <>
      {status === 'unauthenticated' ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.link} onClick={() => signOut()}>Logout</span>
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
            {status === 'unauthenticated' ? (
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