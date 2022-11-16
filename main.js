const $ = (selector) => document.querySelector(selector);

//-------variables-------:
let body = document.body;
let btn = $("#btn");
let textoSuperior = $("#texto-superior");
let textoCambiar = $("#texto-cambiar");
let TextoInferior = $("#texto-inferior");
let textoInferiorCambiar = $("#texto-inferior-cambiar");
let btnImagen = $("#btn-imagen");
let urlInput = $("#url-img");
let imagenCambiar = $("#img-cambiar");
let btnTexto = $("#btn-texto");
let asideImagen = $(".aside-imagen");
let contImagen = $("#descargar-img");
let inputColorImagen = $("#input-color-imagen");
let tipoFondo = $("#tipo-fondo");
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
let sinTextoSup = $("#checkbox-sin-texto");
let sinTextoIn = $("#checkbox-sin-texto-in");
let seleccionFuentes = $("#seleccion-fuentes");
let tamañoFuente = $("#tamaño-fuente");
let btnIzquierda = $("#btn-izquierda");
let btnCentro = $("#btn-centro");
let btnDerecha = $("#btn-derecha");
let inputColorTexto = $("#input-color-texto");
let inputFondoTexto = $("#input-fondo-texto");
let inputFondoTransparente = $("#fondo-transparente");
let inputEspaciado = $("#espaciado");
let inputInterlineado = $("#interlineado");
let btnClaro = $("#contorno-claro");
let btnNinguno = $("#contorno-ninguno");
let btnOscuro = $("#contorno-oscuro");
let cerrarImg = $("#cerrar-img");
let cerrarTxt = $("#cerrar-txt");

//-------funciones-------:

//modos
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
//ocultar aside
btnImagen.addEventListener("click", () => {
  asideImagen.classList.remove("oculto");
  asideTexto.classList.add("oculto");
});

btnTexto.addEventListener("click", () => {
  asideImagen.classList.add("oculto");
  asideTexto.classList.remove("oculto");
});
//descargar
const descargarMeme = () => {
  domtoimage.toBlob(contImagen).then(function (blob) {
    saveAs(blob, "mi-meme.png");
  });
};
//restablecer
const restablecerFiltros = () => {
  inputBrillo.value = 1;
  inputOpacidad.value = 100;
  inputContraste.value = 1;
  inputDesenfoque.value = 0;
  inputEscalaGrises.value = 0;
  inputSepia.value = 0;
  inputHue.value = 0;
  inputSaturado.value = 0;
  inputNegativo.value = 0;
  aplicarFiltros();
};
//filtros
const aplicarFiltros = () => {
  imagenCambiar.style.filter = `brightness(${inputBrillo.value}) opacity(${inputOpacidad.value}%) contrast(${inputContraste.value}) blur(${inputDesenfoque.value}px) grayscale(${inputEscalaGrises.value}%) sepia(${inputSepia.value}%) hue-rotate(${inputHue.value}deg) saturate(${inputSaturado.value}%) invert(${inputNegativo.value})`;
};

//-------eventos-------:

//cambiar textos
textoSuperior.addEventListener("input", (event) => {
  textoCambiar.innerText = event.target.value;
});
TextoInferior.addEventListener("input", (event) => {
  textoInferiorCambiar.innerText = event.target.value;
});
//vincular url
urlInput.addEventListener("input", (event) => {
  imagenCambiar.style.backgroundImage = `url("${event.target.value}")`;
});
//cambiar color
inputColorImagen.addEventListener("blur", (event) => {
  imagenCambiar.style.backgroundColor = event.target.value;
});
//descargar
btnDescargar.addEventListener("click", descargarMeme);
//restablecer
btnRestablecer.addEventListener("click", restablecerFiltros);

//filtros
inputBrillo.addEventListener("change", aplicarFiltros);
inputOpacidad.addEventListener("change", aplicarFiltros);
inputContraste.addEventListener("change", aplicarFiltros);
inputDesenfoque.addEventListener("change", aplicarFiltros);
inputEscalaGrises.addEventListener("change", aplicarFiltros);
inputSepia.addEventListener("change", aplicarFiltros);
inputHue.addEventListener("change", aplicarFiltros);
inputSaturado.addEventListener("change", aplicarFiltros);
inputNegativo.addEventListener("change", aplicarFiltros);

