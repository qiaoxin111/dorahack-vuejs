<template>
  <div class="q-sectionAuto">
    <div class="section1048">
      <div class="titleBanner">Orders</div>
      <Table :tableColumn="tableColumn" :list="list">
        <template slot="operation" slot-scope="{ scope, cancel }">
          <span class="actionTabl" @click="cancel(scope)">Cancel</span>

          <!-- <el-button
        type="text"
        size="small"
        class="del"
        @click="del(scope)"
      >删除</el-button> -->
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
import Table from '@/components/table'
export default {
  components:{
    Table
  },
  data() {
    return {
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
          width: "",
          sortable: false,
        },
        {
          prop: "side",
          title: "Side",
          width: "",
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
      ],
      list: [
        { date: "14-12-2020", pair: 'vCHF/vUSD', type: 'Limit', side: 0,price: 7.09, amount: 678.123490, total: 4324.56, filledAmount: 320, unfilledAmount: 358.909 },
        { date: "14-12-2020", pair: 'vCHF/vUSD', type: 'Limit', side: 0,price: 7.09, amount: 678.123490, total: 4324.56, filledAmount: 320, unfilledAmount: 358.909 },
        { date: "14-12-2020", pair: 'vCHF/vUSD', type: 'Limit', side: 0,price: 7.09, amount: 678.123490, total: 4324.56, filledAmount: 320, unfilledAmount: 358.909 },
        { date: "14-12-2020", pair: 'vCHF/vUSD', type: 'Limit', side: 0,price: 7.09, amount: 678.123490, total: 4324.56, filledAmount: 320, unfilledAmount: 358.909 },
        { date: "14-12-2020", pair: 'vCHF/vUSD', type: 'Limit', side: 0,price: 7.09, amount: 678.123490, total: 4324.56, filledAmount: 320, unfilledAmount: 358.909 },
        { date: "14-12-2020", pair: 'vCHF/vUSD', type: 'Limit', side: 0,price: 7.09, amount: 678.123490, total: 4324.56, filledAmount: 320, unfilledAmount: 358.909 },
        { date: "14-12-2020", pair: 'vCHF/vUSD', type: 'Limit', side: 0,price: 7.09, amount: 678.123490, total: 4324.56, filledAmount: 320, unfilledAmount: 358.909 },
        { date: "14-12-2020", pair: 'vCHF/vUSD', type: 'Limit', side: 0,price: 7.09, amount: 678.123490, total: 4324.56, filledAmount: 320, unfilledAmount: 358.909 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
