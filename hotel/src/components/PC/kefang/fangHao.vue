<template>
	<div class="main">
		<div class="center">
			<div class="center-head">
				<div class="left">
					<input type="text" />
					<el-row>
						<el-button type="warning">查询</el-button>
					</el-row>
				</div>
				<div class="right">
					<el-row>
						<el-button @click="shangjia">批量上架</el-button>
						<el-button @click="xiajia">批量下架</el-button>
						<el-button @click="del">批量删除</el-button>
						<el-button type="primary" @click="addFang">新增房号</el-button>
					</el-row>
				</div>
			</div>
			<div class="center-con">
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column prop="name" label="房型名称" width="180">
					</el-table-column>
					<el-table-column prop="no" label="房号" width="180">
					</el-table-column>
					<el-table-column prop="remarks" label="备注">
					</el-table-column>
					<el-table-column prop="jia" label="上架/下架">
						<template slot-scope="scope">
							<el-switch v-model="scope.row.status" :active-value="1" :inactive-value="2" active-color="#13ce66"
							inactive-color="#e2e2e2" @change="changeSwitch(scope.row)" /></template>
					</el-table-column>
					<el-table-column prop="caozuo" label="操作">
						<el-button type="text" @click="open">编辑</el-button>
						<el-button type="text" @click="del">删除</el-button>
					</el-table-column>
				</el-table>
			</div>
			<div class="footer">
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
				:page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total,prev, pager, next,sizes, jumper" :total="400">
				</el-pagination>
			</div>

		</div>
	</div>
</template>

<script scoped>
	export default {
		name: "fangHao",
		data() {
			return {
				tableData: [{
						name: '途选大床房',
						no: '1004',
						remarks: '5',
						jia: '',
						caozuo: '',
						status: 1
					},
					{
						name: '途享大床房',
						no: '1005',
						remarks: '3',
						jia: '',
						caozuo: '',
						status: 1
					},
					{
						name: '途奢大床房',
						no: '1008',
						remarks: '6',
						jia: '',
						caozuo: '',
						status: 1
					},
					{
						name: '途选双床房',
						no: '1009',
						remarks: '7',
						jia: '',
						caozuo: '',
						status: 2
					},
					{
						name: '途客家庭房',
						no: '2009',
						remarks: '4',
						jia: '',
						caozuo: '',
						status: 1
					}
				],
				multipleSelection: [],
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4
			}
		},
		methods: {
			open() {
				this.$alert(
					'<p>选择房型 <span style="color:red">*</span> : <select class="chek"><option>请选择房型</option><option>途选大床房</option><option>途享大床房</option><option>途奢大床房</option><option>途选双床房</option><option>途客家庭房</option></select></p><span class="hao">房号 <span style="color:red">*</span> : <input type="text" class="inp" placeholder="请输入房号                                                       0/9"></span><span class="bei">备注 : <input type="text" class="inp" placeholder="                                                                          0/15"></span>',
					'编辑房号', {
						dangerouslyUseHTMLString: true,
						showCancelButton: true
					});
			},
			del() {
				this.$confirm('确认删除此房型?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			shangjia() {
				this.$confirm('确认执行此操作?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '上架成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消上架'
					});
				});
			},
			xiajia() {
				this.$confirm('确认执行此操作?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '下架成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消下架'
					});
				});
			},
			addFang() {
				this.$alert(
					'<p>选择房型 <span style="color:red">*</span> : <select class="chek"><option>请选择房型</option><option>途选大床房</option><option>途享大床房</option><option>途奢大床房</option><option>途选双床房</option><option>途客家庭房</option></select></p><span class="hao">房号 <span style="color:red">*</span> : <input type="text" class="inp" placeholder="请输入房号                                                       0/9"></span><span class="bei">备注 : <input type="text" class="inp" placeholder="                                                                          0/15"></span>',
					'新增房号', {
						dangerouslyUseHTMLString: true,
						showCancelButton: true
					});
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		}
	}
</script>

<style scoped>
	.main{
		width: 100%;
	}
	.head span {
		padding-left: 50px;
		color: gainsboro;

	}

	.head a:nth-of-type(1) {
		color: gainsboro;
	}

	a {
		text-decoration: none;
		color: #000000;
	}

	.center {
		width: 96.8%;
		height: 600px;
/* 		border: 1px solid black;
 */		margin-left: 20px;
		padding-top: 10px;
		border-radius: 10px;
	}

	.left {
		margin: 20px;
		position: relative;
	}

	.left input {
		height: 30px;
		width: 200px;
		display: inline-block;
	}

	.left button {
		position: absolute;
		left: 230px;
		top: -36px;
		height: 35px;
	}

	.right {
		float: right;
		margin-top: -50px;
		margin-right: 30px;
	}

	.right button {
		height: 35px;
	}

	.center-con {
		width: 96%;
		height: 420px;
		/* border: 1px solid black; */
		margin-left: 20px;
	}

	.center-con table {
		margin: 10px;
	}

	.has-gutter tr {
		background-color: gray;
	}

	.chek {
		width: 310px;
		height: 30px;
	}

	.inp {
		width: 306px;
		height: 23px;
	}

	.hao {
		display: inline-block;
		margin-top: 20px;
		margin-left: 28px;
	}

	.bei {
		display: inline-block;
		margin-top: 20px;
		margin-left: 38px;
	}

	.el-message-box__btns {
		text-align: center;
	}
	.footer{
		margin-top:40px;
		margin-left: 140px;
	}
</style>
