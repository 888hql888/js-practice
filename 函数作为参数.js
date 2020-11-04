//函数作为参数传递
function add(num) {
    return num + 20;
}
let count = 10;

function sum(fn, count) {
    return add(count);
}
//1.注意点我们调用sum函数时，需要将函数体作为参数传递，所以必须传sum 而非sum()函数调用结果
console.log(sum(add, 10), 'fn.'); //结果为20

//回调函数
//函数异步执行后，执行后的函数 并返回结果



// ===========2020.11.5===========