inputColorImagen.addEventListener("input", (event) => {
  imagenCambiar.style.color = event.target.value;
});
//tipo de fondo
tipoFondo.addEventListener("input", (event) => {
  let ninguno = $("#ninguno");
  let aclarar = $("#aclarar");
  let oscurecer = $("#oscurecer");
  let diferencia = $("#diferencia");
  let luminosidad = $("#luminosidad");
  let multiplicar = $("#multiplicar");
  if (event.target.value === "aclarar") {
    imagenCambiar.style.backgroundBlendMode = "lighten";
  } else if (event.target.value === "oscurecer") {
    imagenCambiar.style.backgroundBlendMode = "darken";
  } else if (event.target.value === "diferencia") {
    imagenCambiar.style.backgroundBlendMode = "difference";
  } else if (event.target.value === "luminosidad") {
    imagenCambiar.style.backgroundBlendMode = "luminosity";
  } else if (event.target.value === "multiplicar") {
    imagenCambiar.style.backgroundBlendMode = "multiply";
  } else {
    imagenCambiar.style.backgroundBlendMode = "normal";
  }
});
//aside TEXTO

sinTextoSup.addEventListener("input", (event) => {
  textoCambiar.classList.toggle("texto-oculto");
});
sinTextoIn.addEventListener("input", (event) => {
  textoInferiorCambiar.classList.toggle("texto-oculto");
});
// fuentes
seleccionFuentes.addEventListener("input", (event) => {
  if (event.target.value === "arial") {
    textoCambiar.style.fontFamily = "Arial";
  } else if (event.target.value === "Arial Black") {
    textoCambiar.style.fontFamily = "Arial Black";
  } else if (event.target.value === "Verdana") {
    textoCambiar.style.fontFamily = "Verdana";
  } else if (event.target.value === "Tahoma") {
    textoCambiar.style.fontFamily = "Tahoma";
  }else if (event.target.value === "Lucida Sans") {
    textoCambiar.style.fontFamily = "Lucida Sans";
  }else if (event.target.value === "Georgia") {
    textoCambiar.style.fontFamily = "Georgia";
  }
  if (event.target.value === "arial") {
    textoInferiorCambiar.style.fontFamily = "Arial";
  } else if (event.target.value === "Arial Black") {
    textoInferiorCambiar.style.fontFamily = "Arial Black";
  } else if (event.target.value === "Verdana") {
    textoInferiorCambiar.style.fontFamily = "Verdana";
  } else if (event.target.value === "Tahoma") {
    textoInferiorCambiar.style.fontFamily = "Tahoma";
  }else if (event.target.value === "Lucida Sans") {
    textoInferiorCambiar.style.fontFamily = "Lucida Sans";
  }else if (event.target.value === "Georgia") {
    textoInferiorCambiar.style.fontFamily = "Georgia";
  }
});
//tamaño fuente
tamañoFuente.addEventListener("input", (event) => {
  textoCambiar.style.fontSize = `${event.target.value}px`;
  textoInferiorCambiar.style.fontSize = `${event.target.value}px`;
});

//alineación
btnIzquierda.addEventListener("click", (event) => {
  contImagen.style.alignItems = "flex-start";
});
btnCentro.addEventListener("click", (event) => {
  contImagen.style.alignItems = "center";
});
btnDerecha.addEventListener("click", (event) => {
  contImagen.style.alignItems = "flex-end";
});
//color TXT
inputColorTexto.addEventListener("input", (event) => {
  contImagen.style.color = event.target.value;
});
//fondo TXT
inputFondoTexto.addEventListener("input", (event) => {
  contImagen.style.backgroundColor = event.target.value;
});
//fondo transparente
inputFondoTransparente.addEventListener("input", (event) => {
  contImagen.classList.toggle("fondo-transparente");
});
//contorno

btnClaro.addEventListener("click", () => {
  textoCambiar.classList.add("contorno-claro-efecto");
  textoInferiorCambiar.classList.add("contorno-claro-efecto");
  textoCambiar.classList.remove("contorno-oscuro-efecto");
  textoInferiorCambiar.classList.remove("contorno-oscuro-efecto");
});
btnOscuro.addEventListener("click", () => {
  textoCambiar.classList.add("contorno-oscuro-efecto");
  textoInferiorCambiar.classList.add("contorno-oscuro-efecto");
});
btnNinguno.addEventListener("click", () => {
  textoCambiar.classList.remove("contorno-oscuro-efecto");
  textoCambiar.classList.remove("contorno-claro-efecto");
  textoInferiorCambiar.classList.remove("contorno-oscuro-efecto");
  textoInferiorCambiar.classList.remove("contorno-claro-efecto");
});
//espaciado
inputEspaciado.addEventListener("input", (evento) => {
  textoCambiar.style.padding = `${evento.target.value}px`;
  textoInferiorCambiar.style.padding = `${evento.target.value}px`;
});
//interlineado
inputInterlineado.addEventListener("input", (evento) => {
  textoCambiar.style.lineHeight = evento.target.value;
  textoInferiorCambiar.style.lineHeight = evento.target.value;
});
//cerrar aside
cerrarImg.addEventListener("click", () => {
  asideImagen.classList.add("oculto");
});
cerrarTxt.addEventListener("click", () => {
  asideTexto.classList.add("oculto");
});
