let isprime = (n) => {
    let prime = true;

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }

    }
    prime == true ? console.log("prime") : console.log("not prime");
}
isprime(14);
isprime(44);