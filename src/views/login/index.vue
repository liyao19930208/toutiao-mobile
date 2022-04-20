<template>
  <div class="login-container">
    <van-nav-bar class="page-nav-bar" title="登录" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="用户名"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      >
        <i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>
      <van-field
        v-model="user.code"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        ><i slot="left-icon" class="iconfont icon-yanzhengma"></i>
        <template #button>
          <van-button class="btn-code" size="small" type="default" round>发送验证码</van-button>
        </template>
      </van-field>
      <div class="btn-wrap">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        const res = await login(this.user)
        console.log('登录成功', res)
      } catch (err) {
        if (err.response.status === 400) {
          console.log('用户名 或密码 错误')
        } else {
          console.log('登录失败 ', err)
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .iconfont {
    font-size: 37px;
  }
  .btn-wrap{
    padding:53px 28px;
    .van-button--info {
        background-color: #6db4fb;
        border: none;
      }
  }
  .btn-code{
    width: 152px;
    // height: 46px;
    padding:0;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }
}
</style>
