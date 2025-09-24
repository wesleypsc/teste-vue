<script setup>
  import ScriptsFooter from '../../../components/ScriptsFooter.vue'
  import ScriptRedtrackVSL from '../../../components/ScriptRedtrackVSL.vue'
  // import LiberaVSL from '../../../components/LiberaVSL.vue'
  
  import Garantia from '../../../components/GarantiaArtiF06.vue'
  import Dayan from '../../../components/SobreDayanAssinatura.vue'
  import FormasPagto from '../../../components/FooterPagto_2025.vue'
  import Footer from '../../../components/Footer.vue'
</script>

<template>

<ScriptRedtrackVSL/>  

<header class="py-20 flex items-center justify-center px-5 md:px-0 min-h-screen bg-gradient-to-b from-blue-600 to-blue-400 bg-[url(/bgArtiF06VSL.webp)] bg-cover">
    <div class="container mx-auto max-w-5xl text-center">
        
        <!-- Video Player Section -->
        <div class="relative aspect-video bg-black rounded-lg shadow-lg mb-8">
            <div class="absolute inset-0 flex items-center justify-center">
                <vturb-smartplayer id="vid-68c48ca9d64e18967f73db3d" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer>
                <component :is="'script'" defer> var s=document.createElement("script"); s.src="https://scripts.converteai.net/c4e7b019-0b6b-4a9d-8b7f-8e044b2d1301/players/68c48ca9d64e18967f73db3d/v4/player.js", s.async=!0,document.head.appendChild(s); </component>
                 <!-- <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/c4e7b019-0b6b-4a9d-8b7f-8e044b2d1301/players/68c48ca9d64e18967f73db3d/v4/player.js", s.async=!0,document.head.appendChild(s); </script> -->
            </div>
        </div>

        <a href="#ofertas" class="ocultar rounded-[20px] text-center bg-gradient-to-b from-[#08AB18] to-[#00D918] text-white text-[1.2em] md:text-2xl font-bold p-3 md:p-6 block my-[1em] md:mx-auto md:max-w-2xl ocultar">QUERO ELIMINAR 80% AS DORES</a>

    </div>
</header>


