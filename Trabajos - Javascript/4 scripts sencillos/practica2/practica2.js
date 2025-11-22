var numero1 = Number(prompt("Dime el primer numero"))
var numero2 = Number(prompt("Dime el segundo numero"))
var operacion = (prompt("Que operación quieres hacer : + , - , * , / "))

switch(operacion) {
    case "+":
        var result = numero1 + numero2
        alert("Has elegido SUMAR y el resultado es " + result)
        break
    case "-":
        var result = numero1 - numero2
        alert("Has elegido RESTAR y el resultado es " + result)
        break
    case "*":
        var result = numero1 * numero2
        alert("Has elegido MULTIPLICAR y el resultado es " + result)
        break
    case "/":
        var result = numero1 / numero2
        if (numero2 == 0  || numero1 == 0) {
            alert("No puedes dividir entre 0")
        break
        } else {
            alert("Has elegido DIVIDIR y el resultado es " + result)
        }
        

    default:
        alert("Es una calculadora basica... dame tiempo")

}