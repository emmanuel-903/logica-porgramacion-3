// print("------------FACTORIAL DE NUMEROS")
// num3 = int(input("Ingrese un numero: "))

// for n in range(num3-1, 1, -1):
//     num3 = num3 * n
// print(num3)
// print("")

// // transformar a js 

console.log("Factorial de numeros")
Number3 = parseInt(prompt("ingrese un numero"))
if (!isNaN(Number3)) {
    for (let n = Number3 -1; n >= 1 ; --n){
    Number3 = Number3 * n
    }}
    else {
        console.log("ingrese un numero valido")
    }
console.log(Number3)