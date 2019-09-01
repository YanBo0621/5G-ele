<template>
    <div>
        <div class="userclass" >

       
        

                <h1>个人业绩</h1> 
                <h2>直推联系人:</h2>
                <el-row>
                    <el-button type="primary" size="mini" v-if="!hidezhitui" @click="nohide">点击隐藏
                        </el-button>
                </el-row>
                <div v-if="!hidezhitui">
                <strong v-for="(item,index) in yeji.zhitui" :key="index" style="display: block"  >
                   <p>姓名:{{item.name}}</p>
                    <p>手机:{{item.phone}}</p>
                    <p>套餐:{{item.taocan}}</p>
                    <p>注册时间:{{item.zhuceshijian}}</p>

                    <br>
                </strong>
                </div>
                <el-row>
                    <el-button type="primary" size="mini" v-if="hidezhitui" @click="nohide">点击展开
                        </el-button>
                </el-row>
                <h2>二级联系人:</h2>
                <el-row>
                    <el-button type="primary" size="mini" v-if="!hideerji" @click="nohide1">点击隐藏
                        </el-button>
                </el-row>
                <div v-if="!hideerji">
                
               </div>
                <div v-if="!hideerji">
                <strong v-for="(item,index1) in yeji.erji" :key="index1" style="display: block"  >
                   <p>姓名:{{item.name}}</p>
                    <p>手机:{{item.phone}}</p>
                    <p>套餐:{{item.taocan}}</p>
                    <p>注册时间:{{item.zhuceshijian}}</p>

                    <br>
                </strong>
                </div>
                <el-row>
                    <el-button type="primary" size="mini" v-if="hideerji" @click="nohide1">点击展开
                        </el-button>
                </el-row>
                <br>
                <el-row>
                    <el-button type="primary" @click="back">返回</el-button>
                </el-row>
            </div>
    </div>
</template>

<script>
export default {
    data() {
            return {
               data: [{
                label: '一级 1',
                    children: [{
                        label: `${1+1}`, 
                        },
                        {
                        label: '二级 1-1',  
                        },
                        {
                        label: '二级 1-1',  
                        }]
                    }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      ,
                hidezhitui:true,
                hideerji:true,
                yeji:{
                    zhitui:[
                        {"name":"haha","phone":12421421,"taocan":"套餐一","zhuceshijian":1111.11},
                        {"name":"haha","phone":12421421,"taocan":"套餐一","zhuceshijian":1111.11},
                        {"name":"haha","phone":12421421,"taocan":"套餐一","zhuceshijian":1111.11},
                        {"name":"haha","phone":12421421,"taocan":"套餐一","zhuceshijian":1111.11},
                        {"name":"haha","phone":12421421,"taocan":"套餐一","zhuceshijian":1111.11},
                       
                ],
                    erji:[
                        {"name":"haha","phone":12421421,"taocan":"套餐一","zhuceshijian":1111.11},
                        {"name":"haha","phone":12421421,"taocan":"套餐一","zhuceshijian":1111.11},
                        {"name":"haha","phone":12421421,"taocan":"套餐一","zhuceshijian":1111.11},
                        {"name":"haha","phone":12421421,"taocan":"套餐一","zhuceshijian":1111.11},
                        {"name":"haha","phone":12421421,"taocan":"套餐一","zhuceshijian":1111.11},
                       
                ],
                    phone:13333333333,
                    resource:"套餐一",
                    pank:123123212321321
                }
            }
        },
        methods: {
            back(){
                window.history.go(-1)
            },
            nohide(){
                this.hidezhitui=!this.hidezhitui
            },
            nohide1(){
                this.hideerji=!this.hideerji
            },
             handleNodeClick(data) {
                console.log(data);  
                }
    
        }
}
</script>

<style  scoped>

</style>