<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface listRegionProps{
  Id:number,
  Uf:string,
  Name:string,
  Ativo:boolean
}

const regionListData = defineModel<listRegionProps[]>()

</script>

<template>
  <Table>
    <TableCaption>Lista de regiões adicionadas.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">
          UF
        </TableHead>
        <TableHead>Região</TableHead>
        <TableHead>Situação</TableHead>
        <TableHead class="text-right">
          Ações
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody class="!text-xs">
      <TableRow>
        <TableCell class="font-medium">
          SP
        </TableCell>
        <TableCell>Grande Campinas</TableCell>
        <TableCell>Ativo</TableCell>
        <TableCell class="flex gap-2 text-right">
          <v-icon name="bi-trash2" class="cursor-pointer"/>
          <v-icon name="co-pen-alt" class="cursor-pointer"/>
        </TableCell>
      </TableRow>

       <TableRow v-for="region in regionListData">
          <TableCell class="font-medium">
            {{ region.Uf }}
          </TableCell>
          <TableCell>{{ region.Name }}</TableCell>
          <TableCell>{{ region.Ativo===true?'Ativo':'Inativo' }}</TableCell>
          <TableCell class="flex gap-2 text-right">
          <v-icon name="bi-trash2" class="cursor-pointer"/>
          <v-icon name="co-pen-alt" class="cursor-pointer"/>
        </TableCell>
       </TableRow>

    </TableBody>
  </Table>
</template>