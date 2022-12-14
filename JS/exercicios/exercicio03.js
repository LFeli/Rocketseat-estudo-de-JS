/*
Celsius to Fahrenheit

Crie uma função que recebe uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

C = (F - 32) * 5/9

F - C * 9/5 + 32

*/


function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não indentificado')
    }

    // fluxo ideal
    let updateDegree = Number(degree.toUpperCase().replace("F", " "));
    let formula  = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    //fluxo alternativo
    if(celsiusExists){
        updateDegree = Number(degree.toUpperCase().replace("C", " "));
        formula  = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updateDegree) + ' ' + degreeSign
}

try{
    console.log(transformDegree('50F'));
    console.log(transformDegree('0C'));
    console.log(transformDegree('110D'));

}catch(error){
    console.log(error.message);
}