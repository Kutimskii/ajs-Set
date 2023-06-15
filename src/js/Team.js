export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    this.members.add(person);
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
