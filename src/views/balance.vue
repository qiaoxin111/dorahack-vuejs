<template>
  <div class="q-sectionAuto">
    <div class="section1048">
      <div class="titleBanner">Balance</div>
      <div class="search">
        <el-input class='searchInner' style="border:none;" placeholder="Search"></el-input>
      </div>
      <Table :tableColumn="tableColumn" :list="list">
        <template slot="operation" slot-scope="{ topage }">
          <span class='actionTabl' @click="topage">Trade</span>

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
import Table from "@/components/table";
export default {
  components: {
    Table,
  },
  data() {
    return {
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
      ],
      list: [
        { coin: "vCHF", total: 22.33, available: 0, locked: 0 },
        { coin: "EVRY", total: 22.33, available: 22.9, locked: 22.9 },
        { coin: "USD", total: 22.33, available: 22.9, locked: 22.9 },
        { coin: "EVRY", total: 22.33, available: 0, locked: 0 },
        { coin: "USD", total: 22.33, available: 22.9, locked: 22.9 },
        { coin: "EVRY", total: 22.33, available: 0, locked: 0 },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import '../assets/style';

</style>
