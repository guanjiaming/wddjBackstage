<template>
  <div class="login-container">
    <div class="log">
      <img src="../assets/wdlogo.png" alt="微东到家logo">
    </div>
    <!--<h2>微东到家系统管理界面</h2>-->
    <!-- 登录表单 -->
    <el-form ref="ruleForm2" label-position="left" label-width="0px" class="formWrap">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="form.account" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="form.checkPass"  auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked"  class="remember">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        form:{
          account:'admin',
          checkPass: '123456'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--lang="scss"-->
<style lang="scss" scoped>
  html,body{
    width:100%;
    height:100%;
  }
  .login-container {
    width:100%;
    height:100%;
    padding-top:80px;
    .log{
      width:100%;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width:90px;
        height: 90px;
      }
    }
    h2{
      color: #fff;
      margin-top:50px;
      font-size:24px;
      font-weight: 600;
    }
    .formWrap{
      -webkit-border-radius: 5px;
      border-radius: 5px;
      -moz-border-radius: 5px;
      background-clip: padding-box;
      margin: 60px auto;
      width: 350px;
      padding: 35px 35px 15px 35px;
      background: #fff;
      border: 1px solid #eaeaea;
      box-shadow: 0 0 25px #cac6c6;
      .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
        font-size:22px;
      }
      .remember {
        margin: 0px 0px 35px 0px;
      }
    }
  }

</style>

