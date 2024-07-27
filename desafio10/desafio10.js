const K = 5
const N = [1, 1, 1, 1, 1]

function chocolates(K, N){
    let cantidadVariedades
    let caja = 0
    let cantidadCajas = 0
    if(K > N.length){
        return cantidadCajas
    }


    function variedades(N){
        cantidadVariedades = 0
        for (let i = 0; i < N.length; i++) {
            if(N[i] > 0){
                cantidadVariedades++
            }
        }
    }      

    variedades(N)

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
    return cantidadCajas
}