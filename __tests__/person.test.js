import Person from "../src/person";

describe('Person', () => {
  let person1;

  beforeEach(() => {
    person1 = new Person(26, 73);
    
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
  });

  test('should return persons age on mars', () => {
    expect(person1.marsAge()).toEqual(14);
  });

  test('should return persons age on jupiter', () => {
    expect(person1.jupiterAge()).toEqual(2);
  });

  test('should return how many years user has left to live on earth', () => {
    expect(person1.yearsLeftOnEarth()).toEqual(47);
  });

  test('should return how many years user has left to live on mercury', () => {
    const person2 = new Person(2, 73)
    expect(person2.yearsLeftOnMercury()).toEqual(65);
  });

  test('should return how many years user has left to live on venus', () => {
    expect(person1.yearsLeftOnVenus()).toEqual(31)
  });

  test('should return how many years user has left to live on mars', () => {
    expect(person1.yearsLeftOnMars()).toEqual(59)
  });

  test('should return how many years user has left to live on jupiter', () => {
    expect(person1.yearsLeftOnJupiter()).toEqual(71)
  });

  test('should return years lived past life expectancy on earth', () => {
    const person3 = new Person(80, 73);
    expect(person3.yearsPastLifeExpectancyOnEarth()).toEqual(7);
  });

  test('should return 0 if user has not lived past life expectancy on earth', () => {
    const person4 = new Person(50, 73);
    expect(person4.yearsPastLifeExpectancyOnEarth()).toEqual(0)
  });
  
  test('should return years lived past life expectancy on mercury', () => {
    expect(person1.yearsPastLifeExpectancyOnMercury()).toEqual(35)
  });


});