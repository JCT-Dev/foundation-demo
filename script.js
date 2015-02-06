//------------CONFIGURAÇÕES------------

//Número Total de Imagens na pasta /img/slider

//AVISO: As imagens deverão ser de formato .jpg
// e devem ter o nome "img_x.jpg" (x = Número entre 1 e Número Total)

var Numero_Total_de_Imagens = 2;

//-------------------------------------

function home(){
    document.getElementById("home-tab").setAttribute("class","tab-title button_tab active");
    document.getElementById("quem-somos-tab").setAttribute("class","tab-title button_tab-big");
    document.getElementById("solucoes-tab").setAttribute("class","tab-title button_tab");
    document.getElementById("parceiros-tab").setAttribute("class","tab-title button_tab");
    document.getElementById("marcas-comerciais-tab").setAttribute("class","tab-title button_tab-big");
    document.getElementById("contactos-tab").setAttribute("class","tab-title button_tab");
    
    document.getElementById("home").setAttribute("class","content active");
    document.getElementById("quem-somos").setAttribute("class","content");
    document.getElementById("solucoes").setAttribute("class","content");
    document.getElementById("parceiros").setAttribute("class","content");
    document.getElementById("marcas-comerciais").setAttribute("class","content");
    document.getElementById("contactos").setAttribute("class","content");
}

function quem_somos(){
    document.getElementById("home-tab").setAttribute("class","tab-title button_tab");
    document.getElementById("quem-somos-tab").setAttribute("class","tab-title button_tab-big active");
    document.getElementById("solucoes-tab").setAttribute("class","tab-title button_tab");
    document.getElementById("parceiros-tab").setAttribute("class","tab-title button_tab");
    document.getElementById("marcas-comerciais-tab").setAttribute("class","tab-title button_tab-big");
    document.getElementById("contactos-tab").setAttribute("class","tab-title button_tab");
    
    document.getElementById("home").setAttribute("class","content");
    document.getElementById("quem-somos").setAttribute("class","content active");
    document.getElementById("solucoes").setAttribute("class","content");
    document.getElementById("parceiros").setAttribute("class","content");
    document.getElementById("marcas-comerciais").setAttribute("class","content");
    document.getElementById("contactos").setAttribute("class","content");
}

function solucoes(){
    document.getElementById("home-tab").setAttribute("class","tab-title button_tab");
    document.getElementById("quem-somos-tab").setAttribute("class","tab-title button_tab-big");
    document.getElementById("solucoes-tab").setAttribute("class","tab-title button_tab active");
    document.getElementById("parceiros-tab").setAttribute("class","tab-title button_tab");
    document.getElementById("marcas-comerciais-tab").setAttribute("class","tab-title button_tab-big");
    document.getElementById("contactos-tab").setAttribute("class","tab-title button_tab");
    
    document.getElementById("home").setAttribute("class","content");
    document.getElementById("quem-somos").setAttribute("class","content");
    document.getElementById("solucoes").setAttribute("class","content active");
    document.getElementById("parceiros").setAttribute("class","content");
    document.getElementById("marcas-comerciais").setAttribute("class","content");
    document.getElementById("contactos").setAttribute("class","content");
}

function parceiros(){
    document.getElementById("home-tab").setAttribute("class","tab-title button_tab");
    document.getElementById("quem-somos-tab").setAttribute("class","tab-title button_tab-big");
    document.getElementById("solucoes-tab").setAttribute("class","tab-title button_tab");
    document.getElementById("parceiros-tab").setAttribute("class","tab-title button_tab active");
    document.getElementById("marcas-comerciais-tab").setAttribute("class","tab-title button_tab-big");
    document.getElementById("contactos-tab").setAttribute("class","tab-title button_tab");
    
    document.getElementById("home").setAttribute("class","content");
    document.getElementById("quem-somos").setAttribute("class","content");
    document.getElementById("solucoes").setAttribute("class","content");
    document.getElementById("parceiros").setAttribute("class","content active");
    document.getElementById("marcas-comerciais").setAttribute("class","content");
    document.getElementById("contactos").setAttribute("class","content");
}

function marcas_comerciais(){
    document.getElementById("home-tab").setAttribute("class","tab-title button_tab");
    document.getElementById("quem-somos-tab").setAttribute("class","tab-title button_tab-big");
    document.getElementById("solucoes-tab").setAttribute("class","tab-title button_tab");
    document.getElementById("parceiros-tab").setAttribute("class","tab-title button_tab");
    document.getElementById("marcas-comerciais-tab").setAttribute("class","tab-title button_tab-big active");
    document.getElementById("contactos-tab").setAttribute("class","tab-title button_tab");
    
    document.getElementById("home").setAttribute("class","content");
    document.getElementById("quem-somos").setAttribute("class","content");
    document.getElementById("solucoes").setAttribute("class","content");
    document.getElementById("parceiros").setAttribute("class","content");
    document.getElementById("marcas-comerciais").setAttribute("class","content active");
    document.getElementById("contactos").setAttribute("class","content");
}

function contactos(){
    document.getElementById("home-tab").setAttribute("class","tab-title button_tab");
    document.getElementById("quem-somos-tab").setAttribute("class","tab-title button_tab-big");
    document.getElementById("solucoes-tab").setAttribute("class","tab-title button_tab");
    document.getElementById("parceiros-tab").setAttribute("class","tab-title button_tab");
    document.getElementById("marcas-comerciais-tab").setAttribute("class","tab-title button_tab-big");
    document.getElementById("contactos-tab").setAttribute("class","tab-title button_tab active");
    
    document.getElementById("home").setAttribute("class","content");
    document.getElementById("quem-somos").setAttribute("class","content");
    document.getElementById("solucoes").setAttribute("class","content");
    document.getElementById("parceiros").setAttribute("class","content");
    document.getElementById("marcas-comerciais").setAttribute("class","content");
    document.getElementById("contactos").setAttribute("class","content active");
}

function reload_slider(){
    for(var=1;i<=Numero_Total_de_Imagens;i++){
        var divimg+="<div><img u='image' src='img/slider/img_"+i+".jpg'/></div>";
    }
    document.getElementById("slider_images").innerHTML=divimg;
   }
}
