# Armando cajas de bombones de chocolate

Pedrito quiere regalar cajas de bombones a sus amigos y familiares, por lo que necesita preparar tantas cajas como sea posible.

Cada caja debe contener exactamente `K` bombones, todos de tipo diferente. `

Existen `N` tipos diferentes de bombones, y Pedrito dispone de `xi` bombones de tipo `i` para cada 0 ≤ i ≤ N − 1.

No es necesario que Pedrito utilice todos los bombones que tiene a su disposición, pero lógicamente un mismo bombón no puede utilizarse en más de una caja.

Dados `K` y las cantidades de bombones disponibles de cada uno de los `N` tipos existentes, debes escribir una función que calcule la máxima cantidad de cajas de bombones que Pedrito puede armar, cumpliendo con la restricción de no poner nunca dos bombones de un mismo tipo en la misma caja.

### Objetivo

- Debes implementar la función `chocolates(K, x)`.
- Sus parámetros son:
  - K: El entero K que indica la cantidad de tipos diferentes de bombones en cada caja.
  - x: Un arreglo de N enteros, de modo tal que Pedrito tiene x[i] bombones del i-ésimo tipo.
- La función debe retornar un único entero: la máxima cantidad de cajas de bombones que Pedrito puede preparar.