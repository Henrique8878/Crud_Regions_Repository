import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiTrash2, CoPenAlt, FcGlobe } from 'oh-vue-icons/icons'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index'
import './style.css'


addIcons(FcGlobe,BiTrash2,CoPenAlt)

createApp(App).component("v-icon",OhVueIcon).use(router).mount('#app')
