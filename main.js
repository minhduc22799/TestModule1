function findAvg(arr){
    let sum = 0;
    for (let i = 0; i<arr.length; i++){
        sum = sum+arr[i];
    }
    let avg = sum/arr.length
    console.log("AVG:  "+avg)
}
findAvg([5,4,5,6])


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
    console.log(arrResult)
}

insertNumberToArray([1,2,4,5],9,2)

function sumOfListPrime(x) {
    let count =0
    let countSNT = 0;
    let sum = 0
    for (let i = 2; i <= x; i++) {
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
    console.log("Tong so nguyen to tu 0 toi "+ x +" la: " + sum)
}

sumOfListPrime(11)