<section id="ofertas" class="pt-20 pb-[220px] px-[20px] ocultar">   
  <div class="container mx-auto px-0 max-w-7xl flex flex-col md:flex-row gap-[20px] flex-wrap items-start justify-center">
    <p class="text-center w-full md:text-2xl">CONDIÇÃO <span class="text-[var(--product-primary-color)]"><b>EXCLUSIVA</b></span> PARA ESTA PÁGINA</p>
    
    <p class="text-center w-full text-3xl md:text-4xl font-bold text-[var(--product-primary-color)] my-[-10px]">Escolha o melhor protocolo para você</p>

    <p class="text-center w-full md:text-2xl mb-10">1 pote = 1 mês de protocolo</p>

              
    <div class="price-card bg-gradient-to-b from-white to-gray-200 p-0 text-center rounded-[20px] overflow-hidden shadow-2xl md:w-[25%] flex-grow">
        <div class="price-card-top bg-gray-100 p-3 flex flex-row gap-4 items-center justify-center">
            <div class="w-[35%] flex-grow">
                <div class="bg-[var(--product-primary-color)] text-white font-bold text-xl px-3 py-3 md:min-h-[60px] rounded-xl leading-none flex items-center justify-center">
                    <p>
                      10% DE DESCONTO
                    </p>
                </div>
            </div>

            <p class="text-gray-600 text-2xl font-black text-left w-[35%] flex-grow leading-none">GANHE <br>3 BRINDES</p>
        </div>

        <div class="price-card-content p-5 pb-15">
            <p class="uppercase">– Cada pote sai por <b>R$ 125,10</b> –</p>  

            <img src="/artivita-f06-oferta-3potes.webp" alt="" class="mx-auto">
            
            <p class="text-5xl font-black"><b>+</b></p>
            
            <img src="/presentesArtivitaF06.webp" alt="" class="mx-auto">

            
            <p class="text-xl mt-5">De: <del class="text-red-600 font-semibold">R$ 417,00</del></p>
            
            <p class="text-xl font-semibold">Por: 12x de</p>


            <div class="preco flex items-center justify-center font-extrabold leading-none my-4">
                <span class="text-[16vw] md:text-[4em]">R$ 38,82</span>
            </div>

            <p class="text-xl font-bold uppercase">Ou R$ 375,30 à vista</p>

            

            <a href="https://trk.vita-science.com/click/2" class="rounded-full bg-[#03C032] hover:bg-[#02a129] text-white text-3xl font-bold py-5 block my-[1em] mx-auto">COMPRAR AGORA</a>

            <p class="uppercase font-bold">
                <span class="text-green-700">FRETE GRÁTIS</span>
                para todo o Brasil!
            </p>
        </div>
    </div>

    <div class="price-card bg-[var(--product-primary-color)] text-white p-0 text-center rounded-[20px] overflow-hidden shadow-2xl md:w-[25%] flex-grow">
        <div class="price-card-top bg-gray-100 p-3 flex flex-row gap-4 items-center justify-center">
            <div class="w-[35%] flex-grow">
                <div class="bg-[var(--product-primary-color)] text-white font-bold text-xl px-3 py-3 md:min-h-[60px] rounded-xl leading-none flex items-center justify-center">
                    <p>
                      20% DE DESCONTO
                    </p>
                </div>
            </div>

            <p class="text-black text-2xl font-black text-left w-[35%] flex-grow leading-none">
              GANHE 1 ANO DE VITA.TV
            </p>
        </div>

        <div class="price-card-content p-5 pb-15">
            <p class="uppercase">– Cada pote sai por <b>R$ 111,20</b> –</p>  

            <img src="/artivita-f06-oferta-6potes.webp" alt="" class="mx-auto">
            
            <p class="text-5xl font-black"><b>+</b></p>
            
            <img src="/presentesArtivitaF06.webp" alt="" class="mx-auto">
            
            <p class="text-5xl font-black"><b>+</b></p>
            
            
            <p class="text-xl font-bold my-5">1 ano de programação <br> exclusiva no Vita.TV</p>

            <img src="/vita_tv-mockup.webp" alt="" class="mx-auto">

            
            <p class="text-xl mt-5">De: <del class="font-semibold">R$ 834,00</del></p>
            
            <p class="text-xl font-semibold">Por: 12x de</p>


            <div class="preco flex items-center justify-center font-extrabold leading-none my-4">
                <span class="text-[16vw] md:text-[4em]">R$ 69,00</span>
            </div>

            <p class="text-xl font-bold uppercase">Ou R$ 667,20 à vista</p>

            

            <a href="https://trk.vita-science.com/click/3" class="rounded-full bg-[#03C032] hover:bg-[#02a129] text-white text-3xl font-bold py-5 block my-[1em] mx-auto">COMPRAR AGORA</a>

            <p class="uppercase font-bold">
                <span class="text-yellow-400">FRETE GRÁTIS</span>
                para todo o Brasil!
            </p>
        </div>
    </div>

    <div class="price-card bg-gradient-to-b from-white to-gray-200 p-0 text-center rounded-[20px] overflow-hidden shadow-2xl md:w-[25%] flex-grow">
        <div class="price-card-top bg-gray-100 p-3 flex flex-row gap-4 items-center justify-center">
            <div class="w-[35%] flex-grow">
                <div class="bg-gray-300 text-gray-900 font-black text-xl px-3 py-3 md:min-h-[60px] rounded-xl leading-none flex items-center justify-center">
                    <p>
                      <span class="text-[var(--product-primary-color)]">1</span> 
                      POTE
                    </p>
                </div>
            </div>

            <p class="text-gray-600 text-2xl font-black text-left w-[35%] flex-grow leading-none">EXPERIMENTE</p>
        </div>

        <div class="price-card-content p-5 pb-15">
            
            <img src="/artivita-f06-oferta-1pote.webp" alt="" class="mx-auto">
            
            <p class="text-xl font-semibold">Por: 12x de</p>


            <div class="preco flex items-center justify-center font-extrabold leading-none my-4">
                <span class="text-[16vw] md:text-[4em]">R$ 14,38</span>
            </div>

            <p class="text-xl font-bold uppercase">Ou R$ 139,00 à vista</p>

            

            <a href="https://trk.vita-science.com/click/1" class="rounded-full bg-[#03C032] hover:bg-[#02a129] text-white text-3xl font-bold py-5 block my-[1em] mx-auto">COMPRAR AGORA</a>

            <p class="text-gray-900 uppercase font-bold">
                <span class="text-green-700">FRETE GRÁTIS</span>
                para todo o Brasil!
            </p>
        </div>
    </div>
  </div>

</section>


<Garantia bg="bg-gray-100"/>

<Dayan/>

<FormasPagto bg="bg-gray-100"/>

<Footer bg="bg-gray-100"/>





<!-- <LiberaVSL/> -->

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

    var tmin = 26;  /* minutos */
    var tseg = 29;  /* segundos */
    
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



<ScriptsFooter/>

</template>


<style>
  :root{
    --product-primary-color: #006FCF;
  }
</style>