const slider1 = document.querySelector(".slider-1");
const slider2 = document.querySelector(".slider-2");
const slider3 = document.querySelector(".slider-3");
const fimg1 = document.getElementById("fimg1")
const fimg2 = document.getElementById("fimg2")
const flechasBanner = document.querySelector(".container_flechasbanner")
const fizq = document.querySelector(".container_fizquierda");
const fder = document.querySelector(".container_fderecha");
const containerSlider = document.querySelector(".container_slider");

const articulo1 = document.getElementById("articulo1");
const articulo2 = document.getElementById("articulo2");
const articulo3 = document.getElementById("articulo3");
const articulo4 = document.getElementById("articulo4");

const plantillasder = document.querySelectorAll('.plantillasder');
const plantillasizq = document.querySelectorAll('.plantillasizq');

const header = document.querySelector(".container_header");
const buscador = document.getElementById("buscador");
const corazon = document.getElementById("corazon");
const usuario = document.getElementById("usuario");
const enlacesHeader = document.querySelector(".container_enlaces_header");

slider1.classList.add("seleccionado");

const rect = enlacesHeader.getBoundingClientRect().top


const concatEnlaces = ()=>{
  if(enlacesHeader.getBoundingClientRect().top <= 80){
    enlacesHeader.classList.add("fixed")
  }
  else if(enlacesHeader.getBoundingClientRect().top >= 80){
    enlacesHeader.classList.remove("fixed")
  }
}

setInterval(() => {
    animacionBanner();
}, 5000);

const abrirAside = ()=>{
  document.querySelector(".container_aside").style.animation = `abrirAside 5s forwads`
  document.querySelector(".container_article").style.animation = `achicarArticle 1s forwards`
}
corazon.addEventListener("mouseover",()=>{
  corazon.src ="imagenes/corazonrojo.png"
})
corazon.addEventListener("mouseenter",()=>{
  corazon.classList.add("hover")
  corazon.src.remove
  corazon.src ="imagenes/corazonrojo.png"
  corazon.style.transform = `scale(1.2)`
  document.querySelector(".mensaje_donacion").style.visibility = `visible`
  document.querySelector(".mensaje_donacion").style.opacity = `1`
})
corazon.addEventListener("mouseout",()=>{
  corazon.classList.remove("hover")
  if(!window.scrollY == "0"){   
    corazon.src.remove
    corazon.src = `imagenes/corazon.png`
    document.querySelector(".mensaje_donacion").style.visibility = `hidden`
    document.querySelector(".mensaje_donacion").style.opacity = `0`
    corazon.style.transform = `scale(1)`
  }
  else{
    corazon.src.remove
    corazon.src = `imagenes/corazonblancosi.png`
    document.querySelector(".mensaje_donacion").style.visibility = `hidden`
    document.querySelector(".mensaje_donacion").style.opacity = `0`
    corazon.style.transform = `scale(1)`
  }
})
document.addEventListener('DOMContentLoaded',()=>{
  activarTierra()
  handleScrollI()
  handleScrollD()
  activarInicio()
  document.getElementById("cruz_aside").style.display = `none`
  // idaOVuelta()
});
document.addEventListener('scroll', ()=>{
  activarTierra()
  handleScrollD()
  handleScrollI()
  headerTransicion()
  headerVolver()
  idaOVuelta()
  concatEnlaces()

});
document.getElementById("buscador").addEventListener("click",()=>{
  abrirAside()
})

document.querySelector(".container_banner").addEventListener("mouseenter",(e)=>{
    e.stopPropagation()
    flechasBanner.style.animation = `verFlechas .5s forwards`
})
document.querySelector(".container_banner").addEventListener("mouseleave",(e)=>{
    e.stopPropagation()
    flechasBanner.style.animation = `noVerFlechas .5s backwards`
})
fder.addEventListener("click",()=>{
    verDer()
})

fizq.addEventListener("click",()=>{
    verIzq()
})

slider1.addEventListener("click",()=>{
    reconocer(1)
})

slider2.addEventListener("click",()=>{
    reconocer(2)
})

