<template>
  <div id="app">
    <header class="mint-header is-fixed">
      <div class="mint-header-button is-left"></div>
      <h1 class="mint-header-title">联通5G合伙人系统</h1>
      <div class="mint-header-button is-right"></div>
    </header>

    


    <el-image
            style="width: 100%; height: 200px"
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1464167789,2343558299&fm=11&gp=0.jpg"
            fit="fill">
    </el-image>
    <!-- <div id='indexx'>
                <router-link active-class="butt" class="butt" to="/application" >申请5G合伙人</router-link>
                <router-link class="butt" to="/user" >个人信息</router-link>
                
    </div>-->

    <div class="mint-tabbar is-fixed">
      <a class="mint-tab-item">
        <div class="mint-tab-item-icon ">
          <img src="" alt=""  class="iconfont  icon-iconfontgerenzhongxin">
        </div>
        <div class="mint-tab-item-label">
          <router-link class="routerlinkk" to="/application">申请5G合伙人</router-link>
        </div>
      </a>

      <a class="mint-tab-item">
        <div class="mint-tab-item-icon">
          <img src="" alt=""   class="iconfont  icon-zhuce" />
        </div>
        <div class="mint-tab-item-label">
          <router-link class="routerlinkk" to="/user">个人信息</router-link>
        </div>
      </a>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#top {
  margin-top: 15px;
}
#banner {
  background-size: contain;
  width: 100px;
  height: auto;
}
#indexx {
  display: flex;
  flex: 50%;
}
.routerlinkk {
  text-decoration: none;
  color: cadetblue;
}
</style>
