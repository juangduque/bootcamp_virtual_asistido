
function sum(a: number,b: number): number {
	return a + b;
}

let suma: number = 0;

suma = sum(5,2)

console.log( suma );

interface Person {
	name: string
	age: number
	height: string
	phone?: string
}

interface Vehicle {
	marca: string;
	model: number;
	type: string;
	wheels: number | string ;
}

function createObject(): Person | Vehicle {
	return {
		marca: "Hyundai",
		model: 2020,
		type: "coupe",
		wheels: "dos"
	}
}

console.log( createObject() ) // returns an object type Person

function printHello(): void {
	console.log("Hello...")
}

printHello(); // output: Hello...