slider3.addEventListener("click",()=>{
    reconocer(3)
})


document.getElementById("art1").addEventListener("click",()=>{
    mostrarTexto(1)
  })
  
document.getElementById("art2").addEventListener("click",()=>{
    mostrarTexto(2)
  })
document.getElementById("art3").addEventListener("click",()=>{
    mostrarTexto(3)
  })
document.getElementById("art4").addEventListener("click",()=>{
    mostrarTexto(4)
  })


  
// articulo1.addEventListener("mouseenter",()=>{
//     articulo1.style.cursor = `pointer`
//     abrirTexto(1)
//   })
  
// articulo2.addEventListener("mouseenter",()=>{
//     articulo2.style.cursor = `pointer`
//     abrirTexto(2)
//   })
// articulo3.addEventListener("mouseenter",()=>{
//     articulo3.style.cursor = `pointer`
//     abrirTexto(3)
//   })
// articulo4.addEventListener("mouseenter",()=>{
//     articulo4.style.cursor = `pointer`
//     abrirTexto(4)
//   })


// articulo1.addEventListener("mouseleave",()=>{
//     articulo1.style.cursor = `initial`
//     cerrarTexto(1)
//   })
  
// articulo2.addEventListener("mouseleave",()=>{
//     articulo2.style.cursor = `initial`
//     cerrarTexto(2)
//   })
// articulo3.addEventListener("mouseleave",()=>{
//     articulo3.style.cursor = `initial`
//     cerrarTexto(3)
//   })
// articulo4.addEventListener("mouseleave",()=>{
//     articulo4.style.cursor = `initial`
//     cerrarTexto(4)
//   })

  const idaOVuelta = () =>{
    if (header.classList.contains("blanco")){
      iconosBlancos()
    }
    if(header.classList.contains("negro")){
      iconosNegros()
    }
    if(corazon.classList.contains("hover")) corazon.src = `imagenes/corazonrojo.png`
  }

  const iconosNegros = ()=>{
    corazon.style.animation = `animacionIconosIda .5s forwards`
    corazon.src = `imagenes/corazon.png`;
    // corazon.style.animation = `animacionIconosVuelta .5s forwards`

    buscador.style.animation = `animacionIconosIda .5s forwards`
    buscador.src = `imagenes/buscador.png`;
    // buscador.style.animation = `animacionIconosVuelta .5s forwards`

    usuario.style.animation = `animacionIconosIda .5s forwards`
    usuario.src = `imagenes/user.png`;
    // usuario.style.animation = `animacionIconosVuelta .5s forwards`

  }
  const iconosBlancos = ()=>{
    
    corazon.style.animation = `animacionIconosVuelta .5s forwards`
    corazon.src = `imagenes/corazonblancosi.png`;
    // corazon.style.animation = `animacionIconosIda .5s forwards`

    buscador.style.animation = `animacionIconosVuelta .5s forwards`
    buscador.src = `imagenes/buscadorssosoblanco.png`;
    // buscador.style.animation = `animacionIconosIda .5s forwards`

    usuario.style.animation = `animacionIconosVuelta .5s forwards`
    usuario.src = `imagenes/usuarioblanco.png`;
    // usuario.style.animation = `animacionIconosIda .5s forwards`

  }


const activarInicio = ()=>{
  document.querySelector(".circulo_inicio").style.animation = `verCirculo 1s forwards`;
  document.querySelector(".textos_inicio").classList.add("act");
}
const activarTextos = ()=>{
  document.querySelector(".textos_inicio").style.animation = `verTextos 1s forwards`;
  document.getElementById("h4").style.animation = `verTextos 1s forwards`;

}

const headerTransicion = ()=>{
 if(!window.scrollY == "0"){
  header.style.animation = `transparentar 1s forwards`;
  header.classList.add("negro")
  header.classList.remove("blanco")
  idaOVuelta()
 }
}
const headerVolver = ()=>{
  if(window.scrollY <= "1"){
  header.style.animation = `volver 1s forwards`;
  header.classList.add("blanco")
  header.classList.remove("negro")
  idaOVuelta()
}
}

