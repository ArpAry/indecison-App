class OldSyntax {
  constructor() {
    this.name = "mike";
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi My name is ${this.name}`;
  }
}
const oldSyntax = new OldSyntax();
const oldGreeting = oldSyntax.getGreeting;
console.log(oldGreeting());

class NewSyntax {
  name = "jenney";
  age = 30;
  getNewGreeting = () => {
    return `Hi My name is ${this.name}`;
  };
}
const name = new NewSyntax();
const newGreeting = name.getNewGreeting;
console.log(newGreeting());
