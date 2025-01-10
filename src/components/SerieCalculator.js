import SerieNumerica from "../utils/SerieNumerica";

const SerieCalculator = (n) => {
  const serie = new SerieNumerica();
  return serie.calcularTermino(n);
};

export default SerieCalculator;
