function myFunction(param:number|string){//primitive data types : string,number,boolean,undefined,null,any also bigint and symbol
  if(typeof(param)=="number"){
    let numberResult=param.toFixed(2);
    console.log(numberResult);
  }else{
    let stringResult=param+100;
    console.log(stringResult);
  }
  
}
myFunction(1);
myFunction("London");

let condition=true;//let variable can change
let person="Bob";
const age=40;//const values never change

let place:string|undefined|null;//type union(|):specify multiple data types to a variable
console.log("value: "+place+" type ; "+typeof(place));//concatanating strings and values
place="london";
console.log("value: "+place+" type: "+typeof(place));
place=null;
console.log(`value: ${place} type: ${typeof(place)}`);//template string start and end with back sticks(`) and values are provided in curly braces({})

let firstBool=true;
let secondBool=false;

let firstString="this is first string";
let secondString='this is second string';

let daysinweek=7;
let pi=3.14;
let hexValue=0xfff;

let person1="Alice";
let person2:string|undefined="bob";
//person1=null;
//person2=null;//errors
//person1=undefined;

let firstname="Adam";
if(firstname=="Adam")console.log("First name is Adam")
else if(firstname=="Eva")console.log("First name is eva")
else console.log("First nam is nither ADam or eva")

switch (firstname){
case "Adam":console.log("First name is Adam");break;
case "Eva":console.log("First name is eva");break;
default :console.log("First name is nither Adam or Eva");break;
}

let firstVal:any=5;//number
let secondVal:any="5";//string
if(firstVal==secondVal)console.log("Values are same")//equality operator (==) checks equality of values
else console.log("values are diffrent")

if(firstVal===secondVal)console.log("Values are same")//identity operator(===) checks equality of both value and type
else console.log("values are diffrent")

//(+)operator have preferance to concatanate over adding

let myData=(5).toString()+String(5);//explicit data type conversion
let myData2:any=5+"5";//implicit data type conversion
myData2=Number("5")+parseInt("5");//converting string to numbers
console.log(`Result1 is ${myData} type is ${typeof(myData)}`)
console.log(`Result2 is ${myData2} type is ${typeof(myData2)}`)

let val1:string|undefined;
let val2:string|undefined="London";
let val3:number|undefined=0;
let coalesced1=val1||"fallback value";//nuulish operator(||)checks left value if value is falsy(0,null,undefined,NaN,"") it sets value after nullish operator
let coalesced2=val2||"fallback value";
let coalesced3=val3??100;//nuulish operator(??)checks left value only if value is undefined or null it sets value after operator
console.log(`Result1 : ${coalesced1}`);
console.log(`Result2: ${coalesced2}`);
console.log(`Result3: ${coalesced3}`);

let count:number|null|undefined=100;
  if(count!=null&&count!=undefined){//guarding against null or undefined
    let result=count.toFixed(2);
    console.log(`Result is ${result}`);
}

let result2:string|undefined|null=count?.toFixed(2);//chaining operator (?) guard against undefined and null values
console.log(`Result2 is ${result2}`);

function composeString(val?:string):string{
  return `Composed string: ${val}`;
}

function writeValue(val:string="default value",...extraInfo:string[]){//parametername? is optional parameter
  console.log(`Value: ${composeString(val??"fallbackvalue")} Extras: ${extraInfo}`);//Rest parameters start with (...)
  //capture any additional parameters that are invoked , rest parameter must be last in a function,
  //and must be array
}
writeValue("London","majdanpek","Bukurest");
writeValue();
writeValue("Keln")

//Using Functions as Arguments to Other Functions
function getUkCapital():string{
  return "London"
}
function writeCity(f:()=>string){//f:(function parameters)=>function result
  console.log(`City : ${f()}`);
}
writeCity(getUkCapital);
writeCity(()=>"Paris");
let city="Rome";
writeCity(()=>city);

//Working with Arrays
let myArray:(number|string|boolean)[]=[100,"Adam",true];
//myArray[0]=100;
//myArray[1]="Adam";
//myArray[2]=true;

//Reading and modifying content of array
myArray[0]="tuesday";
let val=myArray[0]
console.log(`Value: ${val}`);
//Enumerating the Contents of an Array
for(let i=0;i<myArray.length;i++){
  console.log("Index: "+i+" "+myArray[i]);
}
myArray.forEach((value,index)=>console.log("Index: "+index+" "+value));

//Using the Spread Operator(...array) unpacks content of an array to another array
let otherArray=[...myArray,"Bob",200,false];
otherArray.forEach((value,index)=>console.log("Index: "+index+" "+value));
//chaining array methods
let sum:number=otherArray
.filter(val=>typeof(val)=="number")
.reduce((total:number,val)=>total+(val as number),0);
console.log("Sum is : "+sum);
//Working with objects
let hat={
  name:"hat",
  price:100
}
let boots={
  name:"boots",
  price:200,
  category:"sport"
}
console.log(`Name : ${hat.name} price: ${hat.price}`);
console.log(`Name : ${boots.name} price: ${boots.price}`);

function printDetails(product:{name:string,price:number,category?:string}){
  if(product.category!=undefined)
  console.log(`Name : ${product.name} price: ${product.price} category : ${product.category}`);
  else
  console.log(`Name : ${product.name} price: ${product.price}`);
}
printDetails(hat);
printDetails(boots);
printDetails({name:"drink",price:50})

//Working with classes
class Product{
  //name:string
  //price:number
  //category?:string
  constructor(public name:string,public price:number,public category?:string){
    //adding public accesor eliminates the need to initialize class properties
    //this.name=name;
    //this.price=price;
    //this.category=category;
  }
   printDetails(){
    if(this.category!=undefined)
    console.log(`Name : ${this.name} price: ${this.price} category : ${this.category}`);
    else
    console.log(`Name : ${this.name} price: ${this.price}`);
  }

}
let hat2=new Product("hat",100);
let boots2=new Product("boots",200,"sport");
printDetails(hat);
printDetails(boots2);
hat2.printDetails();
boots2.printDetails();

//class inheritance
class DiscountProduct extends Product{
  constructor(name:string,price:number,private discount:number,category?:string){
    super(name,price-discount,category);
  }
}
let discountedHat=new DiscountProduct("hat sale",100,10);
let discountedBoots=new DiscountProduct("boots sale",200,50,"sport");
discountedHat.printDetails();
discountedBoots.printDetails();
//Checking object types (instanceof)
console.log(`Hat is product? ${hat2 instanceof Product}`);
console.log(`disconted hat is discounted product? ${discountedHat instanceof DiscountProduct}`);
console.log(`botts is discounted? ${boots2 instanceof DiscountProduct}`);

//javascript modules contain class or more
import { Name,WeatherLocation } from "./modules/nameAndWeather";

let name=new Name("Adam","Freeman");
let loc=new WeatherLocation("raining","London");
console.log(name.nameMessage);
console.log(loc.weatherMessage);

//reactive extensions Observable,Observer,Subject
import {Observable,Observer,Subject}from "rxjs";
function receiveEvents(observable:Observable<string>){
  observable.subscribe({
    next: str=>{
      console.log(`Event received ${str}`);
    },
    complete:()=>console.log("Sequence ended")
  });
}
function sendEvents(observer:Observer<string>){
  let count=5;
  for(let i=0;i<count;i++){
    observer.next(`${i+1} of ${count}`);
  }
  observer.complete();
}
let subject=new Subject<string>();
receiveEvents(subject);
sendEvents(subject);


