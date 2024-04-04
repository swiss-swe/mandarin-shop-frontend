import { ref } from 'vue'

export function useLogin() {
    const showLoginModal = ref(false);

    function onSubmitLogin() {
        showLoginModal.value = false;
    }

    return {
        showLoginModal,
        onSubmitLogin
    }
}