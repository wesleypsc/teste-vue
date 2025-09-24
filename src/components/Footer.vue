<script setup>

defineProps({
  bg: String,
})

</script>

<template>

<footer :class="`${bg} py-20 flex items-center justify-center px-[20px]`">
    <div class="container mx-auto max-w-6xl text-center">
        <img src="/vita-logo-dark.svg" alt="" class="mx-auto w-[150px] mb-5">
        
        <p class="text-gray-700 mb-6 text-sm">Caro consumidor e usuário: As informações dispostas neste site e em qualquer site da empresa - Vitascience Ltda, inscrita no CNPJ 32.985.885/0001-11, são publicadas exclusivamente para fins informativos e não podem ser consideradas como aconselhamento profissional. Logo, as informações aqui contidas, não substituem uma consulta com um profissional. O conteúdo aqui disposto possui caráter informativo e esta aberto ao público.</p>

        <div class="flex justify-center items-center gap-20">
            <a href="https://lp.vita-science.com/politica-de-privacidade/" class="text-gray-500 hover:text-gray-600" target="_self"><small>Política de privacidade</small></a>
            <a href="https://lp.vita-science.com/termos-de-uso/" class="text-gray-500 hover:text-gray-600" target="_self"><small>Termos de Uso</small></a>
        </div>
    </div>

</footer>

</template>