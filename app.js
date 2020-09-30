//es6 practice
//beginner-------------------------------------------------

//rest operator
const collectAnimals = (...animals) => animals
// console.log(collectAnimals('dog', 'cat', 'bird', 'bear'))


//Object Literals
const foods = (grains, fruits, meats, vegetables, dairy) => {
    return{
        grains, fruits, meats, vegetables, dairy
    }
}
// console.log(foods(['oats', 'flour', 'flax'], ['apple', 'pear', 'banana', 'orange'], ['pork', 'steak', 'chicken'], ['potato', 'corn'], ['milk', 'ice cream']))

//destructuring
// const {location, duration} = vacation
const trip = (location, duration) => `We're going to have a good time in ${location} for ${duration}.`
// console.log(trip('Burley Idaho', '2 weeks'))

const returnFirst = (...items) => {
    const [firstItem] = items; 
    return firstItem
}
//console.log(returnFirst(89, 7, 4, 6, 2, 3))

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const returnFavorites = () => {
    const [firstFav, secondFav, thirdFav] = favoriteActivities
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}.`
}
// console.log(returnFavorites(favoriteActivities))


//intermediate--------------------------------------------

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

const combineAnimals = () => {  
    return [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
}
// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]


//expert--------------------------------------------------

// origninal
// function product(a, b, c, d, e) {  
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }

// new
const product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1)
// console.log(product(1,2,3,4,5))

// original
// function unshift(array, a, b, c, d, e) {  
//     return [a, b, c, d, e].concat(array);
//   }

//  new
const unshift = (array, ...array2) => {  
    return [...array, ...array2]
  }
// console.log(unshift([5,6,7,8], 4))

//expert only---------------------------------------------

// original
// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }
//
//populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])

// new

const populatePeople = (names) => names.map(name => {
    const [firstName, lastName] = name.split(" ")
        return {
            firstName,
            lastName
        }
    })
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
