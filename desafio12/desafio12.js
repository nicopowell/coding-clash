const texto = "Hola mundo";
const comandos = ["INTERCAMBIA", "BORRAULTI"];

function procesatexto(texto, comandos) {
    function comprobarMemoria(texto) {
        if (texto.length > 1000) {
            return "MemoryLimitExceeded";
        }
    }

    function elegirFuncion(comando) {
        switch (comando) {
            case "INTERCAMBIA":
                intercambia(texto);
                break;
            case "BORRAULTI":
                borraUlti(texto);
                break;
            case "BORRAPRI":
                borraPri(texto);
                break;
            case "DUP":
                dup(texto);
                break;
            case "ROTA":
                rota(texto);
                break;
            case "INVERTIR":
                invertir(texto);
                break;
            case "CHAUAGUS":
                chauAgus(texto);
                break;
            case "AGREGA":
                agrega(texto, cadena);
                break;
            case "BORRA":
                borra(texto, caracter);
                break;
        }
    }

    function borrarUlti(){
        
    }
}
