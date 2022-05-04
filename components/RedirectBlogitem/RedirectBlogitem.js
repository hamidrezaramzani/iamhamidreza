import React from 'react'
import styles from "./styles.module.css";
const RedirectBlogitem = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.loading_svg}></div>
            <h1>Wait for redirecting ... </h1>
        </div>
    )
}

export default RedirectBlogitem