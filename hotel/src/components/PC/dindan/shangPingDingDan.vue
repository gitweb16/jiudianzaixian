<template>
	<div>
		<el-row>
			<el-button class="lu1" size="small">全部订单(1000)</el-button>
			<el-button class="lu" size="small">待付款<span id="span">(1000)</span></el-button>
			<el-button class="lu" size="small">待发货<span id="span">(1000)</span></el-button>
			<el-button class="lu" size="small">已发货<span id="span">(1000)</span></el-button>
			<el-button class="lu" size="small">已完成<span id="span">(1000)</span></el-button>
			<el-button class="lu" size="small">已关闭<span id="span">(1000)</span></el-button>
		</el-row>
		<div class="block">
			<el-date-picker size="small" v-model="value2" type="datetimerange" :picker-options="pickerOptions" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="left" class="wid">
			</el-date-picker>
		</div>
		<div class="xuanzekuang">
			<el-select v-model="value" placeholder="订单编号" class="xuanze" size="small">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-input size="small" v-model="input" placeholder="请输入搜索内容" class="width"></el-input>
			<el-button id="wei" size="small">查询</el-button>
		</div>
		<div class="biao">
			<el-table :data="tableData" border style="width: 97%" size='small' :header-cell-style="{background:'#fafafa',color:'#606266'}">
				<el-table-column prop="date" label="订单编号" width="130">
				</el-table-column>
				<el-table-column prop="time" label="提交时间" width="210">
				</el-table-column>
				<el-table-column prop="fangxing" label="订单金额">
				</el-table-column>
				<el-table-column prop="guke" label="用户信息" width="200">
				</el-table-column>
				<el-table-column prop="jinqian" label="支付方式">
				</el-table-column>
				<el-table-column prop="zhuangtai" label="订单状态">
				</el-table-column>
				<el-table-column prop="" label="操作" width="250">
					<template slot-scope="scope">
						<el-button type="text" size="small">查看订单</el-button>
                        <el-button type="text" size="small" @click="zhuizong">追踪订单</el-button>
						<el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index,tableData)">关闭订单</el-button>

					</template>
				</el-table-column>
			</el-table>
			
		</div>
		<div class="fenye">
			<div class="block">
				<el-pagination background :current-page.sync="currentPage1" :page-sizes="[100, 200, 300, 400]" layout="total, sizes" :total="400">
				</el-pagination>
			</div>
			<div class="mar">
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="100" layout="prev, pager, next,sizes,jumper" :total="400">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条记录`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},

			deleteRow(index, rows){
				this.$prompt('*操作备注', '关闭订单', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				}).then(({
					value
				}) => {
					this.$message({
						type: 'success',
						message: '你的订单备注是: ' + value
					});
					rows.splice(index,1);
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消输入'
					});
				});
			},
			zhuizong() {
				this.$confirm('订单追踪成功', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '追踪成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '追踪成功'
					});
				});
			},

			quedingruzhu() {
				this.$confirm('点击确定入住后,此订单将变更为已完成,之后不可以改变状态', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '入住成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已入住成功'
					});
				});
			}
		},
		name: 'shangpingdingdan',
		data() {
			return {
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4,
				options: [{
					value: '选项1',
					label: '订单编号'
				}, {
					value: '选项2',
					label: '收货人姓名'
				}, {
					value: '选项3',
					label: '收货人电话'
				}, {
					value: '选项3',
					label: '商品货号'
				}],
				tableData: [{
					date: '11111',
					time: '2016-05-02',
					fangxing: '$200',
					guke: '张三123',
					jinqian: '未支付',
					zhuangtai: '待确定',

				}, {
					date: '11111',
					time: '2016-05-02',
					fangxing: '$200',
					guke: '张三123',
					jinqian: '微信支付',
					zhuangtai: '待确定',

				}, {
					date: '2222',
					time: '2018-03-09',
					fangxing: '$300',
					guke: '李四123',
					jinqian: '未支付',
					zhuangtai: '已完成',

				}, {
					date: '3333',
					time: '2016-05-02',
					fangxing: '$100',
					guke: '王五123',
					jinqian: '微信支付',
					zhuangtai: '已完成',

				}, {
					date: '4444',
					time: '2018-03-09',
					fangxing: '$200',
					guke: '小红123',
					jinqian: '微信支付',
					zhuangtai: '已完成',

				}],
				pickerOptions: {
					shortcuts: [{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
				value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
				value2: ''
			};
		}
	};
</script>
<style>
	.lu1 {
		background-color: #1abc9c;
		margin-left: 30px;
		margin-top: 20px;
		
	}

	.lu {

		color: black;
		
		line-height: -40px;
		
	}

	#span {
		color: red;
	}

	.block {
		margin-top: 20px;
        margin-left: 30px;
	}

	.xuanze {
		margin-top: auto;
		width: 105px;
		height: 20px;
	}

	.xuanzekuang {
		margin-top: -34px;
		margin-left: 455px;
	}

	.width {
		width: 200px;
	}

	#wei {
		margin-left: 20px;
		background: #ee903c;
		color: white;
	}
.wid{
margin-right: 150px;
}
	.biao {
		margin-top: 40px;
		margin-left: 30px;
	}

	.fenye {
		margin-left: 100px;
	}

	.mar {
		margin-top: -30px;
		margin-left: 495px;
	}
	.el-table td,
	.el-table th {
		text-align: center;
	}
</style>
