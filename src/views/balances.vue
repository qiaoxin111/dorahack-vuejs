<template>
  <div class="q-sectionAuto">
    <div class="section1048">
      <div class="titleBanner">Balance</div>
      <div class="search">
        <el-input prefix-icon="el-icon-search" class='searchInner' v-model='query'  placeholder="Search"></el-input>
      </div>
      <Table :tableColumn="tableColumn" :list="list">
        <template slot="operation" slot-scope="{ topage }">
          <span class='actionTabl' @click="topage">Trade</span>
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
import Table from "@/components/table";
export default {
  components: {
    Table,
  },
  data() {
    return {
      query: '',
      tableColumn: [
        {
          prop: "coin",
          title: "Coin",
          width: "",
          sortable: true,
        },
        {
          prop: "total",
          title: "Total",
          width: "",
          sortable: true,
        },
        {
          prop: "available",
          title: "Available",
          width: "",
          sortable: true,
        },
        {
          prop: "locked",
          title: "Locked",
          width: "",
          sortable: true,
        },
        {
          title: "Action",
        },
      ],
      list: [
        { coin: "vCHF", total: 22.33, available: '0.00', locked: '0.00' },
        { coin: "EVRY", total: 22.33, available: 22.90, locked: 22.90 },
        { coin: "USDT", total: 22.33, available: 22.90, locked: 22.90 },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import '../assets/style';
.searchInner{
  /deep/ .el-input__inner{
    padding-left: 30px !important;
  }
}
</style>
