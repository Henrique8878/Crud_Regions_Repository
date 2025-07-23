<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu';
</script>


<template>
    <NavigationMenu class="bg-[#111111] max-w-full flex justify-between p-3">
      <NavigationMenuList>
        <NavigationMenuItem class="flex gap-2 items-center">
          <v-icon name="fc-globe"/>
          <span class="text-white">Regiões CRUD</span>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink class="w-full h-full">
            <RouterLink class="w-full h-full hover:!text-black !text-xs !text-white cursor-pointer" to="/">Home</RouterLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink class="w-full h-full">
            <RouterLink class="w-full h-full hover:!text-black !text-xs !text-white cursor-pointer" to="/add-region">Adicionar</RouterLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink class="w-full h-full">
            <RouterLink class="w-full h-full hover:!text-black !text-xs !text-white cursor-pointer" to="/list-region">Listar</RouterLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
</NavigationMenu>
</template>