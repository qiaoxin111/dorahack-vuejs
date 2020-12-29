<template>
  <div>
    <div class="record">
      <search></search>
      <div class="candlestick-chart">
        <div class="canvas"></div>
        <div>
          <div class="order-header">
            <span class="hov">Limit</span>
            <span>Market</span>
          </div>

          <div class="calculate">
            <div>
              <p class="ttl">Available 12.3456746 xUSD <span>Buy xCHF</span></p>
              <ipt-input header-content="Buy Price" footer-content="xUSD" placeholder-text="Max:50.20"></ipt-input>
              <ipt-input header-content="Amount" footer-content="xCHF"></ipt-input>
              <p class="ttl">Total <span class="font14">0.00xUSD</span></p>
              <button class="btn">Create Buy Order</button>
            </div>

            <div>
              <p class="ttl">Available 12.3456746 xUSD <span>Sell xCHF</span></p>
              <ipt-input header-content="Buy Price" footer-content="xUSD" placeholder-text="Max:50.20"></ipt-input>
              <ipt-input header-content="Amount" footer-content="xCHF"></ipt-input>
              <p class="ttl">Total <span class="font14">0.00xUSD</span></p>
              <button class="btn">Create Sell Order</button>
            </div>
          </div>
        </div>
      </div>
      <order></order>
    </div>

    <div class="_table">
      <cards :cardList="cardsList"></cards>
      <Table :tableColumn="tableColumn" :list="list">
        <template slot="operation" slot-scope="{ scope, cancel, toLinkPage }">
          <span class="actionTabl" @click="cancel(scope)">Cancel</span>
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
import search from '../components/trade/search'
import order from '../components/trade/order'
import iptInput from '../components/input/index'
import cards from '../components/cards/index'
import Table from "@/components/table"
import common from '../common'
export default {
  name: 'Index',
  components: {
    search,
    order,
    iptInput,
    cards,
    Table
  },
  data() {
    return {
      cardsList: [
        {
          label: "Open Orders",
          value: "openOrders",
        },
        {
          label: "Orders History",
          value: "ordersHistory",
        },
        {
          label: "Trade History",
          value: "tradeHistory",
        },
      ],
      tableColumn: [
        {
          prop: "date",
          title: "Date",
          width: "",
          sortable: false,
        },
        {
          prop: "pair",
          title: "Pair",
          width: "",
          sortable: false,
        },
        {
          prop: "type",
          title: "Type",
          width: "70",
          sortable: false,
        },
        {
          prop: "side",
          title: "Side",
          width: "50",
          sortable: false,
        },
        {
          prop: "price",
          title: "Price(vUSD)",
          width: "",
          sortable: false,
        },
        {
          prop: "amount",
          title: "Amount(vCHF)",
          width: "",
          sortable: false,
        },
        {
          prop: "total",
          title: "Total(vUSD)",
          width: "",
          sortable: false,
        },
        {
          prop: "filledAmount",
          title: "Filled Amount",
          width: "",
          sortable: false,
        },
        {
          prop: "unfilledAmount",
          title: "Unfilled Amount",
          width: "",
          sortable: false,
        },
        {
          title: "Cancel All",
        },
      ],
      list: [
        {
          date: "14-12-2020",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 0,
          price: 7.09,
          amount: 678.12349,
          total: 4324.56,
          filledAmount: 320,
          unfilledAmount: 358.909,
          status: "Cancel",
        },
        {
          date: "14-12-2020",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 0,
          price: 7.09,
          amount: 678.12349,
          total: 4324.56,
          filledAmount: 320,
          unfilledAmount: 358.909,
          status: "Complete",
        },
        {
          date: "14-12-2020",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 0,
          price: 7.09,
          amount: 678.12349,
          total: 4324.56,
          filledAmount: 320,
          unfilledAmount: 358.909,
          status: "Cancel",
        },
        {
          date: "14-12-2020",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 0,
          price: 7.09,
          amount: 678.12349,
          total: 4324.56,
          filledAmount: 320,
          unfilledAmount: 358.909,
          status: "Cancel",
        },
        {
          date: "14-12-2020",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 0,
          price: 7.09,
          amount: 678.12349,
          total: 4324.56,
          filledAmount: 320,
          unfilledAmount: 358.909,
          status: "Failed",
        },
        {
          date: "14-12-2020",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 0,
          price: 7.09,
          amount: 678.12349,
          total: 4324.56,
          filledAmount: 320,
          unfilledAmount: 358.909,
          status: "Failed",
        },
        {
          date: "14-12-2020",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 0,
          price: 7.09,
          amount: 678.12349,
          total: 4324.56,
          filledAmount: 320,
          unfilledAmount: 358.909,
          status: "Failed",
        },
        {
          date: "14-12-2020",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 0,
          price: 7.09,
          amount: 678.12349,
          total: 4324.56,
          filledAmount: 320,
          unfilledAmount: 358.909,
          status: "Failed",
        },
      ],
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

.record > div.candlestick-chart {
  width: 800px;
  margin: 0 5px;
  background-color: #F8F8F8;
}

._table {
  width: 1440px;
  margin: 0 auto;
}

.order-header {
  height: 32px;
  text-align: center;
  overflow: hidden;
  background-color: #F8F8F8;
}

.order-header span {
  float: left;
  padding: 0 24px;
  height: 32px;
  line-height: 30px;
  border-top: 2px solid #F8F8F8;

  font-size: 14px;
  color: #49505A;
}

.order-header span.hov {
  color: #DA235E;
  border-top: 2px solid #DA235E;
  background-color: #fff;
}

.calculate {
  display: flex;
  background-color: #fff;
}

.calculate > div {
  width: 50%;
  padding: 16px;
}

.calculate .ttl {
  text-align: left;

  color: #49505A;
  font-size: 12px;
}

.calculate .ttl span {
  float: right;
}

.canvas {
  height: 495px;
  margin-bottom: 5px;
  background-color: #eaeaea;
}

.font14 {
  font-size: 14px;
}

.btn {
  display: block;
  width: 100%;
  height: 32px;
  background: #DA235E;
  border: 0;
  border-radius: 2px;
  margin: 16px 0;

  font-size: 14px;
  color: #fff;
  text-align: center;
}
</style>