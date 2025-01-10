import SerieNumerica from './SerieNumerica';

describe('SerieNumerica', () => {
  let serie;

  beforeEach(() => {
    serie = new SerieNumerica();
  });

//   test('debe calcular correctamente el primer término', () => {
//     const resultado = serie.calcularTermino(3);
//     expect(resultado).toBeCloseTo(39, 2);  // Primer término esperado: 39
//   });

//   test('debe calcular correctamente el segundo término', () => {
//     const resultado = serie.calcularTermino(4);
//     expect(resultado).toBeCloseTo(102, 2);  // Segundo término esperado: 102
//   });

//   test('debe calcular correctamente el tercer término', () => {
//     const resultado = serie.calcularTermino(5);
//     expect(resultado).toBeCloseTo(168, 2);  // Tercer término esperado: 168
//   });

//   test('debe calcular correctamente el cuarto término', () => {
//     const resultado = serie.calcularTermino(6);
//     expect(resultado).toBeCloseTo(392, 2);  // Cuarto término esperado: 392
//   });

//   test('debe calcular correctamente el quinto término', () => {
//     const resultado = serie.calcularTermino(7);
//     expect(resultado).toBeCloseTo(910, 2);  // Quinto término esperado: 910
//   });

//   test('debe calcular correctamente el sexto término', () => {
//     const resultado = serie.calcularTermino(8);
//     expect(resultado).toBeCloseTo(2040, 2);  // Sexto término esperado: 2040
//   });

//   test('debe calcular correctamente el séptimo término', () => {
//     const resultado = serie.calcularTermino(9);
//     expect(resultado).toBeCloseTo(4536, 2);  // Séptimo término esperado: 4536
//   });

//   test('debe calcular correctamente el octavo término', () => {
//     const resultado = serie.calcularTermino(10);
//     expect(resultado).toBeCloseTo(10010, 2);  // Octavo término esperado: 10010
//   });

//   test('debe lanzar un error si n es menor o igual a 2', () => {
//     expect(() => serie.calcularTermino(2)).toThrowError('El valor de n debe ser mayor a 2.');
//   });

//   test('debe lanzar un error si n es negativo', () => {
//     expect(() => serie.calcularTermino(-1)).toThrowError('El valor de n debe ser mayor a 2.');
//   });

  //////

  test('debe calcular correctamente el primer término', () => {
    const resultado = serie.calcularTermino(3);
    expect(resultado).toBeCloseTo(39, 2);  // Primer término esperado: 39
  });

  test('debe calcular correctamente el segundo término', () => {
    const resultado = serie.calcularTermino(4);
    expect(resultado).toBeCloseTo(102, 2);  // Segundo término esperado: 102
  });

  test('debe calcular correctamente el tercer término', () => {
    const resultado = serie.calcularTermino(5);
    expect(resultado).toBeCloseTo(95, 2);  // Tercer término esperado: 95
  });

  test('debe calcular correctamente el cuarto término', () => {
    const resultado = serie.calcularTermino(6);
    expect(resultado).toBeCloseTo(115, 2);  // Cuarto término esperado: 115
  });

  test('debe calcular correctamente el quinto término', () => {
    const resultado = serie.calcularTermino(7);
    expect(resultado).toBeCloseTo(121.8, 2);  // Quinto término esperado: 121.8
  });

  test('debe calcular correctamente el sexto término', () => {
    const resultado = serie.calcularTermino(8);
    expect(resultado).toBeCloseTo(108.5, 2);  // Sexto término esperado: 108.5
  });

  test('debe calcular correctamente el séptimo término', () => {
    const resultado = serie.calcularTermino(9);
    expect(resultado).toBeCloseTo(102.15, 2);  // Séptimo término esperado: 102.15
  });

  test('debe calcular correctamente el octavo término', () => {
    const resultado = serie.calcularTermino(10);
    expect(resultado).toBeCloseTo(87.857, 2);  // Octavo término esperado: 87.857
  });

});
