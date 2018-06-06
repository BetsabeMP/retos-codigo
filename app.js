/* 1. computeAverageLengthOfWords
Recibe dos strings y devuelve el promedio de la longitud de ambos strings.*/

const computeAverageLengthOfWords = (word1, word2) => {
    const operation = (word1.length + word2.length) / 2;
    return operation
  };
  console.log(computeAverageLengthOfWords('code', 'programs'));

/* 2. getNthElement
Dado un arreglo y un entero, getNthElement devuelve el valor según el entero dado, dentro del arreglo.
Si el arreglo tiene una longitud de 0, debería devolver' undefined'.*/

const getNthElement = (array, numberN) => {
    const arrEn = array[numberN];
    return arrEn
  };
  console.log(getNthElement([1, 3, 5], 1));

/* 3. convertDoubleSpaceToSingle
Dada una cadena, convertDoubleSpaceToSingle devuelve la cadena pasada en cadena con todos los espacios dobles convertidos a espacios simples.*/

function convertDoubleSpaceToSingle(word) {
  const newSentence = word.split('  ').join(' ');
  return newSentence
}
console.log(convertDoubleSpaceToSingle("string  with  double  spaces"));


/* 4. areValidCredentials
Dando un nombre y una contraseña, areValidCredentials, devuelve true si el nombre
es superior a 3 caracteres y la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve false.*/

const areValidCredentials = (name, password) => {
    if (name.length > 3 && password.length >= 8) {
      const superior = true;
      return superior
    } else {
      const inferior = false;
      return inferior
    }
  };
  console.log(areValidCredentials('Ritu', 'mylongpassword'));

/*6. filterOddElements
Dado un array de números, devuelve un array que contiene sólo los números impares del array dado.*/

  const filterOddElements = [1, 2, 3, 4, 5];
  const numbers = filterOddElements.filter((element) => {
   return element % 2 === 1;
  });
  console.log (numbers);

/* 15. calculateBillTotal
  Dado el pre impuesto y la cantidad antes de propina de una comida, calculateBillTotal devuelve 
  la cantidad total debida después de impuestos y propina.

  Suponga que el impuesto de ventas es 9.5% y la propina es 15%.
  NO incline el impuesto sobre las ventas, solo sobre la cantidad de propina.
  var output = calculateBillTotal(20);
  console.log(output); // -> 24,9*/


  const calculateBillTotal = (impuesto, propina) => {
    let venta = 20;
    const multiply = venta +(venta*(impuesto*propina));
    return multiply;
  };
  console.log(calculateBillTotal(0.95, 0.15));



/* 16. convertScoreToGrade
  Dada una puntuación, convertScoreToGrade devuelve el grado de letra correspondiente a la puntuación.
  (100 - 90) -> 'A'
  (89 - 80) ->' B '
  (79 - 70) -> 'C'
  (69 - 60) -> 'D'
  (59 - 0) -> 'F'
  Si la puntuación dada es mayor que 100 o menor que 0, debe devolver 'PUNTUACION INVALIDA'.*/

  let nota = 91;
  let notaLetra = "";

  if (nota >=101) {
    notaLetra = "PUNTUACIÓN INVALIDA";
  } else if (nota >= 90) {
      notaLetra = "A";
  } else if ( nota >= 80) {
      notaLetra = "B";
  } else if ( nota >= 70) {
      notaLetra = "C";
  } else if ( nota >= 60) {
      notaLetra = "D";
  } else {
      notaLetra = "F";
  }
  console.log(notaLetra);


