<script setup lang="ts">
import FooterRegion from './components/FooterRegion.vue';
import NavigationMenuComponent from './components/NavigationMenuComponent.vue';

</script>

<template>
    <main class="flex flex-col gap-7 justify-between w-full">
        <NavigationMenuComponent/>
            <RouterView/>
        <FooterRegion class=""/>
    </main>
    
</template>

