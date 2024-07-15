import styles from "./page.module.css";
import Image from "next/image";

export default async function Musica({params}){
    const response = await fetch("http://localhost:3000/api/" + params.id);
    const musicas = await response.json();

    return(
        <main className={styles.main}>
            <div className={styles.card} key={musicas.id} >
                    <h3>{musicas.nome}</h3>
                    <p>{musicas.artista}</p>
                    <p>Álbum: {musicas.album}</p>
                    <p>Ano de Lançamento: {musicas.anoLancamento}</p>
                    <Image
                    width={250}
                    height={250}
                    src={musicas.imagem}
                    alt={musicas.nome} />
            </div>
        </main>

    );
}