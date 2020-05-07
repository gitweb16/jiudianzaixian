<template>
	<div class="main">
		<div class="center">
			<div class="center-head">
				<div class="left">
					<input type="text" placeholder="  房型名称"/>
					<el-row>
						<el-button type="warning">查询</el-button>
					</el-row>
				</div>
				<div class="right">
					<el-row>
						<el-button @click="piliangdel">批量删除</el-button>
						<router-link tag="el-button" type="primary" to="/publi/addfangxin" style="background-color: #409EFF;color:white">新增房号</router-link>
					</el-row>
				</div>
			</div>
			<div class="center-con">
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange"
				:header-cell-style="{background:'#fafafa',color:'#606266'}">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column prop="name" label="房型名称" width="180">
					</el-table-column>
					<el-table-column prop="no" label="售价" width="180">
					</el-table-column>
					<el-table-column prop="remarks" label="房间数量">
					</el-table-column>
					<el-table-column prop="caozuo" label="操作">
						<template slot-scope="scope">
							<router-link to="/publi/addfangxin"><el-button type='text'>编辑</el-button></router-link>
							&nbsp;&nbsp;<el-button type="text" @click="del(scope.$index,tableData)">删除</el-button>
						</template>
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

<script>
	export default {
		name: "fangXin",
		data() {
			return {
				tableData: [{
						name: '途选大床房',
						no: '￥330.00',
						remarks: '5',
						caozuo: ''
					},
					{
						name: '途享大床房',
						no: '￥371.00',
						remarks: '3',
						caozuo: ''
					},
					{
						name: '途奢大床房',
						no: '￥462.00',
						remarks: '6',
						caozuo: ''
					},
					{
						name: '途选双床房',
						no: '￥505.00',
						remarks: '7',
						caozuo: ''
					},
					{
						name: '途客家庭房',
						no: '￥581.00',
						remarks: '4',
						caozuo: ''
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
			del(index,rows) {
				this.$confirm('确认删除此房型?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					rows.splice(index,1)
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
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		}
	}
</script>

<style>
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
	.el-input{
		width: 320px;
	}
	.el-dialog{  
		width: 40%;
	}
	.iput{
		margin-left: 10px;
	}
	.dialog-footer{
		text-align: center;
	}
</style>
