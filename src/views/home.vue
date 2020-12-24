<template>
  <div>
    <top-header></top-header>
    test
  </div>
</template>

<script>
import common from '../common'
import topHeader from '../components/header'
export default {
  name: 'Index',
  components: {
    topHeader
  },
  data() {
    return {
      showRight: 'home',
    }
  },
  watch:{ },
  methods: { },
  created() { },
  mounted() { },
  computed: { },
}
</script>
<style lang="less">
@import '../assets/style.less';
@media screen and (max-width: 1280px) {
  .index {

    .main_body {

      width: 1200px;
    }
  }
}
</style>