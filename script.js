let number1 = document.getElementById("number1")
let counter1 = 0

setInterval(() => {
if(counter1==90){
    clearInterval();
}
else{
  counter1+=1
  number1.innerHTML = counter1 + "%" + "<br><span>HTML</span>" }

},23);

let number2 = document.getElementById("number2")
let counter2 = 0

setInterval(() => {
if(counter2==80){
    clearInterval();
}
else{
  counter2+=1
  number2.innerHTML = counter2 + "%" + "<br><span>CSS</span>" }

},25);
let number3 = document.getElementById("number3")
let counter = 0

setInterval(() => {
if(counter==65){
    clearInterval();
}
else{
  counter+=1
  number3.innerHTML = counter + "%" + "<br><span>JavaScript</span>"}

},30);
