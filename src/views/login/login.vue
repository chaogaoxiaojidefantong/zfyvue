<template>
  <div class="login">
 <Card class='card'>
        <p slot="title">
            欢迎登录
        </p>
        <a href="#" slot="extra" @click="registPage">
            <Icon type="ios-loop-strong"></Icon>
           注册
        </a>
         <Divider type="vertical" slot="extra" size='default'/>
          <a slot="extra" href='#' @click="codeForm" v-if='loginByPwd'>
            验证码登录
        </a>
        <a slot="extra" href='#' @click="codeForm" v-if='!loginByPwd'>
            密码登录
        </a>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" v-if="loginByPwd">
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="email">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit()">登录</Button>
        </FormItem>
    </Form>     
    </Form>
     <Form ref="formInline" :model="formInline" :rules="ruleInline" v-if="!loginByPwd">
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="email">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="验证码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
           <Button type="primary" class='form-button' @click="sendCode" ref='sendCodeButton'>发送验证码</Button>
            <Button type="primary" @click="handleSubmit()">登录</Button>
        </FormItem>
    </Form>     
    </Card>
</div> 
</template>
<script>
import { mapActions } from 'vuex';
import {emailCheck} from '@/api/api.js';
export default {
    data(){
      return{
        loginByPwd:true,
        formInline: {
                    user: '',
                    password: ''
                },
                 ruleInline: {
                    user: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    password: [
                        { required: false, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 1, message: 'The password length cannot be less than 1 bits', trigger: 'blur' }
                    ]
                }

      }
    },
    methods:{
      ...mapActions(['login']),
      handleSubmit() {
              let data=''
              this.loginByPwd?data={userEmail:this.formInline.user,userPwd:this.formInline.password}:data={userEmail:this.formInline.user,verifyCode:this.formInline.password}
              this.login(data).then(user=>{
                  if(!user){
                    this.$Message.error('登录错误')
                    return
                  }
                  if(user.userStatus==2){
                    this.$router.push({name:'clienthome'})
                  }
                  if(user.userStatus==1){
                    this.$router.push({name:'adminMain'})
                  }
              },err=>{
                 this.$Message.error('网络错误')
              })
            },
            //切换表单
            codeForm(){
              this.loginByPwd=!this.loginByPwd
            },
            //发送验证码
            sendCode(){
              let email=this.formInline.user
              if(!email){
                this.$Message.error('先输入邮箱哦')
                return
              }
              let data={userEmail:email}
              emailCheck(data).then(res=>{
                if(res.data.status==200){
                  this.$Message.success('发送验证码成功')
                }
              },err=>{
                this.$Message.error('网络错误')
              })
            },
            registPage(){
              this.$router.push({name:'regist'})
            }
      
    }
}
</script>
<style lang="less">
 .login{
    background-image: url('../../assets/1.jpg');
    width: 100%;
    height: 100%;
   .card{
     width:300px;
     display: inline-block;
     margin:200px 10px 0px 900px
   }
   .form-button{
     margin-right:10px
   }
 }
</style>
