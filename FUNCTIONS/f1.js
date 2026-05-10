function greeting(designation, name = "ABC"){ // giving default values to paramters : in case no argument is passed
    console.log(`Good morning ${designation} ${name}`);
}

greeting("Mr.", "Rhythm Mirdha"); // execution -> reference : greeting (nothing get printed)


function isPrime(n){ // parameter
    if(n == 1) return false;
    if(n <= 3) return true;

    for(let i=2; i*i<=n; i++){
        if(n%i == 0) return false;
    } 
    return true;
}

console.log(isPrime(7)); // argument

// when we don't pass an argument it become undefined