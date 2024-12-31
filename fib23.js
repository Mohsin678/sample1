let first =1;
let second = 1;
let sum = 0
function printfib(n){
for(i = 1; i<=n; i++){
    sum  = first + second;
    console.log(sum);
    first = second;
    second = sum;
    return sum;
}
}
console.log(printfib(4));