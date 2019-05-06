<template>
<div class='middle'>
 <Input search enter-button placeholder="输入搜索文件名"  class="client-search" @on-search='search'/>
<template v-for="type in typeList" >
<div :key="type.typeId" v-if="!selectShow">
<p class='type-title'>{{type.typeName}}</p>
<template v-for="stu in type.stuList">
<Card class='card1' :key="stu.stuId">
   <p slot="title">{{stu.stuName}}</p>
    <a :href="stu.stuUrl" target="_blank" v-if="(!stu.stuMember)||(stu.stuMember&&user.userMember)">资源下载</a>
    <p>标签:{{stu.stuDes}}</p>   
             <a href='#' @click="commentPage(stu.stuId)">评价</a>
            <p v-if="stu.stuMember" slot="extra">会员</p> 
            <p v-if="!stu.stuMember" slot="extra">非会员</p>                  
            </Card>
</template>
<hr>
</div>
</template>
<div v-if='selectShow'>
<template v-for='stu in stuList'>
 <Card class='card1' :key="stu.stuId">
     <p slot="title">{{stu.stuName}}</p>
    <a :href="stu.stuUrl" target="_blank" v-if="(!stu.stuMember)||(stu.stuMember&&user.userMember)">资源下载</a>
    <p>标签:{{stu.stuDes}}</p>   
             <a href='#'  @click="commentPage(stu.stuId)">评价</a>
            <p v-if="stu.stuMember" slot="extra">会员</p> 
            <p v-if="!stu.stuMember" slot="extra">非会员</p>        
     </Card>   
</template>
</div>
</div>
</template>
<script>
import {selectManyStuType,selectManyAndStu,selectByName} from '@/api/api.js'
export default {
   data(){
       return{
           typeList:[],
           user:'',
           selectShow:false,
           stuList:[]
       }
   },
   methods:{
       search(val){
           if(!val){
               this.$Message.error('请先输入搜索内容')
               return
           }
           let data={stuName:val}
           selectByName(data).then(res=>{
               this.stuList=res.data.data
               this.selectShow=true
           },err=>{

           })
       },
       commentPage(stuId){
           debugger
           this.$router.push({name:'commentpage',query:{stuId:stuId}})
       }
   },
   mounted(){
       this.user=JSON.parse(localStorage.getItem('user'))
       selectManyAndStu().then(res=>{
           if(res.data.status==200){
              this.typeList=res.data.data
           }
       },err=>{

       })
   }
}
</script>
<style lang="less">
.middle{
    margin:0px 50px 0px 50px !important
}
.type-title{
    font-size: 50px;
    color: #464c5b
}
.card1{
    width:200px;
    margin:20px 10px 20px 10px;
    display: inline-block !important;
   
}
.card-des{
    display:block;
    width:80px;
}
.client-search{
    width:300px;
    margin:40px 0px 20px 1000px;
}
</style>
