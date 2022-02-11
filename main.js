// for1
// let k = Number(prompt("Введите число: "))
// let n = Number(prompt("Введите число: "))
// let sum = 0
// for (let i = 0; i < n; i++) {
//     console.log(k)
// }

// for2
// let a = Number(prompt("Введите число: "))
// let b = Number(prompt("Введите число: "))
// for (i = 0; a <= b; i++) {
//     console.log(a)
//     a++
// }
// console.log(`количество чисел ${i}`)

// for3
// let a = Number(prompt("Введите число: "))
// let b = Number(prompt("Введите число: "))
// let c = 0
// for (i = b-1; i > a; i--) {
//     console.log(i)
//     c++
// }
// console.log(`количество чисел ${c}`)

// for4
// let c = Number(prompt("Введите сумму: "))
// for (let a=1; a<=10 ; a+=1 ){
//     console.log(`Стоимость за ${a} кг, я должен заплатить ${c*a}`)
// }

// for5
// let c = Number(prompt("Введите сумму: "))
// for (let a=0.1; a<=1 ; a+=0.1 ){
//     console.log(`Стоимость за ${a} кг, я должен заплатить ${c*a}`)
// }

// for6
// let c = Number(prompt("Введите сумму: "))
// for (let a=1.2; a<=2 ; a+=0.2 ){
//     console.log(`Стоимость за ${a} кг, я должен заплатить ${c*a}`)
// }

// for7
// let a = Number(prompt("Введите число: "))
// let b = Number(prompt("Введите число: "))
// let f = 0 
// for (let i = a; i <= b; i++) {
//     f+=i
// }
// console.log(f)

// for8
// let a = Number(prompt("Введите число: "))
// let b = Number(prompt("Введите число: "))
// let f = 1 
// for (let i = a; i <= b; i++) {
//     f *= i
// }
// console.log(f)

// for9
// let a = Number(prompt("Введите число: "))
// let b = Number(prompt("Введите число: "))
// let f = 0 
// for (let i = a; i <= b; i++) {
//     f += i**2
// }
// console.log(f)

// for10
// let a = Number(prompt("Введите число: "))
// let f = 0 
// for (let i = 1; i <= a; i++ ) {
//     f += 1/i
// }
// console.log(f)

// for11
// let a = Number(prompt("Введите число: "))
// let b = 0
// for (let i = b; i <= a*2; i++) {
//     b+=i**2
// }
// console.log(b)

// for12
// let a = Number(prompt("Введите число: "))
// let b = 1
// for(let i =1.1; i < 1.1 +a/10; i+=0.1) {
//     b *= i
// }
// console.log(b)

//for13

// let n = Number(prompt("Введите целое положительное число"))
// let c = 0
// let k = -1
// for(let i = 1; i <= n; i++){
//     k *= -1
//     c += k * (1 + 0.1 * i)
// }
// console.log(`Сумма чисел 1.1 - 1.2 + 1.3 .... (${n} слагаемых) = ${c}`)

//for14

// let n = Number(prompt("Введите целое положительное число"))
// let c = 0
// console.log(`Квадраты всех целых чисел до ${n}`)
// for(let i = 1; i <= 2*n - 1; i += 2){
//     c += i
//     console.log(c)
// }

//for15

// let a = Number(prompt("Введите число"))
// let n = Number(prompt("Введите степень в которую нужно возвести ваше число"))
// let c = 1
// for(let i = 1; i <= n; i++){
//     c *= a
// }
// console.log(`Число ${a} в степени ${n} = ${c}`)

//for16

let a = Number(prompt("Введите число"))
let n = Number(prompt("Введите крайнюю степень вашего числа"))
let c = 1
console.log(`Все целые степени числа ${a} до ${n} степени`)
for(let i = 1; i <= n; i++){
    c *= a
    console.log(c)
}

