<template>
    <TopNav />
    <div class="px-4 rounded-lg w-full bg-gray-100 pt-[100px]" @click="navigateToSite">
        <div class="flex items-center justify-between py-5">
            <div class="font-bold text-[18px]">
                {{ site.name }}
            </div>
            <div class="flex justify-end gap-3 text-gray-400 text-[14px]">
                <span>{{ site.province }}</span>
                <span>{{ site.city }}</span>
            </div>
        </div>
        <div class="font-roboto overflow-hidden" v-html="site.content"></div>
    </div>
    <div class="w-full items-center justify-between">
        <div class="px-4 rounded-lg pt-5 w-full md:w-[40%]">
            <Map />
        </div>
    </div>

</template>

<script setup>
const route = useRoute()
const router = useRouter()
const siteStr = route.query.site
const site = JSON.parse(siteStr)
console.log(site)

</script>