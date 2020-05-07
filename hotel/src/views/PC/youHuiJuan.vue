<template>
	<div id="youhuiquan">
		<Header></Header>
		<div class="youhuiquanForm">
			<el-form :inline="true" :model="formInline" class="demo-form-inline">

				<el-form-item>
					<el-select v-model="formInline.type" placeholder="全部类型">
						<el-option label="全部类型" value="shanghai" disabled></el-option>
						<el-option label="折金券" value="shanghai"></el-option>
						<el-option label="折扣券" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-select v-model="formInline.state" placeholder="全部状态">
						<el-option label="全部状态" value="shanghai" disabled></el-option>
						<el-option label="未过期" value="shanghai"></el-option>
						<el-option label="已过期" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-input v-model="formInline.name" placeholder="优惠券名称"></el-input>
				</el-form-item>
				<el-form-item class="btn">
					<el-button type="primary" @click="onSubmit">查询</el-button>
					<el-button @click="resetForm('numberValidateForm')">重置</el-button>
				</el-form-item>
			</el-form>

			<template slot-scope="">
				<el-button type="primary">
					+新建
				</el-button>
				<el-button size="small">
					批量投放
				</el-button>
				<el-button size="small">
					批量删除
				</el-button>
			</template>
			<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" :span-method="arraySpanMethod"
@selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column prop="name" label="优惠券名称">
				</el-table-column>
				<el-table-column prop="state" label="状态">
				</el-table-column>
				<el-table-column prop="use" label="使用门槛">
				</el-table-column>
				<el-table-column prop="totals" label="发放总量">
				</el-table-column>
				<el-table-column prop="provided" label="已发放数">
				</el-table-column>
				<el-table-column prop="used" label="已使用数">
				</el-table-column>
				<el-table-column prop="enable" label="启用">
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button @click="handleEdit(scope.$index, tableData)" size="small">
							<i class="el-icon-edit"></i>编辑
						</el-button>
						<el-button size="small">
							<i class="el-icon-s-promotion"></i>发放
						</el-button>
						<el-button size="small">
							领取列表
						</el-button>
						<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" size="small">
							<i class="el-icon-delete"></i>删除
						</el-button>
					</template>
				</el-table-column>
			</el-table>

		</div>
	</div>
</template>

<script>
	import Header from '../../components/PC/publi/header.vue'
	export default {
		name: 'youhui',
		components: {
			Header
		},
		data() {
			return {
				formInline: {
					type: '',
					state: '',
					name: ''
				},
				tableData: [{
					name: '10元优惠券',
					state: '已过期',
					use: '50.00',
					totals: '无限制',
					provided: 11,
					used: 8,
					enable: '',
					type: '代金券',
					moneny: '10.00',
					time: '2019-01-01-2019-03-10'
				},{
					name: '10元优惠券',
					state: '已过期',
					use: '50.00',
					totals: '无限制',
					provided: 11,
					used: 8,
					enable: '',
					type: '代金券',
					moneny: '10.00',
					time: '2019-01-01-2019-03-10'
				},{
					name: '10元优惠券',
					state: '已过期',
					use: '50.00',
					totals: '无限制',
					provided: 11,
					used: 8,
					enable: '',
					type: '代金券',
					moneny: '10.00',
					time: '2019-01-01-2019-03-10'
				}]
			}
		},
		methods: {
			arraySpanMethod({ row,column,rowIndex,columnIndex
			}) {
				/*if (rowIndex % 2 === 0) {
					if (columnIndex === 0) {
						return [1, 2];
					} else if (columnIndex === 1) {
						return [0, 0];
					}
				}
				if (columnIndex === 0) {
					if (rowIndex % 2 === 0) {
						return {
							rowspan: 0,
							colspan: 1
						};
					} else {
						return {
							rowspan: 0,
							colspan: 0
						};
					}
				} */
console.log(rowIndex,columnIndex)
				console.log(row, column)
			},


			deleteRow(index, rows) {
				console.log(index, rows)
				this.$confirm('删除确认, 删除后商家将无法查看优惠券码的信息，且无法恢复，请谨慎操作！', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
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
			}
		},
	}
</script>
<style>
	.youhuiquan {
		position: relative;
	}

	.youhuiquanForm {
		padding: 20px;
	}

	.el-input__inner {
		height: 30px;
	}

	.btn {
		position: absolute;
		right: 3%;
	}

	thead.has-gutter {
		color: #000;
	}
</style>
