<template>
    <div id="Search">
        <div class="flex items-center w-full justify-between " >
            <button 
                :class="(searchchoice=='关键词')? 'bg-[#a1ddce]' : 'bg-white' "
                class="px-4 py-2 text-[14px] font-semibold rounded-2xl flex items-center"
                @click="choiceKey()"
            >
                关键词
            </button>
            <button 
                :class="(searchchoice=='景区')? 'bg-[#a1ddce]' : 'bg-white'  "
                class="px-4 py-2 text-[14px] font-semibold rounded-2xl flex items-center"
                @click="choiceSite()"
            >
                景区
            </button>
            <button 
                :class="(searchchoice=='城市')? 'bg-[#a1ddce]' : 'bg-white'  "
                class="px-4 py-2 text-[14px] font-semibold rounded-2xl flex items-center"
                @click="choiceCity()"
            >
                城市
            </button>

            <div class="flex items-center bg-[#F1F1F2] p-1 rounded-full w-full ">
            <input v-model="searchInput" type="text" class="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none"
                placeholder="Search Here">
            <div 
                class="px-3 py-1 flex items-center border-l border-l-gray-300"
                @click = "Search()"
            >
                <Icon name="ri:search-line" color="#A1A2A7" size="22" />
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
const {$generalStore} = useNuxtApp()
const searchInput = ref('');
let searchchoice =ref($generalStore.searchchoice);

const choiceCity = () => {
    searchchoice.value = '城市'
    $generalStore.searchchoice= '城市'
}
const choiceSite = () => {
    searchchoice.value = '景区'
    $generalStore.searchchoice= '景区'
}
const choiceKey = () => {
    searchchoice.value = '关键词'
    $generalStore.searchchoice= '关键词'
}
const Search = () => {
    $generalStore.searchkey = searchInput.value;
}
</script>