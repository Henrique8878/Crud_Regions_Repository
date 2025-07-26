<script setup lang="ts">
import { regionById } from '@/api/RegionById';
import { updateRegion } from '@/api/UpdateRegion';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import type { RegionProps } from '@/util/region';
import { toast } from '@/util/toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';
import { toTypedSchema } from '@vee-validate/zod';
import { AxiosError } from 'axios';
import { useField, useForm } from 'vee-validate';
import { watch } from 'vue';
import * as z from 'zod';
import SelectComponent from './SelectComponent.vue';
import Button from './ui/button/Button.vue';
import Input from './ui/input/Input.vue';
import Label from './ui/label/Label.vue';

const editRegionSchema = z.object({
    Uf:z.string().min(2).max(2),
    Name:z.string()
})

const props = defineProps<{
  data:{
    id:number
  }
}>()

const { data: regionByIdCall } = useQuery({
  queryKey: ['regionById', props.data.id] as const,
  queryFn: regionById
});

const {handleSubmit,setFieldValue} = useForm({
  validationSchema:toTypedSchema(editRegionSchema),
  initialValues:{
    Uf:'',
    Name:''
  }
})



watch(regionByIdCall, (newValue) => {
  if (newValue) {
    setFieldValue('Uf',newValue.uf)
    setFieldValue('Name',newValue.nome)
  }
})


const {value:Uf,errorMessage:UfError} = useField<string>('Uf')
const {value:Name,errorMessage:NameError} = useField<string>('Name')

const queryClient = useQueryClient()

const {mutateAsync:updateRegionCall} = useMutation({
  mutationFn:updateRegion,
  onSuccess(_, {Id,Nome,Uf}, __) {
      queryClient.setQueryData(['regionListKey'],(cachedData:RegionProps[])=>{
        if(!cachedData)
          return
        console.log(cachedData)
        return cachedData.map((data)=>{
          if(data.id===Id){
            if(Nome&&Uf){
              return{...data,nome:Nome,uf:Uf}
            }else if(Nome){
              return{...data,nome:Nome}
            }else if(Uf){
              return {...data,uf:Uf}
            }

            
          }

          return data
        })
      })
  },
})



const onSubmit = handleSubmit(async (data)=>{
    try{
        await updateRegionCall({Id:props.data.id,Nome:data.Name,Uf:data.Uf})
        toast.success('Região atualizada com sucesso',{
            timeout:2000
        })
    }catch(e){
      console.error(e)
      if(e instanceof AxiosError){

        toast.error(`Erro na atualização da região: ${e.response?.data}`)
        return
      }

      toast.error(`Erro na atualização da região: ${e}`)
    }
})

</script>

<template>
 <DialogContent
  class="
    [&>button.absolute]:!bg-white
     dark:[&>button.absolute]:!bg-black
     dark:hover:!border-zinc-700
     hover:!border-zinc-700
    [&>button.absolute]:!shadow-none
    [&>button.absolute]:!ring-0
    [&>button.absolute]:!ring-offset-0
    [&>button.absolute]:focus:!ring-0
    [&>button.absolute]:focus:!ring-offset-0
    [&>button.absolute]:focus:!outline-none
    [&>button.absolute]:hover:!bg-white
  "
>

      <DialogHeader>
        <DialogTitle>Editar perfil</DialogTitle>
        <DialogDescription>
          Realiza mudanças no perfil da região. Depois de preencher o formulário, clique no botão "Salvar" para salvar as mudanças.
        </DialogDescription>
      </DialogHeader>
        <form class="flex flex-col gap-12" @submit.prevent="onSubmit">
            <div class="flex flex-col gap-4">
                <Label>Unidade Federativa (UF)</Label>
                <SelectComponent v-model="Uf"/>
            </div>
            <div class="flex flex-col gap-4">
                <Label>Nome da região</Label>
                <Input v-model="Name" type="text" placeholder="Grande Campinas"/>
            </div>
            <DialogFooter>
              <DialogClose class="flex justify-center w-full hover:!border-white dark:!bg-[#09090b] dark:hover:!border-black">
                <Button class="hover:!border-zinc-700 dark:!text-white dark:hover:!border-zinc-700">Salvar mudanças</Button>
              </DialogClose>
            </DialogFooter>
        </form>

    </DialogContent>
  
</template>