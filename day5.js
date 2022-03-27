console.log("hello world");
let arr1=['a','b','c','d','e','f','g','h','i','j','k','l']
console.log(arr1);                                       //['a','b','c','d','e','f','g','h','i','j','k','l']

arr1.push(z);                                               //push z
console.log(arr1);                                   //[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'z' ]
console.log(arr1.push());                            //13
arr1.pop();                                          // pop z
console.log(arr1);                                  // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l' ]
console.log(arrl.pop());                           //l
arr1.shift();                                     // remove 1st element 
console.log(arr1);                                 //[ 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ]
console.log(arr1.shift());                         //b
arr1.unshift('x');                                     // add x at start
console.log(arr1);                                     //[ 'x', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ]
console.log(arr1.unshift());                           //10

console.log(arr1.slice(1,6));                         //[ 'c', 'd', 'e', 'f', 'g' ]
console.log(arr1.slice(2,7));                         //   [ 'd', 'e', 'f', 'g', 'h' ]
console.log(arr1.slice(1,-1));                        //[ 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ]
