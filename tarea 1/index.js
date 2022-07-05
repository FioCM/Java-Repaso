// FUNCION 1:  VERIFIQUE SI LA EDAD ENTREGADA ES MAYOR O MENOR A 18 AÑOS

// MANERA 1

function verificar(edad){
    if(edad >= 18){
        console.log("Es mayor de edad")
    }
    else{
        console.log("No es mayor de edad")
    }
}
verificar(18)


// MANERA 2  SE VE EN LA CONSOLA DE GOOGLE

let age = 17
switch(age){
    case age>=18:
        console.log("Es mayor de edad")
        break ;
    case age<18:
        console.log("no es mayor de edad")
        break;
}







// FUNCION 2: UNA FUNCION QUE RECIBA 2 NUMEROS Y DETERMINE CUAL DE LOS DOS ES MAYOR


function mayor(num1, num2){
    if(num1 > num2){
        console.log("El numero 1:",num1," es mayor que el numero 2:",num2)
    }
    else if(num1 == num2){
        console.log("El numero 1:",num1," es igual al numero 2:",num2)
    }
    else{
        console.log("El numero 2:",num2," es mayor que el numero 1:",num1)
    }
}
mayor(3, 2)





// FUNCION 3: UNA FUNCION QUE RESTE DOS NUMEROS Y COMENTE SI EL RESULTADO ES MAYOR O NO A 0



function resta(number1, number2){
    let resultado = number1-number2
    if(resultado>0){
        console.log("El resultado es un total de:"+resultado,"por lo tanto es mayor a 0")
    }
    else if(resultado == 0){
        console.log("EL resultado es un total de:"+resultado,"por lo tanto es igual a 0")
    }
    else{
        console.log("EL resultado es un total de:"+resultado,"por lo tanto es un resultado menor a 0")
    }
}

resta(1, 2)