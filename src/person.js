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
    const yearsPastLifeExpectancyOnEarth = parseFloat((this.earthAge() - this.lifeExpectancy).toFixed());
    if (yearsPastLifeExpectancyOnEarth < 0) {
      return 0;
    } else {
      return yearsPastLifeExpectancyOnEarth;
    }
  }

  yearsPastLifeExpectancyOnMercury() {
    const yearsPastLifeExpectancyOnMercury = parseFloat((this.mercuryAge() - this.lifeExpectancy).toFixed());
    if (yearsPastLifeExpectancyOnMercury < 0) {
      return 0;
    } else {
      return yearsPastLifeExpectancyOnMercury;
    }
  }

  yearsPastLifeExpectancyOnVenus() {
    const yearsPastLifeExpectancyOnVenus = parseFloat((this.venusAge() - this.lifeExpectancy).toFixed());
    if (yearsPastLifeExpectancyOnVenus < 0) {
      return 0;
    } else {
      return yearsPastLifeExpectancyOnVenus;
    }
  }

  yearsPastLifeExpectancyOnMars() {
    const yearsPastLifeExpectancyOnMars = parseFloat((this.marsAge() - this.lifeExpectancy).toFixed());
    if (yearsPastLifeExpectancyOnMars < 0) {
      return 0;
    } else {
      return yearsPastLifeExpectancyOnMars;
    }
  }
  
  yearsPastLifeExpectancyOnJupiter() {
    const yearsPastLifeExpectancyOnJupiter = parseFloat((this.jupiterAge() - this.lifeExpectancy).toFixed());
    if (yearsPastLifeExpectancyOnJupiter < 0) {
      return 0;
    } else {
      return yearsPastLifeExpectancyOnJupiter;
    }
  }


}
