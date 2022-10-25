const fibs = function (num) {
    const init = [0, 1];

    if (num < 1) {
        return "OOPS";
    } else if (num == 1) {
        return [0];
    } else if (num == 2) {
        return init;
    } else {
        for (let i = 0; i < num - 2; i++) {
            let newArr = Number(init[i] + init[i + 1]);
            init.push(newArr);
        }
    }
    return init;
};

// const fibsRec = function (num) {
//     let array = [0, 1];
//     if (num == 1) {
//         return array;
//     } else if (num == 2) {
//         return array;
//     }

//     // while (num > 2) {
//     let num1 = array[-1];
//     let num2 = array[-2];
//     console.log(num);
//     console.log(array[-1]);
//     console.log(array[-2]);
//     // }
// };

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(3));
console.log(fibs(8));

// console.log(fibsRec(8));
