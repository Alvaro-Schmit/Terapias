var cardsByN = document.querySelectorAll(".cardsByN");

var cardobj =[{ 
    claseNegra: 'h-100 p-5 text-white bg-dark rounded-3 opacity',
    cuerpo: '<div class="col-md-6 "><div class="h-100 p-5 text-white bg-dark rounded-3 opacity"><h2>Change the background</h2><p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p><button class="btn btn-outline-light" type="button">Example button</button></div></div>'
},
{ 
    claseblanca: 'h-100 p-5 bg-light border rounded-3 opacity',
    cuerpo: '<div class="col-md-6 "><div class="h-100 p-5 bg-light border rounded-3 opacity"><h2>Change the background</h2><p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p><button class="btn btn-outline-light" type="button">Example button</button></div></div>'
},
{ 
    claseblanca: 'h-100 p-5 bg-light border rounded-3 opacity',
    cuerpo: '<div class="col-md-6 "><div class="h-100 p-5 bg-light border rounded-3 opacity"><h2>Change the background</h2><p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p><button class="btn btn-outline-light" type="button">Example button</button></div></div>'
},
{ 
    claseNegra: 'h-100 p-5 text-white bg-dark rounded-3 opacity',
    cuerpo: '<div class="col-md-6 "><div class="h-100 p-5 text-white bg-dark rounded-3 opacity"><h2>Change the background</h2><p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p><button class="btn btn-outline-light" type="button">Example button</button></div></div>'
}
];


for (let index = 0; index <cardobj.length; index++) {
    cardsByN[0].innerHTML += cardobj[index].cuerpo;
  
}

//cardsByN[0].children[0].style.marginBottom="20px";

for (let index = 0; index < cardsByN[0].children.length; index++) {
    cardsByN[0].children[index].style.marginBottom="20px"

}





/////////////// CREAR CONSTRUCTOR ///////////////////////////



function ItemMenu (nombre, direccion, clase){
    this.get =function(){ //no entiendo para que se usa el get aca.
        return this.nombre;
    };
    this.nombre = nombre;
    this.direccion = direccion;
    this.clase = clase;
    this.cuerpoHtml = function() {
        return '<a href="'+ this.direccion + '"><li class="'+ this.clase + '">'+ this.nombre +'</li></a>'
    }
}
//manejar esto con un arreglo de obj
var menuItems = ['Inicio', 'Terapias', 'Sobre mi', 'Contacto'];
var links = [
    './index.html',
    './index.html',
    './index.html',
    './index.html'
   
]
var menu = document.querySelectorAll("ul");

for (let index = 0; index < menuItems.length; index++) {
    const element = new ItemMenu (menuItems[index],  links[index], "menu" )
    menu[0].innerHTML += element.cuerpoHtml();
}





/////////////////////////////menu evento click//////////////////////

const btnMenu = document.querySelector("#btn-menu");
var menuMovil = document.querySelectorAll("ul");
contador = 0;
titulo = document.querySelector("#titulo")
logo = document.getElementById("logo")

btnMenu.addEventListener("click", function()

{

    if (contador==0 && innerWidth < 1024) {
        menuMovil[0].style.marginTop="-80px"  
        menuMovil[0].style.backgroundColor="blue"  
        titulo.style.visibility = "hidden"
        logo.style.visibility = "hidden"
        

    contador=1;
    }
    else {
        menuMovil[0].style.marginTop="-280px"  
        titulo.style.visibility = "visible"
        logo.style.visibility = "visible" 

    contador=0;
    }
    
    


});


  // una cosas que no me estan salienso
 
  //   2) me desplaza los elemento que tengo por debajo. yo prefiero que se desplace por encima y darle una transparencia a todo el elemento.
    