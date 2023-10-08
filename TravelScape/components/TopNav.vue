<template>
    <div id="TopNav" class="fixed bg-white z-30 flex items-center justify-between w-full border-b h-[100px]">
        <div class="flex items-center justify-between w-full px-3 ">
            <div class="w-[30%]">
                <NuxtLink to="/">
                    <img width="115" src="~/assets/images/logo.png">
                </NuxtLink>
            </div>
        </div>
        <div class="hidden md:flex items-center p-1 rounded-full max-w-[600px] w-full">
            <Search />
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
</script>