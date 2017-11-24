<template>
  <el-row class="container">
    <!--  顶部  -->
    <el-col :span="24" class="header">
      <!-- logo -->
      <el-col :span="16" class="logo">
        <img src="../assets/wdlogo.png" alt="">
        <h3 class="txt">微东到家运营后台</h3>
      </el-col>

      <!-- 用户信息 -->
      <el-col :span="3" class="userInfo">
        <div class="headerIcon">
          <img src="../assets/user.png" alt="用户头像">
        </div>
        <span class="username">username</span>
      </el-col>

      <!--  通知信息  -->
      <el-col :span="3" class="notice">
        <!--<img src="noticeIcon" alt="">-->
        <i class="el-icon-bell"></i>
        <span class="noticeTxt danger">666</span>
        <span class="noticeTxt">条信息</span>
      </el-col>

      <!-- 退出系统 -->
      <el-col :span="2" class="escSys">
        <i class="el-icon-close"></i>
        <el-button type="text" class="escSysBtn">退出登录</el-button>
      </el-col>
    </el-col>

    <el-col class="main">
      <!-- 左侧菜单 -->
      <el-aside class="menu-collapsed">
        <el-menu default-active="1"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"

        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-tickets"></i>会员管理</template>
            <el-menu-item index="2-1">用户管理</el-menu-item>
            <el-menu-item index="2-2">认证管理</el-menu-item>
            <el-menu-item index="2-3">积分列表</el-menu-item>
            <el-menu-item index="2-4">信誉管理</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-document"></i>订单管理</template>
            <el-menu-item index="3-1">进行中订单</el-menu-item>
            <el-menu-item index="3-2">待处理订单</el-menu-item>
            <el-menu-item index="3-3">已完成订单</el-menu-item>
            <el-menu-item index="3-4">提现管理</el-menu-item>

          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-setting"></i>数据管理</template>
            <el-menu-item index="4-1">表格形式</el-menu-item>
            <el-menu-item index="4-2">图形格式</el-menu-item>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title"><i class="el-icon-setting"></i>权限管理</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="5-1">选项1</el-menu-item>
              <el-menu-item index="5-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="5-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="5-4">
              <template slot="title">选项4</template>
              <el-menu-item index="5-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 右侧主要内容区域 -->
      <el-main>
        <section class="content-container">
          <div class="grid-content bg-purple-light">
            <el-col :span="24" class="breadcrumb-container">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>首页</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>

            <el-col :span="24" class="content-wrapper">
              <transition name="fade" mode="out-in">

                <router-view></router-view>

              </transition>
            </el-col>
          </div>
        </section>
      </el-main>
    </el-col>

  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        collapsed: false,
        sysUserName: '',
        sysUserAvatar: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleopen() {
        //console.log('handleopen');
      },
      handleclose() {
        //console.log('handleclose');
      },
      handleselect: function (a, b) {
      },
      //退出登录
      logout: function () {
        var _this = this;
        this.$confirm('确认退出吗?', '提示', {
          //type: 'warning'
        }).then(() => {
          sessionStorage.removeItem('user');
          _this.$router.push('/login');
        }).catch(() => {

        });


      },
      //折叠导航栏
      collapse: function () {
        this.collapsed = !this.collapsed;
      },
      showMenu(i, status) {
        this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
      }
    },
    mounted() {
      var user = sessionStorage.getItem('user');
      if (user) {
        user = JSON.parse(user);
        this.sysUserName = user.name || '';
        this.sysUserAvatar = user.avatar || '';
      }

    }
  }

</script>

<style scoped lang="scss">
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .header {
      height: 60px;
      line-height: 60px;
      background: #505458;
      color: #fff;
      .logo {
        //width:230px;
        height: 60px;
        font-size: 20px;
        padding-left: 20px;
        padding-right: 20px;
        border-color: rgba(238, 241, 146, 0.3);
        img {
          width: 40px;
          float: left;
          margin: 10px 40px 10px 20px;
        }
        .txt {
          color: #fff;
          font-weight: 500;
        }
      }
      .userInfo {
        height: 60px;
        padding-top: 12px;
        .headerIcon {
          width: 36px;
          height: 36px;
          vertical-align: top;
          float: left;
          border-radius: 50%;
          background: #000;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            vertical-align: top;
          }
        }
        .username {
          display: inline-block;
          font-size: 16px;
          line-height: 34px;
          float: left;
          margin-left: 10px;
        }
      }
      .notice {
        .el-icon-bell {
          font-size: 20px;
        }
        .noticeTxt.danger {
          margin-left: 5px;
          color: #FA5555;
        }
      }
      .escSys {
        .escSysBtn {
          margin-left: 6px;
        }
        .el-icon-close {
          color: #ffffff;
          font-size: 20px;
          position: relative;
          top: 2px;
          left: 0;
        }
      }
    }
    .main {
      display: flex;
      // background: #324057;
      position: absolute;
      top: 60px;
      bottom: 0px;
      overflow: hidden;
      //左侧菜单
      .menu-collapsed{
        background: #545c64;
      }
      // 展示内容区域
      .content-container{
        //目前所在位置
        .breadcrumb-container{
          margin-bottom:30px;
        }
        .breadcrumb-inner{
          color:#999;
          font-size:14px;
          margin-left:6px;
        }
      }
    }
  }
</style>
