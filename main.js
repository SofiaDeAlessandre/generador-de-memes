//-------variables-------:
let body = document.body;
let btn = document.getElementById("btn");
let textoSuperior = document.getElementById("texto-superior");
/*let pTextoSuperior = document.getElementsByClassName("p-texto-superior"); no se usa por ahora*/
let textoCambiar = document.getElementById("texto-cambiar");
let TextoInferior = document.getElementById("texto-inferior");
let textoInferiorCambiar = document.getElementById("texto-inferior-cambiar");
let btnImagen = document.getElementById("btn-imagen");
let asideImagen  = document.getElementsByClassName("aside-imagen");
let asideTexto = document.getElementsByClassName("aside-texto");

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
    asideImagen.classList.add("visible");
    }
    );



