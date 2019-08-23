<template>
<div id="navbar">
        <div class="container">
            <div class="contain">
              <div class="companyicon">
                <img src="@/assets/LOGO.png" alt="国研">
              </div>
              <div class="companynavbar">
                <div @click="changepage('/')" :class="currentTab=='/'?'bordertopactive':'bordertop'">
                  <a href="#">首页</a>
                </div>
                <div @click="changepage('open')" :class="currentTab=='open'?'bordertopactive':'bordertop'">
                <a href="#open">技术开发</a>
                </div>
                <div @click="changepage('yewu')" :class="currentTab=='yewu'?'bordertopactive':'bordertop'">
                <a href="#yewu">业务流程</a>
                </div>
                <div @click="changepage('anli')" :class="currentTab=='anli'?'bordertopactive':'bordertop'">
                <a href="#anli">成功案例</a>
                </div>
                <div @click="changepage('zixun')" :class="currentTab=='zixun'?'bordertopactive':'bordertop'">
                <a href="#zixun">咨询专家</a>
                </div>
                <div @click="changepage('peixun')" :class="currentTab=='peixun'?'bordertopactive':'bordertop'">
                <a href="#peixun">定制培训</a>
                </div>
                <div @click="changepage('lianxi')" :class="currentTab=='lianxi'?'bordertopactive':'bordertop'">
                <a href="#lianxi">联系我们</a>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
  data () {
    return {
      currentTab: '/'
    }
  },
  created() {
    
  },
  methods: {
    changepage (text) {
      console.log(text);
      this.currentTab = text;
    },
  },
}
</script>

<style>
* {
  margin: 0;
  height: 0;
}
.container {
  width: 100%;
  height: 5.5rem;
  background-color: rgba(255, 255, 255);
  position: absolute;
  top: 0;
  z-index: 9999;
}
.contain {
  width: 80%;
  height: 5.5rem;
  margin: 0 auto;
  display: flex;
}
.companyicon {
  line-height: 8.5rem;
  height: 5.5rem;
  flex: 1;
  text-align: center;
}
.companyicon img {
  height: 60px;
  flex: 1;
  width: auto;
}
.companynavbar {
  height: 5.5rem;
  flex: 4;
  box-sizing: border-box;
  padding-left: 12%;
  padding-right: 12%;
  display: flex;
  justify-content: space-between;
  color: #914449;
}
.companynavbar div {
  height: 5.5rem;
  line-height: 5.5rem;
  text-align: center;
  width: 5.5rem;
}
.companynavbar div router-link,.companynavbar div a{
  height: 5.5rem;
  line-height: 5.5rem;
  text-align: center;
  width: 5.5rem;
  display: inline-block;
  color: #914449;
  text-decoration: none;
  font-weight: 700
}
.bordertopactive {
  border-top: 0.6rem solid #882f35;
  box-sizing: border-box;
}
.bordertop {
  border-top: 0.6rem solid rgba(255, 255, 255, 0);
  box-sizing: border-box;
}
</style>
