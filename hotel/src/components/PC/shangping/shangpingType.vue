<template>
	<div id="dafen">
		<div class="woc">
			<el-button type="primary" @click="addFang()">添加分类</el-button>
		</div>

		<div class="center-con">


			<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
	<el-table-column type="selection" width="55">
					</el-table-column>

				<el-table-column prop="name" label="分类名称" width="280">

				</el-table-column>
				<el-table-column prop="no" label="商品数量" width="280">
				
				</el-table-column>

				<el-table-column prop="caozuo" label="操作">
					<el-button type="text" @click="del()">增加子分类</el-button>
					<el-button type="text" @click="open() ">编辑</el-button>
					<el-button type="text" @click="del()">删除</el-button>
				</el-table-column>
			</el-table>

		</div>
	</div>
	
</template>

<script>
	export default ({
		name: 'shangpingType',
		data() {
			return {
				tableData: [{
						name: '服装',
						no: '322'
					},
					{
						name: '配饰',
						no: '433'
					},
					{
						name: '家具',
						no: '544'
					}],
			}
		},
		methods:{
			open() {
					this.$alert(
						'<p>分类名称 :<input type="text"></p><span class="hao">上级分类 :<select><option>请选择分类</option></select> </span><span class="bei"><span style="color:#efefef">不选择则默认分类</span>	<br/>排序: <input type="text" class="inp" ></span><br/>是否显示：<input type="radio" name="gan">是<input type="radio" name="gan">否',
						'编辑房号', {
							dangerouslyUseHTMLString: true,
							showCancelButton: true
						});
				},
				del() {
					this.$confirm('确认删除此分类?如果此分类下有商品则会删除失败', '提示', {
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
				addFang() {
					this.$alert(
						'<p>选择商品 <span style="color:red">*</span> : <select class="chek"><option>请选择商品</option>商品1</option><option>商品2</option><option>商品3</option><option>商品4</option><option>商品5</option></select></p><span class="hao">商品 <span style="color:red">*</span> : <input type="text" class="inp" placeholder="请输入名称0/9"></span><span class="bei"><br/>备注 : <input type="text" class="inp" placeholder="                                                                          0/15"></span>',
						'新增商品', {
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
		
	});
</script>

<style scoped>
	.woc {
		padding: 10px;
	}
	p{
		padding: 10px;
	}
</style>