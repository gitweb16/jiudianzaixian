<template>
	<div class="div">
		
		<div class="xiaodatou">
			<span>
				订单管理><router-link tag="span" to="/publi/character">客房订单</router-link>
			</span>
			<span>
				<router-link tag="a" to="">返回</router-link>
			</span>
		</div>
		<div class="dd">
			<el-row>
				<el-button class="lu1" size="small">全部订单(1000)</el-button>
				<el-button class="lu" size="small">待确认<span id="span">(1000)</span></el-button>
				<el-button class="lu" size="small">已完成<span id="span">(1000)</span></el-button>
				<el-button class="lu" size="small">已关闭<span id="span">(1000)</span></el-button>
			</el-row>
		</div>
		<div class="cc">
			<div class="block">
				<el-date-picker v-model="value2" type="datetimerange" :picker-options="pickerOptions" range-separator="至"
				start-placeholder="开始日期" end-placeholder="结束日期" align="left" class="wid" size="small">
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
		</div>

		<div class="biao">
			<el-table :data="tableData" border style="width: 96.5%" size='small' :header-cell-style="{background:'#fafafa',color:'#606266'}">
				<el-table-column prop="date" label="订单编号" width='140'>
				</el-table-column>
				<el-table-column prop="time" label="入职时间" width='140'>
				</el-table-column>
				<el-table-column prop="fangxing" label="房型/房号" width='140'>
				</el-table-column>
				<el-table-column prop="guke" label="顾客信息" width='140'>
				</el-table-column>
				<el-table-column prop="jinqian" label="实付金额" width='140'>
				</el-table-column>
				<el-table-column prop="zhuangtai" label="订单状态" width='140'>
				</el-table-column>
				<el-table-column prop="" label="操作" width='230'>
					<template slot-scope="scope">

						<el-button type="text">查看订单</el-button>
						<el-button type="text" @click="judan">拒单</el-button>
						<el-button type="text" @click="quedingruzhu">确认入住</el-button>
						<el-button type="text" @click.native.prevent="deleteRow(scope.$index,tableData)">删除</el-button>

					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="fenye">
			<div class="block">
				<el-pagination background :current-page.sync="currentPage1" :page-sizes="[100, 200, 300, 400]" layout="total, sizes"
				:total="400">
				</el-pagination>
			</div>
			<div class="mar">
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="100"
				layout="prev, pager, next,sizes,jumper" :total="400">
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
				console.log(index,rows)
				this.$confirm('确定删除该订单?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					rows.splice(index,1);
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			judan() {
				this.$confirm('用户已付款拒单后,资金将会从原路退回至用户的账单中!确定要拒单么?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '拒单成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已拒单成功'
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
		name: 'kefangdingdan',
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
					label: '入住人姓名'
				}, {
					value: '选项3',
					label: '入住人电话'
				}],
				tableData: [{
					date: '11111',
					time: '2016-05-02',
					fangxing: '$200',
					guke: '张三123',
					jinqian: '微信支付',
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
					jinqian: '微信支付',
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
				value: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
				value2: '',
				input:''
			};
		}
	};
</script>
<style scoped>
	.xiaodatou {
		background: #fff;
		margin: -4px 0px 0px 0px;
		padding: 6px;
		width: 100%
	}
	
	.xiaodatou>span:last-of-type {
		float: right
	}
	.el-table td,
	.el-table th {
		text-align: center;
	}

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
		margin-left: 440px;
	}

	.width {
		width: 200px;
	}

	#wei {
		margin-left: 20px;
		background: #ee903c;
		color: white;
	}

	.biao {
		margin-top: 20px;
		margin-left: 30px;
	}

	.fenye {
		margin-left: 100px;
		margin-top: 30px;
	}

	.mar {
		margin-top: -30px;
		margin-left: 495px;
	}

	.div {
		height: 400px;
		width: 1123px;
	}
</style>
