const calcularPontuacao = require('./src/main.js');

const createDesempenho = (time, vitorias, empates, derrotas) => ({ time, vitorias, empates, derrotas})

test('A função calcularPontuacao existe', () => {
  expect(calcularPontuacao).toBeDefined()
  expect(typeof calcularPontuacao).toBe("function");
});

test('Números de inválidos', () => {
  let desempenho = createDesempenho("invalido", -10, 3, 0)
  expect(() => calcularPontuacao(desempenho)).toThrow()

  desempenho = createDesempenho("invalido", 5, -1, 0)
  expect(() => calcularPontuacao(desempenho)).toThrow()

  desempenho = createDesempenho("invalido", 20, 2, -5)
  expect(() => calcularPontuacao(desempenho)).toThrow()

  desempenho = createDesempenho("invalido", 5, 1.2, 0)
  expect(() => calcularPontuacao(desempenho)).toThrow()

  desempenho = createDesempenho("invalido", 20, 2, 5.4)
  expect(() => calcularPontuacao(desempenho)).toThrow()

  desempenho = createDesempenho("invalido", 2.3, 2, 0)
  expect(() => calcularPontuacao(desempenho)).toThrow()
})

test('Time invicto', () => {
  const desempenho = createDesempenho("AFC", 10, 0, 0);
  expect(calcularPontuacao(desempenho)).toBe(30)
});

test('Time que só perde', () => {
  const desempenho = createDesempenho("Ibiss", 0, 0, 10);
  expect(calcularPontuacao(desempenho)).toBe(0)
});

test('Time que só empata', () => {
  const desempenho = createDesempenho("Empate clube", 0, 100, 0);
  expect(calcularPontuacao(desempenho)).toBe(100)
});

test('Time campeão', () => {
  const desempenho = createDesempenho("CFC", 34.0, 1.0, 1.0);
  expect(calcularPontuacao(desempenho)).toBe(3*34 + 1)
});
