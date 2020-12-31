<template>
  <div class="q-sectionAuto">
    <div class="section1048">
      <div class="titleBanner">
        <Cards
          class="cardsAd"
          @changeCard="changeCard($event)"
          :cardList="cardList"
          :isBorderBotton="true"
        ></Cards>
      </div>
      <div v-if="select === 'staking'">
        <div class="titleBanner">
          <span class="title">Total Number Of VELO Tokens Staked</span>
          <span class="price">1,120,400</span>
        </div>
        <div class="schedule">The Daily Unlock Schedule</div>
        <div class="tableData">
          <ul class="hader">
            <li v-for="(item, index) in program" :key="index">
              {{ item.label }}
            </li>
          </ul>
          <ul class="content">
            <li v-for="(item, index) in dataList" :key="index">
              <span v-for="(cur, i) in program" :key="i">{{
                item[cur.value]
              }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div v-else>
        <div class="pool">
          <div class="type" v-for="(item, index) in poolList" :key="index">
            <p class="name">{{ item.name }}</p>
            <p class="pricUnit">
              <span class="price">{{ item.price }}</span
              >{{ item.unit }}
            </p>
            <span class="line"></span>
          </div>
        </div>
        <div class="tableData">
          <ul class="hader h44">
            <li
              v-for="(item, index) in programVelo"
              :key="index"
              :class="{
                shrink1_1: item.value === 'underlyingFiat',
                shrink0_8: item.value === 'token',
              }"
            >
              {{ item.label }}
            </li>
          </ul>
          <ul class="content">
            <li v-for="(item, index) in dataListVelo" :key="index">
              <span
                v-for="(cur, i) in programVelo"
                :key="i"
                :class="{
                  shrink1_1: cur.value === 'underlyingFiat',
                  shrink0_8: cur.value === 'token',
                }"
                >{{ item[cur.value] }}</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "@/components/cards";
