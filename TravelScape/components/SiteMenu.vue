<template>
    <div>
        <template v-for="site in $generalStore.SiteList">
          <SiteSingle :site="site"/>
        </template>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const { $generalStore } = useNuxtApp()
const route = useRoute()
const router = useRouter()

watch(() => $generalStore.shouldFetchSiteList, (newshouldFetchSiteList, oldshouldFetchSiteList) => {
    // 在变量发生变化时执行操作
    getSiteList();
});

const getSiteList = async () => {
    const searchKey = encodeURIComponent($generalStore.searchkey); // 编码搜索关键词
    let url = `/api/fapigx/scenic/query?word=${searchKey}&key=474826f45771069394a70b6a660918ec`;

    if ($generalStore.searchchoice === "城市") {
        const city = encodeURIComponent($generalStore.searchkey);
        url += `&city=${city}`;
    }

    // 使用 fetch 发送请求
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const data = await response.json();
        console.log(data);

        $generalStore.SiteList = data.result.list;
        if (router.currentRoute.value.path !== '/')
            router.push('/')
        console.log($generalStore.SiteList);
        // 处理响应数据
    } catch (error) {
        console.error(error);
        // 处理错误
    }
}
</script>