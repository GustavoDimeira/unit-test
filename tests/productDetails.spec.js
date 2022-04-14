const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
    expect (typeof productDetails).toBe('function');
    expect (Array.isArray(productDetails())).toBe(true);
    expect (productDetails().length).toBe(2);
    expect (typeof productDetails()[0] && typeof productDetails()[1]).toBe('object');
    expect (productDetails('a', 'b')[0] !== productDetails('a', 'b')[1]).toBe(true);
    const valor = productDetails('a', 'b')[0].details.productId;
    const valor2 = productDetails('a', 'b')[1].details.productId;
    expect (valor[valor.length-3]+valor[valor.length-2]+valor[valor.length-1] && valor2[valor2.length-3]+valor2[valor2.length-2]+valor2[valor2.length-1]).toBe('123');
  });
});
