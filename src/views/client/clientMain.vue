<template>
<div>
<Menu mode="horizontal" theme="primary" active-name="1">
        <Submenu name="3">
            <template slot="title">              
                {{user.userName}}
            </template>
                <MenuItem name="3-4" @click.native="userhomePage">个人中心</MenuItem>
                <MenuItem name="3-5" @click.native="userLogout">退出登录</MenuItem>
                 <MenuItem name="3-1" v-if="user.userMember">会员</MenuItem>
                <MenuItem name="3-2" v-if="!user.userMember">非会员</MenuItem>
        </Submenu>       
        <MenuItem name="2">
        <MenuItem  @click.native="uploadPage" name="2-4">上传资料</MenuItem>
        </MenuItem>       
        <MenuItem name="4">
            <MenuItem  @click.native="homePage" name="4-1">首页</MenuItem>
        </MenuItem>
         <MenuItem name="5">
            <MenuItem  @click.native="memeberPage" name="5-1">会员区</MenuItem>
        </MenuItem>
    </Menu>
    <router-view>
        
    </router-view>
    <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return{
            user:this.$store.state.user
        }
    },
    mounted(){
        let user=this.$store.state.user
        if(!this.$store.state.user.userEmail){
            this.loginByToken().then(res=>{
                this.user=res
            })
        }  
    },
    methods:{
        ...mapActions(['loginByToken','logout']),
        userLogout(){
            this.logout().then(res=>{
                this.$router.push({name:'login'})
            },err=>{
                this.$Message.error('退出失败')
            })
        },
        uploadPage(){
            this.$router.push({name:'uploadpage'})
        },
        homePage(){
            this.$router.push({name:'blank'})
                    setTimeout(()=>{
                        this.$router.push({name:'clienthome'})
                    },3)  
        },
        userhomePage(){
             this.$router.push({name:'userhome'})
        },
        memeberPage(){
             this.$router.push({name:'memberhome'})
        }
    }
}
</script>
<style lang="less">
.layout-footer-center{
    text-align: center;
}
</style>

