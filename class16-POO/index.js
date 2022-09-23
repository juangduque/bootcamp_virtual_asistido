var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Info = /** @class */ (function () {
    function Info(n) {
        this.name = n;
    }
    ;
    Info.prototype.describe = function () {
        console.log("Your name is  ".concat(this.name));
    };
    return Info;
}());
var Person = /** @class */ (function () {
    function Person(name, height, age) {
        this.name = "";
        this.height = 0;
        this.age = 0;
        this.address = "";
        this.name = name;
        this.height = height;
        this.age = age;
        this.address = "";
    }
    Person.prototype.sayHello = function () {
        return "Hello, I am " + this.name;
    };
    return Person;
}());
;
var ciudadano = new Person("Juan", 1.80, 20);
var citizen = new Person("Andrea", 1.70, 30);
var book = new Info("hola");
// console.log( ciudadano.name );
// console.log( citizen.sayHello() );
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(uniform, team, name, height, age) {
        var _this = _super.call(this, name, height, age) || this;
        _this.uniform = "";
        _this.team = "";
        _this.uniform = uniform;
        _this.team = team;
        return _this;
    }
    Player.prototype.run = function () {
        return "I am running";
    };
    return Player;
}(Person));
var messi = new Player("primary", "PSG", "Lionel", 1.69, 35);
console.log(messi.run());
