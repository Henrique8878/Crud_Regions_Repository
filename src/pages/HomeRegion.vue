<script setup lang="ts">
import Mapa from '@/assets/mapa.jpg';
import { Button } from '@/components/ui/button';
import regiao from '../assets/regiao.png';

</script>
<template>
    <main class="flex flex-col items-center gap-12 p-6">
        <section class="flex flex-col items-center gap-6">
            <img :src="Mapa" alt="" srcset="" class="rounded-2xl md:w-[30rem] lg:w-[50rem]">
            <span class="text-justify">
                Bem-vindo ao Regiões CRUD, seu aplicativo ideal para gerenciar regiões sem esforço. Adicione novas
                regiões ou explore as existentes com facilidade.
            </span>
        </section>
        <section class="flex flex-col gap-6 md:w-96">
            <RouterLink to="/add-region">
                <Button class="!font-light !w-full hover:!border-zinc-700 dark:!bg-white dark:hover:!border-zinc-700">
                    Adicionar região
                </Button>
            </RouterLink>
            <RouterLink to="/list-region">
                <Button class="!w-full !bg-[#E6E6E6] !text-black !font-light
                hover:!border-zinc-700 dark:!bg-zinc-700 dark:!text-white dark:hover:!border-black">
                    Listar regiões
                </Button>
            </RouterLink>
        </section>

        <img :src="regiao" alt="" srcset="" class="w-56 h-56 rounded-2xl">
       
    </main>
    
</template>