const K = 5
const N = [2, 2, 2, 2, 0]

function chocolates(K, N){
    if(K > N.length){
        return 0
    }

    let cantidadVariedades
    let caja = 0
    let cantidadCajas = 0

    function variedades(N){
        cantidadVariedades = 0
        for (let i = 0; i < N.length; i++) {
            if(N[i] > 0){
                cantidadVariedades++
            }
        }
    }    

    while(cantidadVariedades >= K){
        for (let i = 0; i < N.length; i++) {
            if(N[i]>0){
                caja++
                N[i]--
            }
            if(caja === 5){
                cantidadCajas++
                caja = 0
                break
            }
        }
        variedades(N)
    }
}
