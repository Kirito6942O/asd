//Question 1
console.log("Question 1");
for(let i=2; i<101; i+=2) {
    console.log(i);
}
console.log("Question 2");
//Question 2
for(let i=1; i<200; i+=2) {
    console.log(i);
}
console.log("Question 3");
//Question 3
const prime = 9;

if(prime == 1) {
    console.log(`${prime} cannot be a prime number`);
} else if (prime < 1) {
    console.log(`${prime} is a negative number so it is not a prime number`);
} else {
    let isPrime = true;
    for (let i = 2; i < prime; i++) {
        if (prime % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${prime} is a prime number`);
    } else {
        console.log(`${prime} is not a prime number`);
    }
}
console.log("Question 4");
//Question 4
for(let i=1; i<100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}
//Question 5
console.log("Question 5");
let count = 0;
let num = 2;

while(count < 100) {
    let isPrime = true;
    for (let j = 2; j < num; j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
        count++;
    }
    num++;
}

