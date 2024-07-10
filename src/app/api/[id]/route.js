import { NextResponse } from "next/server";
import { listaDeMusicas } from "../route";

export async function GET(req){
    const id = parseInt(req.url.split('/api/')[1]);
    let musica = null;
    listaDeMusicas.forEach((music)=> {
        if(music.id == id){
           musica = music
        }
    });
    return NextResponse.json(musica);
}