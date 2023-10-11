<template>
    <TopNav />
    <div class="py-4 px-4 rounded-lg w-full bg-gray-100 pt-[100px] md:px-[300px]" @click="navigateToSite">
        <div class="flex items-center justify-between py-5 ">
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
    <div>
        <div class=" px-3 pt-5 bg-blue-50 text-[24px] text-blue-700 font-bold md:pl-[300px]">推荐酒店</div>
        <template v-for="hotel in $generalStore.hotels">
            <hotel :hotel="hotel" />
        </template>
    </div>
    <div class=" px-3 pt-5 bg-blue-50 text-[24px] text-blue-700 font-bold md:pl-[300px]">网友评价</div>
    <div v-if="$generalStore.CommentList.length > 0">
        <div v-for="comment in $generalStore.CommentList ">
            <div class="w-full items-center justify-between">
                <comment :comment="comment" />
            </div>
        </div>
    </div>
    <div v-else class=" px-4 py-2 bg-blue-50 text-[18px] text-gray-700 font-bold md:pl-[300px]">
        暂无评论
    </div>
    <div class="w-full items-center justify-between">
        <div class="px-4 rounded-lg pt-5 w-full md:w-[40%]">
            <Map />
        </div>
    </div>
</template>

<script setup>
const { $generalStore } = useNuxtApp()
const route = useRoute()
const router = useRouter()
const siteStr = route.query.site
const site = JSON.parse(siteStr)
let hotelCount = ref(null)
let Comments = ref([])
console.log(site)

onMounted(() => {
    loadHotel();
    getComment();
})
const loadHotel = async () => {
    try {
        const formData = new FormData();
        formData.append('showapi_appid', '1493848');
        formData.append('showapi_sign', '9af1ae4866dd492a94bce4939fe9afd4');
        formData.append('keywords', site.name);
        formData.append('cityName', site.city);
        formData.append('page', '1');
        formData.append('limit', '20');

        const response = await fetch('https://route.showapi.com/1653-1', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data); // 打印响应数据
            $generalStore.hotels = data.showapi_res_body.data.hotelList; // 将酒店数组存储到 $generalStore.hotels 中
            console.log($generalStore.hotels);
        }
    } catch (e) {
        console.error(e);
    }
}
const getComment = async () => {
    const data = {
        keyword: site.name,
    }
    try {
        const response = await fetch('http://localhost:5001/user/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // 指定请求的内容类型为 JSON
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            $generalStore.CommentList = await response.json();
            console.log($generalStore.CommentList );
        }
    } catch (e) {
        $generalStore.CommentList=[];
        console.error(e);
    }
}
</script>