const animacionBanner = ()=>{
    verDer();
}
const verDer = ()=>{
    let num = window.scrollY
    if(slider1.classList.contains("seleccionado")){
        slider1.classList.remove("seleccionado")
        slider2.classList.add("seleccionado")
        document.getElementById('imagen-2').scrollIntoView();

    }
    else if(slider2.classList.contains("seleccionado")){
        slider2.classList.remove("seleccionado")
        slider3.classList.add("seleccionado")
        document.getElementById('imagen-3').scrollIntoView();
    }
    else if(slider3.classList.contains("seleccionado")){
        slider3.classList.remove("seleccionado")
        slider1.classList.add("seleccionado")
        document.getElementById('imagen-1').scrollIntoView();
    }
    window.scrollTo({
        top: num,
    })
}
const verIzq = ()=>{
    let num = window.scrollY
    if(slider1.classList.contains("seleccionado")){
        slider1.classList.remove("seleccionado")
        document.getElementById('imagen-3').scrollIntoView();
        slider3.classList.add("seleccionado")
    }
    else if(slider2.classList.contains("seleccionado")){
        slider2.classList.remove("seleccionado")
        document.getElementById('imagen-1').scrollIntoView();
        slider1.classList.add("seleccionado")
    }
    else if(slider3.classList.contains("seleccionado")){
        slider3.classList.remove("seleccionado")
        document.getElementById('imagen-2').scrollIntoView();
        slider2.classList.add("seleccionado")
    }
        window.scrollTo({
            top: num,
        })
}
const reconocer = (num)=>{
    if(num == 1){
        slider1.classList.add("seleccionado");
        slider2.classList.remove("seleccionado")
        slider3.classList.remove("seleccionado")
    }
    if(num == 2){
        slider2.classList.add("seleccionado");
        slider1.classList.remove("seleccionado")
        slider3.classList.remove("seleccionado")
    }
    if(num == 3){
        slider3.classList.add("seleccionado");
        slider2.classList.remove("seleccionado")
        slider1.classList.remove("seleccionado")
    }
}


