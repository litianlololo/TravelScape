<template>
    <div 
        class="py-2 px-4 rounded-lg w-full bg-red-600"
        @click="navigateToSite"
    >
        <div class="flex items-center justify-between">
            <div class="font-bold text-[18px]">
                {{name}}
            </div>
            <div class="flex justify-end gap-3 text-gray-400 text-[14px]">
                <span>{{province}}</span>
                <span>{{city}}</span>
            </div>
        </div>
        <div class="font-roboto overflow-hidden" v-html="content"></div>
    </div>
</template>

<script setup>
    const route = useRoute()
    const router = useRouter()
    const name = route.params.name
    const province = route.params.province
    const city = route.params.city
    const content = route.params.content
    console.log(content)
</script>