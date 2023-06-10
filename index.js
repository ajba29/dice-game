const btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    var randomNumber1 = getRandomNumber(1, 6).toString();
    console.log(randomNumber1);
  
  // random dice 2
    var randomNumber2 = getRandomNumber(1, 6).toString();
    console.log(randomNumber2);


    document.getElementById("dice-one").textContent = randomNumber1;
    document.getElementById("dice-two").textContent = randomNumber2;

    if (randomNumber1 > randomNumber2){
        document.getElementById("winner").innerHTML = "Player 1 wins! &#x1F7E9;";
    } else if (randomNumber2 > randomNumber1){
        document.getElementById("winner").innerHTML = "Player 2 wins! &#x1F7E9;";
    } else {
        document.getElementById("winner").innerHTML = "It's a draw! &#x1F3F3;";
    }
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
//   // random dice 1
// var randomNumber1 = getRandomNumber(1, 6).toString();
// console.log(randomNumber1);
  
//   // random dice 2
// var randomNumber2 = getRandomNumber(1, 6).toString();
// console.log(randomNumber2);


// document.getElementById("dice-one").textContent = randomNumber1;
// document.getElementById("dice-two").textContent = randomNumber2;

// if (randomNumber1 > randomNumber2){
//     document.getElementById("winner").innerHTML = "Player 1 wins! &#x1F7E9;";
// } else if (randomNumber2 > randomNumber1){
//     document.getElementById("winner").innerHTML = "Player 2 wins! &#x1F7E9;";
// } else {
//     document.getElementById("winner").innerHTML = "It's a draw! &#x1F3F3;";
// }