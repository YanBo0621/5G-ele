<template>
    <div class="munclass">

        <mt-cell title="提现"></mt-cell>
        <mt-cell title="余额类型" ></mt-cell>
        <mt-cell title="可提现余额" value="可提现余额">{{mun.tixian}}</mt-cell>
        <mt-cell title="兑换礼品余额" value="兑换礼品余额">{{mun.lipin}}</mt-cell>
        <mt-cell title="兑换礼品" value="兑换礼品">{{mun.duihuan}}</mt-cell>
               
                <el-row>
                    <el-button type="primary" @click="back">余额提现</el-button>
                    <el-button type="primary" @click="back">礼品兑换</el-button>
                    <el-button type="primary" @click="back">返回</el-button>
                </el-row>
            </div>
</template>

<script>
export default {
    data() {
            return {
                mun:{
                    tixian:999,
                    lipin:999,
                    duihuan:"链接",
                }
            }
        },
        methods: {
            back(){
                window.history.go(-1)
            }
        }
}
</script>

<style scoped>

</style>