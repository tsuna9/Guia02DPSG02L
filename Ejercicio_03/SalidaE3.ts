class Empleado {
    nombre: string;
    salario: number;
    constructor(
        nombre: string,
        salario: number
    ) {
        this.nombre = nombre;
        this.salario = salario;
    }

    showSalario(){
        return this.salario - (this.salario * 0.10) - (this.salario * 0.15);
    }
}

var newEmpleado = new Empleado('Juan Peréz', 12000);

document.write('El nombre del empleado es: '+newEmpleado.nombre);
document.write('<br></br>')
document.write('El salario total es: '+newEmpleado.salario);
document.write('<br></br>')
document.write('El salario con descuentos del 10% AFP y 15% Renta es: '+newEmpleado.showSalario());