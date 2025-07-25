import { VueQueryPlugin } from '@tanstack/vue-query'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiTrash2, CoPenAlt, FcGlobe } from 'oh-vue-icons/icons'
import { createApp } from 'vue'
import type { PluginOptions } from 'vue-toastification'
import Toast from "vue-toastification"
import App from './App.vue'
import { router } from './router/index'
import './style.css'

const options:PluginOptions = {

}


addIcons(FcGlobe,BiTrash2,CoPenAlt)

createApp(App)
.component("v-icon",OhVueIcon)
.use(router).use(VueQueryPlugin)
.use(Toast,options).mount('#app')
