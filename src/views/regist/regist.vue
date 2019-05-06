<template>
<div class='regist'>
<Card class='card'>
  <p slot="title">
   欢迎注册
  </p>
   <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="email">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
           <FormItem >
            <Input type="text" v-model="formInline.userName" placeholder="userName" @click.native="check">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>       
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit()">注册</Button>
        </FormItem>
    </Form>    
</Card>
</div>
</template>
<script>
import {emailVerify,registTo} from '@/api/api.js'
export default {
   data(){
       return{
           //邮箱没被注册则为true,否则为false
           emailOk:true,
            formInline: {
                    user: '',
                    password: '',
                    userName:'',
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the email', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 3, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
       }
   },
   methods:{
       handleSubmit(){
           let data={userEmail:this.formInline.user,userPwd:this.formInline.password,userName:this.formInline.userName,userStatus:2}
            registTo(data).then(res=>{
                if(res.data.status==200){
                    this.$Message.success('注册成功')
                    this.$router.push({name:'login'})
                }else{
                    this.$Message.error('注册失败')
                }
            },err=>{
                 this.$Message.error('网络错误')
            })
       },
       check(){
           let data={userEmail:this.formInline.user}           
           emailVerify(data).then(res=>{
               if(res.data.status==200){
                  this.emailOk=true           
               }else{
                   this.emailOk=false
                   this.$Message.error('邮箱已被注册')
                   this.formInline.user=''
               }
           },err=>{
               this.$Message.error('网络错误')
           })
       }
   }
}
</script>
<style lang="less">
 .regist{
    background-image: url('../../assets/2.png');
    width: 100%;
    height: 100%;
 }
  .card{
     width:300px;
     display: inline-block;
     margin:200px 10px 0px 900px
   }
</style>

