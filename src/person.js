export default class Person {
  constructor(age) {
    this.age = age;
    this.lifeExpectancy = 73;
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
  averageLifeExpectancy() {
  const averageLifeExpectancy = 73; //average life expectancy for humans rounded to a fixed point.
  return averageLifeExpectancy;
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
    
  }

}
