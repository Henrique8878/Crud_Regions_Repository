<script setup lang="ts">

    import { regionList } from '@/api/RegionList';
import TableListRegion from '@/components/TableListRegion.vue';
import { useQuery } from '@tanstack/vue-query';

    const {data:regionListData} = useQuery({
        queryKey:['regionListKey'],
        queryFn:regionList
    })

 
</script>

<template>
    <main class="flex flex-col gap-12 pl-4 h-full mb-32 md:mb-80 lg:mb-48">
        <section>
            <span class="text-2xl font-medium">Listar regiões</span>
        </section>
        <section>
            <TableListRegion v-if="regionListData" :data="regionListData"/>
        </section>
       
    </main>
</template>