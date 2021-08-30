<template>
  <el-container>
    <el-header height="80px">
      <Header />
    </el-header>
    <el-container class="container">
      <!-- 如果访问的是首页，则不渲染左侧栏 -->
      <el-aside v-if="!($route.path === '/')">
        <LeftAside />
      </el-aside>
      <!-- scroll -->
      <el-scrollbar @scroll="scrollView($event, $route.path)">
        <el-main>
          <router-view />
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
  <!-- <div @click="isOpen = true">弹框组件</div> -->
  <!-- <Model v-model:isOpen="isOpen" title="标题">弹框内容</Model> -->
</template>

<script>
// import Model from "@/components/Model";
import Header from "@/components/Header";
import LeftAside from "@/components/LeftAside";
import { _throttle } from "@/utils/tool";

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    Header,
    LeftAside,
    // Model
  },
  methods: {
    // 节流
    scrollView: _throttle((e, route) => {
      const { scrollTop } = e;
      // console.log(scrollTop)
      if (scrollTop < 500 && route === "/") {
        // +20 是 el-main 的 padding
        document.querySelector(".scroll-red").style.height = `${
          scrollTop + 20
        }px`;
      }
    }, 50),
  },
};
</script>

<style lang="scss">
@import url(./assets/css/base.css);
#app {
  width: 100%;
  height: 100%;
  > .el-container {
    width: 100%;
    height: 100%;
  }
}
.container {
  overflow: hidden;
}
.el-scrollbar {
  width: 100%;
  .el-main {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
.el-aside {
  height: 100%;
  padding: 0 40px;
  user-select: none;
  .el-menu {
      height: 100%;
    .el-menu-item:hover {
      background: none;
      color: #409eff;
    }
  }
}
</style>