const arr = [8, 3, 22, 14, 5, 2, 9, 4, 1];
console.log("BEFORE MERGESORT");
console.log(arr);

const merge = function (arrL, arrR) {
    let i = 0;
    let j = 0;
    let newArr = [];
    while (i < arrL.length && j < arrR.length) {
        if (arrL[i] < arrR[j]) {
            newArr.push(arrL[i++]);
        } else {
            newArr.push(arrR[j++]);
        }
    }
    while (i < arrL.length) {
        newArr.push(arrL[i++]);
    }
    while (j < arrR.length) {
        newArr.push(arrR[j++]);
    }
    // console.log(newArr);
    return newArr;
};

const mergeSort = function (arr) {
    if (arr.length === 1) {
        // console.log(arr);
        return arr;
    }
    // console.log(arr);
    let mid = Math.floor(arr.length / 2);
    let arr1 = mergeSort(arr.slice(0, mid));
    let arr2 = mergeSort(arr.slice(mid));
    return merge(arr1, arr2);
};
console.log("AFTER MERGESORT 2.1");
console.log(mergeSort(arr));

// mergeSort(l,h){
// if (l < h) {
//
// mid = (l + h)/2
// mergeSort(l, mid)
// mergeSort(mid + 1, h)
// merge(l, mid, h)
//
//
// }
// }
