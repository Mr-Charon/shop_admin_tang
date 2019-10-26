<template>
  <div class="login">
    <!-- 我是login -->
   <el-form ref="form" :model="form" :rules="rules" label-width="80px">
     <img class="img" src="../assets/login.jpg" alt="">
  <el-form-item label="用户名" prop='username'>
    <el-input v-model="form.username" placeholder='请输入用户名' ></el-input>
  </el-form-item>
    <el-form-item label="密码" prop='password'>
    <el-input v-model="form.password" placeholder='请输入密码' type='password'></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click='login'>登录</el-button>
    <el-button class="resetBtn" @click="reset">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        usernsme: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: ['blur', 'change'] },
          { min: 3, max: 12, message: '用户名长度在 3 到 12 个字符', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] },
          { min: 3, max: 12, message: '密码长度在 3 到 12 个字符', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    reset () {
      this.$refs.form.resetFields()
    },
    login () {
      this.$refs.form.validate((isvalid, obj) => {
        if (!isvalid) return
        console.log('发送ajax')
        axios.post('http://localhost:8888/api/private/v1/login', this.form).then(res => {
          const { meta, data } = res.data
          if (meta.status === 200) {
            // 登录成功储存token
            localStorage.setItem('token', data.token)
            this.$message({
              type: 'success',
              message: meta.msg,
              duration: 1000
            })
            this.$router.push({ name: 'index' })
          } else {
            this.$message.error(meta.msg)
          }
        })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
 .login{
   width: 100%;
   height: 100%;
   background-color: #7f9b9b;
   overflow: hidden;
   .el-form{
    width: 400px;
    height: 160px;
    padding: 20px;
    padding-top: 80px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 150px;
    position: relative;
    border-radius: 20px;
  .img{
        width: 120px;
        height: 120px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -60px;
        border: 5px solid #fff;
        border-radius: 50%
    }
    .resetBtn{
      margin-left: 80px;
    }
   }
 }

</style>
