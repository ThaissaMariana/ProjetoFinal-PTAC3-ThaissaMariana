import { NextResponse } from "next/server";

export const listaDeMusicas = [
    {
       id: 1,
       nome: "505",
       artista:"Arctic Monkeys",
       visualizacao: 491255860,
       curtidas: 4100000
    },
    {
        id: 2,
        nome: "Crying Lightning",
        artista:"Arctic Monkeys",
        visualizacao: 32529775,
        curtidas: 219000
     },
     {
        id: 3,
        nome: "Body Paint",
        artista:"Arctic Monkeys",
        visualizacao: 9522993,
        curtidas: 258000
     },
     {
        id: 4,
        nome: "Four Out Of Five",
        artista:"Arctic Monkeys",
        visualizacao: 58739798,
        curtidas: 652000
     },
     {
        id: 5,
        nome: "Perhaps Vampires Is A Bit Strong But...",
        artista:"Arctic Monkeys",
        visualizacao: 3162311,
        curtidas: 31000
     },
     {
        id: 6,
        nome: "Teddy Picker",
        artista:"Arctic Monkeys",
        visualizacao: 66779443,
        curtidas: 325000
     },
     {
        id: 7,
        nome: "I Bet You Look Good On The Dancefloor",
        artista:"Arctic Monkeys",
        visualizacao: 54167949,
        curtidas: 302000
     },
     {
        id: 8,
        nome: "The View From The Afternoon",
        artista:"Arctic Monkeys",
        visualizacao: 16504162,
        curtidas: 107000
     },
     {
        id: 9,
        nome: "Leave Before The Lights Come On",
        artista:"Arctic Monkeys",
        visualizacao: 26135205,
        curtidas: 119000
     },
     {
        id: 10,
        nome: "Fake Tales Of San Francisco",
        artista:"Arctic Monkeys",
        visualizacao: 14298688,
        curtidas: 55000
     },
];

export async function GET(){
    return NextResponse.json(listaDeMusicas)
}