const $ = (selector) => document.querySelector(selector);

//-------variables-------:
let body = document.body;
let btn = $("#btn");
let textoSuperior = $("#texto-superior");
let textoCambiar = $("#texto-cambiar");
let textoInferior = $("#texto-inferior");
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
let colorFondoImg = $("#h6") 

//-------funciones-------:

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
//cambiar textos
textoSuperior.addEventListener("input", () => {
  textoCambiar.innerText = textoSuperior.value;
});
textoInferior.addEventListener("input", () => {
  textoInferiorCambiar.innerText = textoInferior.value;
});
//vincular url
urlInput.addEventListener("input", (event) => {
  imagenCambiar.style.backgroundImage = `url("${event.target.value}")`;
});
//cambiar color
inputColorImagen.addEventListener("input", () => {
  imagenCambiar.style.backgroundColor = inputColorImagen.value;
  colorFondoImg.innerText = inputColorImagen.value;
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
//fondo
tipoFondo.addEventListener("input", () => {
  if (tipoFondo.value === "unset") {
imagenCambiar.style.backgroundBlendMode ="normal"
  }else
  imagenCambiar.style.backgroundBlendMode = tipoFondo.value
  })
//aside TEXTO
sinTextoSup.addEventListener("input", () => {
  textoCambiar.classList.toggle("texto-oculto");
});
sinTextoIn.addEventListener("input", () => {
  textoInferiorCambiar.classList.toggle("texto-oculto");
});
//fuentes
seleccionFuentes.addEventListener("input", () => {
  textoCambiar.style.fontFamily = seleccionFuentes.value;
  textoInferiorCambiar.style.fontFamily = seleccionFuentes.value
});
//tamaño fuente
tamañoFuente.addEventListener("input", () => {
  textoCambiar.style.fontSize = `${tamañoFuente.value}px`;
  textoInferiorCambiar.style.fontSize = `${tamañoFuente.value}px`;
});
//alineación
btnIzquierda.addEventListener("click", () => {
  contImagen.style.alignItems = "flex-start";
});
btnCentro.addEventListener("click", () => {
  contImagen.style.alignItems = "center";
});
btnDerecha.addEventListener("click", () => {
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
inputFondoTransparente.addEventListener("input", () => {
  const inputChecked = inputFondoTransparente.checked;
  if (inputChecked) {
    contImagen.style.backgroundColor = "transparent";
  } 
  else {
    contImagen.style.backgroundColor = inputFondoTexto.value;
  }
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
inputEspaciado.addEventListener("input", (event) => {
  textoCambiar.style.padding = `${event.target.value}px`;
  textoInferiorCambiar.style.padding = `${event.target.value}px`;
});
//interlineado
inputInterlineado.addEventListener("input", (event) => {
  textoCambiar.style.lineHeight = event.target.value;
  textoInferiorCambiar.style.lineHeight = event.target.value;
});
//cerrar aside
cerrarImg.addEventListener("click", () => {
  asideImagen.classList.add("oculto");
});
cerrarTxt.addEventListener("click", () => {
  asideTexto.classList.add("oculto");
});
