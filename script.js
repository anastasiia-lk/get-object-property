// function getProperty(obj, path) {
//   const arr = path.split('.');
//   let res = obj;

//   for (let i = 0; i < arr.length; i += 1) {
//     // проверим, что по ключу обратиться можно
//     if (res === undefined || res === null) {
//       console.log('Такого свойства нет');
//       // и выйдем из функции
//       return undefined;
//     }

//     res = res[arr[i]];
//   }

//   return res;
// } 


function getProperty(obj, path) {
  return path.split('.').reduce(function (res, key) {
        if (res === undefined || res === null) {
      console.log('Такого свойства нет');
      return undefined;
    }

    return res[key];
  }, obj);
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