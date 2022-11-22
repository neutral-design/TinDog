// Remember to import the data and Dog class!
import dogs from "./data.js"
import Dog from "./Dog.js"

const testDog = new Dog(dogs[0])
console.log(testDog)

document.getElementById("dog").innerHTML = testDog.getDogHtml()