const mostrarTexto = (n) =>{
    var articulo = document.getElementById(`articulo${n}`)
    var texto = document.getElementById(`texto${n}`);
    var parrafo = document.getElementById(`parrafo${n}`);
    var botones = document.getElementById(`f${n}`)
    if (texto.classList.contains("apretado")) {
      texto.classList.remove("apretado");
      texto.style.maxHeight = "25px"; 
      botones.style.animation = `rotarArriba .3s forwards`
      articulo.style.animation = `borderUp .5s forwards`
    } else {
      texto.classList.add("apretado");
      // texto.style.maxHeight = (parrafo.scrollHeight + texto.scrollHeight) + "px";
      texto.style.maxHeight = "15vw";
      botones.style.animation = `rotarAbajo .3s forwards`
      articulo.style.animation = `borderDown .5s forwards`
    }
  }


  const abrirTexto = (n) =>{
    var articulo = document.getElementById(`articulo${n}`)
    var texto = document.getElementById(`texto${n}`);
    var parrafo = document.getElementById(`parrafo${n}`);
    if (!texto.classList.contains("expandir")){ 
      texto.classList.add("expandir");
      texto.style.maxHeight = (parrafo.scrollHeight + texto.scrollHeight) + "px";
      articulo.style.animation = `borderDown .5s forwards`
    }
}

  
  const cerrarTexto = (n) =>{
    var articulo = document.getElementById(`articulo${n}`)
      var texto = document.getElementById(`texto${n}`);
      var botones = document.getElementById(`f${n}`);
      if(!texto.classList.contains("apretado")){
      if (texto.classList.contains("expandir")) {
        texto.classList.remove("expandir");
        texto.style.maxHeight = "25px"; 
        botones.style.animation = `rotarArriba .3s forwards`
        articulo.style.animation = `borderUp .5s forwards`
    }
}
}
// Función para verificar si una caja está en la pantalla
isInViewport = element=> {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para activar la animación cuando una caja esté en la pantalla
const handleScrollD = ()=> {
    plantillasder.forEach(box => {
      if (isInViewport(box)) {
        box.style.animation = "moverPD 1s forwards";
      }
    });
  }
const handleScrollI = ()=> {
    plantillasizq.forEach(box => {
      if (isInViewport(box)) {
        box.style.animation = "moverPI 1s forwards";
      }
    });
  }

const ficharTierra = ()=> {
    var tierra = document.querySelector(".tierra")
    const obj = tierra.getBoundingClientRect();
    return (obj.top <= 600 && obj.bottom <= 1270) || (obj.top <= 510 && obj.bottom <= 1420) 
        || (obj.top <= 450 && obj.bottom <= 1400) || (obj.top <= 350 && obj.bottom <= 1520 || obj.top == 0)
    }

const activarTierra = ()=>{
    if(ficharTierra()){
        document.querySelector(".tierraimagen").style.animation ="moverTierra 1.5s forwards"
        document.querySelector(".tierra").classList.add("rotar")
    }
}
const rotarTierra = ()=>{
  if(document.querySelector(".tierra").classList.contains("rotar")){
    document.querySelector(".tierra").style.animation = `rotar 5s forwards`
  }
}

const articleContenedor = document.querySelector(".article__contenedor");
const fragment = document.createDocumentFragment();
crearLlave = (nombre,modelo,precio)=>{
    img = `<img class="imagen" src="../JUNIOR PAGINA/imagenes/imagen${nombre}.png">`
    nombre = `<b>Producto </b>${nombre}<br>`
    modelo = `<p class="modelo">Modelo N°:${modelo}</p><br>`
    precio = `<b> ARS </b><b class="precio">$${precio}</b><br>`
    return [img,nombre,modelo,precio]
}
for (i=1;i<=16;i++){
    modeloRand = Math.round(Math.random()* 1000);
    precioRand = Math.round(Math.random()* 10000 + 50000)
    list = crearLlave(`${i}`,`${modeloRand}`,`${precioRand}`)
    div = document.createElement(`DIV`);
    div.tabIndex = i;
    div.classList.add(`item${i}`,`flex-item`)
    div.innerHTML = list[0] + list[1] + list[2] + list[3];
    fragment.appendChild(div)
}
articleContenedor.appendChild(fragment);

// JAVASCRIPT DONACIONES
const entraDonacion = ()=>{
  donaciones.style.animation = `entraDonacion .5s forwards`
}
const donaciones = document.querySelector(".container_donaciones")
document.getElementById("donacion1").addEventListener("click",()=>{
  entraDonacion()
})
document.getElementById("donacion2").addEventListener("click",()=>{
  entraDonacion()
})
corazon.addEventListener("click",()=>{
  entraDonacion()
})
const cruz = document.getElementById("cruz")
cruz.addEventListener("click",()=>{
  donaciones.style.animation = `saleDonacion .5s forwards`
})
  // Obtener todos los checkboxes por su clase
  const checkboxes = document.querySelectorAll('.grupo');

  // Agregar un evento de clic a cada checkbox
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      // Desmarcar los otros checkboxes cuando uno se marca
      checkboxes.forEach(otherCheckbox => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });
    });
  });
// SCRIPT LOGIN
const login = document.querySelector(".container_login")
usuario.addEventListener("click",()=>{
  login.style.animation = `entraLogin .5s forwards`
})
const cruzLogin = document.getElementById("cruzuser")
cruzLogin.addEventListener("click",()=>{
  login.style.animation = `saleLogin .5s forwards`
})
// DESPLEGAR ASIDE
const menu = document.getElementById("barra_article")
const aside = document.querySelector(".container_aside")
const cruzAside = document.getElementById("cruz_aside")
menu.addEventListener("click",()=>{
  cruzAside.style.display = `block` 
  aside.style.animation = `entraAside .5s forwards`
})
cruzAside.addEventListener("click",()=>{
  cruzAside.style.display = `none`
  aside.style.animation = `saleAside .5s forwards`
})
document.getElementById("noticia-1").addEventListener("click",()=>{
  document.getElementById("titulo-1").click()
})
document.getElementById("noticia-2").addEventListener("click",()=>{
  document.getElementById("titulo-2").click()
})
document.getElementById("noticia-3").addEventListener("click",()=>{
  document.getElementById("titulo-3").click()
})
document.getElementById("noticia-4").addEventListener("click",()=>{
  document.getElementById("titulo-4").click()
})

