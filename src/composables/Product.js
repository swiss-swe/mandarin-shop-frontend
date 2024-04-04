import { ref } from 'vue';

export function UseProduct () {
    const boolean1 = ref(true)
    const boolean2 = ref(false)
    const activeTab=ref('')


    function onDesc() {
        activeTab.value = 'desc';
        boolean2.value = false;
        boolean1.value = true;
        
    }
    
    function onComm() {
        activeTab.value = 'com';
        boolean2.value = true;
        boolean1.value = false;
    }

    return {
        boolean1,
        boolean2,
        onDesc,
        onComm,
        activeTab,
    }
}
