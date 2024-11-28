let val = Math.floor(Math.random()*100)+1;
alert("WELCOME to Guess the Number game");
alert("The Random number is chosen now its your turn...")
alert("The Random number is chosen now its your turn...");
alert("The number is between 1-100");
let guess=-1;
let count=0;
while (guess!=0){
    let guess= prompt("Enter the number:");
    if (guess>val){
        alert("Enter a lower number:");
        count+=1;
    }else if (guess<val){
        alert("Enter a higher number:");
        count+=1;
    }else{
        alert("You got it correct!!")
        count+=1;
        break;
    }
}
alert("The number was "+ val);
alert("You have taken "+count+" guesses");