<template>
 <div class="middle">
<template v-for='stu in stuMany'>
 <Card class='card1' :key="stu.stuId">
     <p slot="title">{{stu.stuName}}</p>
    <a :href="stu.stuUrl" target="_blank" v-if="(!stu.stuMember)||(stu.stuMember&&user.userMember)">资源下载</a>
    <p>标签:{{stu.stuDes}}</p>   
             <a href='#'>评价</a>
            <p  slot="extra">会员</p>       
     </Card>   
</template>
</div>   
</template>
<script>
import {selectManyStu} from '@/api/api.js'
export default {
    data(){
        return{
            stuMany:[],
            user:''
        }
    },
    methods:{

    },
    mounted(){
        this.user=JSON.parse(localStorage.getItem('user'))
        let data={stuMember:true}
        selectManyStu(data).then(res=>{
            this.stuMany=res.data.data
        })
    }
}
</script>
