const enderecosConcatenados =  [
    'Rio Branco 23',
    'Quirino dos Santos 23 b',
]


// aqui foi usado a função .map para percorrer o array de endereços concatenados
// cada elementos é submetido a função split que recebeu como argumento, separar no momento em que encontrasse o primeiro numero dentro da string, e tudo a partir desse numero encontrado foi excluido, mantendo apenas o nome da rua salvos numa variável
// depois foi usada a função replace para pegar o endereço original, e remover dele o nome da rua que antes ja foi extraido na variavel 'rua', sobrando apenas o numero
// e no fim é retornado os elementos rua e numero
const enderecosSeparados = enderecosConcatenados.map((endereco) => {
    const [rua] = endereco.split(/ \d+/,1)
    return [rua, endereco.replace(rua+' ', '')];
})

// aqui foi utilizado a função foreach para exibir no console cada um dos elementos
enderecosSeparados.forEach(endereco => {
    console.log(endereco);
});
