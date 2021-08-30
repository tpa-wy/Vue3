import { createApp } from 'vue'
import App from './App.vue'
//  引入 Element-Plus 的样式文件
import 'element-plus/dist/index.css'
import router from "./router"
import i18n from "./i18n"
import store from "./store"


// 按需引入需要的组件
import {
    ElContainer,
    ElAutocomplete,
    ElDropdown,
    ElScrollbar
} from "element-plus";

const app = createApp(App)


app.use(ElContainer)
app.use(ElAutocomplete)
app.use(ElDropdown)
app.use(ElScrollbar)

app.use(router)
app.use(i18n)
app.use(store)

app.mount('#app')
