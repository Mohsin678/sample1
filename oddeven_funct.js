function oddeven(n){
    let remainder = n % 2;
    if(remainder==0){
        console.log("number is even");
    }
    else{
        console.log("number is odd")
    }

}
console.log(oddeven(7));