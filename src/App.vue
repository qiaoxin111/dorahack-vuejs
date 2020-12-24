<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import path from './assets/constant'
export default {
  name: 'App',
  data: () => {
    return {}
  },
  created() {
    // this.getComSelectList()
    // this.getPayOutOptionsList()
    // if (!sessionStorage.getItem('comInfo')) {
    //   this.getComSelectList()
    // }
  },
  mounted() {},
  methods: {
    getPayOutOptionsList() {
      this.$api
        .payOutOptionsList()
        .then(res => {
          const code = res.code
          if (code === '0') {
            this.$store.commit('savePayOutOptionsList', res.data)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    getComSelectList() {
      this.$api
        .getComSelectList()
        .then(res => {
          if (res.code) {
            sessionStorage.setItem(
              'comInfo',
              JSON.stringify(res.data)
            )
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
}
</script>

<style>
#app {
  height: 100%;
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #f8f8f8;
}
ul,
li {
  list-style: none;
}
html,
body,
p,
ul,
li {
  padding: 0;
  margin: 0;
}
html, body {
  height: 100%;
  width: 100%;
}
</style>
