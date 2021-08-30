import { createI18n } from "vue-i18n"
import en from "@/constants/lang/en.json"
import zhCN from "@/constants/lang/zh-CN.json"

const i18n = createI18n({
    locale: localStorage.getItem("lang") || 'zhCN',
    fallbackLocale: 'zhCN',
    messages: {
        en,
        zhCN
    },
})

export default i18n