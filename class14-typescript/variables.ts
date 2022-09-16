let variable: string = "hello world";

variable = "hola otra cosa";

console.log(variable);

let day_of_the_week: number = 7;
let is_empty: boolean = true;

// day_of_the_week = true; // error

let fruits: string[] = ["apple", "banana", "kiwi"];
let numbers: number[] = [1,2, 3.25,];
let booleans: boolean[] = [true, false];

interface Person {
	name: string;
	age: number;
	height: string;
	phone?: string;
	getAddress?: () => string | number;
}

const person: Person = {
	name: "juan",
	age: 15,
	height:"170",
}

const persons: Person[] = [
	{name: "Ana", age: 70, height: "160", getAddress: () => "cll 123"},
	{name: "David", age: 17, height: "180", phone: "3011234567"},
	//{name: "Andrea", age: "50", height: "180", phone: false}, // error
]

interface Vehicle {
	marca: string;
	model: number;
	type: string;
	wheels: number | string ;
}

const car: Vehicle = {
	marca: "Hyundai",
	model: 2020,
	type: "coupe",
	wheels: "dos"

}

// special types:
// any
const variable2: string | number |boolean | Person = 0;
let variable3: any = 20; // It is not practice to use
variable3 = "algo";
variable3 = true;

// undefined
const dbName: string | undefined = "";
const api_Call_age: number | undefined = 20

type Student = {
	name: string
}

// never
const list_of_students: Student[] | never = [] // se puede especificar que algo está vacío

// unknown
try {
	console.log("No hay error")
} catch (error: unknown) {
	console.log(error)
}

let variable4: string | number | boolean | undefined | never | null ;

// heredacion de interfaces
interface PersonSimple {
	name: string;
	age: number;
}

interface PlayerSoccer extends PersonSimple{
	role: string
}

const messi: PlayerSoccer = {
	name: "lio",
	age: 38,
	role: "hace goles"
}