/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
export default class ErrorRepository {
  constructor() {
    this.collection = new Map();
  }

  translate(code) {
    if (this.collection.has(code) !== true) {
      throw new Error('Unknown error');
    } else return this.collection.get(code);
  }
}
