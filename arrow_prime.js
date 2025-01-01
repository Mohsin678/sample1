let isprime = (n) => {
    let prime = true;

    for (let i = 2; i < n; i++) {
        if (n % 2 == 0) {
            prime = false;
            break;
        }
    }
    prime == true ? console.log("prime") : console.log("not prime");
}
isprime(44);
isprime(5);