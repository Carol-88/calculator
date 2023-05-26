// Función para agregar el símbolo del botón presionado al campo de entrada
function appendSymbol(symbol) {
  const resultInput = document.getElementById("result");
  resultInput.value += symbol;
}

// Función para calcular el resultado de la expresión matemática ingresada
function calculateResult() {
  const resultInput = document.getElementById("result");
  const result = eval(resultInput.value); // Utilizamos eval() para evaluar la expresión ingresada
  resultInput.value = result; // Mostramos el resultado en el campo de entrada
}

// Función para borrar todo el contenido del campo de entrada
function clearResult() {
  const resultInput = document.getElementById("result");
  resultInput.value = "";
}

// Función para eliminar el último carácter ingresado en el campo de entrada
function deleteLastEntry() {
  const resultInput = document.getElementById("result");
  resultInput.value = resultInput.value.slice(0, -1);
}
