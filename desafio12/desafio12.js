const texto = "Hola mundo";
const comandos = ["INTERCAMBIA", "BORRAULTI"];

function procesatexto(texto, comandos) {
    let cadenaProcesada = texto;
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

    function borraUlti(texto) {
        cadenaProcesada = texto.substring(0, texto.length - 1);
    }

    function borraPri(texto) {
        cadenaProcesada = texto.substring(1, texto.length);
    }

    function dup(texto) {
        cadenaProcesada = texto + texto;
    }

    function rota(texto) {
        if (texto.lenght > 0) {
            let caracter = texto.charAt(0);
            cadenaProcesada = texto.substring(1, texto.lenght).concat(caracter);
        }
    }

    function intercambia(texto) {
        const vec = texto.split("");
        for (let i = 0; i < vec.length; i++) {
            let ch = vec[i];
            if (ch === ch.toUpperCase()) {
                vec[i] = ch.toLowerCase();
            } else {
                vec[i] = ch.toUpperCase();
            }
        }
        return (cadenaProcesada = vec.join(""));
    }

    function chauAgus(texto) {
        let mayuscula = texto.toUpperCase;
        if (mayuscula.includes("AGUS")) {
            cadenaProcesada = texto.substring(0, mayuscula.indexOf("AGUS")) + texto.substring(mayuscula.indexOf("AGUS") + 4, texto.length);
        }
    }

    for (let i = 0; i < comandos.length; i++) {
        comprobarMemoria(texto);
        elegirFuncion(comandos[i]);
    }

    return cadenaProcesada;
}
