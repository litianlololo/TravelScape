<template>
    <div class="items-center justify-between md:px-[300px] w-full px-3 py-5 bg-blue-50">
        <div class="font-bold ">{{ comment.name }}</div>
        <div class="text-[14px] pt-2">{{ comment.content }}</div>
    </div>
</template>
  
<script setup>
defineProps(['comment'])
</script>