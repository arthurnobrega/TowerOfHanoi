const TowerOfHanoi = require('./tower-of-hanoi')

let towerOfHanoi = null;

beforeEach(() => {
  towerOfHanoi = new TowerOfHanoi(3, 3);
});

test('não deixar mover de uma torre não existente', () => {
  expect(towerOfHanoi.move(4, 1)).toBe('invalid');
});

test('não deixar mover para uma torre não existente', () => {
  expect(towerOfHanoi.move(1, 5)).toBe('invalid');
});

test('não deixar mover de uma torre que não tem discos', () => {
  expect(towerOfHanoi.move(2, 1)).toBe('invalid');
});

test('valida movimento de disco da torre 1 para a torre 2', () => {
  expect(towerOfHanoi.move(0, 1)).toBe('valid');
  expect(towerOfHanoi.disksPerTower()).toMatchObject([2, 1, 0]);
});

test('valida dois movimentos válidos', () => {
  expect(towerOfHanoi.move(0, 1)).toBe('valid');
  expect(towerOfHanoi.move(0, 2)).toBe('valid');
  expect(towerOfHanoi.disksPerTower()).toMatchObject([1, 1, 1]);
});

test('invalida disco maior em cima de menor', () => {
  expect(towerOfHanoi.move(0, 1)).toBe('valid');
  expect(towerOfHanoi.move(0, 1)).toBe('invalid');
});

// test('não deixar mover para uma torre que contém um disco menor', () => {
//   expect(towerOfHanoi.move(0, 1)).toBe('valid');
//   expect(towerOfHanoi.move(0, 1)).toBe('invalid');
// });
