export default class Node {
  constructor(id, musicas, nextId, prevId, active, hashMap) {
    this._id = id;
    this._nextId = nextId;
    this._prevId = prevId;
    this._music = musicas || [];
    this._responsavel = null;
    this._active = active;
  }

  get ids() {
    return this._id;
  }

  set responsabilidade(responsabilidades) {
    this._responsavel = responsabilidades;
  }

  get responsabilidade() {
    return this._responsavel;
  }
  get ativo() {
    return this._active;
  }

  set id(id) {
    this._id = id;
  }

  get nextId() {
    return this._nextId;
  }

  set nextId(nextId) {
    this._nextId = nextId;
  }

  set prevId(prevId) {
    this._prevId = prevId;
  }

  get musicas() {
    return this._music;
  }

  set music(music) {
    this._music = music;
  }
}
