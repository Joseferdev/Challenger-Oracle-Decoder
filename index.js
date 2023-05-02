/*canvas estilo matrix */
const canvas = document.getElementById("lienzo");
const pincel = canvas.getContext("2d");

canvas.width = document.body.offsetWidth;

let w = canvas.width;
let h = canvas.height;

pincel.fillStyle = "#000";
pincel.fillRect(0,0,w,h);

const cols = Math.floor(w/20)+1;
const pos_y = Array(cols).fill(0);

function matrix (){
    pincel.fillStyle ="#0001";
    pincel.fillRect(0,0,w,h);
    
    pincel.fillStyle ="#0f0";
    pincel.font = "15pt monospace";

    pos_y.forEach((y,indice) => {
        const texto = String.fromCharCode(Math.random() * 128);
        const x = indice * 20;
        pincel.fillText(texto, x, y);

        if(y > 100 + Math.random() * 10000){
          pos_y[indice] = 0;
        } else {
          pos_y[indice] = y + 20;
        }
    });
}
setInterval(matrix, 50);

/*encriptar*/
function encriptar(){
  let encriptar = document.getElementById("encriptado").value;

  let encriptado = encriptar.replace(/e/img, "enter");
      encriptado = encriptado.replace(/o/img, "ober");
      encriptado = encriptado.replace(/i/img, "imel");
      encriptado = encriptado.replace(/a/img, "ai");
      encriptado = encriptado.replace(/u/img, "ufat");
      encriptado = encriptado.replace(/ /img, Math.round(Math.random()*1));
  
  document.getElementById("mensajeEncriptado").innerHTML = encriptado;
  /*cambiar contenedor */
  if(encriptado != 0){
  document.getElementById("mostrarMensaje").style.display = "flex";
  document.getElementById("noHayMensaje").style.display = "none";
  }else{
    document.getElementById("error").style.display = "flex";
    cerrar();
  }
}

/** desencriptar */
function desencriptar(){
  let encriptar = document.getElementById("encriptado").value;

  let encriptado = encriptar.replace(/enter/img, "e");
      encriptado = encriptado.replace(/ober/img, "o");
      encriptado = encriptado.replace(/imel/img, "i");
      encriptado = encriptado.replace(/ai/img, "a");
      encriptado = encriptado.replace(/ufat/img, "u");
  
  document.getElementById("mensajeEncriptado").innerHTML = encriptado;

  /*cambiar contenedor */
  if(encriptado != 0){
    document.getElementById("mostrarMensaje").style.display = "flex";
    document.getElementById("noHayMensaje").style.display = "none";
    }else{
      document.getElementById("error").style.display = "flex";
      cerrar();
    }

}

/*copy*/
function copy(){
  const mensaje = document.getElementById("mensajeEncriptado").innerHTML;
  const texto = document.createElement("textarea");
  texto.innerHTML = mensaje;
    navigator.clipboard.writeText(texto.value);
    document.getElementById("checkCopy").style.display = "flex";
  cerrar();
}
const cerrar = ()=>{
    setTimeout(()=>{
      document.getElementById("checkCopy").style.display = "none";
    }, 3000);
    setTimeout(()=>{
      document.getElementById("error").style.display = "none";
    }, 3000);
}
