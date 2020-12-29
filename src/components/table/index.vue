<template>
  <div class="tbl">
    <el-table
      :data="list"
      class="table"
      id="table"
      v-loading="loading"
    >
      <el-table-column
        v-for="item in tableColumn"
        v-if="item.title !== 'Action'"
        :key="item.prop"
        :prop="item.prop"
        :label="item.title"
        :width="item.list_width"
        :sortable="item.sortable"
      />
      <el-table-column
        v-if ='!!tableColumn.find(item=>item.title === "Action")'
        label="Action"
        width="180"
        align="center"
      >
        <template slot-scope="scope">
          <slot
            name="operation"
            :scope="scope"
            :topage="topage"
            :toLinkPage="toLinkPage"
            :cancel="cancel"
          />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      
    };
  },
  props:['tableColumn', 'list'],
  created(){
  },
  methods: {
    cancel({ row }) {
      // this.api = this.apis.cancel
      alert('删除成功')
    },
    topage(){
      alert('跳转到Trade页面')
    },
    toLinkPage(){
      alert('跳转到every页面')
    }
  },
};
</script>

<style lang="less" scoped></style>
