var Calculadora = /** @class */ (function () {
    function Calculadora(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    Calculadora.prototype.showCalculos = function (operador) {
        if (operador == '+') {
            return this.numero1 + this.numero2;
        }
        if (operador == '-') {
            return this.numero1 - this.numero2;
        }
        if (operador == '*') {
            return this.numero1 * this.numero2;
        }
        if (operador == '/') {
            if (this.numero2 == 0) {
                return 'imposible realizar la operación';
            }
            if (this.numero2 != 0) {
                return this.numero1 / this.numero2;
            }
        }
    };
    return Calculadora;
}());
var newCalculadora = new Calculadora(12, 6);
document.write('Los calculos para los valores siguientes es: ');
document.write('<br></br>');
document.write('número 1: 12 // número 2: 6');
document.write('<br></br>');
document.write('La suma de estos valores es: ' + newCalculadora.showCalculos('+'));
document.write('<br></br>');
document.write('La resta de los valores es: ' + newCalculadora.showCalculos('-'));
document.write('<br></br>');
document.write('La multiplicación de los valores es: ' + newCalculadora.showCalculos('*'));
document.write('<br></br>');
document.write('La división de estos valores es: ' + newCalculadora.showCalculos('/'));
document.write('<br></br>');
var newCalculadora2 = new Calculadora(10, 0);
document.write('<br></br>');
document.write('Cuando el segundo valor es 0');
document.write('<br></br>');
document.write('número 1: 10 // número 2: 0');
document.write('<br></br>');
document.write('La división de estos valores es: ' + newCalculadora2.showCalculos('/'));
