// Place your FizzBuzz code here. 

//count numbers 1 to 20 and find out if they are divisible by 3, 5, or both.
for(i=1; i<=20; i++){
	//for each number in sequence do the following:
	//Test to see if number is divisible by 3
	if(i % 3 === 0){
	//If yes, test to see if number is also divisble by 5 
		if(i % 5 === 0){
			//If divisible by 3 and 5, print "FizzBuzz"
			console.log("FizzBuzz");
			//if divisible by 3 only, print "Fizz"
		} else {
			console.log("Fizz");
		}
	} else if(i % 5 === 0){
		//If divisible only by 5 print "Buzz"
		console.log("Buzz");
	} else {
		//If not divisible by either 3 or 5, print number
		console.log(i);
	}
}



