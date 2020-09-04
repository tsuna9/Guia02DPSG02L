
class Rombo{
    DiagonalVertical: number;
    DiagonalHorizontal: number;

    constructor(
        DiagonalVertical: number,
        DiagonalHorizontal: number,
    ) {
        this.DiagonalVertical = DiagonalVertical;
        this.DiagonalHorizontal = DiagonalHorizontal;
    }
    AreaRombo() {
        return this.DiagonalHorizontal*this.DiagonalVertical;
    }
}

var Calculo = new Rombo(20, 32);

document.writeln('Calcularemos el area de un rombo de medidas 20 de lado y 32 de diagonal');
console.log(Calculo.AreaRombo());
document.write('<br></br>')
document.write('El resultado es: ' +Calculo.AreaRombo());
