<template>
  <div>
    <div class="record">
      <search></search>
      <div class="candlestick-chart"></div>
      <order></order>
    </div>
  </div>
</template>

<script>
import search from '../components/trade/search'
import order from '../components/trade/order'
import common from '../common'
export default {
  name: 'Index',
  components: {
    search,
    order
  },
  data() {
    return {

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
@media screen and (max-width: 1280px) { }
.record {
  width: 1440px;
  display: flex;
  padding: 5px 0;
  margin: 0 auto;
}

.record > div {
  background-color: #fff;
  box-shadow: 0px 3px 8px 0px #EEE6DE;
  border-radius: 4px;
}

.candlestick-chart {
  width: 800px;
  margin: 0 5px;
}
</style>