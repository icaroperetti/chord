import Node from "./Node.js";

let map = new Map();

let chord = [];

let actives = [0, 5, 8, 10];

const musicas = [
  null,
  ["musica1.mp3", "musica2.mp3", "musica4.mp3"],
  null,
  null,
  ["musica5.mp3", "musica6.mp3", "musica7.mp3"],
  null,
  ["musica8.mp3", "musica9.mp3", "musica10.mp3"],
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,

  ,
];

const size = 10;
const createList = () => {
  for (let i = 0; i < size; i++) {
    if (i == 0) {
      chord.push(new Node(i, musicas[i], i + 1, size - 1, actives.includes(i)));
    } else if (i == size - 1) {
      chord.push(new Node(i, musicas[i], 0, i - 1, actives.includes(i)));
    } else {
      chord.push(new Node(i, musicas[i], i + 1, i - 1, actives.includes(i)));
    }
  }
};

const setReponsabilidade = () => {
  //Percorre a lista em busca de ativos
  for (let i = 0; i < size; i++) {
    if (chord[i].ativo) {
      const hashMap = new Map();

      let j = i;

      for (;;) {
        //Parar o for infinito quando ele estiver no inicio ou achar o último ativo
        if ((chord[j].ativo && i !== j) || j === 0) {
          break;
        }

        //Criando o nome da músca e o nodo que ela está
        for (const musica of chord[j].musicas) {
          hashMap.set(musica, chord[j].id);
        }
        j--;
      }
      chord[i].responsabilidade = hashMap;
    }
  }
};

const searchMusicInResponsabilidade = (music) => {
  for (let j = 0; j < size; j++) {
    if (chord[j].ativo) {
      for (const musica of chord[j].musicas) {
        console.log("Entrei");
        if (music === musica) {
          console.log("Arquivo encontrado no nodo:", chord[j].ids, "\n\n");
          return chord[j].id;
        }
      }
    }
  }
};

const setActive = (id) => {
  chord[id].ativo = true;
  setReponsabilidade();
};

createList();

setActive(7)
setReponsabilidade();

searchMusicInResponsabilidade("musica5.mp3");

console.log(chord);
