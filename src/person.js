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
venusAge() {
  const venusAge = parseFloat((this.age / .62).toFixed());
  return venusAge;
}
marsAge() {
  const marsAge = parseFloat((this.age / 1.88).toFixed());
  return marsAge;
}
jupiterAge() {
  
}
}