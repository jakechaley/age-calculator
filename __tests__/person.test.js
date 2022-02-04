import Person from "../src/person";

describe('Person', () => {
  let person1;

  beforeEach(() => {
    person1 = new Person(26);
  });
  test('should create a person object with age constructor', () => {
    expect(person1.age).toEqual(26);
  });
  test('should return persons age on earth', () => {
    expect(person1.earthAge()).toEqual(26);
  });
  test('should return persons age on mercury', () => {
    expect(person1.mercuryAge()).toEqual(108);
  });
  test('should return persons age on venus', () => {
    expect(person1.venusAge()).toEqual(42);
  })
});