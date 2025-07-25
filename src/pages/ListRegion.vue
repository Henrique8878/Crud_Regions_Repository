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
    <main class="flex flex-col gap-12 p-6 h-full">
        <section>
            <span class="text-2xl font-medium">Listar regiões</span>
        </section>
        <section>
            <TableListRegion v-if="regionListData" v-model="regionListData"/>
        </section>
       
    </main>
</template>