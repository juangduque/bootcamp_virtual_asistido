class Info {
  private name: string ;
  constructor(n:string){
    this.name = n ;
  };
  describe(){
    console.log(`Your name is  ${this.name}`);
  }
}

class Person {
	public name: string = ""
	private height: number = 0
	public age: number = 0
	protected address: string = ""

	constructor(name: string, height: number, age: number){
		this.name = name;
		this.height = height;
		this.age = age;
		this.address = ""
	}

	sayHello(){
		return "Hello, I am " + this.name
	}
};

const ciudadano = new Person("Juan", 1.80, 20);
const citizen = new Person("Andrea", 1.70, 30);
const book = new Info("hola");

// console.log( ciudadano.name );
// console.log( citizen.sayHello() );

class Player extends Person {
	uniform: string = ""
	team: string = ""

	constructor(uniform: string, team: string, name: string, height: number, age: number){
		super(name, height, age);
		this.uniform = uniform;
		this.team = team;
	}

	run(){
		return "I am running"
	}
}

const messi = new Player("primary", "PSG", "Lionel", 1.69, 35);

console.log( messi.run() );