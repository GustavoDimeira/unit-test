/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
    mudança para fazer o commit
*/
const average = (valores) => {
  if (valores.length === 0) {
    return(undefined);
  } else {
    for (let x = 0; x < valores.length; x += 1) {
      if (typeof valores[x] !== typeof 1) {
        return(undefined);
      }
    }
  }
  let soma = 0;
  for (let x = 0; x < valores.length; x += 1) {
    soma = soma+valores[x];
  }
  let resultado = soma/valores.length;
  let x = Math.round(resultado);
  return(x);
};

module.exports = average;
