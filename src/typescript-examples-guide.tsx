//don't forget to install globally npm i -g typescript
//to compile on terminal tsc index
//we can also do it watch mode tsc --watch index
//to create the typescript config on terminal, tsc --init
//on the config we can for example edit the rootDir and outDir, and now we only call tsc to compile.

import { FC } from "react";

//main types, number, string, boolean,
let id: number = 5;
// id = "4"; will throw error from both vs code and when compiling
let company: string = "Walx";
let isPublished: boolean = true;
let x: any = "hello";
x = true;
let age: number;
age = 6;

let ids: number[] = [1,2,3,4,5];
// ids.push("hey"); throws erros
let arr: any[] = [1,4,5,6];

//
//tuple
let person: [number, string, boolean] = [1, "hey", true];
//tuple array
let employee: [number, string][];
employee = [
    [1, "hey"],
    [2, "hey"],
    [3, "hey"],
]

//Union
let pid: string | number;
pid = 22;
pid = "hey";

//Enums
//by default first value is 0, if you didnt asssign anything
//if the previous value was a number the next numbers by default start increasing by one
enum Direction1 {
    Up = "Valid",
    Down = 55,
    Left ,
    Right
}

console.log(Direction1.Up); //Should return 56


//Objects

type User = {
    id:number,
    name:string
}

const user: User = {
    id: 1,
    name: 'John',
}

//type Assertion
let cid: any =1;
// let customerId = <number>cid;
let customerId = cid as number;
//can be done both ways.
// customerId = "hey"; will throw error

//using types in functions
//functions obligatorily demand a type, unless in config you change the implicit any option
//optionally we can also set the return type
function addNum(x: number ,y: number): number{
    return x + y;
}

//void
function log(message: string | number = "default param"): void{
    console.log(message);
}

log(2);

//interfaces
//notice we dont need the equal sign that we needed in type
interface UserInterface {
    readonly id:number,
    name:string,
    age?:number,//age is optional
}

const user1: UserInterface = {
    id: 2,
    name: 'Alan',
}

// user1.id = 3; //error cause its readonly
//a type can be used with primitive and unions
type Point = number | string;
const p1: Point = 1;

//that wouldnt work in an interface
//but interfaces are nice for objects

interface MathFunc {
    (x: number, y: number):number;
}
const add: MathFunc = (x:number, y:number): number => x + y;
const sub: MathFunc = (x:number, y:number): number => x - y;

//Classes

interface PersonInterface {
    id:number,
    name:string,
    register(): string,
}



class Person implements PersonInterface{
    //they are public by default
    //can be private and protected too
    //private id: number;
    //protected can be accesed by childs too.
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }

    register(): string {
        return `${this.name} is now registered`;
    }
}

const alan = new Person(2, "Alan");
console.log(alan.register());


//subclass
class Employee extends Person{
    position: string;

    constructor(id: number, name:string, position: string){
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(3, "Luis", Direction1.Up);
console.log(emp.register());

//Generics, reusable components
//basically a placeholder we can replace later
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}

let numArray= getArray<number>([1,2,3,4]);
let strArray= getArray<string>(["hi", "hello", "oops"]);

//to include typescript in react
//npx create-react-app my app --template typescript

//jsx files become tsx files.
//example of a header.tsx component file

export interface Props{
    title:string;
    color?: string; //color is optional
}

const Header:FC<Props> = (props)=>{

    return(
        <header>
            {/* <h1 style={color: {props.color ? props.color : 'blue'}}>{props.title}</h1>  this has an error, lmao*/}
        </header>
    );

}

// export default Header;

//when you import it to the App.tsx, when you try to use the Header, it will tell you what it needs.