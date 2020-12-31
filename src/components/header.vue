<template>
  <div class="f96a69">
    <div class="header">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import common from '../common'
export default {
  components: {

  },
  data() {
    return {
      menu: [
        {
          value: 'Market',
          path: ''
        },
        {
          value: 'Trade',
          path: ''
        },
        {
          value: 'Administrative Analytics',
          path: ''
        }
      ]
    }
  },
  watch: { },
  methods: { },
  created() { },
  mounted() { },
  computed: { },
}
</script>
<style lang="less" scoped>
@import '../assets/style.less';
@media screen and (max-width: 1440px) {

}

.f96a69 {
  height: 250px;
  background-color: #F96A69;
  .header{
    height: 100%;
  }
}
</style>