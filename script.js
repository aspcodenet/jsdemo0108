const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: 12 },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: 12 },
  ]

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