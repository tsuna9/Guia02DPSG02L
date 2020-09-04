var Rombo = /** @class */ (function () {
    function Rombo(DiagonalVertical, DiagonalHorizontal) {
        this.DiagonalVertical = DiagonalVertical;
        this.DiagonalHorizontal = DiagonalHorizontal;
    }
    Rombo.prototype.AreaRombo = function () {
        return this.DiagonalHorizontal * this.DiagonalVertical;
    };
    return Rombo;
}());
var Calculo = new Rombo(20, 32);
document.writeln('Calcularemos el area de un rombo de medidas 20 de lado y 32 de diagonal');
console.log(Calculo.AreaRombo());
document.write('El resultado es: ' + Calculo.AreaRombo());
