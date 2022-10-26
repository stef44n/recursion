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

console.log(fibs(8));

const array = [0, 1];
const fibsRec = function (num) {
    if (num < 3) {
        return array;
    } else {
        let num1 = array.length - 2;
        let num2 = array.length - 1;
        let newNum = Number(array[num1] + array[num2]);
        array.push(newNum);
        fibsRec(num - 1);
    }
    return array;
};

console.log(fibsRec(8));
