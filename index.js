//Ex 1
const arrTest1 = [1, 2, 4, 0];
let result1 = [...arrTest1];
console.log(result1);
console.log(arrTest1);

//Ex 2
const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];
let exercise2 = [];
if (array2.length > array1.length) {
    for (let i in array2) {
        if (i < array1.length) {
            exercise2.push(array1[i] + array2[i]);
        }
        else {
            exercise2.push(array2[i]);
        }
    }
} else {
    for (let i in array1) {
        if (i < array2.length) {
            exercise2.push(array1[i] + array2[i]);
        }
        else {
            exercise2.push(array1[i]);
        }
    }
}

console.log(exercise2);

//Ex 3
var array1_3 = [1, 2, 3];
var array2_3 = [2, 30, 1];
let exercise3 = [];
const merge = (arr1, arr2) => {
    exercise3.push(...arr1);
    
    exercise = exercise3.push(...arr2.filter(item => {
        let count = 0;
        for (let i in exercise3) {
            if (item == exercise3[i]) {
                count++;
                continue;
            }
        }
        if (count == 0) {
            return item;
        }
    }))
}
merge(array1_3, array2_3);
console.log(exercise3)

//Ex 4
// cho 1 mang nhu sau
//composer: Teacher Nguyễn Trung Hiếu - mindX School

let student = [
    {
        name: "Duong",
        age: 11,
        hobbies: ["video game", "sleep", "learn"]
    },
    {
        name: "Dong",
        age: 12,
        hobbies: ["video game", "sick", "study"]
    },
    {
        name: "Minh",
        age: 13,
        hobbies: ["video game", "sick", "learn"]
    },
    {
        name: "Thanh",
        age: 9,
        hobbies: ["play game", "sleep", "learn"]
    },
    {
        name: "Hung",
        age: 11,
        hobbies: ["play game", "sick", "study"]
    }
]

// Cau 1: nhap tuoi va in ra name cua nhung ai co so tuoi da nhap
// cau 2: Nhap so thich, và in ra toàn bộ sở thích và name của những ai có chứa sở thích đó.
// Câu 3: Lọc ra những ai có sở thich là study và in ra nó.
// Cau 4: thay doi toan bo nhung ai co tuoi == 11 thành 15. (sử dụng map.

// Cau 1
let nameInput = prompt("Nhap tuoi ban can tim");
let nameSearched = student.filter(item => {
    if (item.age == nameInput) {
        return item.name
    };
})
if (nameSearched.length != 0) {
    console.log(nameSearched);
} else {
    alert("Khong tim  thay!")
}

// Cau 2