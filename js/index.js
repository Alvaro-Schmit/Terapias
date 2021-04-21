var numero1 = 45;
// ciclo for//
var i =0;
for(i=0; i<=10; i++ ){
    console.log("la variable se incremento y ahora vale:" + i)
}

var arreglo1 = ["amor", 24, "array2", 64]
for(i=0; i<arreglo1.length; i++){
    console.log("el dato del arreglo en este punto es " + arreglo1[i])
}

//ciclo while
var i = 0
while(i< arreglo1.length){
    console.log("ciclo while iterando en arreglo1 = ", arreglo1[i])
    i++

}
//funciones

function saludos(nombre){

  return ("mensaje de funcion " + nombre)

}

console.log(saludos("juan"))