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
    ElScrollbar,
    ElMenu
} from "element-plus";

const app = createApp(App)


// 若是没有开启Devtools工具，在开发环境中开启，在生产环境中关闭
if (process.env.NODE_ENV == 'development') {
    app.config.globalProperties.devtools = true;
} else {
    app.config.globalProperties.devtools = false;
}

app.use(ElContainer)
app.use(ElAutocomplete)
app.use(ElDropdown)
app.use(ElScrollbar)
app.use(ElMenu)

app.use(router)
app.use(i18n)
app.use(store)

app.mount('#app')
