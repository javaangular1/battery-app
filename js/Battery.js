class Battery {

  constructor(pLevel) {

    this.level = pLevel;
    this.full = 100;
    this.empty = 0;

  }

  getLevel() {
    return this.level;
  }

  getFull() {
    return this.full;
  }

  getEmpty() {
    return this.empty;
  }

  charging() {
    this.level++;

  }

  discharging() {
    this.level--;
  }



}
