<script setup lang="ts">
    import SelectComponent from '@/components/SelectComponent.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
</script >

<template>
    <main class="flex flex-col gap-12 p-6 h-full">
        <section>
            <span class="text-2xl font-medium">Adicionar região</span>
        </section>
        <form class="flex flex-col gap-12">
            <div class="flex flex-col gap-4">
                <Label>Unidade Federativa (UF)</Label>
                <SelectComponent/>
            </div>
            <div class="flex flex-col gap-4">
                <Label>Nome da região</Label>
                <Input type="text" placeholder="Grande Campinas"/>
            </div>
            <Button>Salvar região</Button>
        </form>
       
    </main>
</template>