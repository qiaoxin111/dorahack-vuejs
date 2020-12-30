<template>
  <div class="cc">
      <div v-for="(item, index) in cardList" :key="index" class="q-card" :class='{"q-cur-card" : activeName === index}'  @click='changeCur(item,index)'>
        {{ item.label }}
      </div>
  </div>
</template>

<script>
export default {
  props: ["cardList"],
  data() {
    return {
      activeName: 0,
    };
  },
  created() {
    const item = this.cardList.filter((item,index)=>index===this.activeName)
    this.$emit('changeCard', item[0])
  },
  methods:{
    changeCur(item, index){
      this.activeName = index
      this.$emit('changeCard', item)
    }
  }
};
</script>

<style lang="less" scoped>
@import "@/assets/style";
.cc {
  display: flex;
  .q-card {
    width: 130px;
    height: 40px;
    line-height: 40px;
    background: @colorf8f8f8;
    color: @color49505A;
    font-size: @font14;
    text-align: center;
    border-top: 4px solid @colorf8f8f8;
    cursor: pointer;
  }
  .q-cur-card{
    color: @colorDA235E;
    font-weight: bold;
    border-top: 4px solid @colorDA235E;
  }
}
</style>
