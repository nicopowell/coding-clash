# Procesando texto

Ricardo quiere crear un procesador de texto que sea mucho mejor que los existentes.

Un procesador de texto es, para Ricardo, una función que toma un texto y una lista de comandos, y va aplicando sucesivamente los comandos indicados en orden, para obtener un texto final como resultado.

Más precisamente, un texto es una cadena de inicialmente `N` caracteres formada solo por letras minúsculas y/o mayúsculas del alfabeto.

Los caracteres en mayúsculas y minúsculas se consideran diferentes, es decir por ejemplo c no es equivalente a C.

Los `T` comandos que hay que aplicar al texto inicial se describen cada uno mediante una cadena de caracteres.

Las cadenas posibles para describir comandos son:

- INTERCAMBIA: Las mayúsculas del texto se vuelven minúsculas, y viceversa.
- BORRAULTI: Borra el ultimo caracter. Si el texto era vacío, no hace nada.
- BORRAPRI: Borra el primer caracter. Si el texto era vacío, no hace nada.
- DUP: Duplica la cadena. Por ejemplo si era coPIA, se transforma en coPIAcoPIA.
- ROTA: Rota la cadena, llevando el primer caracter al final. Por ejemplo si era aBCD, se transforma en BCDa. Si el texto era vacío, no hace nada.
- INVERTIR: Invierte toda la cadena. Por ejemplo abcdef cambia a fedcba.
- CHAUAGUS: Borra la primera aparicion del texto AGUS en la cadena, ya sea que aparezca en mayúscula o minúscula o mezclado. Si no aparece no hace nada. Por ejemplo aguaAgUSagusyAGUS se transforma en aguaagusyAGUS.
- AGREGA(a): Agrega la cadena a dada en el comando, al final del texto. Por ejemplo el comando AGREGA(xYzz) transformaría abc en abcxYzz.
- BORRA(i): Borra el i-ésimo caracter.

El resultado que se devuelve es el texto final luego de aplicar los T comandos indicados.
En esta primera versión, Ricardo quiere que el procesador de texto tenga una memoria de hasta 1000 caracteres. Si en cualquier momento (ya sea en el resultado final, o en el texto que resulta de aplicar los primeros k comandos, para algún 1 ≤ k ≤ T) se forma un texto de estrictamente más de 1000 caracteres, se debe retornar la cadena “MemoryLimitExceeded” (sin las comillas).

### Objetivos

- Crear la función `procesatexto(texto, comandos)`.
  - texto: Cadena de texto
  - comados: Array de comandos que se aplicaran al texto
- Se retorna el resultado de aplicar los comandos al texto.