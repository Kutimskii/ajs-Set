import Team from '../Team';
import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';

const Bman = new Bowman('Федя', 'Bowman', 100, 1);
const Sman = new Swordsman('Петя', 'Swordsman', 100, 1);
const Magan = new Magician('Нюра', 'Swordsman', 100, 1);

test('method add different heroes', () => {
  const ClassTeam = new Team();
  ClassTeam.add(Bman);
  ClassTeam.add(Sman);
  const result = ClassTeam.members.size;
  expect(result).toEqual(2);
});

test('method add the same heroes', () => {
  const ClassTeam = new Team();
  expect(() => {
    ClassTeam.add(Bman);
    ClassTeam.add(Bman);
  }).toThrow(Error);
});

test('method addAll', () => {
  const ClassTeam = new Team();
  ClassTeam.addAll(Bman, Sman, Magan);
  const result = ClassTeam.members.size;
  expect(result).toEqual(3);
});

test('method addAll the same heroes', () => {
  const ClassTeam = new Team();
  ClassTeam.addAll(Bman, Sman, Magan, Bman, Bman);
  const result = ClassTeam.members.size;
  expect(result).toEqual(3);
});

test('method toArray ', () => {
  const ClassTeam = new Team();
  ClassTeam.addAll(Bman, Sman, Magan);
  const result = ClassTeam.toArray();
  expect(result.length).toEqual(3);
});
