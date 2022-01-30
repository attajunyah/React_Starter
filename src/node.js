// const product = function(a, b) {
//     return a * b; 
// }

// const result = product(2, 5)
// // console.log(result)

// const atta = {
//     name: "Atta Junior", 
//     age: 26, 
//     education: "Master's Degree", 
//     greet: function() {
//         console.log('My name is ' + this.name);
//     }
// }

// // atta.greet()
// atta.my2022Age = function () {
//     this.age += 1
// }

// // console.log(atta.age)
// // atta.my2022Age()
// // console.log(atta.age)


// const arto = {
//     name: 'Arto Hellas',
//     greet: function() {
//       console.log('hello, my name is ' + this.name)
//     },
//   }
  
// setTimeout(arto.greet, 1000)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet () {
        console.log("Hello, My name is " + this.name)
    }
}

const ama = new Person('Nana Ama', 25)
ama.greet()

const bella = new Person('Mabel Addae', 24) 
bella.greet() 