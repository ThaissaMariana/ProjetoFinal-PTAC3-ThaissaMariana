'use client'
import { useEffect, useState } from "react";
import styles from './main.module.css';
import Image from "next/image";
import LoadingIcon from "./LoadingIcon";

export default function Main() {
    const [listMusica, setListMusica] = useState([]);

    useEffect( ()=> {
        const getMusica = async () =>{
            const response = await fetch("http://localhost:3000/api");
            const musicas = await response.json();

            setListMusica(musicas);
        }
        getMusica();
    }, []);
    
    const ordenarAZ = () =>{
        const newList = [...listMusica].sort( (a,z)=>
              a.nome.localeCompare(z.nome)
        );
        setListMusica(newList);
       }
    
       const ordenarZA = () =>{
        let newList = [...listMusica].sort( (a,z)=>
              a.nome.localeCompare(z.nome)
        );
        newList = newList.reverse();
        setListMusica(newList);
       }
    
       const ordenarmaiorano = () =>{
        const newList = [...listMusica].sort( (a,z)=>
              a.anoLancamento - z.anoLancamento
        );
        setListMusica(newList);
       }
    
       const ordermenorano = () =>{
        let newList = [...listMusica].sort( (a,z)=>
              a.anoLancamento - z.anoLancamento
        );
        newList = newList.reverse();
        setListMusica(newList);
       }

       if(listMusica[0] == null){
        return <LoadingIcon/>
       }
    
     
    return(
        <>
        <div>
            <button className={styles.button} onClick={ordenarAZ}>AZ</button>
            <button className={styles.button} onClick={ordenarZA}>ZA</button>
            <button className={styles.button} onClick={ordenarmaiorano}>Álbuns Antigos</button>
            <button className={styles.button} onClick={ordermenorano}>Álbuns Recentes</button>
        </div>

        <main className={styles.main}>
            <h2 className={styles.h2}>Músicas</h2>
            {listMusica.map((musica) => (
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
        </>
    );
} 