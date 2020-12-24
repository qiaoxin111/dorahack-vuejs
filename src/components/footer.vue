<template>
  <div class="footer">
    <div class="copyright">
      <div class="logo"></div>Copyright © 2020
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
          value: 'Token Supply',
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
<style lang="less">
@import '../assets/style.less';
@media screen and (max-width: 1440px) {

}

.footer {
  display: flex;
  height: 209px;
  background-color: #212023;
  align-items: center;
}

.copyright {
  margin: 0 auto;
  display: flex;
  align-items: center;

  font-size: 16px;
  color: #fff;
}

.logo {
  width: 144px;
  height: 26px;
  background-color: #D93569;
  margin-right: 20px;
}
</style>