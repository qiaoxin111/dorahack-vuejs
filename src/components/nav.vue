<template>
  <div>
    <div class="nav">

    </div>
  </div>
</template>

<script>
import common from '../common'
export default {
  name: 'Index',
  components: {

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
@media screen and (max-width: 1440px) {
  .nav {
    display: flex;
    width: 1440px;
    height: 49px;
    margin: 0 auto;
    padding: 14px 16px;
    background: #D8D8D8;
  }
}
</style>