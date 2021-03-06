/*1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.*/

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



/*2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут быть положительными и отрицательными. Выведите на экран только отрицательные числа, которые больше -10, но меньше -3.*/

let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] > -10 && arr1[i] < -3) {
    console.log(arr1[i]);
    }
}



/*3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result и выведите.*/

let arr2 = [],
    arr3 = [],
    result = 0,
    n = 23;

for (let i = 23; i <= 57; i++) {
    arr2.push(i);  
    result += i;    
}
console.log(arr2);

while (n >= 23, n <= 57) {
    arr3.push(n);
    n++;
}

console.log(arr3);
console.log(result);



/*4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.*/

let arr4 = ['10', '20', '30', '50', '235', '3000'];
let arr41 = [];

for (let i = 0; i < arr4.length; i++) {
    arr41 = arr4[i].split('');
    if(arr41[0] == 1 || arr41[0] == 2 || arr41[0] == 5) console.log(arr4[i]); 
}



/*5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.*/

let arrWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 0; i < arrWeek.length; i++) {
    if (arrWeek[i] == 'СБ' || arrWeek[i] == 'ВС') {
        document.write(arrWeek[i].bold() + ' ');
    } else {
        document.write(arrWeek[i] + ' ')
    }
}



/*6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, и получите последний элемент массива, используя свойство length.*/

let arr5 = [1 , 45, 56, 655, 66, 98];

arr5.push(111);

console.log(arr5);
console.log(arr5[arr5.length-1]);



/*7. Запросите у пользователя по очереди числовые значения при помощи prompt и сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое значение. Выведите получившийся массив на экран. Выполните сортировку чисел массива, и выведите его на экран.*/

let arr6 = [];
for(;;) {
    let value = prompt('Введите число');
    
    if (value == '' || value == false) break;

    arr6.push(value);
}

arr6.sort(function(a, b) {
    return a - b;
});

console.log(arr6);



/*8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), используя цикл while и метод reverse.*/

let arr7 = [12, false, 'Текст', 4, 2, -5, 0];

arr7.reverse();

let i =0;
while(i < arr7.length) {
    console.log(arr7[i]);
    i++;
}


/*9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].*/ 

let arr8 = [5, 9, 21, , , 9, 78, , , , 6];
let num = 0;

console.log(arr8);

for (i = 0; i < arr8.length; i++) {
    if(arr8[i] == undefined) {
        num += 1;
    }
}

console.log(num);


/*10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2].*/

let arr9 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];

let index1 = arr9.indexOf(0);
let index2 = arr9.lastIndexOf(0);

console.log(index1, index2);

arr9 = arr9.slice(index1+1, index2);
console.log(arr9);

let sum = 0;
for (let i = 0; i < arr9.length; i++) {
    sum +=arr9[i];
}

console.log(sum);



/*11. *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает пользователь. Например: высота = 5, на экране:*/

function pyramide(h = 5) {
    let str = '';
    
    for (let i = 1; i <= h; i++) {
        str = '';
    
        for (let j = 1; j <= (h - i); j++) {
            str += ' ';
        }
    
        for (let j = 1; j <= (i*2-1); j++) {
            str += '^';
        }
    
        document.write(`<pre>${str}</pre>`);
        console.log(str);
    
    }
}

pyramide(8);
