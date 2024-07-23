import styles from './components/not-found.module.css'
import './components/footer.module.css';


export default function NotFound() {
    return (
        <main className={styles.centralizar}>
        <div className={styles.card}>
            <h2 className="">Página não encontrada!</h2>
            <img className={styles.img} src="https://annymota.com/wp-content/uploads/2023/05/ERRO1-300x176.png" alt=""></img>
            <a href="/">Retornar para Home</a>
        </div>
        </main>
    );
}