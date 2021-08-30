import { createStore } from 'vuex'

export default createStore({
    state: {
        language: localStorage.getItem("lang") || "zhCN"
    },
    getters: {
        language: state => {
            return state.language
        }
    },
    mutations: {
        setLanguage(state, lang) {
            console.log(lang)
            state.language = lang
            localStorage.setItem("lang", lang)
            location.reload()
        }
    },
    actions: {
        setLanguage(context, lang) {
            context.commit("setLanguage", lang)
        }
    }
})
