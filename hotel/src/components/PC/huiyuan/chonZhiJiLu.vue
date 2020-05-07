<template>
	<div class="yunxing" style="padding-top:130px;">
		<div class="chakan">
			<div class="zhuandao">
				<div class="block">
					<span class="demonstration"></span>
					<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
					<el-select v-model="value" placeholder="请选择" style="margin-left:20px;width:140px;">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>

					<el-input placeholder="请输入内容" v-model="input3" class="input-with-select" style="width:366px;margin-left:20px;">
						<el-select v-model="select" slot="prepend" placeholder="请选择" style="width:100px;">
							<el-option label="餐厅名" value="1"></el-option>
							<el-option label="订单号" value="2"></el-option>
							<el-option label="用户电话" value="3"></el-option>
						</el-select>
					</el-input>
					<el-tag type="warning" style="margin-left:100px;">查询</el-tag>
					<el-tag type="danger" style="margin-left:10px;">重置</el-tag>
				</div>
			</div>
			<div class="zhangsan">
				<ul class="zhangsan_1">
					<li style="width:230px;background:red;">用户信息</li>
					<li style="width:140px;background:pink;">充值金额</li>
					<li style="width:140px;background:aqua;">充值类型</li>
					<li style="width:130px;background:olive;">操作元</li>
					<li style="width:200px;background:orange;">操作</li>
				</ul>
			</div>
			<div class="wenjian">
				cc
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "chonZhiJiLu",
		data() {
			return {
				value1: "",
				options: [{
						value: "选项1",
						label: "黄金糕"
					},
					{
						value: "选项2",
						label: "双皮奶"
					},
					{
						value: "选项3",
						label: "蚵仔煎"
					},
					{
						value: "选项4",
						label: "龙须面"
					},
					{
						value: "选项5",
						label: "北京烤鸭"
					}
				],
				value: "",
				input1: "",
				input2: "",
				input3: "",
				select: ""
			};
		}
	};
</script>
<style scoped>
	.yunxing {
		height: 845px;
		width: 100%;
		background: #f2f2f2;

	}

	.chakan {
		height: 642px;
		width: 1138px;
		border: 1px solid red;
		margin-left: 130px;
	}

	.block {
		margin-left: 20px;
		margin-top: 10px;
	}

	.zhangsan {
		margin-top: 15px;
		width: 1096px;
		margin-left: 20px;
		border: 1px solid red;
		height: 45px;
		text-align: center;
		background: #f2f2f2;
	}

	.zhangsan_1 li {
		float: left;
		display: block;
		padding-left: 36px;
	}

	.wenjian {
		border: 1px solid gold;
		width: 1096px;
		margin-left: 20px;
	}
</style>
