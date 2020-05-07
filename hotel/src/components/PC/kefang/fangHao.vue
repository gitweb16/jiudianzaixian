<template>
	<div class="main">
		<div class="xiaodatou">
			<span>
				客房管理><router-link tag="a" to="/publi/fanghao">房号管理</router-link>
			</span>
			<span>
				<router-link tag="a" to="">返回</router-link>
			</span>
		</div>
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
						<el-button @click="piliangdel">批量删除</el-button>
						<el-button type="primary" @click="dialogFormVisible2 = true">新增房号</el-button>
					</el-row>
				</div>
			</div>
			<div class="center-con">
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange"	 :header-cell-style="{background:'#fafafa',color:'#606266'}">
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
							<el-switch v-model="scope.row.status" :active-value="1" :inactive-value="2" active-color="#13ce66"					 inactive-color="#e2e2e2" @change="changeSwitch(scope.row)" /></template>
					</el-table-column>
					<el-table-column prop="caozuo" label="操作">
						<template slot-scope="scope">
							<el-button type="text" @click="dialogFormVisible = true">编辑</el-button>

							&nbsp;&nbsp;<el-button type="text" @click="del(scope.$index,tableData)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<el-dialog title="编辑房号" :visible.sync="dialogFormVisible" :append-to-body='true'>
				<el-form :model="form">
					<el-form-item label="选择房型" :label-width="formLabelWidth"><span style="color:red">*</span> :
						<el-select v-model="form.region" placeholder="请选择房型">
							<el-option label="途选大床房" value="shanghai"></el-option>
							<el-option label="途享大床房" value="beijing"></el-option>
							<el-option label="途奢大床房" value="ert"></el-option>
							<el-option label="途选双床房" value="tgb"></el-option>
							<el-option label="途客家庭房" value="tyh"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="房号" :label-width="formLabelWidth"><span style="color:red">*</span> :
						<el-input v-model="form.name" autocomplete="off" placeholder="请输入房号                                                                           0/9"></el-input>
					</el-form-item>
					<el-form-item label="备注" :label-width="formLabelWidth" class="iput"> :
						<el-input v-model="form.name" autocomplete="off" placeholder='                                                                                             0/15'></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
				</div>
			</el-dialog>
			<el-dialog title="新增房号" :visible.sync="dialogFormVisible2" :append-to-body='true'>
				<el-form :model="form">
					<el-form-item label="选择房型" :label-width="formLabelWidth"><span style="color:red">*</span> :
						<el-select v-model="form.region" placeholder="请选择房型">
							<el-option label="途选大床房" value="shanghai"></el-option>
							<el-option label="途享大床房" value="beijing"></el-option>
							<el-option label="途奢大床房" value="ert"></el-option>
							<el-option label="途选双床房" value="tgb"></el-option>
							<el-option label="途客家庭房" value="tyh"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="房号" :label-width="formLabelWidth"><span style="color:red">*</span> :
						<el-input v-model="form.name" autocomplete="off" placeholder="请输入房号                                                                           0/9"></el-input>
					</el-form-item>
					<el-form-item label="备注" :label-width="formLabelWidth" class="iput"> :
						<el-input v-model="form.name" autocomplete="off" placeholder='                                                                                             0/15'></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible2 = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible2 = false">保 存</el-button>
				</div>
			</el-dialog>
			<div class="footer">
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"		 :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total,prev, pager, next,sizes, jumper" :total="400">
				</el-pagination>
			</div>

		</div>
	</div>
</template>

<script >
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
				currentPage4: 4,
				dialogFormVisible: false,
				dialogFormVisible2: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px'
			}
		},
		methods: {
			del(index, rows) {
				this.$confirm('确认删除此房型?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					rows.splice(index, 1)
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			piliangdel() {
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

	.main {
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
		margin-left: 20px;
		padding-top: 10px;
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

	.footer {
		margin-top: 40px;
		margin-left: 140px;
	}

	.el-input {
		width: 320px;
	}

	.el-dialog {
		width: 50%;
	}

	.iput {
		margin-left: 10px;
	}

	.dialog-footer {
		text-align: center;
	}
</style>
