let first =1;
let second = 1;
console.log(first);
console.log(second);
let sum = 0
function printfib(n){
for(i = 1; i<=n; i++){
    sum  = first + second;
    console.log(sum);
    first = second;
    second = sum;
    
}
}
console.log(printfib(5));