const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
giros = 0;
function girar(){
  if (giros < 1 ) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros; 
  }else{
    Swal.fire({
      icon: 'success',
      title: '¡VUELVA PRONTO! ¡EL JUEGO TERMINÓ!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Finalizar',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {  // Usamos isConfirmed para verificar si el botón "Finalizar" fue presionado
        giros = 0;
        document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ';
        document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;

        // Aquí añadimos la acción que queremos que ocurra
        window.location.href = 'salida.html'; // Redirige al usuario a "index.html"
      }
    });
}


function premio(premios){

  document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ' + premios;

}


 function calcular(rand) {

  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";

  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 45:
     premio("GRACIAS POR JUGAR");
     break;
     case valor > 45 && valor <= 90:
     premio("PORCIÓN DE TORTA");
     break;
     case valor > 90 && valor <= 135:
     premio("MOCACHINO"); 
     break; 
     case valor > 135 && valor <= 180:
     premio("GRACIAS POR JUGAR");
     break;
     case valor > 180 && valor <= 225:
     premio("BROWINE CON HELADO");
     break; 
     case valor > 225 && valor <= 270:
     premio("DESCUENTO DE 10%");
     break;
     case valor > 270 && valor <= 315:
     premio("GRACIAS POR JUGAR");
     break;
     case valor > 315 && valor <= 360:
     premio("CAPUCHINO"); 
     break;
  }

 }, 5000);

}
}