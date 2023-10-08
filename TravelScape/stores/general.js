import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general',{
    state:()=>({
        searchkey: '',
        searchchoice:'关键词',
        SiteList:{},
        shouldFetchSiteList: false, // 添加一个标志
    }),
    actions:{
        //
    },
    persist:true,
})