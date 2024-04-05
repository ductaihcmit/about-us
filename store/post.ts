export const usePostStore = defineStore('post', () => {

    const dialog = ref(false)
    const listImg = ref([])
    const text = ref("")

    function openDialog() {
        dialog.value = true
        listImg.value = []
        text.value = ""
    }

    return { dialog, listImg, text, openDialog }
})