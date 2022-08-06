var letras = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat"
}  // diccionario de letras a encriptar

/**
 * It takes the text from the input field, replaces the letters with the encrypted letters, and then
 * puts the encrypted text in the output field
 * @returns The text that was inputed in the text area is being returned.
 */
function encriptar (){
  var texto = document.querySelector("#input-texto").value
  var letrasCifradas = Object.keys(letras)

  var textoCifrado = texto.replace(new RegExp(letrasCifradas.join("|"), "gi"), function(unir){
    return letras[unir]
  }) // reemplaza las letras originales por las letras encriptadas usando expresiones regulares y el método replace de los strings https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp  
  document.querySelector(".text-input-salida").value = textoCifrado
  document.querySelector("#input-texto").value

}
var btnEncriptar = document.querySelector("#btn-encriptar")
btnEncriptar.onclick = encriptar




/**
 * It replaces the encrypted letters with the original letters using regular expressions and the
 * replace method of strings
 */
function desencriptar (){
  var texto = document.querySelector("#input-texto").value
  var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u") // reemplaza las letras encriptadas por las letras originales usando expresiones regulares y el método replace de los strings
  document.querySelector(".text-input-salida").value = textoCifrado
  document.querySelector("#input-texto").value

}
var btnDesencriptar = document.querySelector("#btn-desencriptar")
btnDesencriptar.onclick = desencriptar


function limpiar (){
  document.querySelector("#input-texto").value = ""
  document.querySelector(".text-input-salida").value = ""
}

var btnLimpiar = document.querySelector("#btn-limpiar")
btnLimpiar.onclick = limpiar

function copiar (){
  var copyText = document.querySelector(".text-input-salida")
  copyText.select()
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy", null)  // copia el texto seleccionado 
}

var btnCopiar = document.querySelector("#btn-copiar")
btnCopiar.onclick = copiar