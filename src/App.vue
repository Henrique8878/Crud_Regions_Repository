<script setup lang="ts">
import FooterRegion from './components/FooterRegion.vue';
import NavigationMenuComponent from './components/NavigationMenuComponent.vue';
import SideBarRegion from './components/SideBarRegion.vue';
import { SidebarProvider } from './components/ui/sidebar';

</script>

<template>
    <SidebarProvider>
        <SideBarRegion/>
        <main class="flex flex-col gap-7 justify-between w-full">
            <NavigationMenuComponent/>
                <RouterView/>
            <FooterRegion/>
        </main>
    </SidebarProvider>
    
</template>

