<template>

    <div>
        


       


        <div class="infoclass" style=" top: 20px">
               <div v-if="logining" style="margin-left: 10px">

                   
                <router-link class="mint-button mint-button--primary mint-button--small zz" to="/geren">个人信息</router-link>
               
               <router-link class="mint-button mint-button--primary mint-button--small zz" to="/yeji">个人业绩</router-link>
               
               <router-link class="mint-button mint-button--primary mint-button--small zz" to="/zonglan">业绩总览</router-link>
              
               <router-link class="mint-button mint-button--primary mint-button--small zz" to="/tixian">提现</router-link>

               <!-- <el-row>
                    <el-button v-if="logining"  class="bottomButton" type="primary" round>退出登录</el-button>
                </el-row> -->
                <input type="button" class="mint-button mint-button--primary mint-button--small zz" value="退出" @click="nologin">
                
                
                <router-view></router-view>
                    </div>
                    
                <div v-else-if="!logining" style=" text-align; center;margin-top:30px;width:90%">
                <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="电话号码" prop="phone">
                        <el-input v-model="form.phone">
                    </el-input>
                </el-form-item>
  
            <el-form-item label="身份证号" prop="id">
                <el-input v-model="form.id">
                    </el-input>
                </el-form-item>
          
           
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">查看</el-button>
                <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
  
  
            </el-form>
                </div>
            </div>
        </div>
</template>


<script>
import axios from "axios"
export default {
    
    data() {
            return {
                logining:false,
                form:{
                    phone:"",
                    id:""
                    },
                    login:{
                    phone:"",
                    id:""
                },
                ligininfo:{
                    Onelevel:[],
                    lastlevel:[],
                    phone:'',
                    name:'',
                    id:'',
                    type:'',
                    RpNumber:'',
                    banknumber:'',
                    balance:'',
                    exchange:'',
                    suncash:'',
                    date:''
                },
                rules: {
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '长度在11个字符', trigger: 'blur' }
          ],
          id: [
           { required: true, message: '请输入身份证', trigger: 'blur' },
            { min: 18, max: 18, message: '长度在18个字符', trigger: 'blur' }
          ],
         
        },
      
                 screenWidth: document.body.clientHeight, // 屏幕尺寸
                 url:"http://localhost:3000"
                }              
            },
    prop:{
        
                phone:"",
                id:""
            
        },
        
       
    methods: {
       
setCookie(name, value, seconds) {
    seconds = seconds || 0;   //seconds有值就直接赋值，没有为0
    var expires = "";
    if (seconds != 0) {      //设置cookie生存时间
        var date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + escape(value) + expires + "; path=/";   //转码并赋值

},
getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            var c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end)).replace(/\"/g, "");
        }
    }
    return null;
},
clearCookie(name) {
  
    this.setCookie(name, "", -1);
},
nologin(){
    this.clearCookie("id")
this.clearCookie("phone")
this.logining=false
alert("退出成功!")

},
            submitForm(formName) {
                
                this.$refs[formName].validate((valid) => {
                    
                     if (valid) {
                         axios.post(this.url+"/individual/login",{
                             id:this.form.id,
                             phone:this.form.phone
                         })
                         .then((res)=>{
                             console.log(res);
                            if (res.data == "请输入正确的登录信息") {
                                alert("请输入正确的登录信息")
                            }else{
                            this.setCookie('id',res.data.id,3600)
                             this.setCookie('phone',res.data.phone,3600)
                             res.data.
                             alert("登陆成功!")
                             this.logining=true
                           
                             console.log(res.data);
                            }
                             
                         })
                         .catch((err)=>{
                             alert("请输入正确的电话与身份证号")
                             console.log(err);
                         })
                         
                        // alert('submit!');
                 } else {
                    // console.log('error submit!!');
                    return false;
                 }
            });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }, 
            
}
</script>

<style  scoped>
.bottomButton{
    position: absolute;
   
    right: 20px
}
.zz{
    text-decoration:none;
    padding-top: 5px;
 
   
}
</style>