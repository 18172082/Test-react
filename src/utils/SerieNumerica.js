class SerieNumerica {
    calcularTermino(n) {
        if (n <= 2) {
          throw new Error("El valor de n debe ser mayor a 2.");
        }
      
        const primo = this.obtenerPrimo(n + 3);
        const triangular = this.obtenerTriangular(n - 1);
        //0,1,1,2,3,5.....
        const fibonacci = this.obtenerFibonacci(n - 2);
      
        console.log(`n: ${n}, primo: ${primo}, triangular: ${triangular}, fibonacci: ${fibonacci}`);
      
        return (primo * triangular) / fibonacci;
      }
  
    obtenerPrimo(posicion) {
      let contador = 0;
      let numero = 1;
  
      while (contador < posicion) {
        numero++;
        if (this.esPrimo(numero)) {
          contador++;
        }
      }
  
      return numero;
    }
  
    esPrimo(numero) {
      if (numero < 2) return false;
      for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
      }
      return true;
    }
  
    obtenerTriangular(posicion) {
      return (posicion * (posicion + 1)) / 2;
    }
  
    obtenerFibonacci(posicion) {
      if (posicion === 0) return 0;
      if (posicion === 1) return 1;
  
      let a = 0,
        b = 1,
        temp;
  
      for (let i = 2; i <= posicion; i++) {
        temp = a + b;
        a = b;
        b = temp;
      }
  
      return b;
    }
  }
  
  export default SerieNumerica;
  