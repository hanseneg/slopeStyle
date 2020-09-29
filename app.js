//es6 practice
//beginner------------------------------------------------

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

const returnFavorites = (arr) => {
    const [firstFav, secondFav, thirdFav] = favoriteActivities
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}.`
}
console.log(returnFavorites(favoriteActivities))


//intermediate--------------------------------------------


//expert--------------------------------------------------


//expert only---------------------------------------------
