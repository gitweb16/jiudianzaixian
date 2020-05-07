<template>
  <div class="kongge">
    <el-row>
      <el-col :span="10">
        <div class="liu">
          <span style="margin-left:90px;">
            <img src="../../../images/liebiao6.gif" />
          </span>
          <div class="liu_1">
            <p style="margin-left:15px;margin-top:30px;">NO.600 1234 4356</p>
            <span>￥987.23</span>
            <span>￥1000.00</span>
            <span>100次</span>
            <span>当前余额</span>
            <span>累计余额</span>
            <span>累计充值</span>
          </div>
          <div class="dangqian">
            <p>
              <img src="../../../images/jifen.gif" />
            </p>
            <span>800</span>
            <span style="margin-left:100px;">2000</span>
            <br />
            <span>当前积分</span>
            <span style="margin-left:60px;">累计积分</span>
          </div>
          <div class="youhui">
            <p>
              <img src="../../../images/youhuijuan.gif" />
            </p>
            <span>10张</span>
            <span style="margin-left:25px;">0张</span>
            <span style="margin-left:25px;">1张</span>
            <br />
            <span>未使用</span>
            <span>已使用</span>
            <span>已过期</span>
          </div>
        </div>
      </el-col>

      <el-col :span="14">
        <div class="shiba">
          <i class="el-icon-close" style="margin-left:450px;margin-top:8px;"></i>
          <div class="pp">
            <el-tabs type="border-card" :tab-position="tabPosition" style="height:564px;">
              
              <el-tab-pane label="基本信息">
                <ul class="jiben">
                  <h2>基本信息</h2>
                  <li>姓名：张三</li>
                  <li>电话：152012010470</li>
                  <li>性别：男</li>
                  <li>生日：1984-09-28</li>
                </ul>
                  <el-button type="warning" style="margin-top:50px;margin-left:50px;">编辑</el-button>
              </el-tab-pane>

              <el-tab-pane label="交易明细">交易明细</el-tab-pane>
              <el-tab-pane label="余额明细">余额明细</el-tab-pane>
              <el-tab-pane label="积分明细">积分明细</el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "xiangxi",
  data() {
    return {
      tabPosition: "left"
    };
  }
};
</script>

<style scoped>
.kongge {
  width: 100%;
  height: 700px;
  background: pink;
}
.pp{
  height: 700px;
  margin-top: 10px;
}
.liu {
  background: #f9d237;
  height: 601px;
  width: 280px;
  margin-top: 30px;
  margin-left: 130px;
}
.shiba {
  background: white;
  height: 599px;
  width: 480px;
  margin-top: 30px;
  margin-left: 9px;
}
.liu_1 {
  width: 250px;
  height: 136px;
  margin-left: 10px;
  border: 1px solid white;
  border-radius: 25px;
  background: white;
}
.liu_1 span {
  padding-left: 15px;
}
.dangqian {
  border: 1px solid white;
  width: 250px;
  height: 110px;
  margin-left: 10px;
  border-radius: 17px;
  margin-top: 12px;
  background: white;
}
.dangqian span {
  padding-left: 25px;
}
.youhui {
  border: 1px solid white;
  height: 117px;
  width: 250px;
  margin-left: 10px;
  border-radius: 17px;
  margin-top: 12px;
  background: white;
}
.youhui span {
  padding-left: 25px;
}
.jiben li{
  display: block;
}
</style>