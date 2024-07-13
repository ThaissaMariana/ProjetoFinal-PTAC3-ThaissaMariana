import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
        <p>© 2024 Arctic Monkeys | Privacy Policy</p>
        </footer>
    );
}