function sayMyName(name = ''){
    if(name === ''){
        throw new Error('Nome e necessario')
    }

    console.log('O parametro não executou o if, e exibiu o nome  ' + name);
}

try{
    sayMyName('')
} catch(e) {
    console.log(e);
}