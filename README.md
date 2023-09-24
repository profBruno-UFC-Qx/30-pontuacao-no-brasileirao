# Descrição

Neste exercício, você vai criar uma função que recebe informações sobre um Pokémon e retorna um objeto que o representa.

Objetivo desse exercício é praticar a criação de funções e objetos em JavaScript. 

**Todas as alterações devem ser feitas nos arquivos já existentes**

* src/main.js -> quando for necessário alterar JavaScript

## Instruções:

1. Crie uma função chamada `criarPokemon` que aceita quatro argumentos: 
  - nome (string), tipo (string), nivel (number) e hp (number).
2. Dentro da função, crie um objeto vazio chamado pokemon.
3. Adicione as seguintes propriedades ao objeto pokemon com base nos argumentos recebidos:
  - `nome`: Nome do Pokémon (string).
  - `tipo`: Tipo do Pokémon (string).
  - `nivel`: Nível do Pokémon (number).
  - `hp`: Pontos de vida do Pokémon (number).
4. Retorne o objeto pokemon preenchido.
5. Fora da função, chame `criarPokemon()` passando valores fictícios como argumentos e armazene o objeto resultante.
6. Exiba o objeto resultante no console.


Exemplo de criação da função e chamada:

```javascript
function criarPokemon(nome, tipo, nivel, hp) {
  ...
}

const meuPokemon = criarPokemon("Pikachu", "Elétrico", 25, 80);
console.log(meuPokemon);
```
Dica: 

- Use os argumentos passados para a função para preencher as propriedades do Pokémon.
