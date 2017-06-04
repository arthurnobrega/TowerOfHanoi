const TowerOfHanoi = require('./tower-of-hanoi')

let towerOfHanoi = null;

beforeEach(() => {
  towerOfHanoi = new TowerOfHanoi(3, 4);
});

describe('valida regras do jogo', () => {
  test('não deixa mover de uma torre não existente', () => {
    expect(() => {
      towerOfHanoi.move(4, 1);
    }).toThrow();

    expect(towerOfHanoi.toArray()).toMatchObject([[1, 2, 3, 4], [], []]);
  });

  test('não deixa mover para uma torre não existente', () => {
    expect(() => {
      towerOfHanoi.move(1, 5);
    }).toThrow();

    expect(towerOfHanoi.toArray()).toMatchObject([[1, 2, 3, 4], [], []]);
  });

  test('não deixa mover de uma torre que não tem discos', () => {
    expect(() => {
      towerOfHanoi.move(2, 1);
    }).toThrow();

    expect(towerOfHanoi.toArray()).toMatchObject([[1, 2, 3, 4], [], []]);
  });

  test('valida movimento de disco da torre 1 para a torre 2', () => {
    expect(() => {
      towerOfHanoi.move(0, 1);
    }).not.toThrow();

    expect(towerOfHanoi.toArray()).toMatchObject([[2, 3, 4], [1], []]);
  });

  test('valida dois movimentos possíveis', () => {
    expect(() => {
      towerOfHanoi.move(0, 1);
    }).not.toThrow();

    expect(() => {
      towerOfHanoi.move(0, 2);
    }).not.toThrow();

    expect(towerOfHanoi.toArray()).toMatchObject([[3, 4], [1], [2]]);
  });

  test('invalida movimentar disco para cima de disco menor', () => {
    expect(() => {
      towerOfHanoi.move(0, 1);
      towerOfHanoi.move(0, 1);
    }).toThrow();

    expect(towerOfHanoi.toArray()).toMatchObject([[2, 3, 4], [1], []]);
  });
});

describe('valida movimentos automáticos', () => {
  test('valida primeiro movimento', () => {
    towerOfHanoi.autoMove();
    expect(towerOfHanoi.toArray()).toMatchObject([[2, 3, 4], [1], []]);
  });

  test('valida segundo movimento', () => {
    towerOfHanoi.autoMove();
    towerOfHanoi.autoMove();
    expect(towerOfHanoi.toArray()).toMatchObject([[3,  4], [1], [2]]);
  });

  test('valida terceiro movimento', () => {
    towerOfHanoi.autoMove();
    towerOfHanoi.autoMove();
    towerOfHanoi.autoMove();
    expect(towerOfHanoi.toArray()).toMatchObject([[3, 4], [], [1, 2]]);
  });
});
