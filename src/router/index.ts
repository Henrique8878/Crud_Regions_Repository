import AddRegion from '@/pages/AddRegion.vue'
import HomeRegion from '@/pages/HomeRegion.vue'
import ListRegion from '@/pages/ListRegion.vue'
import { createRouter, createWebHistory } from 'vue-router'



export const router = createRouter({
    history:createWebHistory(),
    routes:[{path:"/",component:HomeRegion},
        {path:"/list-region",component:ListRegion},
        {path:"/add-region",component:AddRegion}
    ]
})