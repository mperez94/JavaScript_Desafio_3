alert ('Bienvenido a Calculadora 1.0v');

alert ('AVERTENCIA: No use mayusculas');


do{
    var operacion = prompt('QUE OPERACION DESEA REALIZAR ? multiplicar / dividir / sumar / restar')
    if(operacion == 'sumar'){
        let numeroA = parseFloat (prompt ('Ingrese numero A'));
        let numeroB = parseFloat (prompt ('Ingrese numero B'));
        let suma = numeroA + numeroB;
        console.log('Su resultado es: ' + suma);
    }
    else if (operacion == 'restar'){
        let numeroA = parseFloat (prompt ('Ingrese numero A'));
        let numeroB = parseFloat (prompt ('Ingrese numero B'));
        let resta = numeroA - numeroB;
        console.log('Su resultado es: ' + resta);
    }
    else if (operacion == 'multiplicar'){
        let numeroA = parseFloat (prompt ('Ingrese numero A'));
        let numeroB = parseFloat (prompt ('Ingrese numero B'));
        let multiplicar = numeroA * numeroB;
        console.log('Su resultado es: ' + multiplicar);
    }
    else if (operacion == 'dividir'){
        let numeroA = parseFloat (prompt ('Ingrese numero A'));
        let numeroB = parseFloat (prompt ('Ingrese numero B'));
        let dividir = numeroA / numeroB;
        console.log('Su resultado es: ' + dividir);
    }
    else{

        alert ('Opercion Incorrecta')

    }

    var seguir = prompt('Desea seguir? "si" / "no"');
    

}
while( seguir != 'no' );

