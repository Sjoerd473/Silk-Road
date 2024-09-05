/*function rollD6(n) {
    let diceRoll = 0
    for (let i = 0; i < n; i++){
  const diceRoll =  Math.floor((Math.random()* 6) + 1)
  console.log(diceRoll);
  let total =+ diceRoll

}
let total =+ diceRoll
console.log(total);
}
*/

function rollD6(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
}