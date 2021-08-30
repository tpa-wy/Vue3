<template>
  <h1>
    <a href="/">
      <img class="nav-logo" src="../../assets/logo.png" alt="" />
    </a>
  </h1>
  <ul class="nav">
    <li class="nav-item">
      <el-autocomplete
        size="small"
        v-model="state1"
        :fetch-suggestions="querySearch"
        :placeholder="$t('搜索文档')"
        @select="handleSelect"
      ></el-autocomplete>
    </li>
    <li class="nav-item">
      <router-link to="/demo1">Demo1</router-link>
    </li>
    <li class="nav-item">
      <a href="#">菜单2</a>
    </li>
    <li class="nav-item">
      <a href="#">菜单3</a>
    </li>
    <li class="nav-item">
      <div class="nav-gap"></div>
    </li>
    <li class="nav-item lang-item">
      <el-dropdown trigger="click" @command="handleSetLanguage">
        <span class="el-dropdown-link">
          {{ $t(language) }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="zhCN" :disabled="language === 'zhCN'"
              >中文</el-dropdown-item
            >
            <el-dropdown-item command="en" :disabled="language === 'en'"
              >英文</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </li>
  </ul>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  data() {
    return {};
  },
  computed: {
    language() {
      return this.$store.getters.language;
    },
  },
  setup() {
    const restaurants = ref([]);
    const querySearch = (queryString, cb) => {
      var results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value;
      // 调用 callback 返回建议列表的数据
      cb(results);
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    };
    const loadAll = () => {
      return [{ value: "三全鲜食（北新泾店）" }];
    };
    const handleSelect = (item) => {
      console.log(item);
    };
    onMounted(() => {
      restaurants.value = loadAll();
    });
    return {
      restaurants,
      state1: ref(""),
      querySearch,
      createFilter,
      loadAll,
      handleSelect,
    };
  },
  created() {},
  methods: {
    handleSetLanguage(lang) {
      this.$store.dispatch("setLanguage", lang);
    },
  },
});
</script>

<style lang="scss">
.el-header {
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 40px !important;
  border-bottom: 1px solid #dcdfe6;
  min-width: 850px;
  h1 {
    a {
      text-decoration: none;
      display: block;
      height: 100%;
      display: flex;
      align-items: center;
      .nav-logo {
        vertical-align: sub;
        width: 160px;
      }
    }
  }
  .nav {
    .nav-item {
      height: 100%;
      display: flex;
      align-items: center;
      float: left;
      a {
        padding: 0 22px;
        &:hover {
          color: #66b1ff;
        }
      }
      .nav-gap {
        position: relative;
        width: 1px;
        height: 80px;
        padding: 0 20px;
        &::before {
          content: "";
          position: absolute;
          top: calc(50% - 8px);
          width: 1px;
          height: 16px;
          background: rgb(220, 223, 230);
        }
      }
    }

    .lang-item {
      cursor: pointer;
      margin-left: 34px;
      &:hover {
        .el-dropdown,
        .el-dropdown__popper {
          color: #66b1ff;
        }
      }
    }
  }
}
</style>