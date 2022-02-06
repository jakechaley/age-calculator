export default class Person {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  earthAge() {
    return this.age;
  }

  mercuryAge() {
    const mercuryAge = parseFloat((this.age / .24).toFixed());
    return mercuryAge;
  }

  venusAge() {
    const venusAge = parseFloat((this.age / .62).toFixed());
    return venusAge;
  }

  marsAge() {
    const marsAge = parseFloat((this.age / 1.88).toFixed());
    return marsAge;
  }
  jupiterAge() {
    const jupiterAge = parseFloat((this.age / 11.86).toFixed());
    return jupiterAge;
  }

  yearsLeftOnEarth() {
    const yearsLeftOnEarth = parseFloat((this.lifeExpectancy - this.age).toFixed());
    return yearsLeftOnEarth;
  }

  yearsLeftOnMercury() {
    const yearsLeftOnMercury = parseFloat((this.lifeExpectancy - this.mercuryAge()).toFixed());
    return yearsLeftOnMercury;
  }

  yearsLeftOnVenus() {
    const yearsLeftOnVenus = parseFloat((this.lifeExpectancy - this.venusAge()).toFixed());
    return yearsLeftOnVenus;
  }

  yearsLeftOnMars() {
    const yearsLeftOnMars = parseFloat((this.lifeExpectancy - this.marsAge()).toFixed());
    return yearsLeftOnMars;
  }

  yearsLeftOnJupiter() {
    const yearsLeftOnJupiter = parseFloat((this.lifeExpectancy - this.jupiterAge()).toFixed());
    return yearsLeftOnJupiter;
  }

  yearsPastLifeExpectancyOnEarth() {
    
  }
}
