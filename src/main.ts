import '@/assets/base.css'

import { createApp } from 'vue'
//elementPlus引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router'
import App from './App.vue'

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
