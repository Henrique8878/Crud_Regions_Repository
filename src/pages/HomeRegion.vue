<script setup lang="ts">
import Mapa from '@/assets/mapa.jpg';
import { Button } from '@/components/ui/button';

</script>
<template>
    <main class="flex flex-col gap-12 p-6 h-full">
        <section class="flex flex-col gap-6">
            <img :src="Mapa" alt="" srcset="" class="rounded-2xl">
            <span class="text-justify">
                Bem-vindo ao Regiões CRUD, seu aplicativo ideal para gerenciar regiões sem esforço. Adicione novas
                regiões ou explore as existentes com facilidade.
            </span>
        </section>
        <section class="flex flex-col gap-6">
            <Button class="!font-light">Adicionar região</Button>
            <Button class="!bg-[#E6E6E6] !text-black !font-light">Listar regiões</Button>
        </section>
       
    </main>
    
</template>