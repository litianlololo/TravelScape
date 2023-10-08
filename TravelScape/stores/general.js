import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general',{
    state:()=>({
        searchkey: '',
        searchchoice:'关键词',
        SiteLists:{}
    }),
    actions:{
        //
    },
    persist:true,
})