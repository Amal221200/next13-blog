"use client";
import styles from "./authLinks.module.css";
import Link from 'next/link';

const AuthLinks = () => {
  //temporary
  const status = "notauthenticated";
  return (
    <>
      {status === 'notauthenticated' ? (
        <Link className={styles.container} href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span>Logout</span>
        </>
      )}
    </>
  )
}
export default AuthLinks