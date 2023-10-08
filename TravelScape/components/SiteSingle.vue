<template>
    <nuxt-link :to="{ name: 'site', query: { name: site.name, content: site.content, province:site.province,city:site.city } }">
        <div id="sitesingle" class="py-2 px-4 class= border-y-2 rounded-lg w-full">
            <div class="flex items-center justify-between">
                <div class="font-bold text-[18px]">
                    {{ site.name }}
                </div>
                <div class="flex justify-end gap-3 text-gray-400 text-[14px]">
                    <span>{{ site.province }}</span>
                    <span>{{ site.city }}</span>
                </div>
            </div>
            <div class="font-roboto overflow-hidden line-clamp-5" v-html="site.content"></div>
        </div>
    </nuxt-link>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
defineProps(['site'])

</script>
