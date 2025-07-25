import type { VueQueryPluginOptions } from '@tanstack/vue-query'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiTrash2, CoPenAlt, FcGlobe } from 'oh-vue-icons/icons'
import { createApp } from 'vue'
import type { PluginOptions } from 'vue-toastification'
import Toast from "vue-toastification"
// main.ts
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import { router } from './router/index'
import './style.css'

const options:PluginOptions = {

}


addIcons(FcGlobe,BiTrash2,CoPenAlt)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Ativa o prefetch na renderização (experimental)
      experimental_prefetchInRender: true
    }
  }
})

// Agora sim, com tipagem correta
const vueQueryOptions: VueQueryPluginOptions = {
  queryClient
}

createApp(App)
.component("v-icon",OhVueIcon)
.use(router).use(VueQueryPlugin,vueQueryOptions)
.use(Toast,options).mount('#app')
