<template>
<div>
     <Card class='card'>
        <p slot="title">
            上传
        </p>
         <Form ref="formInline" :model="formInline"  >
        <FormItem >
            <Input type="text" v-model="formInline.stuDes" placeholder="资源描述">               
            </Input>
        </FormItem>
         <FormItem >
            <Input type="text" v-model="formInline.stuName" placeholder="资源名">               
            </Input>
        </FormItem>
        <FormItem >
        <Select v-model="stuTypeId" style="width:200px">
        <Option v-for="item in stuTypeList" :value="item.typeId" :key="item.typeId">{{ item.typeName }}</Option>
    </Select>
        </FormItem>
         <FormItem >
             <Upload :action='actionUrl' :data='uploadData' :on-success='uploadHandle' class='multipartFile' :show-upload-list='false' >
            <Button icon="ios-cloud-upload-outline">上传资料</Button>
            </Upload>
             </FormItem>  
    </Form>
     </Card>   

</div> 
</template>
<script>
import {selectManyStuType} from '@/api/api.js'
export default {
    data(){
        return{
            stuTypeId:'',
            actionUrl:'http://www.managePlatform.com/api/adminServiceZuul/Stu/stuUpload',
             formInline: {
                    stuDes: '',
                    stuName:'',
                },
                stuTypeList:'',
                uploadData:{}
        }
    },
    methods:{
        uploadHandle(res,file){
            this.stuTypeId='',
            this.formInline.stuDes=''
            if(res.data){
                this.$Message.success('上传成功')
            }        
        },
        getUploadData(){
            this.uploadData={stuDes:this.formInline.stuDes,typeId:this.stuTypeId}
        }
    },
    mounted(){
        selectManyStuType().then(res=>{
            if(res.data.status==200){
                this.stuTypeList=res.data.data
            }
        })
    },
    watch:{
        stuTypeId:function(newVal){
            this.uploadData={stuDes:this.formInline.stuDes,typeId:newVal,stuName:this.formInline.stuName}
        }
    }
    
}
</script>
<style lang="less">
 .card{
     width:300px;
     display: inline-block;
     margin:200px 10px 200px 900px
   }
</style>
