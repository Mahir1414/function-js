// task 1: Simple Function

function Hello(){
	console.log("Java Script");
}

Hello();




//Task 2: Function with Parameter

function square(a){
	const gun=a*a;
	return gun
}

console.log(square(12));




//task 3: Sum Function

function sum(a, b){
	const sum=a+b;
	return sum
}

console.log(sum(23, 874))




//task 4: Even or Odd Function

function findevenodd(value){
	if (value % 2 == 0){
		return "Even";
	}

	else {
		return "Odd";
	}
}

console.log(findevenodd(32));

console.log(findevenodd(65));




//task 5: Loop in a function

function justevennumber(E){
	for (let i = 0; i <= E; i++){
		if (i % 2 == 0){
			console.log(i);
		}
	}
}

justevennumber (10);