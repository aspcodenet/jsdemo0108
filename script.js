let numbers = [21,13,5]
let numbers2 = [2,99,88,77]



let allNumbers = [...numbers,...numbers2]
// allNumbers = [21,13,5,2,99,88,77]

let o = {
    Namn:"Stefan",
    Age: 20
}

let o2 = {
    Jersey:4
}

let summa = {
    ...o,
    ...o2
}






function withdraw(belopp){
    return { ErrorCode:0, Saldo:123 }
}

let {ErrorCode,Saldo} = withdraw(100)

function withdraw2(belopp){
    return [0,123]
}

let [errcode,saldo] = withdraw2(100)







// function importantList(iWant, iDontWant, iNeed, iDontNeed) {
//      return `${iWant} is what I want!  Dont give me: ${iDontWant} . Sadly I need  ${iNeed}`;
// }

function importantList({iWant,iDontWant, iNeed}) {
    // let iWant = o.iWant
    // let iDontWant = o.iDontWant
    // let iNeed = o.iNeed
//    let {iWant,iDontWant, iNeed} = o
//    console.log(iWant)

    return `${iWant} is what I want!  Dont give me: ${iDontWant} . Sadly I need  ${iNeed}`;
}








// let o = {
//     iWant:"PS5",
//     iDontWant: "Strumpor",
//     iNeed:"TShirt", 
//     iDontNeed:"Bla"
// }
//let text = importantList("PS5","Strumpor", "Tshirt", "blA")
let text = importantList({
    iWant:"PS5",
    iDontWant: "Strumpor",
    iNeed:"TShirt", 
    iDontNeed:"Bla"
})






const products = [
    { product: 'banana', price: 3, color:"green"  },
    { product: 'mango', price: 6, color:"green" },
    { product: 'potato', price: 12, color:"green" },
    { product: 'avocado', price: 8, color:"green" },
    { product: 'coffee', price: 10, color:"green" },
    { product: 'tea', price: 12, color:"green" },
  ]


let expensiveProduct  = products.some(product=>product.price > 7)
let allIsGreen  = products.every(product=>product.price > 7)

let theExpensiveProduct = products.find(product=>product.price > 7)
if( theExpensiveProduct === undefined ) {

}


  // Plocka fram färg och priset inkl moms i en ny array
let a = { name:"Stefan", jersey:21 }
a.jersey = 123

  let arrayen=[]
  for(let product of products){
    let resultObj = { priceIncMoms: product.price * 1.25, color:product.color }
    arrayen.push(resultObj)
  }
  

arrayen = products.map(product=>{
    return { priceIncMoms:product.price*1.25, color:product.color }}
)
console.log(arrayen)


// an
//Ta fram alla med 'an' i sig
let result = products.filter(product=>product.product.includes('an'))

// Ta fram alla produkter som kostar mer än 9 kr
// och lägg i en array

// SEMANTIKEN I EN VANBLIG FOR LOOP INDEX ÄR ***INTE*** foreach
let filteredProducts = []
for(let i = 0; i < products.length; i++){
    let product = products[i];
    if(product.price > 9){
        filteredProducts.push(product)
    }
}
console.log(filteredProducts)
 

// ALT 2: "foreach" - 
filteredProducts = []
for(let product of products){
    if(product.price > 9){
        filteredProducts.push(product)
    }
}

// ALT 3:
products.forEach(product=>console.log(product.price))

for(let product of products){
    console.log(product)
}




// FOREACH  - "bara" 3 varianter haha!

// MAP - linq SELECT
// Skapa en ny lista med alla priser
let arr=[]
for(let product of products){
    arr.push(product.price)
}

let priser = products.filter(product=>product.product.startsWith('b'))
    .map(product=>product.price)

// FILTER  (linq WHERE)
filteredProducts = products.filter(product=>product.price > 9)
filteredProducts = products.filter(product=>{
    if( product.price > 9 ) {
        return true;
    }
    return false;
})
filteredProducts = products.filter(function (product){
    return product.price > 9;
})
// EVERY
// SOME
// FIND
// FINDINDEX





// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// // Use forEach to console.log each country in the countries array.
// countries.forEach(element => {
//     console.log(element)
// });
// //  Use forEach to console.log each name in the names array.
// names.forEach(element=>{
//     console.log(element)
// })
// // Use forEach to console.log each number in the numbers array.
// numbers.forEach(element=>{
//     console.log(element)
// })
// // Use map to create a new array by changing each country to uppercase in the countries array.
// let a = countries.map(element=>element.toUpperCase())
// console.log(a)
// // Use map to create an array of countries length from countries array.
// a = countries.map(element=>element.length)
// console.log(a)

// // Use map to create a new array by changing each number to square in the numbers array
// a = numbers.map(element=>element*element)
// console.log(a)

// // Use map to change to each name to uppercase in the names array

// // Use filter to filter out countries containing land.
// a = countries.filter(element=>{
//     return element.toLowerCase().includes("land")
// })
// console.log(a)
// // Use filter to filter out countries having six character.
// a = countries.filter(element=>{
//     return element.length >= 6
// })
// console.log(a)
// // Use filter to filter out countries containing six letters and more in the country array.
// // Use filter to filter out country start with 'E';
// // Use filter to filter out only prices with values.
// a = products.filter(element=>parseInt(element.price) != NaN)
// console.log(a)
// // Use some to check if some names' length greater than seven in names array
// // Use every to check if all the countries contain the word land
// // Use find to find the first country containing only six letters in the countries array
// // Use findIndex to find the position of the first country containing only six letters in the countries array
// // Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// // Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.