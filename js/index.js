var cardsByN = document.querySelectorAll(".cardsByN");

var cardobj =[{ 
    claseblanca: 'h-100 p-5 text-white bg-dark rounded-3 opacity',
    cuerpo: '<div class="h-100 p-5 text-white bg-dark rounded-3 opacity"><h2>Change the background</h2><p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p><button class="btn btn-outline-light" type="button">Example button</button></div>'
},
{ 
    claseblanca: 'h-100 p-5 bg-light border rounded-3 opacity',
    cuerpo: '<div class="h-100 p-5 bg-light border rounded-3 opacity"><h2>Change the background</h2><p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p><button class="btn btn-outline-light" type="button">Example button</button></div>'
},
{ 
    claseblanca: 'h-100 p-5 bg-light border rounded-3 opacity',
    cuerpo: '<div class="h-100 p-5 bg-light border rounded-3 opacity"><h2>Change the background</h2><p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p><button class="btn btn-outline-light" type="button">Example button</button></div>'
},
{ 
    claseblanca: 'h-100 p-5 text-white bg-dark rounded-3 opacity',
    cuerpo: '<div class="h-100 p-5 text-white bg-dark rounded-3 opacity"><h2>Change the background</h2><p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p><button class="btn btn-outline-light" type="button">Example button</button></div>'
}
];


for (let index = 0; index <cardsByN.length; index++) {
    cardsByN[index].innerHTML = cardobj[index].cuerpo;
    
}

//cardsByN[1].style.backgroundColor = "white !important";

var menu = document.querySelectorAll(".botones");

var botones = [
    {
        texto: 'inicio',
        cuerpo: '<a href=""><li>inicio</li></a>'
    },
    {
        texto: 'Terapias',
        cuerpo: '<a href=""><li>Terapias</li></a>'
    },
    {
        texto: 'Sobre mi',
        cuerpo: '<a href=""><li>Sobre mi</li></a>'
    },
    {
        texto: 'Contacto',
        cuerpo: '<a href=""><li>Contacto</li></a>'
    }
]


for (let index = 0; index <cardsByN.length; index++) {
    menu[index].innerHTML = botones[index].cuerpo;
    
}