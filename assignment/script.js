// //Question 1
// console.log("Question 1");
// for(let i=2; i<101; i+=2) {
//     console.log(i);
// }
// console.log("Question 2");
// //Question 2
// for(let i=1; i<200; i+=2) {
//     console.log(i);
// }
// console.log("Question 3");
// //Question 3
// const prime = 9;

// if(prime == 1) {
//     console.log(`${prime} cannot be a prime number`);
// } else if (prime < 1) {
//     console.log(`${prime} is a negative number so it is not a prime number`);
// } else {
//     let isPrime = true;
//     for (let i = 2; i < prime; i++) {
//         if (prime % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`${prime} is a prime number`);
//     } else {
//         console.log(`${prime} is not a prime number`);
//     }
// }
// console.log("Question 4");
// //Question 4
// for(let i=1; i<100; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i);
//     }
// }
// //Question 5
// console.log("Question 5");
// let count = 0;
// let num = 2;

// while(count < 100) {
//     let isPrime = true;
//     for (let j = 2; j < num; j++) {
//         if (num % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(num);
//         count++;
//     }
//     num++;
// 
// }

// //Question 6

// console.log("Question 1");
//  const check = (num) => {
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (num % 3 === 0 ) {
//         console.log("Fizz")
//     } else if (num % 5 === 0 ) {
//         console.log("Buzz");
//     } else {
//         console.log(`${num} is not divided by 5 nor 3`)
//     }
//  } 
 
//  check(12);
//  check(10);
//  check(19);

//  //question 2
//  console.log("Question 2")


// function factorial (number) {
//     for (let i = 1; i <= 5; i++) {
//         number *= i;
//         console.log(number);
//     }
// }
// factorial(5);
//
// function factorials (number) {
//     if (number===0) {
//      return 1;
//     } else {
//      return number * factorials(number -1);
//     }
//  }
//  console.log(factorials(5));

//Question 3
// console.log("Question 3");

// const par = (num) => {
//     let copy = num;
//     let reverseNumber = 0;

//     while(copy) {
//         const remain = copy % 10;
//         copy = (copy - remain) / 10;  
//         reverseNumber = reverseNumber * 10 + remain;
//     }

//     if (reverseNumber === num) {
//         return "palindrome";
//     }
//     return "not palindrome";
// };

// console.log(par(121));    
// console.log(par(12123));  

// const sameNum = (num) => {
//     let copy = num;
//     let reverseNumber =0;
    

//     while(copy>0) {
//         const remain = copy % 10;
//         copy = (copy - remain) /10;
//         reverseNumber = reverseNumber * 10 + remain;
//     }
//     let check =null;
//     while(reverseNumber>0) {
//         const remain = reverseNumber % 10
//         remain = (reverseNumber - remain) /10;


//     }
// }

// function pp() {
//     let number = "10001";
//     let a = number.split("")

//     for (let i = 1; i < a.length; i++) {
//         if (number[i] === number[i - 1]) {
//             return number[i];
//         }
//     }

//     return null;
// }

// let firstRepeatingNumber = pp();
// console.log(firstRepeatingNumber); 

// function fibo(n) {
//     let a = 0;
//     let b = 1;
// for (let i = 0; i < n; i++) {
//     console.log(a)
//     a = a + b
//     b = a - b
// }
// return null;
// }
// fibo(8)

// function fibona(n) {
//     let a = 0;
//     let b = 1;
// while(b < n) {
//     console.log(a)
//     a = a + b
//     b = a - b
    
//     }
// } 

// fibona(8)



/**
 * 
 */
// const lines = (n) => {
//     let firstNumber = 2;
//     if (n < 1 ) {
//         console.log("The number is too low to be a levine seq")
//     }
//     for(let i = 2; i < n; i++) {
//         console.log(firstNumber);
//         let number = 1;
//         let count = 0;

//     }
//     return levine;
// }



 const bracket = () => {
    let first = ("[{()}]");
    let firstCheck = first.split("");
    let second = ("[{()}]");
    let secondCheck = second.split("");

    for(let i = 0; i < firstCheck.length; i++) {
        if(firstCheck[i] === secondCheck[i]) {
            return true
        } else {
            return false
        }
    }
    
 }
 console.log(bracket());

function deletes(n) {
    for (let i = 1; i < n.length; i++) {
        if (n[i] === n[i - 1]) {
            n.splice(i, 1);  
            i--; 
        }
    }
         console.log(n)
}
deletes([1,2,3,3,4,4,5])

// function deletess(n) {
//     for (let i = 1; i < n.length; i++) {
//         if (n[i] === n[i - 1]) {
//             n.splice(i, 1);  
            
//         }
//     }
//          console.log(n)
// }
// deletess([1,1,1,1,1,1])



