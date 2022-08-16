function getComputerChoice(){
    let result = Math.floor(Math.random() * 3 );
    if (result === 0){
        return console.log("Rock")
    }
    else if (result === 1){
        return console.log("Paper")
    }
    else {
        return console.log("Scissors")
    }

}
console.log(getComputerChoice())