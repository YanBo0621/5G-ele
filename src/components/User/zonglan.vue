<template>
   <div class="userclass">
       <mt-cell title="业绩总览"></mt-cell>
        <mt-cell title="  推广总利润" ></mt-cell>
        <mt-cell title="直推利润" value="直推利润">{{zonglan.zhitui}}</mt-cell>
        <mt-cell title="二级利润" value="二级利润">{{zonglan.erji}}</mt-cell>
        <mt-cell title="开卡奖励" value="开卡奖励">{{zonglan.kaika}}</mt-cell>
        

                <!-- <h1>业绩总览</h1> 
                <h2>推广总利润:</h2>
                <h2>直推利润:{{zonglan.zhitui}}</h2>
                <h2>二级利润:{{zonglan.erji}}</h2>
                <h2>开卡奖励:</h2>
                <h2 v-for="(item,index) in zonglan.kaika" :key="index">
                        <h3>{{item}}</h3>
                    </h2> -->
                   
                <el-row>
                    <el-button type="primary" @click="back">返回</el-button>
                </el-row>
            </div>
</template>

<script>
export default {
    data() {
            return {
                zonglan:{
                    zhitui:5555,
                    erji:555555,
                    kaika:7777,
                    
                }
            }
        },
        methods: {
            back(){
                window.history.go(-1)
            }
        },
}
</script>

<style  scoped>

</style>