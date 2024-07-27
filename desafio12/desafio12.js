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
                intercambia();
                break;
            case "BORRAULTI":
                borraUlti();
                break;
            case "BORRAPRI":
                borraPri();
                break;
            case "DUP":
                dup();
                break;
            case "ROTA":
                rota();
                break;
            case "INVERTIR":
                invertir();
                break;
            case "CHAUAGUS":
                chauAgus();
                break;
            case "AGREGA":
                agrega();
                break;
            case "BORRA":
                borra();
                break;
        }
    }
}
