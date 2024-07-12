import React from "react";
import styles from './main.module.css';
import Image from "next/image";
export default async function Main() {
    const response = await fetch("http://localhost:3000/api");
    const musicas = await response.json();
    
    return(
        <main className={styles.main}>
            <h2 className={styles.h2}>Músicas</h2>
            {musicas.map((musica) => (
                <div className={styles.card} key={musica.id} >
                    <h3>{musica.nome}</h3>
                    <p>{musica.artista}</p>
                    <p>Álbum: {musica.album}</p>
                    <p>Ano de Lançamento: {musica.anoLancamento}</p>
                    <Image
                    width={250}
                    height={250}
                    src={musica.imagem}
                    alt={musica.nome} />
                </div>
            ))}
        </main>
    );
} 