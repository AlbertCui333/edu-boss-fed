<template>
  <div id="app">
    <div>123</div>
    <p>{{ a }}</p>
    <button @click="test">测试</button>
    <!-- 跟路由出口 -->
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

  interface Foo {
    a: string
    b: number
  }
  interface Fo {a: string; b: number}

// 这种类的方式,暂时还没有定版, 所以不使用
// import Component from 'vue-class-component'
// @Component
// export default class App extends Vue {
//   a = 1
//   b = '2'
//   c = {
//     a: 1,
//     b: '2'
//   }

//   test (): void {
//     console.log(this.a)
//     // this.a.abc()
//   }
// }

// 2. 要让 TypeScript 正确推断 Vue 组件选项中的类型，使用 Vue.extend 定义组件
export default Vue.extend({
  data () {
    return {
      a: 1,
      b: '2',
      c: [],
      d: {
        a: 1,
        b: '2'
      }
    }
  },
  methods: {
    test () {
      this.a = 2
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
