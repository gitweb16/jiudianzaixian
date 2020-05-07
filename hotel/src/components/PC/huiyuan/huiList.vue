<template>
	<div id="main" style="padding-top:10px">
		<div class="qjiu">
			<div class="shaixuan">
				<p>筛选:
					<el-select v-model="value" placeholder="姓名" style="width:110px;">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<span>
						<el-input v-model="input" placeholder="请输入内容" style="width:140px;"></el-input>
					</span>
					<el-row style="margin-left:310px;margin-top:-40px;">
						<el-button type="warning">查询</el-button>
					</el-row>
				</p>
			</div>
			<div class="yonghuxx">
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column label="用户信息" width="120">
						<template slot-scope="scope">{{ scope.row.date }}</template>
					</el-table-column>
					<el-table-column prop="name" label="手机号码" width="120">
					</el-table-column>
					<el-table-column prop="address" label="可用余额" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="jif" label="可用积分" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="address" label="操作" show-overflow-tooltip>
						<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
							详情
						</el-button>
						<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
							修改积分
						</el-button>
						<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
							充值
						</el-button>
					</el-table-column>
				</el-table>
			</div>
			<div class="fenye">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"	 :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'huiList',
		data() {
			return {
				options: [{
					value: '选项1',
					label: '昵称'
				}, {
					value: '选项2',
					label: '手机号'
				}, {
					value: '选项4',
					label: '会员卡号'
				}],
				value: '',
				input: '',
				tableData: [{
					date: '2016-05-03',
					name: '15212345678',
					address: '1000.00',
					jif: '876'
				}, {
					date: '2016-05-02',
					name: '15212345234',
					address: '0.00',
					jif: '876'
				}, {
					date: '2016-05-04',
					name: '13712653746',
					address: '200.00',
					jif: '876'
				}, {
					date: '2016-05-01',
					name: '19987760987',
					address: '1280.82',
					jif: '876'
				}, {
					date: '2016-05-08',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-06',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-07',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				multipleSelection: [],
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4

			}
		},
		methods: {
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},

		}
	}
</script>

<style scoped>
	#main {
		width: 100%;
		height: 700px;
		background: #C0C0C0;
		padding-bottom: 20px;
	}

	.qjiu {
		height: 674px;
		border: 1px solid #DCDCDC;
		width: 840px;
		background: white;
		margin-left: 25px;

	}

	.shaixuan {
		float: left;
		margin-left: 25px;
	}

	.yonghuxx {
		height: 200px;
		width: 790px;
		margin-left: 25px;
	}

	.fenye {
		height: 40px;
		width: 840px;
		margin-top: 420px;
		
		padding-left: 66px;
	}
	.content p{
		text-align: center;
    padding-top: 3%;
    color: #999;
    font-size: 1.2rem !important;
    height: 70px;
	}
</style>