document.querySelector(".item1").addEventListener("click",()=>{
  window.open(`https://www.amazon.com/s?k=climate+change+shirt&crid=21WWYMTSMYLRK&sprefix=climate+chan%2Caps%2C488&ref=nb_sb_ss_ts-doa-p_2_12`,`_blank` )
}
)
document.querySelector(".item2").addEventListener("click",()=>{
  window.open(`https://www.amazon.com/Climate-Global-Warming-Premium-T-Shirt/dp/B07X3HTVYF?customId=B07536XX75&customizationToken=MC_Assembly_1%23B07536XX75&th=1`,`_blank` )
}
)
document.querySelector(".item3").addEventListener("click",()=>{
  window.open(`https://www.etsy.com/es/listing/621106790/camiseta-de-calentamiento-global-camisa`,`_blank` )
}
)
document.querySelector(".item4").addEventListener("click",()=>{
  window.open(`https://themovingmirror.com/products/be-the-change-against-climate-change-unisex-hoodie`,`_blank` )
}
)
document.querySelector(".item5").addEventListener("click",()=>{
  window.open(`https://johndyergallery.com/products/last-chance-to-paint-climate-change-earth-classic-unisex-pullover-hoodie?variant=44330418897138`,`_blank` )
}
)
document.querySelector(".item6").addEventListener("click",()=>{
  window.open(`https://www.snowleader.es/es/w-s-downdrift-jkt-metric-orange-PATA02152.html`,`_blank` )
}
)
document.querySelector(".item7").addEventListener("click",()=>{
  window.open(`https://shoppinginsider.com/shopping/allbirds/`,`_blank` )
}
)
document.querySelector(".item8").addEventListener("click",()=>{
  window.open(`shopstyle.com/g/women/patagonia/jackson-glacier-parka-womens/661305862`,`_blank` )
}
)
document.querySelector(".item9").addEventListener("click",()=>{
  window.open(`https://www.walmart.com/ip/Inktastic-Climate-Change-It-s-Getting-Hot-in-Here-Sad-Planet-Earth-T-Shirt/872744204`,`_blank` )
}
)
document.querySelector(".item10").addEventListener("click",()=>{
  window.open(`https://www.amazon.com/-/es/Earth-Flat-Vaccines-Climate-Change/dp/B07RLCHGLQ`,`_blank` )
}
)
document.querySelector(".item11").addEventListener("click",()=>{
  window.open(`https://www.amazon.com/Save-The-Earth-Hug-T-Shirt/dp/B07KCM4BTV`,`_blank` )
}
)
document.querySelector(".item12").addEventListener("click",()=>{
  window.open(`https://www.amazon.com/-/es/Camiseta-ingl%C3%A9s-%C2%ABRestore-Planet-Earth%C2%BB/dp/B09VX5CYLZ`,`_blank` )
}
)
document.querySelector(".item13").addEventListener("click",()=>{
  window.open(`https://www.amazon.com/-/es/Camiseta-cambio-clim%C3%A1tico-Blanco-S/dp/B0BC331P6Z`,`_blank` )
}
)
document.querySelector(".item14").addEventListener("click",()=>{
  window.open(`https://www.amazon.com/-/es/Camiseta-ingl%C3%A9s-Farmer-amantes-naturaleza/dp/B0BLXKNH65`,`_blank` )
}
)
document.querySelector(".item15").addEventListener("click",()=>{
  window.open(`https://www.amazon.com/-/es/Tierra-Acuarela-playera-Ambiente-hombre/dp/B07P2LBG4D`,`_blank` )
}
)
document.querySelector(".item16").addEventListener("click",()=>{
  window.open(`https://www.zazzle.es/camiseta_no_es_facil_ser_verde_pero_seguro_que_es_mejor_qu-235795549674688692`,`_blank` )
}
)

