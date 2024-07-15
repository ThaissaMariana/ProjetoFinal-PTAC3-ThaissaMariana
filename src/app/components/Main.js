'use client'
import { useEffect, useState } from "react";
import styles from './main.module.css';
import Image from "next/image";
import LoadingIcon from "./LoadingIcon";
import ErrorGetFetchMusic from "./ErrorGetFetchMusic";
import Link from "next/link";

export default function Main() {
    const [listMusica, setListMusica] = useState([]);
    const [listCompletaMusica, setListCompletaMusica] = useState ([]);
    const [search, setSearch] = useState ("");
    const [errorFetch, setErrorFetch] = useState(false);

    useEffect( ()=> {
        const getMusica = async () =>{
            try{
            const response = await fetch("http://localhost:3000/api");
            const musicas = await response.json();

            setListMusica(musicas);
            setListCompletaMusica(musicas);
        }catch{
            setErrorFetch(true);
        }
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
         
       const searchText = (text) => {
        setSearch(text);
  
        if( text.trim() == ""){
              setListMusica(listCompletaMusica);
              return
        }
        const newList = listMusica.filter((musica) =>
           musica.nome.toUpperCase().trim().includes(search.toUpperCase().trim()))
        setListMusica(newList);
     }

     if(errorFetch == true){
        return <ErrorGetFetchMusic/>
       }
      
     if(listMusica[0] == null){
        return (
            <LoadingIcon/>
        ) 
       }
    
    return(
        <>
        <div className={styles.tudo}>
            <input type="text" value={search} placeholder="Pesquise a música"
             onChange={(event) => searchText( event.target.value )}/>

            <button className={styles.butão} onClick={ordenarAZ}>AZ</button>
            <button className={styles.button} onClick={ordenarZA}>ZA</button>
            <button className={styles.button} onClick={ordenarmaiorano}>Álbuns Antigos</button>
            <button className={styles.button} onClick={ordermenorano}>Álbuns Recentes</button>
        </div>

        <main className={styles.main}>
            
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

                  <Link href={`/music/${musica.id}`}>
                    Ver música
                  </Link>
                </div>
            ))}
        </main>
        </>
    );
} 