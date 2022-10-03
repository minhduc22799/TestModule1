console.log("----- Bai 1 -----: \n\n")
function findAvg(arr){
    let sum = 0;
    for (let i = 0; i<arr.length; i++){
        sum = sum+arr[i];
    }
    let avg = sum/arr.length
    console.log(arr)
    return avg;

}
let arr = [5,4,5,6]
let result = findAvg(arr)
console.log("AVG: " + result);


console.log("\n\n----- Bai 2 -----: \n\n")

function insertNumberToArray(arr, x , index){
    let indexArr = arr[index];
    let arrNew1 = [], arrNew2 = [] , arrResult = []

    if (index < 0 || index > arr.length){
        console.log(arr)
    }else {

        for (let i = 0; i <= index; i++){
            arrNew1.push(arr[i])
            arr[index] = x;
        }
        arrNew1.push(indexArr);
        for (let i = index + 1; i<arr.length;i++){
            arrNew2.push(arr[i])
        }

    arrResult = arrNew1.concat(arrNew2);

    }
    console.log("x : " + x)
    console.log("index : " + index)
    return arrResult;
}
let arr2 = [3,2,1,5]
let x = 10, index  = 2;
let result2 = insertNumberToArray(arr2,x,index)
console.log(result2)



console.log("\n\n----- Bai 3 -----: \n\n")


function sumOfListPrime(x) {
    let count =0
    let countSNT = 0;
    let sum = 0
    for (let i = 0; i <= x; i++) {
        if (countSNT <= x) {
            for (let j = 1; j <= i; j++) {
                if (i % j === 0) {
                    count += 1
                }
            }
            if (count === 2) {
               console.log("So nguyen to:" + i )
                sum = sum + i;

            }
            count = 0;
        } else {
            break;
        }
    }
    return sum;

}
let number  = 11;
let result3 = sumOfListPrime(number);
console.log("Sum = "+result3)










