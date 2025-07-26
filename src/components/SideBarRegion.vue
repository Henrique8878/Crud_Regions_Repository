<script setup lang="ts">
    import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
} from '@/components/ui/sidebar';

    import { regionList } from '@/api/RegionList';
import type { RegionProps } from '@/util/region';
import { useQuery } from '@tanstack/vue-query';
import {
    ArrowDown01, ArrowRight, ArrowUp01, Book, ChartNoAxesCombined,
    ChevronsLeftRightEllipsis,
    DecimalsArrowRight,
    MapPinned,
    Navigation, NotepadText, PlusIcon, RotateCcw, Sun, SunMoon
} from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
import Avatar from './Avatar.vue';
import ThemeToggle from './ThemeToggle.vue';
import SidebarGroupLabel from './ui/sidebar/SidebarGroupLabel.vue';
import SidebarMenuItem from './ui/sidebar/SidebarMenuItem.vue';

    const {data:regionListData,refetch:refetchListRegion,isRefetching,} = useQuery({
        queryKey:['regionListKey'],
        queryFn:regionList
    })

    function sumActiveRegions(region:RegionProps[]):number{
        if(!region){
            return 0
        }

        let sum = region.reduce((accumulator,current)=>{
            return current.ativo===true?accumulator+=1:accumulator
        },0)

        console.log(sum)

        return sum
    }

    function sumInactiveRegions(region:RegionProps[]):number{
        if(!region){
            return 0
        }

        let sum = region.reduce((accumulator,current)=>{
            return current.ativo===false?accumulator+=1:accumulator
        },0)

        return sum
    }
    
</script>

<template>
  <Sidebar class="flex flex-col justify-between">
    <SidebarHeader class="bg-zinc-300 dark:!bg-black">
        <SidebarMenu>
            <SidebarMenuItem class="flex items-center gap-4 pl-2">
                <MapPinned :size="40"/>
                <div class="flex flex-col">
                    <span class="font-bold">Regiões CRUD</span>
                    <span class="text-xs">Gerenciamento de regiões</span>
                </div>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarHeader>
    
    <SidebarGroup class="flex flex-col gap-2">
        <SidebarGroupLabel class="flex gap-2 pl-2">
            <ChartNoAxesCombined/>
            <span><strong>Dashboard</strong></span>
        </SidebarGroupLabel>
        <SidebarContent class="text-xs">
            <SidebarMenu class="flex flex-col gap-4 pl-4">
                <SidebarMenuItem class="flex items-center gap-2">
                    <DecimalsArrowRight :size="15"/>
                    <span>Quantidade de regiões: {{regionListData!==undefined? regionListData?.length:0 }}</span>
                </SidebarMenuItem>
                <SidebarMenuItem class="flex items-center gap-2">
                    <ArrowUp01 :size="15"/>
                    <span>Quantidade de regiões <strong class="font-bold text-green-500">ativas</strong>: {{regionListData!==undefined? sumActiveRegions(regionListData):0 }}</span>
                </SidebarMenuItem>
                <SidebarMenuItem class="flex items-center gap-2">
                    <ArrowDown01 :size="15"/>
                    <span>Quantidade de regiões <strong class="font-bold text-red-500">inativas</strong>: {{ regionListData!==undefined?sumInactiveRegions(regionListData):0 }}</span>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarContent>

      </SidebarGroup>

      <SidebarGroup class="flex flex-col gap-2">
        <SidebarGroupLabel class="flex gap-2 pl-2">
            <Navigation/>
            <span><strong>Regiões</strong></span>
        </SidebarGroupLabel>
        <SidebarContent class="text-xs">
            <SidebarMenu class="flex flex-col gap-4 pl-4">
                <SidebarMenuItem>
                    <RouterLink to="/list-region" class="flex gap-2 !text-black dark:!text-white !font-normal">
                        <NotepadText :size="15"/>
                        <span class="hover:underline">Listar regiões</span>
                    </RouterLink>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <RouterLink to="/add-region" class="flex gap-2 !text-black dark:!text-white !font-normal">
                        <PlusIcon :size="15"/>
                        <span class="hover:underline">Adicionar regiões</span>
                    </RouterLink>
                </SidebarMenuItem>
                <SidebarMenuItem class="flex items-center gap-2">
                    <RotateCcw :size="15"/>
                    <span class="hover:underline cursor-pointer" @click="async()=>refetchListRegion()">{{ isRefetching?"Atualizando dados":"Atualizar dados" }}</span>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarContent>

      </SidebarGroup>

       <SidebarGroup class="flex flex-col gap-2">
        <SidebarGroupLabel class="flex gap-2 pl-2">
            <SunMoon/>
            <span><strong>Theme toggle</strong></span>
        </SidebarGroupLabel>
        <SidebarContent class="text-xs">
            <SidebarMenu class="flex flex-col gap-4 pl-4">
                <SidebarMenuItem class="flex items-center gap-2">
                        <Sun :size="15"/>
                        <span>Trocar tema</span>
                        <ArrowRight :size="15"/>
                        <ThemeToggle class="!bg-white"/>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarContent>

      </SidebarGroup>

      <SidebarGroup class="flex flex-col gap-2">
        <SidebarGroupLabel class="flex gap-2 pl-2">
            <Book/>
            <span><strong>Sobre o projeto</strong></span>
        </SidebarGroupLabel>
        <SidebarContent class="text-xs">
            <SidebarMenu class="flex flex-col gap-4 pl-4">
                <SidebarMenuItem class="flex flex-col gap-2">
                        <div class="flex items-center gap-2">
                            <ChevronsLeftRightEllipsis :size="15"/>
                            <span>Sobre o projeto</span>
                        </div>
                        <span class="!text-[0.6rem]">Este projeto foi desenvolvido para um teste técnico de Desenvolvedor Front end.
                            Foram utilizadas tecnologias como Vue.js, Taliwind css (estilização), Shad-cn (componentes reutilizáveis baseados em radix),
                            Axios para requisições HTTP e tanstack query para gerenciamento de respostas e erros provindos do Back End. 
                        </span>
                        
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarContent>

      </SidebarGroup>
    <SidebarFooter class="flex justify-end h-full">
         <SidebarMenu class="flex flex-col gap-4 pl-1">
                <SidebarMenuItem class="flex items-center gap-2">
                        <Avatar/>
                        <div class="flex flex-col gap-1">
                            <span>Henrique de Araújo Tomaz</span>
                            <span class="!text-[0.6rem]">Desenvolvedor Front End</span>
                        </div>
                </SidebarMenuItem>
        </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
</template>