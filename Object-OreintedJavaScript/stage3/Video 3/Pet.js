class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal; 
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }

}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const riddick = new Pet('dog', 9, 'dingo', 'ruff');
const vera = new Pet('dog', 8, 'border collie', 'boork!');

ernie.speak();
vera.speak();

stringGPA() {
  parseFloat(this.gpa);
}