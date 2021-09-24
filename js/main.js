/*const arr = [56, 6, 3, 88, 23, -11];

const changeSign = (arrIndex) => {    
  arr.forEach(elem => { console.log(elem * -1)});
  console.log(elem);
}
changeSign(0);*/

/*домашка на субботу 25-09-2021: 
1) сделать функцию поменять местами 2 элемента в массиве 
2) сделать ф-ю сдвига элемента в массиве*/

//Exersize__1

const arr = [56, 6, 3, 88, 23, -11];
console.log(arr);

const changeElem = (x, y) => {
  let z = arr[x];
  arr[x] = arr[y];
  arr[y] = z;   
  console.log(arr);
}
changeElem(2, 3);

//Exersize__2

const arr1 = [56, 6, 3, 88, 23, -11];
console.log(arr1);

const moveElem = () => {
  let q = arr1.shift();
  arr1.push(q);
  //arr1[arr1[length - 1]] = arr1.push(q);
  console.log(arr1);
}
moveElem(0);
