<template>
<div class="user-div">
  <Button type="warning" @click="formShowButton" v-if="!formShow" class='user-button'>修改用户信息</Button>
  <br>
   <Button type="warning" class='user-button'>我上传的资源</Button>
   <br>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" v-if="formShow">
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="请输入用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="请输入密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit()">确认修改</Button>
        </FormItem>
    </Form>
</div>    
</template>
<script>
import { mapActions } from 'vuex';
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            userobj:'',
            formShow:false,
             formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                    ]
                }
        }
    },
    methods:{
        ...mapActions(['updateUserOne']),
        formShowButton(){
            this.formShow=true
        },
         handleSubmit() {
           let data={userName:this.formInline.user,userPwd:this.formInline.password,userId:this.userobj.userId} 
            this.updateUserOne(data).then(res=>{
                if(res){
                    this.$Message.success('修改成功')
                    this.$router.push({name:'blank'})
                    setTimeout(()=>{
                        this.$router.push({name:'clienthome'})
                    },3)                
                }
            })
         }
    },
    mounted(){
        let userJSON=localStorage.getItem('user')
        this.userobj=JSON.parse(userJSON)
    }
}
</script>
<style lang="less">
.user-div{
    margin:50px 50px 50px 50px
}
.user-button{
    margin:0px 20px 50px 20px
}
</style>

