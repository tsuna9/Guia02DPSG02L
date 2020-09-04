interface showDatos{
    nombre: string;
    poderes: string[];
}

function showInfo(info: showDatos){
    document.writeln(`<strong>Nombre:</strong> ${info.nombre}`)
    document.write('<br></br>')
    document.writeln(`<strong>Poderes:</strong> ${info.poderes}`)
}
 let varSpiderman: showDatos = {
     nombre: 'Peter Parker',
     poderes: ['Trepar', 'Fuerza', 'Agilidad', 'Telas de Arana']
    }
showInfo(varSpiderman)