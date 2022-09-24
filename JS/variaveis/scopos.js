// Exemplo Var

console.log('> existe x antes do bloco?', x);

{
    var x = 0
    console.log('> existe x dentro do bloco ?', x);
}

console.log('> existe x depois do bloco?', x);




// Exemplo let

let y = 1
    console.log('> existe y antes do bloco?', y);

{
    // console.log('> existe y antes?', y);
    y = 3
    console.log('> existe y ?', y);
}

console.log('> existe y depois do bloco?', y);


// exemplo const

const w = 4
{
    const w = 2
    console.log("> w dentro do bloco",w);
}

console.log("> w fora do bloco", w);