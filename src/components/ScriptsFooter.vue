<script>
document.addEventListener('DOMContentLoaded', function() {
    
    //verifica se existe o parâmetro de URL "teste-vita" 
    const pTesteVita = new URLSearchParams(window.location.search).has('teste-vita');
            
    if(pTesteVita){
        hide()

        //tempo em segundos, definido no parametro para liberar o conteudo
        const testeVitaTempo = new URLSearchParams(window.location.search).get('teste-vita') || 1;
        console.log(`Tempo para liberação do conteúdo: ${testeVitaTempo} segundos`);
    
        function hide(){
                console.log('DEV: Ocultando todos os elementos .ocultar')
            var list = document.getElementsByClassName('ocultar');
            for (var i = 0; i < list.length; i++) {
                    // console.log(`DEV: Ocultando elemento ${i}`)
                list[i].style.visibility = 'hidden';
                list[i].style.display = 'none';
            }
        }
        
        setTimeout(function(){
            console.log(`DEV: Iniciando Reexibição dos elementos .ocultar`)
            var list = document.getElementsByClassName('ocultar');
            for (var i = 0; i < list.length; i++) {
                // console.log(`DEV: Revelando elemento ${i}`)
                list[i].style.visibility = 'visible';
                list[i].style.display = 'block'; 
            }

            // console.log('Pitch DEV em:', tpitch,'ms - totalizando',tminDev,'min','e',tsegDev,'seg'); 
            // alert(`Tempo definido para o pitch da página: ${tmin}:${tseg}`)        
        }, (testeVitaTempo * 1000));
    }
})
</script>