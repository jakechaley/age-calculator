export default class Person {
  constructor(age) {
    this.age = age;
    
}

earthAge() {
  return this.age;

}

mercuryAge() {
  const mercuryAge = parseFloat((this.age / .24).toFixed());
  return mercuryAge;
}
}
