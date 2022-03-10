// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
//}

//ES2015 ver
function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

//ES2015 ver
const favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName " + "says bye!";
//   }
// }

//ES2015 ver
const instructorObj = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBi() {
    return this.firstName + "says bye!";
  },
};

//Animal Function
const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
s.bleet(); //"BAAAAaaaa"

function createAnimal(species, action, sound) {
  return {
    species,
    [action]() {
      return sound;
    },
  };
}
