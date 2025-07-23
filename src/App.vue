<script setup lang="ts">
import FooterRegion from './components/FooterRegion.vue';
import NavigationMenuComponent from './components/NavigationMenuComponent.vue';

</script>

<template>
    <main class="flex flex-col justify-between w-full h-screen h-56">
        <NavigationMenuComponent/>
            <RouterView/>
        <FooterRegion/>
    </main>
    
</template>

