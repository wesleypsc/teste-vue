<script setup>

defineProps({
  bg: String,
})

</script>

<template>

<section id="dayan" :class="`${bg} py-30 px-[20px] ocultar`">
  <div class="container mx-auto px-0 max-w-4xl flex flex-col md:flex-row gap-[20px] items-center justify-center text-center md:text-left">
      <img src="/drDayanSiebra_Sobre.webp" alt="" class="md:w-[275px]">

      <div>
        <p class="text-lg md:text-xl mb-4">Formado pela Universidade de Pernambuco, possui mais de <b>25 anos</b> de prática na área da saúde.</p>

        <p class="text-lg md:text-xl mb-4">É o criador do maior canal de medicina na língua portuguesa do <b>mundo</b>, com mais de 7 milhões de inscritos.</p>

        <p class="text-lg md:text-xl mb-4">Além disso, é precursor e um dos maiores especialistas em medicina integrativa e natural no Brasil, <b>e já ajudou mais de 35 mil pessoas a viverem com mais saúde, sem esquecimentos</b></p>
      </div>
  </div>
</section>

</template>