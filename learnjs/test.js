var number = 5;

/*This is the inline comment*/

/* data type is 
undefined,null,boolean,string,symbol,number and object
*/
// There are three ways to declare a variable in javascript

var myname = 'Yune';// var is going to be able to be used throughout your whole program

let your_name = 'Dude';// let will only be used within the scope of where you declare them

const pi = 3.14;// const should be a variable that never change, if you try to change it you gonna get an error

// In java script we better end all lines with a semicolon ;
var a;
console.log(a)
var b = 2;
a = 7;
b = a;

console.log(b)

var aa = 1.2;

aa++;
console.log(aa)
/*
要特别注意相等运算符==。JavaScript在设计时，有两种比较运算符：

第一种是==比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；

第二种是===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。

由于JavaScript这个设计缺陷，不要使用==比较，始终坚持使用===比较。

另一个例外是NaN这个特殊的Number与所有其他值都不相等，包括它自己：

*/
console.log(NaN === NaN)
list = new Array('fuckyou', 2, 3)
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};
console.log(typeof person);

var name = '小明';
var age = 20;
var message = '你好, ' + name + ', 你今年' + age + '岁了!';
console.log(message);


var s = 'Hello, world!';
console.log('s.length is '+ s.length); // 13

var s = 'Hello, world!';

//字符串是不可变的，如果对字符串的某个索引赋值
console.log(s[0]); // 'H'
s[6]; // ' '
s[7]; // 'w'
s[12]; // '!'
s[13]; // undefined 超出范围的索引不会报错，但一律返回undefined

var s = 'hello, world';
console.log(s.indexOf('world')); // 返回7
console.log(s.indexOf('World')); 

// 注意到slice()的起止参数包括开始索引，不包括结束索引。
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(arr.slice(0, 3)); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
console.log(arr.slice(3));



// 如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个Array：
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
console.log(aCopy); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
aCopy === arr; // false

var arr = [1, 2];
arr.push('A', 'B'); // 返回Array新的长度: 4
arr; // [1, 2, 'A', 'B']
console.log(arr.pop(0)); // pop()返回'B'
arr; // [1, 2, 'A']
arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
arr; // []
arr.pop(); // 空数组继续pop不会报错，而是返回undefined
arr; // []