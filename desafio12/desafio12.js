const texto="Hola"
const comandos=[];
function intercambia(texto){
    for(let i=0;i<texto.lenght;i++){
        let letra=texto[i];
        if(letra===letra.toUpperCase){
            texto[i].toLowerCase();
        }else{
            texto[i].toUpperCase();
        }
    }
}
 function procesatexto(texto,comandos){

}