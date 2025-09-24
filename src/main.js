import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'; // Importa o router que você criou

createApp(App).use(router).mount('#app')

// const app = createApp(App);

// app.use(router); // Usa o roteador na aplicação
// app.mount('#app'); // Monta a aplicação

