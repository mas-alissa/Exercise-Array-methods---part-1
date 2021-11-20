//A
// let array = ["nice", "awesome", "amazing"]

const addTheWordCool = function(array){
   array.push("cool")
   console.log("add cool:", array)
}
addTheWordCool(["nice", "awesome", "amazing"]);
// result: ["nice", "awesome", "amazing", "cool"]



//B 

// let countries = ["Belgium", "Netherlands", "Luxembourg"];

const amountOfElementsInArray = function(amount){
    console.log(amount)
}
amountOfElementsInArray(["Belgium", "Netherlands", "Luxembourg"].length)

// 3

//C


const selectBelgiumFromBenelux = function(countries){
    console.log(countries[0])
}

selectBelgiumFromBenelux(["Belgium", "Netherlands", "Luxembourg"])

// "Belgium"

//D



const lastElementInArray = function(eat){
console.log(eat[eat.length - 1])
}; 

lastElementInArray(["Hare", "Guinea pig", "Chicken", "Turtle"]); 
// result: "Turtle"



const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = function(array) {
  console.log(array.slice(1,4))
}
const impeachTrumpSplice = function(array) {
   array.splice(0,1)
   console.log(presidents)
}

impeachTrumpSlice(presidents); // ["Obama", "Bush", "Clinton"]
impeachTrumpSplice(presidents) // ["Obama", "Bush", "Clinton"]


//F

const stringsTogether = function(text){
    
    console.log(text.join(" "))
}

stringsTogether(['Winc', 'Academy', 'is', 'fun', ';-}']) 
//result: "Winc Academy is fun ;-}"

//G

const combineArrays = function(array1,array2){
console.log(array1.concat(array2))
}

combineArrays([1,2,3], [4,5,6]) 
// resultaat: [1,2,3,4,5,6]