export default {
  components: {
    Cards,
  },
  data() {
    return {
      select: "staking",
      cardList: [
        {
          label: "Staking",
          value: "staking",
        },
        {
          label: "VELO&DRS",
          value: "velodrs",
        },
      ],
      program: [
        {
          label: "Date",
          value: "date",
        },
        {
          label: "Principal Amount",
          value: "amount",
        },
        {
          label: "Principal  + Interest",
          value: "principalInterest",
        },
      ],
      dataList: [
        {
          date: "24-12-2020 14:10:23",
          amount: "100.00",
          principalInterest: "1,120,500.00",
        },
        {
          date: "24-12-2020 14:10:23",
          amount: "100.00",
          principalInterest: "1,120,500.00",
        },
        {
          date: "24-12-2020 14:10:23",
          amount: "100.00",
          principalInterest: "1,120,500.00",
        },
        {
          date: "24-12-2020 14:10:23",
          amount: "100.00",
          principalInterest: "1,120,500.00",
        },
        {
          date: "24-12-2020 14:10:23",
          amount: "100.00",
          principalInterest: "1,120,500.00",
        },
        {
          date: "24-12-2020 14:10:23",
          amount: "100.00",
          principalInterest: "1,120,500.00",
        },
      ],
      programVelo: [
        {
          label: "Underlying Fiat",
          value: "underlyingFiat",
        },
        {
          label: "# Digital Credit Issued",
          value: "digital",
        },
        {
          label: "# VELO Tokens as Collateral Backing Digital Credits",
          value: "token",
        },
        {
          label: "VELO Price in Fiat",
          value: "price",
        },
        {
          label: "VELO Collateral Value in  Fiat",
          value: "collateralFiat",
        },
        {
          label: "VELO Collateral Value in USD",
          value: "collateralUSD",
        },
        {
          label: "3rd Party Stablecoin Collateral",
          value: "party",
        },
        {
          label: "Direct Fiat Cash Collateral",
          value: "fiat",
        },
      ],
      poolList: [
        {
          name: "Reserve Pool",
          price: "3,000.00",
          unit: "VELO",
        },
        {
          name: "Collateral Pool",
          price: "2,500.00",
          unit: "VELO",
        },
      ],
      dataListVelo: [
        {
          underlyingFiat: "CHF",
          digital: "1,667.00 VCHF",
          token: "1,000.00",
          price: "1.6700 CHF",
          collateralFiat: "1,667.00 CHF",
          collateralUSD: "1,500.00 USD",
          party: "1,667.00 CHF",
          fiat: "0.00 CHF",
        },
        {
          underlyingFiat: "USD",
          digital: "300.00 VUSD",
          token: "200.00",
          price: "1.5000 USD",
          collateralFiat: "300.00 USD",
          collateralUSD: "300.00 USD",
          party: "300.00 USD",
          fiat: "0.00 USD",
        },
        {
          underlyingFiat: "ERU",
          digital: "575.00 VERU",
          token: "500.00",
          price: "1.1500 ERU",
          collateralFiat: "575.00 ERU",
          collateralUSD: "750.00 USD",
          party: "0.00 ERU",
          fiat: "575.00 ERU",
        },
        {
          underlyingFiat: "SGD",
          digital: "1,680.00 VSGD",
          token: "800.00",
          price: "2.1000 SGD",
          collateralFiat: "1680.00 SGD",
          collateralUSD: "1,200.00 USD",
          party: "0.00 SGD",
          fiat: "1680.00 SGD",
        },
      ],
    };
  },
  methods: {
    changeCard(data) {
      this.select = data.value;
      console.log(this.select);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/style";
.q-sectionAuto {
  .section1048 {
    .cardsAd {
      background: #fff !important;
    }
    .titleBanner {
      padding-right: 16px;
      margin-bottom: 0px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .title {
        font-family: @fontArial;
        font-size: @font12;
        font-weight: bold;
        color: @color49505A;
      }
      .price {
        font-size: @font16;
        color: #000;
        font-weight: bold;
      }
    }
    .schedule {
      width: 100%;
      height: 44px;
      font-family: @fontArial;
      font-weight: bold;
      font-size: 12px;
      padding-left: 16px;
      text-align: left;
      line-height: 44px;
      color: @color49505A;
    }
    .tableData {
      width: 100%;
      padding: 10px 16px;
      background: #fff;
      box-sizing: border-box;
      .hader {
        width: 100%;
        display: flex;
        li {
          height: 32px;
          line-height: 32px;
          width: 35%;
          display: flex;
          color: @colorAEB7C4;
          font-size: @font12;
          text-align: right;
          justify-content: flex-end;
          &:nth-of-type(1) {
            justify-content: flex-start;
          }
        }
        &.h44 li {
          height: 44px;
          line-height: 16px;
        }
      }
      .content {
        width: 100%;
        li {
          display: flex;
          span {
            display: flex;
            width: 35%;
            height: 36px;
            left: 36px;
            line-height: 36px;
            text-align: left;
            font-size: @font12;
            justify-content: flex-end;
            &:nth-of-type(1) {
              justify-content: flex-start;
            }
          }
        }
      }
      ul li {
        &.shrink1_1,
        .shrink1_1 {
          flex-shrink: 1.1;
        }
        &.shrink0_8,
        .shrink0_8 {
          flex-shrink: 0.8;
        }
      }
    }
    .pool {
      position: relative;
      display: flex;
      justify-content: space-evenly;
      margin-top: 10px;
      margin-bottom: 2px;
      background: #fff;
      .type {
        .name,
        .pricUnit {
          height: 30px;
          line-height: 38px;
          font-size: @font12;
          color: @colorAEB7C4;
          
        }
        .pricUnit {
          line-height: 30px;
          color: @color49505A;
          .price {
            font-size: @font16;
            color: #000;
            margin-right: 11px;
          }
        }
        .line {
          position: absolute;
          right: 50%;
          top: 18px;
          width: 1px;
          height: 24px;
          border-right: 1px dashed @colorD6DCDE;
        }
      }
    }
  }
}
</style>
