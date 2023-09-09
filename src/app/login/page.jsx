import styles from "./login.module.css";

export default function LoginPage() {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <button type="button" className={styles.socialButton}>
                    Sign in with Google
                </button>
                <button type="button" className={styles.socialButton}>
                    Sign in with GitHub
                </button>
                <button type="button" className={styles.socialButton}>
                    Sign in with Facebook
                </button>
            </div>
        </div>
    )
}