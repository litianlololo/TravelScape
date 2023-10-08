<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
  import { storeToRefs } from 'pinia';
  const  { $generalStore } = useNuxtApp();
</script>