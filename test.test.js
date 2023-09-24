const criarPokemon = require('./src/main.js');

test('A função criarPokemon existe', () => {
  expect(criarPokemon).toBeDefined()
  expect(typeof criarPokemon).toBe("function");
});

test('Criando um Pikachu', () => {
  const meuPokemon = criarPokemon("Pikachu", "Elétrico", 25, 80);
  expect(meuPokemon.nome).toBe("Pikachu");
  expect(meuPokemon.tipo).toBe("Elétrico");
  expect(meuPokemon.nivel).toBe(25);
  expect(meuPokemon.hp).toBe(80);
});
