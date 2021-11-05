// Ex 1
// 1.1
const arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];
const indexChan = [];
for (let i = 0; i < arrayNumber.length; i++) {
    if (i % 2 == 0) {
        indexChan.push(arrayNumber[i]);
    }
}
const calcAverage = (array) => {
    let sum = 0;
    for (let i of array) {
        sum += i;
    }
    let average = sum / array.length;
    console.log("Ex 1.1: " + average);
}
calcAverage(indexChan);

// 1.2
const findMax = (array) => {
    let currentMax = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > currentMax) {
            currentMax = array[i];
        } else {
            continue;
        }
    }
    console.log("Ex 1.2: " + currentMax);
}
findMax(arrayNumber);

// 1.3
const findMin = (array) => {
    let currentMin = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < currentMin) {
            currentMin = array[i];
        } else {
            continue;
        }
    }
    console.log("Ex 1.2: " + currentMin);
}
findMin(arrayNumber);

// 1.4
const timSoChinhPhuong = (array) => {
    let soChinhPhuong = [];
    for (let i of array) {
        if (Math.sqrt(i) % 1 == 0) {
            soChinhPhuong.push(i)
        }
    }
    if (soChinhPhuong.length != 0) {
        console.log("Ex 1.4: " + soChinhPhuong)
    } else {
        console.log("Ex 1.4: Khong co so chinh phuong trong mang nay!")
    }
}
timSoChinhPhuong(arrayNumber)

// 1.5
const timSoNguyenTo = (array) => {
    let soNguyenTo = [];
    for (let i of array) {
        let count = 0;
        if (i < 0) {
            for (let j = i; j < 0; j++) {
                if (i % j == 0) {
                    count++;
                }
            }
        } else if (i == 0) {
            continue;
        } else {
            for (let j = 1; j <= i; j++) {
                if (i % j == 0) {
                    count++;
                }
            }
        }
        if (count == 2) {
            soNguyenTo.push(i);
        }
    }
    console.log("Ex 1.5: " + soNguyenTo)
}
timSoNguyenTo(arrayNumber);

// 1.6
const arrayNumber2 = [...arrayNumber]
for (let i = 0; i < arrayNumber2.length; i++) {
    if (arrayNumber2[i] < 0) {
        console.log(i);
        arrayNumber2[i] = 0;
    }
}
console.log("Ex 1.6: " + arrayNumber2);

// 1.7
const arrayNumber3 = arrayNumber.filter(item => {
    return item > 0;
})
console.log(arrayNumber3)

// Ex 2
// let arrayEx2 = [];
// for (let i = 0; i < 10; i++) {
//     let inputValue = parseInt(prompt("Nhap so nguyen"));
//     arrayEx2.push(inputValue)
// }
// arrayEx2.sort(function (a, b) { return a - b })
// console.log(arrayEx2)
// arrayEx2.reverse()
// console.log(arrayEx2)

// Ex 3
let arrayEx3 = []
let n = parseInt(prompt("Nhap so nguyen n > 0"))
if (n <= 0) {
    alert("Failed!")
} else {
    for (let i = 1; i <= n; i++) {
        let count = 0;
        for (let j = 0; j <= i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (count == 2) {
            arrayEx3.push(i);
        }
    }
}
console.log(arrayEx3)