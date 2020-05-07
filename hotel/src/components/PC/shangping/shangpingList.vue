<template>
	<div class="main">
		<div class="center">
			<div class="center-head">
				<div class="left">
					<span style="margin-right: 20px">输入搜索：
						<input type="text" />
					</span>
					<span style="margin-right: 10px">
						商品分类
						<template>
							<el-select v-model="value" placeholder="请选择">
								<el-option v-for="item in options" :key="item.value"  :value="item.value">
								</el-option>
							</el-select>
						</template>
					</span>
					<span style="margin-right: 20px">
						上下架
						<template>
							<el-select v-model="value2" placeholder="请选择">
								<el-option v-for="ss in sx" :key="ss.value2" :label="ss.gan" :value="ss.value2">
								</el-option>
							</el-select>
						</template>
					</span>

				</div>
				<div class="right">
					<el-row>
						
						<el-button>查询</el-button>
						<el-button type="primary" @click="addFang">添加商品</el-button>
					
						
					</el-row>
				</div>
				<div class="pip">	<el-button >批量操作</el-button></div>
			</div>
			<div class="center-con">
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column prop="name" label="商品图片" width="180">
						<i class="el-icon-picture"></i>
					</el-table-column>
					<el-table-column prop="no" label="商品信息" width="180">
					</el-table-column>
					<el-table-column prop="remarks" label="价格/货号">
					</el-table-column>
					<el-table-column prop="jia" label="上架/下架">
						<template slot-scope="scope">
							<el-switch v-model="scope.row.status" :active-value="1" :inactive-value="2" active-color="#13ce66" inactive-color="#e2e2e2" @change="changeSwitch(scope.row)" />
						</template>
					</el-table-column>
					<el-table-column prop="paixu" label="排序">
					</el-table-column>
					<el-table-column prop="xiaoliang" label="销量">
					</el-table-column>
					<el-table-column prop="caozuo" label="操作">
						<router-link tag="span" to="/publi/shangpingbianji">
							<el-button type="text" >编辑</el-button>
						</router-link>
						<el-button type="text" @click="del">删除</el-button>
					</el-table-column>
				</el-table>
			</div>
			<div class="footer">
				<el-pagination background  @size-change="handleSizeChange"  @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total,prev, pager, next,sizes, jumper" :total="400">
				</el-pagination>
			</div>

		</div>
	</div>
</template>

<script scoped>
	export default {
		name: "shangp",
		data() {
			return {
				tableData: [{
						name: '',
						no: '银色新莽网纱地库银色新莽网纱地库',
						remarks: '价 格：￥ 100.0货 号：N9203',
						jia: '',
						caozuo: '',
						xiaoliang:'100',
						paixu: '1 ',
						status: 1
					},
					{
						name: '途享大床房',
						no: '银色新莽网纱地库',
						remarks: '价 格：￥ 100.0 货 号：N9203',
						jia: '',
						caozuo: '',
						xiaoliang:'100',
						paixu: '3 ',
						status: 1
					},
					{
						name: '途奢大床房',
						no: '银色新莽网纱地库',
						remarks: '价 格：￥ 100.0 货 号：N9203',
						jia: '',
						caozuo: '',
						xiaoliang:'100',
						paixu: '4 ',
						status: 1
					},
					{
						name: '途选双床房',
						no: '银色新莽网纱地库',
						remarks: '价 格：￥ 100.0货 号：N9203',
						jia: '',
						caozuo: '',
						xiaoliang:'100',
						paixu: '5 ',
						status: 2
					}
				],
				multipleSelection: [],
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4,
				options: [{
					value: '选项1',
					label: '分类1'
				}, {
					value: '选项2',
					label: '分类2'
				}, {
					value: '选项3',
					label: '分类3'
				}, {
					value: '选项4',
					label: '分类4'
				}, {
					value: '选项5',
					label: '分类5'
				}],
				value: '',
				
				sx: [{
					value: '选项1',
					gan: '上架'
				}, {
					value: '选项2',
					gan: '下架'
				}],
				value2:'',
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
				this.$confirm('确认删除此商品?', '提示', {
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
					'<p>选择商品 <span style="color:red">*</span> : <select class="chek"><option>请选择商品</option>商品1</option><option>商品2</option><option>商品3</option><option>商品4</option><option>商品5</option></select></p><span class="hao">商品 <span style="color:red">*</span> : <input type="text" class="inp" placeholder="请输入名称                                                       0/9"></span><span class="bei">备注 : <input type="text" class="inp" placeholder="                                                                          0/15"></span>',
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
	}
</script>

<style scoped>
	.el-select{
		width: 180px;
	}
	.pip{
		margin-right:9px;
		text-align: right;
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
	td {
		border: 1px solid #efefef;
	}
	.center {
		width: 96.8%;
		height: 600px;
		/* 		border: 1px solid black;
 */
		padding-top: 10px;
		border-radius: 10px;
	}
	.left {
		padding: 13px 14px;
    /* margin: 20px; */
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
		margin-right: 9px;
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
	.footer {
		margin-top: 40px;
		margin-left: 140px;
	}
	.center-head {
		background: #efefef;
		margin-left: 31px;
		height: 136px;
	}
	
</style>
