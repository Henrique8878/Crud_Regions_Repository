<script setup lang="ts">
import profileAvatar from '@/assets/profileAvatar.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
</script>

<template>
  <Avatar>
    <AvatarImage :src="profileAvatar" alt="profileAvatar" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</template>