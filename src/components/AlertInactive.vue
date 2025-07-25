<script setup lang="ts">
import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from '@/components/ui/alert-dialog';

defineProps<{
    inactiveRegionFunction:(id: number) => Promise<void>
    id:number
}>()

</script>

<template>
  
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Tem certeza que deseja inativar a região?</AlertDialogTitle>
        <AlertDialogDescription>
          Quando for confirmada, esta ação inativará a região selecionada.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel class="!bg-red-500 text-white hover:text-white border !border-red-500 hover:!bg-red-500/90 !border-none !outline-none focus-visible:!ring-0 focus-visible:!border-none">
            Cancelar
        </AlertDialogCancel>
        <AlertDialogAction :onclick="()=>inactiveRegionFunction(id)"  class="!bg-green-500 hover:!bg-green-500/90 text-white hover:text-white border !border-green-500 
            !border-none !outline-none focus-visible:!ring-0 focus-visible:!border-none">
            Continuar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  
</template>