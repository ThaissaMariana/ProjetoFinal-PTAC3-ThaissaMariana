import { NextResponse } from "next/server";

export const listaDeMusicas = [
    {
       id: 1,
       nome: "When The Sun Goes Down",
       artista:"Arctic Monkeys",
       album: "Whatever People Say I Am, That's What I'm Not",
       anoLancamento: 2006,
       imagem: "https://rollingstone.uol.com.br/media/uploads/21whateverpeoplesayiam1.jpg"
    },
    {
       id: 2,
       nome: "I Bet You Look Good On The Dancefloor",
       artista:"Arctic Monkeys",
       album: "Whatever People Say I Am, That's What I'm Not",
       anoLancamento: 2006,
       imagem: "https://rollingstone.uol.com.br/media/uploads/21whateverpeoplesayiam1.jpg"
    },
    {
       id: 3,
       nome: "The View From The Afternoon",
       artista:"Arctic Monkeys",
       album: "Whatever People Say I Am, That's What I'm Not",
       anoLancamento: 2006,
       imagem: "https://rollingstone.uol.com.br/media/uploads/21whateverpeoplesayiam1.jpg"
    },
    {
       id: 4,
       nome: "Still Take You Home",
       artista:"Arctic Monkeys",
       album: "Whatever People Say I Am, That's What I'm Not",
       anoLancamento: 2006,
       imagem: "https://rollingstone.uol.com.br/media/uploads/21whateverpeoplesayiam1.jpg"
    },
    {
       id: 5,
       nome: "Fake Tales Of San Francisco",
       artista:"Arctic Monkeys",
       album: "Whatever People Say I Am, That's What I'm Not",
       anoLancamento: 2006,
       imagem: "https://rollingstone.uol.com.br/media/uploads/21whateverpeoplesayiam1.jpg"
    },
    {
       id: 6,
       nome: "505",
       artista:"Arctic Monkeys",
       album: "Favourite Worst Nightmare",
       anoLancamento: 2007,
       imagem: "https://rollingstone.uol.com.br/media/uploads/21favouriteworstnightmare2.jpg"
    },
    {
        id: 7,
        nome: "Balaclava",
        artista:"Arctic Monkeys",
        album: "Favourite Worst Nightmare",
        anoLancamento: 2007,
        imagem: "https://rollingstone.uol.com.br/media/uploads/21favouriteworstnightmare2.jpg"
     },
     {
        id: 8,
        nome: "This House is a Circus",
        artista:"Arctic Monkeys",
        album: "Favourite Worst Nightmare",
        anoLancamento: 2007,
        imagem: "https://rollingstone.uol.com.br/media/uploads/21favouriteworstnightmare2.jpg"
     },
     {
        id: 9,
        nome: "Teddy Picker",
        artista:"Arctic Monkeys",
        album: "Favourite Worst Nightmare",
        anoLancamento: 2007,
        imagem: "https://rollingstone.uol.com.br/media/uploads/21favouriteworstnightmare2.jpg"
     },
     {
        id: 10,
        nome: "D is for Dangerous",
        artista:"Arctic Monkeys",
        album: "Favourite Worst Nightmare",
       anoLancamento: 2007,
       imagem: "https://rollingstone.uol.com.br/media/uploads/21favouriteworstnightmare2.jpg"
     },
     {
      id: 11,
      nome: "Crying Lightning",
      artista:"Arctic Monkeys",
      album: "Humbug",
      anoLancamento: 2009,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21humbug3.jpg"
   },
   {
      id: 12,
      nome: "Dangerous Animals",
      artista:"Arctic Monkeys",
      album: "Humbug",
      anoLancamento: 2009,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21humbug3.jpg"
   },
   {
      id: 13,
      nome: "Cornerstone",
      artista:"Arctic Monkeys",
      album: "Humbug",
      anoLancamento: 2009,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21humbug3.jpg"
   },
   {
      id: 14,
      nome: "Pretty Visitors",
      artista:"Arctic Monkeys",
      album: "Humbug",
      anoLancamento: 2009,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21humbug3.jpg"
   },
   {
      id: 15,
      nome: "The Jeweller's Hands",
      artista:"Arctic Monkeys",
      album: "Humbug",
      anoLancamento: 2009,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21humbug3.jpg"
   },
   {
      id: 16,
      nome: "She's Thunderstorms",
      artista:"Arctic Monkeys",
      album: "Suck It and See",
      anoLancamento: 2011,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21suckitandsee4.jpg"
   },
   {
      id: 17,
      nome: "Brick By Brick",
      artista:"Arctic Monkeys",
      album: "Suck It and See",
      anoLancamento: 2011,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21suckitandsee4.jpg"
   },
   {
      id: 18,
      nome: "Black Treacle",
      artista:"Arctic Monkeys",
      album: "Suck It and See",
      anoLancamento: 2011,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21suckitandsee4.jpg"
   },
   {
      id: 19,
      nome: "Suck It and See",
      artista:"Arctic Monkeys",
      album: "Suck It and See",
      anoLancamento: 2011,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21suckitandsee4.jpg"
   },
   {
      id: 20,
      nome: "Reckless Serenade",
      artista:"Arctic Monkeys",
      album: "Suck It and See",
      anoLancamento: 2011,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21suckitandsee4.jpg"
   },
   {
      id: 21,
      nome: "R U Mine?",
      artista:"Arctic Monkeys",
      album: "AM",
      anoLancamento: 2013,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21am5.jpg"
   },
   {
      id: 22,
      nome: "Arabella",
      artista:"Arctic Monkeys",
      album: "AM",
      anoLancamento: 2013,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21am5.jpg"
   },
   {
      id: 23,
      nome: "No.1 Party Anthem",
      artista:"Arctic Monkeys",
      album: "AM",
      anoLancamento: 2013,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21am5.jpg"
   },
   {
      id: 24,
      nome: "Why' You Only Call Me When You're High?",
      artista:"Arctic Monkeys",
      album: "AM",
      anoLancamento: 2013,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21am5.jpg"
   },
   {
      id: 25,
      nome: "Snap Out Of It",
      artista:"Arctic Monkeys",
      album: "AM",
      anoLancamento: 2013,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21am5.jpg"
   },
   {
      id: 26,
      nome: "Four Out Of Five",
      artista:"Arctic Monkeys",
      album: "Tranquility Base Hotel & Casino",
      anoLancamento: 2018,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21tranquilitybasehotelcasino6.jpg"
   },
   {
      id: 27,
      nome: "Golden Trunks",
      artista:"Arctic Monkeys",
      album: "Tranquility Base Hotel & Casino",
      anoLancamento: 2018,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21tranquilitybasehotelcasino6.jpg"
   },
   {
      id: 28,
      nome: "One Point Perspective",
      artista:"Arctic Monkeys",
      album: "Tranquility Base Hotel & Casino",
      anoLancamento: 2018,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21tranquilitybasehotelcasino6.jpg"
   },
   {
      id: 29,
      nome: "Batphone",
      artista:"Arctic Monkeys",
      album: "Tranquility Base Hotel & Casino",
      anoLancamento: 2018,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21tranquilitybasehotelcasino6.jpg"
   },
   {
      id: 30,
      nome: "Tranquility Base Hotel & Casino",
      artista:"Arctic Monkeys",
      album: "Tranquility Base Hotel & Casino",
      anoLancamento: 2018,
      imagem: "https://rollingstone.uol.com.br/media/uploads/21tranquilitybasehotelcasino6.jpg"
   },
   {
      id: 31,
      nome: "There'd Better Be A Mirrorball",
      artista:"Arctic Monkeys",
      album: "The Car",
      anoLancamento: 2022,
      imagem: "https://rollingstone.uol.com.br/media/uploads/2023/06/30arcticvinil1.jpg"
   },
   {
      id: 32,
      nome: "Sculptures Of Anything Goes",
      artista:"Arctic Monkeys",
      album: "The Car",
      anoLancamento: 2022,
      imagem: "https://rollingstone.uol.com.br/media/uploads/2023/06/30arcticvinil1.jpg"
   },
   {
      id: 33,
      nome: "Body Paint",
      artista:"Arctic Monkeys",
      album: "The Car",
      anoLancamento: 2022,
      imagem: "https://rollingstone.uol.com.br/media/uploads/2023/06/30arcticvinil1.jpg"
   },
   {
      id: 34,
      nome: "Mr Schwartz",
      artista:"Arctic Monkeys",
      album: "The Car",
      anoLancamento: 2022,
      imagem: "https://rollingstone.uol.com.br/media/uploads/2023/06/30arcticvinil1.jpg"
   },
   {
      id: 35,
      nome: "The Car",
      artista:"Arctic Monkeys",
      album: "The Car",
      anoLancamento: 2022,
      imagem: "https://rollingstone.uol.com.br/media/uploads/2023/06/30arcticvinil1.jpg"
   },
];

