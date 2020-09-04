var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    Empleado.prototype.showSalario = function () {
        return this.salario - (this.salario * 0.10) - (this.salario * 0.15);
    };
    return Empleado;
}());
var newEmpleado = new Empleado('Juan Peréz', 12000);
document.write('El nombre del empleado es: ' + newEmpleado.nombre);
document.write('<br></br>');
document.write('El salario total es: ' + newEmpleado.salario);
document.write('<br></br>');
document.write('El salario con descuentos del 10% AFP y 15% Renta es: ' + newEmpleado.showSalario());
