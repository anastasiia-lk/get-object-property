function getProperty(obj, path) {
  // разбить path в массив и положить результат в переменную arr
  const arr = path.split('.');

    // создать переменную res и присвоить ей obj
  let res = obj;

  // пройтись по массиву от начала и до конца
  for (let i = 0; i < arr.length; i += 1) {
    // взять элемент массива
    // достать из переменной результата свойство по соответствующему ключу
    // записать полученное свойство в переменную res
    res = res[arr[i]];
  }

  // вернуть res
  return res;
} 

const object = {
  one: 1,
  two: {
    three: 3
  },
  four: 4
};

console.log(getProperty(object, 'one')); // 1
console.log(getProperty(object, 'two.three')); // 3 