import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import App from './App.vue'
import router from './router'

import './assets/main.css'

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css";
// import 'prismjs/themes/prism-coy.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Button', Button);
app.component('InputText', InputText);

app.mount('#app')
