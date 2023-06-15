export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error('Персонаж уже присутсвует');
    } else { this.members.add(person); }
  }

  addAll(...persons) {
    persons.forEach((item) => this.members.add(item));
  }

  toArray() {
    const result = [];
    this.members.forEach((item) => result.push(item));
    return result;
  }
}
