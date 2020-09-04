function showInfo(info) {
    document.writeln("<strong>Nombre:</strong> " + info.nombre);
    document.write('<br></br>');
    document.writeln("<strong>Poderes:</strong> " + info.poderes);
}
var varSpiderman = {
    nombre: 'Peter Parker',
    poderes: ['Trepar', 'Fuerza', 'Agilidad', 'Telas de Arana']
};
showInfo(varSpiderman);
