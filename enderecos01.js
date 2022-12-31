const enderecosConcatenados =  [
    "Miritiba 339",
    "Babaçu 500",
    "Cambuí 804B",
]

// aqui foi usado a função .map para percorrer o array de endereços concatenados
// para cada elemento do array, fpi aplicada a função split que separa string com argumento, que no caso foi usado como argumento o 'espaço'
// e no fim é retornado os elementos rua e numero
const enderecosSeparados = enderecosConcatenados.map((endereco) => {
    return endereco.split(' ');
})

// aqui foi utilizado a função foreach para exibir no console cada um dos elementos
enderecosSeparados.forEach(endereco => {
    console.log(endereco);
});
