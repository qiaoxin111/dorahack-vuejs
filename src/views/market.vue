<template>
  <div>
    <topHeader>
      <div class="q-sectionAuto backMianPink">
        <div class="section1048">
          <titleBlock :blockData="blockData"></titleBlock>
          <SearchBox
            class="searchBox"
            :searchList="searchList"
            ref="searchBox"
            @sendQuery="sendQuery"
          ></SearchBox>
        </div>
      </div>
    </topHeader>
    <div class="q-sectionAuto">
      <div class="section1048">
        <Table :tableColumn="tableColumn" :list="list">
          <template slot="operation" slot-scope="{ topage }">
            <span class="actionTabl" @click="topage">Trade</span>
          </template>
        </Table>
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from "@/components/header";
import Table from "@/components/table";
import titleBlock from "@/components/titleBlock";
import SearchBox from "@/components/searchBox";
export default {
  components: {
    topHeader,
    Table,
    titleBlock,
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
              label: "Exchange",
              value: "exchange",
            },
          ],
        },
        {
          type: "block",
        },
        {
          prop: "search",
          val: '',
          type: "searchInput",
        },
      ],
      blockData: [
        {
          title: "vCHF/vUSD",
          change: -0.45,
          price: 611.3,
          content: "24H Volume 10,000",
        },
        {
          title: "vCHF/vUSD",
          change: -0.45,
          price: 611.3,
          content: "24H Volume 10,000",
        },
        {
          title: "vCHF/vUSD",
          change: -0.45,
          price: -611.3,
          content: "24H Volume 10,000",
        },
        {
          title: "vCHF/vUSD",
          change: -0.45,
          price: -611.3,
          content: "24H Volume 10,000",
        },
      ],
      tableColumn: [
        {
          prop: "pairs",
          title: "Pairs",
          width: "",
          sortable: true,
        },
        {
          prop: "lastPrice",
          title: "Last Price",
          width: "",
          sortable: true,
        },
        {
          prop: "change",
          title: "24H Change",
          width: "",
          sortable: true,
        },
        {
          prop: "high",
          title: "24H High",
          width: "",
          sortable: true,
        },
        {
          prop: "low",
          title: "24H Low",
          width: "",
          sortable: true,
        },
        {
          prop: "vol",
          title: "24H Vol",
          width: "",
          sortable: true,
        },
        {
          title: "Action",
        },
      ],
      list: [
        {
          pairs: "vCHF/vUSD",
          lastPrice: '22.3300 USD',
          change: -0.93,
          high: '22.3300 USD',
          low: '22.3300 USD',
          vol: "23.75k USD",
        },
        {
          pairs: "vCHF/vUSD",
          lastPrice: '22.3300 USD',
          change: -0.93,
          high: '22.3300 USD',
          low: '22.3300 USD',
          vol: "23.75k USD",
        },
        {
          pairs: "vCHF/vUSD",
          lastPrice: '22.3300 USD',
          change: 0.93,
          high: '22.3300 USD',
          low: '22.3300 USD',
          vol: "23.75k USD",
        },
        {
          pairs: "vCHF/vUSD",
          lastPrice: '22.3300 USD',
          change: -0.93,
          high: '22.3300 USD',
          low: '22.3300 USD',
          vol: "23.75k USD",
        },
        {
          pairs: "vCHF/vUSD",
          lastPrice: '22.3300 USD',
          change: 0.93,
          high: '22.3300 USD',
          low: '22.3300 USD',
          vol: "23.75k USD",
        },
        {
          pairs: "vCHF/vUSD",
          lastPrice: '22.3300 USD',
          change: -0.93,
          high: '22.3300 USD',
          low: '22.3300 USD',
          vol: "23.75k USD",
        },
        {
          pairs: "vCHF/vUSD",
          lastPrice: '22.3300 USD',
          change: -0.93,
          high: '22.3300 USD',
          low: '22.3300 USD',
          vol: "23.75k USD",
        },
      ],
    };
  },
  methods: {
    sendQuery(query) {
      this.query = this.$refs.searchBox.query;
      console.log("111111", this.query);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/style";
.backMianPink {
  height: 100%;
  background: @colorF96A69;
  .section1048 {
    position: relative;
    .searchBox {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
    }
  }
}
</style>
