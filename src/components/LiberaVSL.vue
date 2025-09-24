<!-- AINDA INCOMPLETO. NECESSITA SOLUCIONAR PROBLEMAS DAS VARIÁVEIS! -->


<script setup>

defineProps({
    //definir variável tmin como String, valor default 00
  tmin: String,
  tseg: String,
})

</script>



<template> 

<component :is="'script'">

  var list = document.getElementsByClassName('ocultar');
  for (var i = 0; i < list.length; i++) {
      list[i].style.visibility = 'hidden';
      list[i].style.display = 'none';
  }

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


let userViewPitch = getCookie("viewPitch");

  if (userViewPitch == 1) {
    
    var list = document.getElementsByClassName('ocultar');
        for (var i = 0; i < list.length; i++) {
            list[i].style.visibility = 'visible';
            list[i].style.display = 'block';
        }
  }
  
/* AQUI VOCÊ DEFINE O TEMPO EM MINUTOS E SEGUNDOS */
/* (nao precisa converter, todos os calculas sao feitos pela da função) */

    var tmin = {{ tmin }} : 0;  /* minutos */
    var tseg = {{ tseg }} : 5;  /* segundos */
    
/* ****************************************** */

    var tpitch = (tmin * 60000) + (tseg * 1000);
    setTimeout('show()', tpitch);
    console.log('Pitch em:', tpitch,'ms - totalizando',tmin,'min','e',tseg,'seg'); 
    
    function show(){
        var list = document.getElementsByClassName('ocultar');
        for (var i = 0; i < list.length; i++) {
            list[i].style.visibility = 'visible';
            list[i].style.display = 'block';
        }
        
        setCookie("viewPitch", 1, 1);
    }
  
</component>

</template>