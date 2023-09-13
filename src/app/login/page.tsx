"use client"
import { useSession, signIn } from "next-auth/react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";

export default function LoginPage() {

    const { status } = useSession()
    const router = useRouter()
    
    if (status === 'loading') {
        return (
            <div className={styles.loading}>Loading...</div>
        )
    }

    if (status === 'authenticated') {
        router.push('/')
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <button type="button" className={styles.socialButton} onClick={() => signIn("google")}>
                    Sign in with Google
                </button>
                <button type="button" className={styles.socialButton} onClick={() => signIn("github")}>
                    Sign in with GitHub
                </button>
                <button type="button" className={styles.socialButton} onClick={() => signIn("facebook")}>
                    Sign in with Facebook
                </button>
            </div>
        </div>
    )
}