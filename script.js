// const arrayString = ["melancia", "limão", "laranja"]

// const arrayNumber = [45, 30, 12]

// const arrayMix = ["Everton", 12, false]

// const arrayUmValor = [5]

// const arrayEmpty = []

// console.log(arrayString.length)

// console.log(arrayString[2])

// console.log(arrayMix.includes(false))

// console.log(arrayUmValor[0])

// console.log(arrayUmValor.length)

// const copia = arrayString.slice()
// copia.push("mamão")
// console.log("Array original", arrayString)
// console.log("Array original", copia)
// copia.pop()
// copia.pop()
// copia.splice(2,2)

const arrayExercicio = [36, 12, 9, 22, 31, 5]
const copiaExercicio = arrayExercicio.slice()
copiaExercicio.pop()
copiaExercicio.push(6)
copiaExercicio.splice(1,1)
console.log(arrayExercicio)
console.log(copiaExercicio)