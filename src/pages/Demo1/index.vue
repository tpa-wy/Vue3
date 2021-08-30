<template>
  <div class="demo1">
    <div class="scroll-view">
      <img
        class="theme-index-blue"
        src="../../assets/demo1/theme-index-blue.png"
        alt=""
        srcset=""
      />
      <div class="scroll-red" style="height: 0">
        <img src="../../assets/demo1/theme-index-red.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.demo1 {
  width: 890px;
  margin: 30px auto;
  @media screen and (max-width: 1000px) {
    display: none;
  }
  .scroll-view {
    position: relative;
  }
  .theme-index-blue {
    width: 100%;
    height: 100%;
  }
  .scroll-red {
    position: absolute;
    width: 100%;
    top: 0;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
</style>