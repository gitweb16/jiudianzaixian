<template>
	<div id="charact">
		<div id="charactList" >
			<el-form>
				<el-form-item>
					<router-link to="/publi/cha" tag="el-button" type="primary" @click="addCharacter" class="addChara">新增角色</router-link>
				</el-form-item>
			</el-form>
			<el-table :data="charaData" style="width: 95%" class="chtable">
				<el-table-column prop="name" label="角色名称">
				</el-table-column>
				<el-table-column label="操作" width="100%">
					<template slot-scope="scope">
						<router-link to="/publi/cha" type="text" size="small" class="el-button el-button--text el-button--small" tag="el-button" @click="handleEdit(scope.$index, tableData)" >编辑</router-link>
						
					<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
					删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	
	</div>
</template>

<script>
	export default {
		name:'character',
		data() {
			return {
				charaData: [{
						name: "超级管理员"
					},
					{
						name: "普通管理员"
					},
					{
						name: "角色名称"
					},
					{
						name: ""
					},
					{
						name: ""
					}
				]
			}
		},
		
		methods: {
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
			handleEdit(index, row) {
				console.log(index, row)
				this.editVisible = false;
			},
			addCharacter(){}
		},
	}
</script>
<style>
	* {
		padding: 0;
		margin: 0;
	}

	li {
		list-style: none;
	}
	.charact {
		position: relative;
	}
.el-button+.el-button {
    margin-left: 0px;
}
	.addChara {
		background-color: #00AAFF;
		position: absolute;
		right: 2%;
		margin: 1.25rem;
		color: #FFFFFF;
	}

	.chtable {
		margin: 5.5rem 1.25rem;
	}

	.cell span {
		color: #00aaff;
		margin: 0px 0.1875rem;
	}

	.has-gutter .cell {
		color: #000000;
		font-weight: bold;
	}

	.el-table th {
		background: #f5f5f5;
		border: 1px;
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

	.el-input__inner {
		height: 35px;
		line-height: 35px;
		border-radius: 0px;
	}
</style>
