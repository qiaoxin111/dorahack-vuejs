<template>
  <div>
    <div class="title">title</div>
    <router-view></router-view>
  </div>
</template>

<script>
import common from "../common";
export default {
  name: "Index",
  components: {},
  data() {
    return {
      showRight: "home",
    };
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  computed: {},
};
</script>
<style lang="less">
@import "../assets/style.less";
@media screen and (max-width: 1280px) {
  .index {
    .main_body {
      width: 1200px;
    }
  }
}
</style>
