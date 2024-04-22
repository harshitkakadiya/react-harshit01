
// 1st Print the numbers from 0 to 15.

let a;
let n=15;

for (a=0 ; a<=n ; a++)
{
    console.log(a);
} 

// 2nd Print the numbers from 12 to 24 .

let b;
let m=24;

for (b=12 ; b<=m ; b++)
{
    console.log(b);

} 

// 3rd Print the ODD numbers from 7 to 31.

let c;
let l=31

for(c=7 ; c<=l ; c++) {
    if(c%2==1)
    {
        console.log(c);
    }

} 


// 4th  Print the EVEN numbers from 10 to -20. 

 let i;
let j = -20;
  for (i = 10; i >= j ; i--) {
    if (i % 2 == 0) {

        console.log(i);

    }
} 


// 5th Iterate through all numbers from 1 to 45. Print the following : 

// ● For multiples of 3 print “Fizz”
// ● For multiples of 5 print “Buzz”
// ● For multiples of 3 and 5 print “FizzBuzz”

let a;
let b=45;

for (a = 1; a <= b ; a++) {

    if (a % 3 == 0 && a % 5 == 0) {
        
        console.log("FizzBuzz");
    }

    else if(a % 3 == 0)

    {
        console.log("Fizz");
    }

    else if  (a % 5 == 0)
    {
        console.log("Buzz");
    }

    else 
   
    {
        console.log(a);
    }
}

// 6th Print all the elements of the following array
// ** thisIsAnArray = ["element1","element2","element3","element4"];



thisIsAnArray = ["element1","element2","element3","element4"];

let x;

for (x = 0; x < thisIsAnArray.length; x++) {

    console.log(thisIsAnArray[x]);

 }

// 7 Calculate the sum of all the numbers in the following array

   let NumbersArray = [1,13,22,123,49]
   let a;
   let sum = 0 ;

   for(a = 0; a < NumbersArray.length; a++) {

    sum += NumbersArray[a;

}
console.log(sum);
   