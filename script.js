// const getArr = (num) => {
//     let arr = num.toString().split('')
//     return arr;
// }

// console.log(getArr(123456789));




const getArr = (num) => {
    let arr = [];
    let last = 0;

    while (num > 0){
        last = num % 10;
        arr.unshift(last);
        num = Math.floor(num / 10);
    }
    return arr;

}

console.log(getArr(+prompt()));

