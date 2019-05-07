// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// const makeCounter = function(){
//   let privateCounter = 0;
//   function changeBy(val){
//     privateCounter += val
//   }
//   return {
//     increment: function(){
//       changeBy(1)
//     },
//     decrement: function(){
//       changeBy(-1)
//     },
//     value: function(){
//       return privateCounter;
//     }
//   }
// }

// let counter1 = makeCounter();
// counter1.increment();
// counter1.increment();
// counter1.decrement();
// // counter1.decrement();
// // counter1.decrement();
// console.log(counter1.value());
const err = "Can\'t conquer that country, it is out of your scope";
const conquer = function(){
  let country = 'US';
  function let_conquer(val){
    country = val;
  }
  return {
    conquer_sv: function(){
      try {
        let sv = 'SV';
        let_conquer(sv)
      } catch (error) {
        let_conquer(err)
      }
    },
    conquer_spain: function(){
      try {
        let_conquer(us);
      } catch (error) {
        let_conquer(err);
      }
    },
    conquer_you: function(){
      try {
        let you = `${country} conquered you`;
        let_conquer(you);
      } catch (error) {
        let_conquer(err);
      }
    },
    who_conquer: function(){
      return country
    }
  }
}

let war = conquer();
war.conquer_sv();
// war.conquer_spain();
war.conquer_you();

console.log(war.who_conquer());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let counter_var = 1
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return counter_var++;
};
// Example usage: const newCounter = counter();
console.log(counter()); // 1
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter_var = 0;
  return {
    increment: function(){
      counter_var++
    },
    decrement: function(){
      counter_var--
    },
    get_value: function(){
      return counter_var;
    }
  }
};

const makeCounterFactory = counterFactory();

makeCounterFactory.increment();
makeCounterFactory.increment();
makeCounterFactory.increment();
makeCounterFactory.decrement();
makeCounterFactory.decrement();

console.log(makeCounterFactory.get_value())