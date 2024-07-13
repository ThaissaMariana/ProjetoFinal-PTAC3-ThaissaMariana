import React from "react";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.nomes}>
                <h1 className={styles.nome1}>Store</h1>
                <h1 className={styles.nome}>Live</h1>
                <h1 className={styles.nome}>Videos</h1>
            </div>
            <div className={styles.arctic}>
                <div className={styles.name}>ARCTIC</div>
            </div>
            <div className={styles.icons}>
                <Image
                    className={styles.icon}
                    width={40}
                    height={40}
                    src={"https://cdn-icons-png.flaticon.com/512/20/20673.png"}
                />
                <Image
                    className={styles.icon}
                    width={40}
                    height={40}
                    src={"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/black-instagram-icon.png"}
                />
                <Image
                    className={styles.icon}
                    width={40}
                    height={40}
                    src={"https://seeklogo.com/images/T/twitter-logo-1DEF94C339-seeklogo.com.png"}
                />
                <Image
                    className={styles.icon}
                    width={40}
                    height={40}
                    src={"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-icon.png"}
                />
                <Image
                    className={styles.icon}
                    width={40}
                    height={40}
                    src={"https://cdn-icons-png.flaticon.com/512/1384/1384087.png"}
                />
                <Image
                    className={styles.icon}
                    width={40}
                    height={40}
                    src={"https://cdn-icons-png.flaticon.com/512/152/152756.png"}
                />
            </div>
        </header>
    );
}
