<template>
  <div class="q-sectionAuto">
    <div class="section1048">
      <div class="titleBanner">Orders</div>
      <SearchBox
        :searchList="searchList"
        ref="searchBox"
        @sendQuery="sendQuery"
        @changeCardPiece="changeCardPiece"
      ></SearchBox>
      <Table :tableColumn="tableColumn" :list="list">
        <template slot="operation" slot-scope="{ scope, cancel, toLinkPage }">
          <span
            v-if="curCar === 'openOrders'"
            class="actionTabl"
            @click="cancel(scope)"
            >Cancel</span
          >
          <span
            v-if="curCar === 'tradeHistory'"
            class="actionTabl"
            @click="toLinkPage"
            >Transaction Detail</span
          >
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
import Table from "@/components/table";
import SearchBox from "@/components/searchBox";
export default {
  components: {
    Table,
    SearchBox,
  },
  data() {
    return {
      searchList: [
        {
          prop: "order",
          type: "cards",
          list: [
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
        },
        {
          type: "cascadeSelection",
          list: [
            {
              prop: "coin",
              api: "coin",
              val: "",
              options: [],
            },
            {
              prop: "unit",
              api: "unit",
              val: "",
              options: [],
            },
          ],
        },
        {
          type: "block",
        },
        {
          prop: "peroid",
          type: "select",
          val: "7",
          list: [
            {
              label: "Past 7 days",
              value: "7",
            },
            {
              label: "Past 14 days",
              value: "14",
            },
            {
              label: "Past 30 days",
              value: "30",
            },
            {
              label: "Custom Date",
              value: "custom",
            },
          ],
        },
        {
          prop: "type",
          val: "all",
          type: "select",
          list: [
            {
              label: "All",
              value: "all",
            },
            {
              label: "Buy",
              value: "buy",
            },
            {
              label: "Sell",
              value: " sell",
            },
          ],
        },
        {
          type: "buttonSearch",
          content: "Search",
        },
        {
          type: "buttonDownload",
          content: "Download",
        },
      ],
      curCar: "",
      query: {},
      tableColumn: [],
      tableColumn0: [
        {
          prop: "date",
          title: "Date",
          width: "150",
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
          title: "Price",
          width: "",
          sortable: false,
        },
        {
          prop: "amount",
          title: "Amount",
          width: "",
          sortable: false,
        },
        {
          prop: "total",
          title: "Total",
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
      tableColumn1: [
        {
          prop: "date",
          title: "Date",
          width: "150",
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
          title: "Price",
          width: "",
          sortable: false,
        },
        {
          prop: "amount",
          title: "Amount",
          width: "",
          sortable: false,
        },
        {
          prop: "total",
          title: "Total",
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
          title: "Action",
        },
      ],
      tableColumn2: [
        {
          prop: "date",
          title: "Date",
          width: "150",
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
          title: "Price",
          width: "",
          sortable: false,
        },
        {
          prop: "amount",
          title: "Amount",
          width: "",
          sortable: false,
        },
        {
          prop: "total",
          title: "Total",
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
          prop: "status",
          title: "Status",
          width: "",
          sortable: false,
        },
      ],
      list: [],
      list0: [
        {
          date: "14-12-2020 11:11:11",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 'Sell',
          price: '7.0900 USD',
          amount: '678.12 CHF',
          total: '4324.56 USD',
          filledAmount: '320.00 USD',
          unfilledAmount: '358.90 USD',
          cancel: 'cancel'
        },
        {
          date: "14-12-2020 11:11:11",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 'Sell',
          price: '7.0900 USD',
          amount: '678.12 CHF',
          total: '4324.56 USD',
          filledAmount: '320.00 USD',
          unfilledAmount: '358.90 USD',
          cancel: 'cancel'
        },
        {
          date: "14-12-2020 11:11:11",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 'Buy',
          price: '7.0900 USD',
          amount: '678.12 CHF',
          total: '4324.56 USD',
          filledAmount: '320.00 USD',
          unfilledAmount: '358.90 USD',
          cancel: 'cancel'
        },
        {
          date: "14-12-2020 11:11:11",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 'Sell',
          price: '7.0900 USD',
          amount: '678.12 CHF',
          total: '4324.56 USD',
          filledAmount: '320.00 USD',
          unfilledAmount: '358.90 USD',
          cancel: 'cancel'
        },
        {
          date: "14-12-2020 11:11:11",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 'Sell',
          price: '7.0900 USD',
          amount: '678.12 CHF',
          total: '4324.56 USD',
          filledAmount: '320.00 USD',
          unfilledAmount: '358.90 USD',
          cancel: 'cancel'
        },
      ],
      list1: [
        {
          date: "14-12-2020 11:11:11",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 'Sell',
          price: '7.0900 USD',
          amount: '678.12 CHF',
          total: '4324.56 USD',
          filledAmount: '320.00 USD',
          unfilledAmount: '358.90 USD',
        },
        {
          date: "14-12-2020 11:11:11",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 'Sell',
          price: '7.0900 USD',
          amount: '678.12 CHF',
          total: '4324.56 USD',
          filledAmount: '320.00 USD',
          unfilledAmount: '358.90 USD',
        },
        {
          date: "14-12-2020 11:11:11",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 'Buy',
          price: '7.0900 USD',
          amount: '678.12 CHF',
          total: '4324.56 USD',
          filledAmount: '320.00 USD',
          unfilledAmount: '358.90 USD',
        },
        {
          date: "14-12-2020 11:11:11",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 'Buy',
          price: '7.0900 USD',
          amount: '678.12 CHF',
          total: '4324.56 USD',
          filledAmount: '320.00 USD',
          unfilledAmount: '358.90 USD',
        },
      ],
      list2: [
        {
          date: "14-12-2020 11:11:11",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 'Buy',
          price: 7.09,
          amount: 678.12349,
          total: 4324.56,
          filledAmount: 320,
          unfilledAmount: 358.909,
          status: "Complete",
        },
        {
          date: "14-12-2020 11:11:11",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 'Buy',
          price: 7.09,
          amount: 678.12349,
          total: 4324.56,
          filledAmount: 320,
          unfilledAmount: 358.909,
          status: "Complete",
        },
        {
          date: "14-12-2020 11:11:11",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 'Buy',
          price: 7.09,
          amount: 678.12349,
          total: 4324.56,
          filledAmount: 320,
          unfilledAmount: 358.909,
          status: "Cancel",
        },
        {
          date: "14-12-2020 11:11:11",
          pair: "vCHF/vUSD",
          type: "Limit",
          side: 'Buy',
          price: 7.09,
          amount: 678.12349,
          total: 4324.56,
          filledAmount: 320,
          unfilledAmount: 358.909,
          status: "Cancel",
        },
      ],
    };
  },
  created() {
    this.list = this.list0
    this.tableColumn = this.tableColumn0
  },
  methods: {
    sendQuery(query) {
      this.query = this.$refs.searchBox.query;
      console.log("111111", this.query);
    },

    changeCardPiece(data) {
      this.curCar = data.value;
      if (this.curCar === "ordersHistory") {
        this.tableColumn = this.tableColumn2;
        this.list = this.list2;
      } else if (this.curCar === "openOrders") {
        this.tableColumn = this.tableColumn0;
        this.list = this.list0;
      } else {
        this.tableColumn = this.tableColumn1;
        this.list = this.list1;
      }
      console.log("data", data);
    },
  },
};
</script>

<style lang="less" scoped>

  .actionTabl{
    color: #357CE1;
    cursor: pointer;
  }
</style>
