import Person from "../src/person";

describe('Person', () => {
  let person1;

  beforeEach(() => {
    person1 = new Person(26);
  });
  test('should creat a person object with age constructor', () => {
    expect(person1.age).toEqual(26);
  })
});