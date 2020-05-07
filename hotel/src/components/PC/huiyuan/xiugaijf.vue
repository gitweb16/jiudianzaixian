<template>
  <div class="diao">
    <el-row>
      <el-col :span="6">
        <div class="tupian">
          <img src="../../../images/kan.gif" />
        </div>
      </el-col>
      <el-col :span="15">
        <div class="tongx">
          <p class="zhou">
            请输入要调整得积分
            <span style="margin-left:380px;">X</span>
          </p>
          <p style="margin-left:30px;">
            *积分:
            <input
              type="text"
              placeholder="请输入要调整得积分"
              style="width:350px;height:25px;margin-left:0px;"
            />
          </p>
          <p style="margin-left:80px;">
            <button style="background:green;color:white;">增加</button>
            <button>减少</button>
          </p>
          <p  style="margin-left:30px;">
             备注：<input type="text" placeholder="请输入备注" style="height:66px;width:350px;">
          </p>
          <p class="shanghua">
             <button style="margin-top:20px;margin-left:230px;">取消</button>
            <button style="margin-left:5px; background: orange;color:white;">保存</button>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "xiugaijf",
  data() {
    return {
      input: ""
    };
  }
};
</script>
<style scoped>
.diao {
  height: 700px;
  width: 100%;
  background: #a1a1a1;
}
.tupian {
  margin-left: 200px;
  margin-top: 100px;

}
.tongx {
  border: 1px solid white;
  margin-top: 100px;
  width: 546px;
  height: 431px;
  background: white;
 
}
.zhou {
  border-bottom: 1px solid gray;
}
.shanghua{
  border-top: 1px solid gray;
  margin-top:125px;
 
}

</style>