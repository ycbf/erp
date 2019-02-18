<template>
  <el-row class="page">
    <el-col :span="24">
      <the-header :open-nav="openNav" :open-base="openBase" @base-open='tobase' @supplier-open='tosupplier' @toggle-open="toggleOpen"></the-header>
    </el-col>
    <el-col :span="24" class="page-main">
      <the-sidebar :open-nav="openNav" :open-base="openBase"></the-sidebar>
      <section class="page-content" :class="{'page-content-hide-aside': !openNav}">
        <vue-scroll>
          <the-main></the-main>
          <the-footer></the-footer>
        </vue-scroll>
      </section>
    </el-col>
  </el-row>
</template>

<script>
import TheLayoutHeader from './TheLayoutHeader'
import TheLayoutSidebar from './TheLayoutSidebar'
import TheLayoutFooter from './TheLayoutFooter'
import TheLayoutMain from './TheLayoutMain'

export default {
  name: 'TheLayout',
  data () {
    return {
      openNav: true,
      openBase:1,
    }
  },
  methods: {
    toggleOpen () {
      this.openNav = !this.openNav
    },
    tobase(){
      this.openBase = 1
    },
    tosupplier(){
      this.openBase = 2
    }
  },
  components: {
    'the-header': TheLayoutHeader,
    'the-sidebar': TheLayoutSidebar,
    'the-footer': TheLayoutFooter,
    'the-main': TheLayoutMain
  }
}
</script>

<style scoped lang="scss">
.page {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  .page-main {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0;
    .page-content {
      position: absolute;
      left: 240px;
      right: 0;
      height: 100%;
    }
    .page-content-hide-aside {
      left: 65px;
    }
  }
}
</style>