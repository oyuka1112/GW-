var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];
var sum=0;
function mean(arr){
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

console.log(mean(movieScore));

function variance(arr){
var mean_val = mean(arr);
var sum = 0;
for (var i =0; i<arr.length; i++){
    sum += (arr[i] - mean_val) **2;
}
return sum/arr.length;
}

console.log(variance(movieScore))

function std(arr){
    var variance_val = variance(arr);
    return Math.sqrt(variance_val);
}
console.log(std(movieScore));