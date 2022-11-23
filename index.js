// Remember to import the data and Dog class!
import dogs from "./data.js"
import Dog from "./Dog.js"

let dogNr = 0;
let currentDog = new Dog(dogs[dogNr])

console.log(currentDog)
document.getElementById("no-btn").addEventListener("click", (event)=>handleClick(false))
document.getElementById("yes-btn").addEventListener("click", (event)=>handleClick(true))

render()


function handleClick(isLiked) {
    currentDog.hasBeenLiked = isLiked
    currentDog.hasBeenSwiped = true

    render()
    setTimeout(()=>{
        dogNr=dogNr+1
        if(dogNr==dogs.length) {
            dogNr=0
        }
        currentDog = new Dog(dogs[dogNr])
        console.log(currentDog)
        render()
    }, 1800)
}

function render(){
    document.getElementById("dog").innerHTML = currentDog.getDogHtml()
}