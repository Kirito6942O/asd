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

console.log("Question 1");
 const check = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0 ) {
        console.log("Fizz")
    } else if (num % 5 === 0 ) {
        console.log("Buzz");
    } else {
        console.log(`${num} is not divided by 5 nor 3`)
    }
 } 
 
 check(12);
 check(10);
 check(19);

 //question 2
 console.log("Question 2")

 let number = 1;
function factorial () {
    for (let i = 1; i <= 5; i++) {
        number *= i;
        console.log(number);
    }
}
factorial();

//Question 3
console.log("Question 3");

const par = (num) => {
    let copy = num;
    let reverseNumber = 0;

    while(copy) {
        const remain = copy % 10;
        copy = (copy - remain) / 10;  
        reverseNumber = reverseNumber * 10 + remain;
    }

    if (reverseNumber === num) {
        return "palindrome";
    }
    return "not palindrome";
};

console.log(par(121));    
console.log(par(12123));  


