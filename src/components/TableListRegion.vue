<script setup lang="ts">
import { activeRegion } from '@/api/ActiveRegion';
import {
  Dialog,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { toast } from '@/util/toast';

import { inactiveRegion } from '@/api/InactiveRegion';
import type { RegionProps } from '@/util/region';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import AlertInactive from './AlertInactive.vue';
import EditProfile from './EditProfile.vue';
import AlertDialog from './ui/alert-dialog/AlertDialog.vue';
import AlertDialogTrigger from './ui/alert-dialog/AlertDialogTrigger.vue';
import Button from './ui/button/Button.vue';
import ScrollArea from './ui/scroll-area/ScrollArea.vue';

const queryClient = useQueryClient()


const {mutateAsync:activeRegionCall} = useMutation({
  mutationFn:activeRegion,
  onSuccess(_, {id}, __) {
      queryClient.setQueryData(['regionListKey'],(cachedData:RegionProps[])=>{
        if(!cachedData)
          return
        return cachedData.map((data:RegionProps)=>{
          if(data.id===id)
            return {...data,ativo:true}
          
          return data
        })
      })
  },
})


async function activeRegionFunction(id:number)
{
  try{
    await activeRegionCall({id})
    toast.success("Região ativada com sucesso !",{
      timeout:2000
    })
  }catch(e){
    toast.error("Erro na ativação da região: " + e)
  }
}


const {mutateAsync:inactiveRegionCall} = useMutation({
  mutationFn:inactiveRegion,
  onSuccess(_, {id}, __) {
      queryClient.setQueryData(['regionListKey'],(cachedData:RegionProps[])=>{
        if(!cachedData)
          return
        return cachedData.map((data)=>{
          if(data.id===id)
            return {...data,ativo:false}

            return data
        })
      })
  },
})

async function inactiveRegionFunction(id:number)
{
  try{
    await inactiveRegionCall({id})
    toast.success("Região inativada com sucesso !",{
      timeout:2000
    })
  }catch(e){
    toast.error("Erro na inativação da região: " + e)
  }
}

const regionListData = defineProps<{
  data:{
      id: number;
      uf: string;
      nome: string;
      ativo: boolean;
  }[]
}>()



</script>

<template>
  <ScrollArea class="h-[30rem] rounded-md p-4">
    <Table>
      <TableCaption>Lista de regiões adicionadas.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[100px] !text-[0.6rem]">
            UF
          </TableHead>
          <TableHead class=" !text-[0.6rem]">Região</TableHead>
          <TableHead class="!text-[0.6rem] text-center">Situação</TableHead>
          <TableHead class="text-center !text-[0.6rem]">Ativação</TableHead>
          <TableHead class="text-center !text-[0.6rem]">
            Ações
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="!text-xs">
    
         <TableRow v-for="region in regionListData.data">
            <TableCell class="font-medium">
              <span class="!text-[0.5rem] md:!text-[0.8rem]">{{ region.uf }}</span>
            </TableCell>
            <TableCell><span class="!text-[0.5rem] md:!text-[0.8rem]">{{ region.nome }}</span></TableCell>
            <TableCell><span class="flex justify-center text-center"><span class="!text-[0.5rem] md:!text-[0.8rem]">{{ region.ativo===true?'Ativo':'Inativo' }}</span></span></TableCell>
            <TableCell class="flex justify-center">
              <div class="flex gap-2">
    
                  <Button size="sm" class="!text-[0.6rem]  !p-1 !bg-green-500  cursor-pointer hover:!bg-green-500/90
                  hover:border !border-green-500"
                  :onclick="()=>activeRegionFunction(region.id)" :disabled="region.ativo===true" variant="destructive">
                    Ativar
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger class="flex justify-center items-center h-8 rounded-md !p-1 !bg-white dark:!bg-black !outline-none
                    focus:outline-none hover:!border-white dark:hover:!border-black">
                      <Button size="sm" class="!w-full !text-[0.6rem] !text-white !p-1 !bg-red-500 cursor-pointer hover:!bg-red-500/90
                      hover:border !border-red-500 outline-none focus:outline-none" :disabled="region.ativo===false">
                        Inativar
                      </Button>
                    </AlertDialogTrigger>
                    <AlertInactive :id="region.id" :inactive-region-function="inactiveRegionFunction"/>
                  </AlertDialog>
              </div>
            </TableCell>
            <TableCell>
              <div class="flex justify-center">
                <Dialog class=" !border-white dark:!border-black !border-none">
                      <DialogTrigger class="!bg-white dark:!bg-black !border-white !border-none">
                        <v-icon name="co-pen-alt" class="cursor-pointer w-4 h-4"/>
                      </DialogTrigger>
                      <EditProfile :data="{id:region.id}"/>
                </Dialog>
              </div>
            </TableCell>
         </TableRow>
      </TableBody>
    </Table>
  </ScrollArea>
</template>