<template>
  <div class="ff">
    <div class="nav">
      <div class="constants">
        <div class="logo"></div>
        <ul><li v-for="(item, index) in menu" :key="index">{{item.value}}</li></ul>
      </div>
      <div class="u">
        <ul><li>Balances</li><li>Orders</li></ul>
        <div class="usr-name">USER*****114514</div>
      </div>
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
<style lang="less" scoped>
@import '../assets/style.less';
@media screen and (max-width: 1440px) {

}

.nav {
  display: flex;
  min-width: 1408px;
  height: 22px;
  margin: 0 auto;
  padding: 14px 16px;
  background: #FFFFFF;
}

.nav ul {
  display: flex;
}

.nav li {
  margin: 0 30px;
  color: #49505A;
  font-size: 14px;
  cursor: pointer;
}

.constants {
  width: 50%;
  display: flex;
  align-items: center;
}

.u {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.u .usr-name {
  margin-left: 15px;
  font-size: 12px;
}

.logo {
  width: 144px;
  height: 26px;
  background-color: #D93569;
}

.ff {
  background-color: #fff;
}
</style>