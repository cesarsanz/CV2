class resultado { 
    constructor (ancho, alto, base) {
        this.ancho = ancho;
        this.alto = alto;
        this.base = base;
    }
}
class UI {
    addresultado(){
        const resultadolist = document.getElementById("resultado");
        const element = document. createElement("const vulumen");
        element.innerHTML = const volumen;
        resultadolist.appendChild(element);
    }

}

document.getElementById("DATOS")
    .addEventListener("submit", function(e){
        const ancho = document.getElementById("ancho"),value;
        const alto = document.getElementById("alto"),value;
        const base = document.getElementById("base"),value;
        
        const volumen = base*altura*ancho;

        ui.showMessage('volumen', volumen+'cm3')
        e.preventDefault();
})

showMessage (volumen)