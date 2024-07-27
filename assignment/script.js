//Question 1
for(let i=2; i<101; i+=2) {
    console.log(i);
}

//Question 2
for(let i=1; i<200; i+=2) {
    console.log(i);
}

//Question 3
const prime = prompt('Enter a number to check if it is a prime number or not: ');

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

//Question 4
for (let i =1; i<200; i++) {
    for(let j = 2; j<i; j++) {
        if(i%j === 0) {
            break;
        } else {
            console.log(i);
            break;
        }
    }
}
//Question 5

for (let i =1; i<100; i++) {
    for(let j = 2; j<i; j++) {
        if(i%j === 0) {
            break;
        } else {
            console.log(i);
            break;
        }
    }
}