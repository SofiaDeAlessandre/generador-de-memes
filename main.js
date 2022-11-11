const $ = (selector) => document.querySelector(selector);

//-------variables-------:
let body = document.body;
let btn = $("#btn");
let textoSuperior = $("#texto-superior");
/*let pTextoSuperior = document.getElementsByClassName("p-texto-superior"); no se usa por ahora*/
let textoCambiar = $("#texto-cambiar");
let TextoInferior = $("#texto-inferior");
let textoInferiorCambiar = $("#texto-inferior-cambiar");
let btnImagen = $("#btn-imagen");
let urlInput = $("#url-img");
let imagenCambiar = $("#img-cambiar");
let btnTexto = $("#btn-texto");
let asideImagen = $(".aside-imagen");
let contImagen = $("#descargar-img");
//let imagenPrincipal = $("#imagen-principal");
let inputColorImagen = $("#input-color-imagen");
let inputBrillo = $("#brillo");
let inputOpacidad = $("#opacidad");
let inputContraste = $("#contraste");
let inputDesenfoque = $("#desenfoque");
let inputEscalaGrises = $("#escala-de-grises");
let inputSepia = $("#sepia");
let inputHue = $("#hue");
let inputSaturado = $("#saturado");
let inputNegativo = $("#negativo");
let btnDescargar = $("#btn-descargar");
let asideTexto = $(".aside-texto");
let btnRestablecer = $("#btn-restablecer");

/* /-------variables-------:
let body = document.body;
let btn = document.getElementById("btn");
let textoSuperior = document.getElementById("texto-superior");
/*let pTextoSuperior = document.getElementsByClassName("p-texto-superior"); no se usa por ahora
let textoCambiar = document.getElementById("texto-cambiar");
let TextoInferior = document.getElementById("texto-inferior");
let textoInferiorCambiar = document.getElementById("texto-inferior-cambiar");
let btnImagen = document.getElementById("btn-imagen");
let urlInput = document.getElementById("url-img");
let imagenCambiar = document.getElementById("img-cambiar");
let btnTexto = document.getElementById("btn-texto");
let asideImagen  = document.querySelector(".aside-imagen");
let asideTexto = document.querySelector(".aside-texto");*/

//-------funciones-------:

//btn modo claro - modo oscuro
btn.addEventListener("click", () => {
  body.classList.toggle("modo-claro");
  body.classList.toggle("modo-oscuro");
  let enModoOscuro = body.classList.contains("modo-oscuro");
  if (enModoOscuro) {
    btn.innerText = "🌙 Modo oscuro";
  } else {
    btn.innerText = " 💡 Modo claro";
  }
});

//cambiar texto superior - inferior
textoSuperior.addEventListener("input", (event) => {
  textoCambiar.innerText = event.target.value;
});
TextoInferior.addEventListener("input", (event) => {
  textoInferiorCambiar.innerText = event.target.value;
});

//ocultar aside
btnImagen.addEventListener("click", () => {
  asideImagen.classList.remove("oculto");
  asideTexto.classList.add("oculto");
});

btnTexto.addEventListener("click", () => {
  asideImagen.classList.add("oculto");
  asideTexto.classList.remove("oculto");
});

//vincular url
urlInput.addEventListener("input", (event) => {
  imagenCambiar.style.backgroundImage = `url("${event.target.value}")`;
});
//descargar imagen
const descargarMeme = () => {
  domtoimage.toBlob(contImagen).then(function (blob) {
    saveAs(blob, "mi-meme.png");
  });
};

btnDescargar.addEventListener("click", descargarMeme);

//cambio de color

inputColorImagen.addEventListener("blur", (event) => {
  imagenCambiar.style.backgroundColor = event.target.value;
});

//boton restablecer EVENTO
/*const restablecerFiltros = () => {
  inputBrillo.value = 1;
  inputOpacidad.value = 100;
  inputContraste.value = 1;
  inputDesenfoque.value = 0;
  inputEscalaGrises.value = 0;
  inputSepia.value = 0;
  inputHue.value = 0;
  inputSaturado.value = 0;
  inputNegativo.value = 0;
};
btnRestablecer.addEventListener("click", restablecerFiltros);*/

//filtros

const aplicarFiltros = () => {
  imagenCambiar.style.filter = `brightness(${inputBrillo.value}) opacity(${inputOpacidad.value}%) contrast(${inputContraste.value}) blur(${inputDesenfoque.value}px) grayscale(${inputEscalaGrises.value}%) sepia(${inputSepia.value}%) hue-rotate(${inputHue.value}deg) saturate(${inputSaturado.value}%) invert(${inputNegativo.value})`;
};

/*
inputBrillo.addEventListener("change", (event) => {
  imagenCambiar.style.filter = `brightness(${event.target.value})`;
});
inputOpacidad.addEventListener("change", (event) => {
  imagenCambiar.style.opacity = `${event.target.value}%`;
});
inputContraste.addEventListener("change", (event) => {
  imagenCambiar.style.filter = `contrast(${event.target.value})`;
});
inputDesenfoque.addEventListener("change", (event) => {
  imagenCambiar.style.filter = `blur(${event.target.value}px)`;
});
inputEscalaGrises.addEventListener("change", (event) => {
  imagenCambiar.style.filter = `grayscale(${event.target.value}%)`;
});
inputSepia.addEventListener("change", (event) => {
  imagenCambiar.style.filter = `sepia(${event.target.value}%)`;
});
inputHue.addEventListener("change", (event) => {
  imagenCambiar.style.filter = `hue-rotate(${event.target.value}deg)`;
});
inputSaturado.addEventListener("change", (event) => {
  imagenCambiar.style.filter = `saturate(${event.target.value}%)`;
});
inputNegativo.addEventListener("change", (event) => {
  imagenCambiar.style.filter = `invert(${event.target.value})`;
});*/

inputBrillo.addEventListener("change", aplicarFiltros);
inputOpacidad.addEventListener("change", aplicarFiltros);
inputContraste.addEventListener("change", aplicarFiltros);
inputDesenfoque.addEventListener("change", aplicarFiltros);
inputEscalaGrises.addEventListener("change", aplicarFiltros);
inputSepia.addEventListener("change", aplicarFiltros);
inputHue.addEventListener("change", aplicarFiltros);
inputSaturado.addEventListener("change",aplicarFiltros);
inputNegativo.addEventListener("change", aplicarFiltros);