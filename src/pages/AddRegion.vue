<script setup lang="ts">
    import { createRegion } from '@/api/CreateRegion';
import SelectComponent from '@/components/SelectComponent.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useMutation } from '@tanstack/vue-query';
import { toTypedSchema } from '@vee-validate/zod';
import { useField, useForm } from 'vee-validate';
import { useToast } from "vue-toastification";
import * as z from 'zod';

import minas from '../assets/minas.png';

const addRegionSchema = z.object({
    Uf:z.string().min(2).max(2),
    Name:z.string().max(30),
})

export type regionSchemaType = z.infer<typeof addRegionSchema>

const {handleSubmit} = useForm<regionSchemaType>({
    validationSchema:toTypedSchema(addRegionSchema)
})

const {value:Uf,errorMessage:UfError} = useField<string>('Uf')
const {value:Name,errorMessage:NameError} = useField<string>('Name')

const {mutateAsync:createRegionFunction} = useMutation({
    mutationFn:createRegion
})

const toast = useToast()

const onSubmit = handleSubmit(async (data)=>{
    try{
        await createRegionFunction({Uf:data.Uf,Nome:data.Name})
        toast.success('Região criada com sucesso',{
            timeout:2000
        })
    }catch(e){
        toast.error(`Erro na criação da região: ${e}`)
    }
})

</script >

<template>
    <main class="flex flex-col items-center gap-16 p-6 md:mb-44">
        <section>
            <span class="text-2xl font-medium">Adicionar região</span>
        </section>
        <form class="flex flex-col gap-12" @submit.prevent="onSubmit">
            <div class="flex flex-col gap-4">
                <Label>Unidade Federativa (UF)</Label>
                <SelectComponent v-model="Uf"/>
            </div>
            <div class="flex flex-col gap-4">
                <Label>Nome da região</Label>
                <Input v-model="Name" type="text" placeholder="Grande Campinas" class="md:w-[30rem] lg:w-[35rem]"/>
            </div>
            <Button>Salvar região</Button>
        </form>

        <img :src="minas" alt="" srcset="" class="rounded-xl w-72 h-56 md:w-96 md:h-72">
       
    </main>
</template>