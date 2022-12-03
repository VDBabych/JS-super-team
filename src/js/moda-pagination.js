export class ModalPagination {
  #indexOfId;
  #idArr;
  constructor() {
    this.#idArr = [];
    this.#indexOfId = null;
  }

  setIdArr(atr) {
   this.#idArr = [...document.querySelectorAll(atr)].map(el => el.dataset.id);
  }

  setIndxOfId(id) {
   this.#indexOfId = this.#idArr.indexOf(id);
  }

  #indexIncr() {
    this.#indexOfId += 1;
    if (this.#indexOfId > this.#idArr.length - 1) {
      this.#indexOfId = 0;
    }
    
    return this.#indexOfId;

  }

  #indexDecr() {
    this.#indexOfId -= 1;
    if (this.#indexOfId < 0) {
        this.#indexOfId = this.#idArr.length - 1;
    }

    return this.#indexOfId;
  }

  getPreviousId() {
    return this.#idArr[this.#indexDecr()];
  }

  getNextId() {
    return this.#idArr[this.#indexIncr()];
  }
}