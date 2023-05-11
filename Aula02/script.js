/*
função getValue
a variável recebe o valor de name e o título h2 recebe como resultado: "Bem vindo, Franciane"

função removeValue
o título name para vazio
o resultado de h2 será vazio
*/
function getValue(){
  var value = document.getElementById("name").value;
  document.getElementById("result").innerHTML = "Bem vindo, " + value + "!";
}
function removeValue(){
  document.getElementById("name").value = "";
  document.getElementById("result").innerHTML = "";
}