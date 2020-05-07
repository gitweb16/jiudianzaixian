<template>
	<div id="userGuanLi">
		<div class="xiaodatou">
			<span>
				用户管理><router-link tag="span" to="/publi/character">管理员列表</router-link>
			</span>
			<span>
				<router-link tag="a" to="">返回</router-link>
			</span>
		</div>
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<el-form-item class="one">
				<el-select v-model="formInline.user" placeholder="账号">
					<el-option label="" value="账号"></el-option>
					<el-option label="" value="姓名"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-input v-model="formInline.content" placeholder="请输入搜索内容" class="searchCon"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit" class="search">查询</el-button>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit" class="add">新建管理员</el-button>
			</el-form-item>
		</el-form>

		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="user" label="管理员账号" width="160">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="130">
			</el-table-column>
			<el-table-column prop="character" label="角色">
			</el-table-column>
			<el-table-column prop="note" label="备注">
			</el-table-column>
			<el-table-column prop="lastLogin" label="最后登录时间">
			</el-table-column>
			<el-table-column prop="lastIP" label="最后登录IP">
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button @click="handleEdit(scope.$index, tableData)" type="text" size="small">
						编辑
					</el-button>
					<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
						删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
:page-sizes="[10, 20, 30, 40]" :page-size="10" :pager-size="4" layout="total,  prev, pager, next,sizes, jumper"
:total="400" background>
			</el-pagination>
		</div>

		<el-dialog :visible.sync="dialogVisible" class="dialog" width="30%" :before-close="handleClose">
			<el-form :model="editForm" v-model="labelPosition">
				<el-form-item label="账号:" prop="name">
					<el-input v-model="editForm.name"></el-input>
				</el-form-item>
				<el-form-item label="密码:">
					<el-input v-model="editForm.pwd"></el-input>
				</el-form-item>
				<el-form-item label="确认密码:">
					<el-input v-model="editForm.pwd"></el-input>
				</el-form-item>
				<el-form-item label="姓名:">
					<el-input v-model="editForm.name"></el-input>
				</el-form-item>
				<el-form-item label="备注:">
					<el-input v-model="editForm.note"></el-input>
				</el-form-item>
				<el-form-item label="角色:">
					<el-input v-model="editForm.character"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取消</el-button>
				<el-button type="primary" @click="editSubmit">确认创建 </el-button>
			</div>
		</el-dialog>
	</div>

</template>
<script>

	export default {
		name: 'UserGuanLi',
		
		data() {
			return {
				labelPosition: 'right',
				dialogVisible: false,
				/* editFormVisible: true, */
				editForm: {
					user: '11',
					name: '11',
					character: '',
					note: '',
					pwd: ''
				},
				tableData: [{
					user: 'admin',
					name: '管理员',
					character: '超级管理员',
					note: '-',
					lastLogin: '2019-05-23 12:48:00',
					lastIP: '183.69.214.231'
				}, {
					user: 'user',
					name: '-',
					character: '财务人员',
					note: '-',
					lastLogin: '2019-05-23 12:48:00',
					lastIP: '183.69.214.231'
				}, {
					user: 'username',
					name: '-',
					character: '角色名称',
					note: '-',
					lastLogin: '2019-05-23 12:48:00',
					lastIP: '183.69.214.231'
				}, {
					user: 'username2',
					name: '-',
					character: '角色名称',
					note: '-',
					lastLogin: '2019-05-23 12:48:00',
					lastIP: '183.69.214.231'
				}, {
					user: 'username3',
					name: '-',
					character: '角色名称',
					note: '-',
					lastLogin: '2019-05-23 12:48:00',
					lastIP: '183.69.214.231'
				}, {
					user: 'username4',
					name: '-',
					character: '角色名称',
					note: '-',
					lastLogin: '2019-05-23 12:48:00',
					lastIP: '183.69.214.231'
				}],
				formInline: {
					user: '',
					content: ''
				},
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4
			}
		},
		methods: {
			handleClose(done) {
				this.$confirm('确认关闭？').then(() => {
						done();
					})
					.catch(() => {});
			},
			onSubmit() {
				console.log('submit!');
			},
			handleEdit(index, row) {
				console.log(index, row)
				console.log(this.editForm)
				this.dialogVisible = true;
				console.log(this.dialogFormVisible)
			},
			deleteRow(index, rows) {
				this.$confirm('确认删除此用户？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					rows.splice(index, 1);
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});

			},
			editSubmit() {},
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

	* {
		padding: 0;
		margin: 0;
	}

	.dialog .el-form-item__label {
		width: 20%;
	}

	.dialog .el-input__inner {
		height: 30px;
	}

	.el-dialog__body {
		padding: 0.3125rem 1.25rem;
	}

	.dialog .el-form-item {
		margin-bottom: 0.125rem;
	}

	.dialog .el-input,
	.el-textarea {
		position: relative;
		font-size: 14px;
		display: inline-block;
		width: 80%;
		/* display: inline-block; */
		float: left;
	}

	.el-message-box {
		width: 230px;
	}

	.el-message-box__status.el-icon-warning {
		display: none;
	}

	.el-message-box__header {
		background: #eee;
	}

	.el-message-box__status+.el-message-box__message {
		padding-left: 0.625rem;
		padding-right: 12px;
	}

	.el-dialog__wrapper {
		top: 6.25rem;
	}

	.el-pagination.is-background {
		margin: 2.5rem 0.625rem;
	}

	div#userGuanLi {
		padding: 10px 20px;
	}

	.demo-form-inline {
		padding: 2.25rem 0 0;
	}

	.el-table th {
		background: #f5f5f5;
		border: 1px;
	}

	.has-gutter .cell {
		color: #000000;
		font-weight: bold;
	}

	.cell {
		width: 170px !important;
	}

	.search {
		background: #ff8000 !important;
		border: #ff8000 !important;
	}

	.search:hover,
	.search:active,
	.search:visited {
		background: #ff9900;
		border: #ff9900;
	}

	.add {
		text-align: right;
	}

	.one {
		width: 10%;
	}

	.el-input__inner {
		border-radius: 3px;
	}

	.searchCon {
		margin-left: -10px;
	}
</style>
