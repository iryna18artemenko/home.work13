const arr = prompt("Введіть значення для масиву").split(", ");

// d, t, a, h, l, g, 18, 1, 2, 45, 15, 9, 12

// Відсортувати масив за зростанням.

function sortElement(a, b){

    if(a < b) return -1;
    if(a > b) return 1;
    return 0;

}

arr.sort(sortElement);
arr.sort((a, b) => +a - +b);
  
alert(arr);  

// Видалити елементи з масиву з 2 по 4 (включно!).

arr.splice(2, 3); 

alert(arr);
 
