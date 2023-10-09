<template>
    <div class="flex items-center justify-between md:px-[300px] w-full px-3 py-5 bg-blue-50">
        <div>
            <div class="font-bold text-red-400">{{ hotel.chineseName }}</div>
            <div class="font-roboto text-black text-[14px]">{{ hotel.starName }}
                <span>￥{{ hotel.price }}起</span>
            </div>
            <div class="font-roboto text-gray-600 text-[14px]">{{ hotel.address }}</div>
        </div>
        <div class="w-[40%] max-w-[360px] square-image">
            <img :src="hotel.picture" alt="暂无图片">
        </div>
    </div>
</template>

<script setup>
    defineProps(['hotel'])
</script>
