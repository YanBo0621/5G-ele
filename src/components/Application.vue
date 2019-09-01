<template>
    <div>
         <div class="formtop" >
                <el-form ref="form" :model="form" label-width="100px" v-if="!hide">
                        <el-form-item label="姓名" prop="name">
                        <el-input v-model="form.name">
                    </el-input>
                </el-form-item>
                    <el-form-item label="电话号码" prop="phone">
                        <el-input v-model="form.phone">
                    </el-input>
                </el-form-item>
  
            <el-form-item label="身份证号" prop="id">
                <el-input v-model="form.id">
                    </el-input>
                </el-form-item>
            <el-form-item label="推荐人手机号" prop="RpNumber">
                <el-input v-model="form.RpNumber">
                    </el-input>
            </el-form-item>
            <el-form-item label="选择套餐" prop="resource">
                 <el-radio-group v-model="form.resource">
                    <el-radio value="1" label="套餐一"></el-radio>
                    <el-radio value="2" label="套餐二"></el-radio>
                    <el-radio value="3" label="套餐三"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">立即申请</el-button>
                <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
            </el-form>             
            </div>

            <!-- <div>
                <p class="textalart" v-if="hidd == 1">申请成功 如果想快速申请请加微信：12222222222</p>
                <p class="textalart" v-else-if="hidd == 2">申请失败 请重新尝试申请</p>
            </div> -->
            

            <router-view></router-view>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
            return {
                    form:{
                   id:"",
                   name:"",
                   RpNumber:"",
                   resource:"",
                   phone:""
               },
               hidd:0,
               hide:false,
               textphone:"13333333333",
               url:"http://localhost:3000",
               rules: {
                name: [
                     { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                    ],
                id: [
                     { required: true, message: '请输入身份证', trigger: 'blur' },
                        { min: 18, max: 18, message: '长度在 18数字', trigger: 'blur' }
                        ],
                    RpNumber: [
                     { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 2, max: 5, message: '长度在 2 到 5 个数字', trigger: 'blur' }
                        ],
            },
                }
            },
            prop:{hide:Boolean},
            
            methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                     if (valid) {
                         axios.post(this.url+"/application/partner",{
                             id:this.form.id,
                             name:this.form.name,
                             RpNumber:this.form.RpNumber,
                             type:this.form.resource,
                             phone:this.form.phone
                         })
                         .then((res)=>{
                             console.log(res);
                            if (res.status == 200) {
                                alert( `申请成功！如需要加速办理申请请联系微信：${this.textphone}`)
                                console.log(res);
                            }else if(res.data.code == 1) {
                                alert("申请失败！请重新申请！")
                            }
                            
                            // //  this.hidd=1
                            // //  setTimeout(()=>{
                            // //      this.hidd=0
                            // //     },2000)
                            //  console.log(res);
                         })
                         .catch((err)=>{
                             alert("申请失败！服务器故障，请重新稍后重新申请！")
                            //  this.hidd=2
                            //  setTimeout(()=>{
                            //      this.hidd=0
                            //     },2000)
                            //  console.log(err);
                         })
                         
                         
                        // alert('submit!');
                 } else {
                    console.log('error submit!!');
                    return false;
                 }
            });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style scoped>

.textalart{
    text-align: center;
}
.formtop{
    font-size: 10px;
   margin-top: 20px;
   width: 80%
   
}
</style>>
    
