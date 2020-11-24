alert("Welcome to the button clicking game! you will reach the next level every 50 clicks. Lets begin!");
count = 0;
document.getElementById("button").onclick = () =>{
count++;
document.getElementById("count").innerHTML = count;
if(count%50 == 0){
alert("GG! you reached "+ count + " clicks!")
}
console.log(count);
}
console.log("It works!");