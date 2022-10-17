/* 

Algoritmo que transforme notas escolares do sistema numerico para notas caracteres: "A", "B", "C" etc.

A - de 90 para cima
B - entre 89 e 80
C - entre 79 e 70
D - entre 69 e 60
F - menor que 60

*/


function getScore(score){
    if(score >= 90 && score <= 100){
        score = 'A';
    } else if(score >= 80 && score <= 89){
        score = 'B';
    } else if(score >= 70 && score <= 79){
        score = 'C';
    } else if(score >= 60 && score <= 69){
        score = 'D';
    } else if(score >= 0 && score < 59){
        score = 'F';
    }

    switch(score){
        case 'A':
            console.log(`Sua nota e ${score} parabéns.`);
            break;

        case 'B':
            console.log(`Sua nota e ${score} essa foi boa.`);
            break;

        case 'C':
            console.log(`Sua nota e ${score} está na média.`);
            break;

        case 'D':
        console.log(`Sua nota e ${score} essa foi quase .`);
            break;

        case 'F':
        console.log(`Sua nota e ${score} infelizmente não foi essa vez ;-;.`);
            break;

        default:
            console.log('Nota inválida');
            break;
    }
}


getScore(90);