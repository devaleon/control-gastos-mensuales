let listaNombresGastos = [];
let listaValoresGastos = [];

function clickBoton () {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    if (valorGasto > 150) {
        alert("¡Atención! Has registrado un gasto mayor a 150 USD");
    }

    actualizarListaGastos();

}

function actualizarListaGastos (){
    const listaElementos = document.getElementById ('listaDeGastos');
    const totalElementos = document.getElementById ('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;

    
    listaNombresGastos.forEach ((elemento,posicion)=> {
        const valorGasto = Number(listaValoresGastos[posicion]);

        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        </li>`;

        totalGastos += Number(valorGasto);
    });


    listaElementos.innerHTML=htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);

    limpiar();

}

function limpiar () {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto (posicion){
    listaNombresGastos.splice (posicion, 1);
    listaValoresGastos.splice (posicion, 1);
    actualizarListaGastos ();
}