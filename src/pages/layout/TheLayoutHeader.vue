<template>
  <el-header class="header">
    <router-link to="/index">
      <div class="logo" :class="{'logo-hide': !openNav}">
        <img src="../../assets/logo.png" class="image"/>
        <span class="text">LLPlatform</span>
      </div>
    </router-link>
    <div class="content">
      <i class="fa fa-align-justify toggle" @click="navOpenToggle" title="显示/隐藏菜单"></i>
      <span @click="tobase">基础模块</span>
      <span @click="tosupplier">供应商模块</span>
    </div>
    <el-dropdown trigger="hover" class="user">
      <span class="user-info">
        {{ user_name }}<i class="fa fa-user-circle-o fa-2x" style="margin-left: 10px"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>我的账号</el-dropdown-item>
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item divided>主题设置</el-dropdown-item>
        <el-dropdown-item>语言选择</el-dropdown-item>
        <el-dropdown-item divided>
          <router-link to="/login">退出登录</router-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
export default {
  name: 'TheLayoutHeader',
  props: ['openNav','openBase'],
  data () {
    const user_info = JSON.parse(sessionStorage.getItem('user-info'))
    const user_name = user_info['name']
    return {
      user_name: user_name
    }
  },
  methods: {
    navOpenToggle () {
      this.$emit('toggle-open')
    },
    tobase(){
      this.$emit('base-open')
    },
    tosupplier(){
      this.$emit('supplier-open')
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  line-height: 60px;
  background-color: #409EFF;
  color: #ffffff;
  div {
    display: inline-block;
  }
  .logo {
    width: 240px;
    border-right: 1px solid #C0C4CC;
    margin-left: -20px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
    .image {
      width: 40px;
      height: 40px;
      vertical-align: middle;
    }
  }
  .logo-hide {
    width: 65px;
    .text {
      display: none;
    }
  }
  .content {
    padding: 0 20px;
    .toggle {
      font-size: 14px;
      cursor: pointer;
    }
  }
  .user {
    float: right;
    cursor: pointer;
    .user-info {
      color: #ffffff;
      i {
        vertical-align: middle;
      }
    }
  }
}
</style>