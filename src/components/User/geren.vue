<template>
    <div class="userclass" style="width:90%">
        <mt-cell title="个人信息"></mt-cell>
        <mt-cell title="姓名" value="说明文字">{{user.name}}</mt-cell>
        <mt-cell title="电话" value="说明文字">{{user.phone}}</mt-cell>
        <mt-cell title="套餐" value="说明文字">{{user.resource}}</mt-cell>
        <mt-cell title="银行卡" value="说明文字">{{user.pank}}</mt-cell>


                <!-- <h1>个人信息</h1> 
                <h2>姓名:{{user.name}}</h2>
                <h2>电话:{{user.phone}}</h2>
                <h2>套餐:{{user.resource}}</h2>
                <h2>银行卡:{{user.pank}}</h2> -->
                <el-row>
                    <el-button type="primary" @click="back">返回</el-button>
                </el-row>
            </div>
</template>

<script>
import axios from "axios"

export default {
    created:()=>{
        
  
        // axios.get(this.url+"/individual",{
        //     id:this.getCookie("id"),
        //     phone:this.getCookie("phone")
        // })
        // .then((res)=>{
        //     console.log(res);
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
    },
    data() {
            return {
                user:{
                    name:"李狗蛋",
                    phone:13333333333,
                    resource:"套餐一",
                    pank:123123212321321
                },
                 url:"http://localhost:3000"
            }
        },
        methods: {
            back(){
                window.history.go(-1)
            },
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
            return this.cookieToJson(unescape(document.cookie.substring(c_start, c_end)).replace(/\"/g, "")) 
        }
    }
    return null;
},
clearCookie(name) {
  
    this.setCookie(name, "", -1);
},
cookieToJson() {
    let cookieArr = document.cookie.split(";");
    let obj = {} 
    cookieArr.forEach((i) => {
        let arr = i.split("=");
        obj[arr[0]] =arr[1];
    });
    return obj
  }

        }
        
}

</script>


<style scoped>

</style>