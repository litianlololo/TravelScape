import {useGeneralStore} from "~/stores/general";

export default defineNuxtPlugin((NuxtApp) => {
    return {
        provide: {
            generalStore: useGeneralStore(),
        }
    }
});

//const { $userStore } = useNuxtApp()