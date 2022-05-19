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