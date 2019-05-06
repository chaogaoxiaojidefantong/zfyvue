<template>
<div class="middle">
 <Card class='card1' :key="stu.stuId">
     <p slot="title">{{stu.stuName}}</p>
    <a :href="stu.stuUrl" target="_blank" v-if="(!stu.stuMember)||(stu.stuMember&&user.userMember)">资源下载</a>
    <p>标签:{{stu.stuDes}}</p>   
            <p v-if="stu.stuMember" slot="extra">会员</p> 
            <p v-if="!stu.stuMember" slot="extra">非会员</p>        
     </Card>

</div>    
</template>
<script>
import {selectOneStu} from '@/api/api.js'
export default {
  data(){
      return{
          stuId:this.$route.query.stuId,
          stu:'',
          user:'',
      }
  },
  mounted(){
        this.user=JSON.parse(localStorage.getItem('user'))     
      let data={stuId:parseInt(this.stuId)}
      selectOneStu(data).then(res=>{
          this.stu=res.data.data
      },err=>{

      })
  } 
}
</script>
