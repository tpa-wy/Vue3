<template>
  <!-- 将弹框移动到 body 下 -->
  <teleport to="body">
    <!-- 如果父类修改了开关则停止渲染 -->
    <div class="mask" v-if="isOpen" @click="close">
      <!-- 阻止冒泡事件传播 -->
      <div class="content" @click.stop="">
        <div class="header">
          <span class="title">{{ title }}</span>
          <XIcon class="close" @click="close" />
        </div>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script>
// 引入封装的 Svg 图标
import { XIcon } from "./Svg";

export default {
  props: {
    // 开关的状态
    isOpen: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
  },
  watch: {
    isOpen: function (n) {
      if (n) {
        document.querySelector("body").style.overflow = "hidden";
      } else {
        document.querySelector("body").style.overflow = "";
      }
    },
  },
  components: { XIcon },
  methods: {
    close() {
      this.$emit("update:isOpen", false);
      console.log(this.isOpen);
    },
  },
};
</script>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.content {
  position: relative;
  max-width: 420px;
  max-height: 90vh;
  padding: 1rem;
  width: 50vw;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 11px;
}
.mask .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 10px 0;
}
.mask .header .title {
  font-weight: 500;
}
.mask .header .close {
  cursor: pointer;
}
.mask .header .close:hover {
    opacity: 0.5;
}
</style>