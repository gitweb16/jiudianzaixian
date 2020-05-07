<template>
  <div id="app" style="padding-top:100px;">
    <div class="nicheng">
      <span>
        <img src="../../../images/liebiao6.gif" />
      </span>
      <div class="nicheng1">
        <div class="jk">
          <span>充值</span>
          <span style="margin-left:451px;">
            <i class="el-icon-close"></i>
          </span>
        </div>
        <div class="shuru">
          <span class="aa" style="margin-left:150px;margin-top:30px;color:red;">请输入充值金额</span>
        </div>
        <div class="gju">
          <ul>
            <li>根据您设置的储值计算规则计算出此次充值有如下赠送余额</li>
            <li>
              赠送余额：
              <span>500元</span>赠送积分，
              <span>10积分</span>
            </li>
            <li>
              赠送优惠卷:
              <span>10元优惠卷x1,20元优惠卷x1,30优惠卷</span>
            </li>
          </ul>
        </div>
        <div class="mingxi">
          <p style="margin-top:4px;">支付明细</p>
        </div>
        <div class="xiafang">
          <p>请在下方选择支付方式</p>
        </div>
        <div class="zhifu">
          <div class="ff">
            <span>支付方式</span>
          </div>
          <!-- <p style="margin-left:10px;width:20px;float: left;"><img src="../../images/liebiao7.gif"><img src="../../images/liebiao8.gif"><img src="../../images/liebiao9.gif"></p> -->
          <span style="margin-left:40px;margin-top:10px;">
            <img src="../../../images/liebiao7.gif" />
          </span>
          <span style="margin-left:40px;margin-top:10px;">
            <img src="../../../images/liebiao8.gif" />
          </span>
          <span style="margin-left:40px;margin-top:10px;">
            <img src="../../../images/liebiao9.gif" />
          </span>
        </div>
        <div class="beizhu">
          备注
          <el-input type="text" placeholder="请输入内容" v-model="text" maxlength="10" show-word-limit></el-input>
        </div>
        <el-row>
          <span style="margin-left:100px;margin-top:20px;">
            <el-button>默认按钮</el-button>
          </span>
          <span style="margin-left:140px;margin-top:20px;">
            <el-button type="warning">警告按钮</el-button>
          </span>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "chongzhi",
  data() {
    return {
      text: ""
    };
  }
};
</script>
<style scoped>
#app {
  width: 100%;
  height: 700px;
  background: #dcdcdc;
}
.nicheng {
  width: 600px;
  height: 497px;
  margin-left: 166px;
}
.nicheng1 {
  border: 1px solid royalblue;
  width: 480px;
  margin-left: 119px;
  height: 696px;
  margin-top: -142px;
}
.jk {
  height: 40px;
  background: white;
}
.jk > span:first-of-type {
  display: block;
  margin-left: 13px;
}
.shuru {
  width: 440px;
  height: 30px;
  margin-left: 10px;
  border: 1px solid red;
  margin-top: 10px;
}
.gju {
  height: 70px;
}
.gju li {
  display: block;
}
.mingxi {
  border: 1px solid red;
  width: 465px;
  height: 30px;
  margin-left: 6px;
  margin-top: 10px;
  background: white;
}
.xiafang {
  width: 465px;
  height: 80px;
  margin-left: 6px;
  border: 1px solid red;
  background: white;
}
.zhifu {
  width: 465px;
  height: 140px;
  margin-left: 6px;
  margin-top: 8px;
  border: 1px solid red;
  background: white;
}
.ff {
  border: 1px solid rebeccapurple;
  height: 30px;
}
.beizhu {
  border: 1px solid black;
  height: 110px;
  width: 465px;
  margin-left: 6px;
  margin-top: 10px;
  background: white;
}
</style>