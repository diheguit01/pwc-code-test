

const concatAddress =  [
    '4, Rue de la République',
    '100 Broadway Av',
    'Calle Sagasta ,26',
    'Calle 44 No 1991',
    "Miritiba 339",
    "Babaçu 500",
    "Cambuí 804B",
    'Rio Branco 23',
    '  Quirino dos Santos 23 b',
    '4, Rue de la République  ',
    '100 R Broadway Av',
    'Calle Sagasta ,N 26',
    'Calle 44 N 1991b',
    'Calle 44 N1991 b',
    "Miritiba -339",
    "Babaçu .500",
    "Cambuí --804B",
    '  N 43-- Rio Branco 23',
    'Quirino dos Santos ,,23 b',
    'N 43Rio Branco 23.',
    '-Quirino, dos Santos ,,..23 b',
    '-.,-Quirino, dos Santos',
];


// essa é uma função auxiliar é usada para verificar se o endereço possui numero, se possui mais de um numero no meio da string ou se só tem um numero
// foi usado 2 parametros, adNumber que é o numero do endereço que pode ser mais de um, caso tenha varios numeros no meio da string, e o adNumberSpaces que é o endereço completo sem espaços no começo e no fim (pois os dados podem vir com espaços ou algum caracter especial por erro de digitação, talvez)
// a const 'expRegIsFisrtNumber' é uma variavel que recebe uma expressão regular, que juntamente com a função match, verifica se o endereço/argumento possui numero no começo da string
// dentro da função auxiliar, a primeira coisa ser testada é se o endereço possui um numero, se  nao, ela retorna 'sem numero'
// depois, é verificado se o adNumber tem mais de um elemento, ou seja, mais de um numero encontrado no endereço, se houver, ela verifica com operador ternario se o endereço completo começa com o numero ou com a rua, caso comece com o numero, então a função retorna o numero que aparece no começo da string, se caso contrário, então a função retorna o ultimo numero que aparece na string
// caso o adNumber não tenha mais de um numero no enereço, então ela só retorna o numero do endereço encontrado
function numberValidation(adNumbers, adNumberSpaces){

    const expRegIsFisrtNumber = /(^\d|^N\d|^N\s\d|^No\d|^No\s\d|^Numero\d|^Numero\s\d|^Number\d|^Number\s\d)/gi;

    if (adNumbers === null) {
        return 'sem numero';
    }
    else if (adNumbers.length > 1) {
        return adNumberSpaces
            .match(expRegIsFisrtNumber) !== null ? adNumbers[0] : adNumbers[adNumbers.length-1];
    } 
    else {
        return adNumbers.join();
    }
}


// essa é a função principal, que faz a separação do numero do endereço completo, considerando se o numero está no começo ou no fim do endereço
// é utilizado a função 'map' para aplicar a função em cada um dos elementos
// primeiro temos expressões regulares que serao utilizadas para:
//      'expRegEspecialCaracterFirstEnd' para verificar se há caracteres especiais na string
//      'expRegNumbersAddress' para verificar se o endereço tem alguma seguencia de string: "n", numero: "qualquer", string: "apenas uma e qualquer uma que não seja 'R'"
// depois de declarar algumas variaveis para deixar o codigo mais legivel, a primeira coisa que é feita é a remoção dos espaços no começo ou no fim do endereço
// após isso é verificado todos os possiveis numeros que estão no endereço 
// e esses numeros são enviados para função auxiliar 'numberValidation' para validar o que é numero e o que faz parte do nome da rua
// tendo o numero real retornado, foi pego o endereço completo, para remover o numero validado usando a função 'replace', 
// depois foi removido os espaços e pontuações que o endereço original poderia ter como separador de numero e rua
// e no fim é retornado os elementos rua e numero

const apartAddress = concatAddress.map((address) => {
    
    const expRegEspecialCaracterFirstEnd = /(,+|-+|\.+|^\s+|\s$)/gi;

    const expRegNumbersAddress =/(N|No|N\s|No\s)?\d+(R^|\sR^|[a-z]$|\s[a-z]$)?/gi;
    
    const ad = address;

    const adNumberRemoveEspecialCaracter = ad
        .replace(expRegEspecialCaracterFirstEnd, '');

    const adNumbers = adNumberRemoveEspecialCaracter
        .match(expRegNumbersAddress);

    const adRealNumber = numberValidation(adNumbers, adNumberRemoveEspecialCaracter);

    const adAddress = ad
        .replace(expRegEspecialCaracterFirstEnd, '')
        .replace(adRealNumber, '')
        .replace(expRegEspecialCaracterFirstEnd, '');

    return ([adAddress, adRealNumber]);
})

// aqui foi utilizado a função foreach para exibir no console cada um dos elementos
apartAddress.forEach(address => {
    console.log(address);
});