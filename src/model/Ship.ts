export default class Ship {
  private length: number;
  private hits: number;

  constructor(length: number) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    return this.length === this.hits;
  }
}
