import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
    // 状态定义
    const isGetterRouter = ref(false);
    const isCollapse = ref(false);
    const userInfo = ref({});

    // Actions 替代原来的 mutations
    const actions = {
        ChangesGetterRouter(value) {
            isGetterRouter.value = value;
        },
        changeCollapse() {
            isCollapse.value = !isCollapse.value;
        },
        changeUserInfo(value) {
            userInfo.value = { ...userInfo.value, ...value };
        },
        clearUserInfo() {
            userInfo.value = {};
        }
    };

    return { 
        isGetterRouter,
        isCollapse,
        userInfo,
        ...actions 
    };
}, {
    persist: {
        paths: ['isCollapse', 'userInfo'],
    }
});
