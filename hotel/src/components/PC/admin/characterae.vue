<template>
	<div id="editCharacter">
		<el-form label-width="10%">
			<el-form-item label="角色名称 :" :rules="[{required:true}]">
				<el-input style="width: 40%;" placeholder="请输入角色名称"></el-input>
			</el-form-item>
			<el-form-item label="添加权限 :" :rules="[{required:true}]">
				<div class="header-container">
					<label class="all-selected-title header-title">
						<input type="checkbox" name="" @click="selectAll(checks)" v-model="isSelectedAll"><span>全选</span>
					</label>
				</div>
				<ul class="check-list">
					<li v-for="(check,index) in checks" :key="index">
						<div class="powerRole">
							<input type="checkbox" name="" @click="selectAll(check)" v-model="isShopSelectedAll[checks.indexOf(check)]">{{check.name}}
						</div>
						<ul class="powerlist">
							<li v-for="ch in check.childCh" :key="ch.id">
								<input type="checkbox" name="" value="" v-model="ch.isSelected">{{ch.name}}
							</li>
						</ul>
					</li>
				</ul>
			</el-form-item>
			<el-form-item style="margin-left:45%;">
				<el-button type="primary">保存</el-button>
			</el-form-item>
		</el-form>

	</div>
</template>

<script>
	export default {
		name: 'cha',
		data() {
			return {
				isIndeterminate: true,
				checks: [{
						name: '会员管理',
						childCh: [{
							name: '会员信息查看',
							isSelected: true,
							id: 1
						}, {
							name: '会员信息修改',
							isSelected: false,
							id: 2
						}, {
							name: '会员积分修改',
							isSelected: false,
							id: 3
						}, {
							name: '会员充值',
							isSelected: false,
							id: 4
						}, {
							name: '会员设置',
							isSelected: false,
							id: 5
						}, {
							name: '积分设置',
							isSelected: false,
							id: 6
						}, {
							name: '充值记录',
							isSelected: false,
							id: 7
						}, {
							name: '消费记录',
							isSelected: false,
							id: 8
						}]
					},
					{
						name: '优惠券',
						childCh: [{
							name: '优惠券信息查看',
							isSelected: false,
							id: 1
						}, {
							name: '优惠券信息修改',
							isSelected: false,
							id: 2
						}, {
							name: '优惠券发放',
							isSelected: false,
							id: 3
						}]
					},
					{
						name: '商品',
						childCh: [{
							name: '商品信息查看',
							isSelected: false,
						}, {
							name: '商品信息修改',
							isSelected: false,
						}, {
							name: '商品分类信息修改',
							isSelected: false,
						}]
					},
					{
						name: '订单管理',
						childCh: [{
							name: '商品订单查看',
							isSelected: false,
						}, {
							name: '商品订单处理',
							isSelected: false,
						}, {
							name: '商品订单查看',
							isSelected: false,
						}, {
							name: '商品订单处理',
							isSelected: false,
						}, {
							name: '住宿记录查看',
							isSelected: false,
						}]
					},
					{
						name: '客服管理',
						childCh: [{
							name: '房态查看',
							isSelected: false,
						}, {
							name: '房态修改',
							isSelected: false,
						}, {
							name: '房型查看',
							isSelected: false,
						}, {
							name: '房型修改',
							isSelected: false,
						}, {
							name: '房号查看',
							isSelected: false,
						}, {
							name: '房号修改',
							isSelected: false,
						}]
					},
					{
						name: '投诉建议',
						childCh: [{
							name: '投诉建议查看',
							isSelected: false,
						}, {
							name: '投诉建议处理',
							isSelected: false,
						}]
					},
					{
						name: '设置',
						childCh: [{
							name: '微信设置',
							isSelected: false,
						}, {
							name: '酒店设置',
							isSelected: false,
						}, {
							name: '其他设置',
							isSelected: false,
						}]
					},
					{
						name: '用户管理',
						childCh: [{
							name: '用户查看',
							isSelected: false,
						}, {
							name: '用户修改',
							isSelected: false,
						}, {
							name: '角色查看',
							isSelected: false,
						}]
					}
				],
				editVisible: true,

			}
		},
		computed: {
			// 是否全选
			isSelectedAll: {
				get() {
					for (var i = 0; i < this.checks.length; i++) {
						if (!this.isShopSelectedAll[i]) {
							return false;
						}
					}
					return true;
				},
				// 这里要加一个空的setter，因为用v-model绑定时会报错
				set() {},
			},
			// 店铺中的商品是否全选
			isShopSelectedAll: function() {
				var tempArr = [];
				for (var i = 0; i < this.checks.length; i++) {
					tempArr[i] = true;
					var childCh = this.checks[i].childCh;
					for (var j = 0; j < childCh.length; j++) {
						if (!childCh[j].isSelected) {
							tempArr[i] = false;
							break;
						}
					}
				}
				return tempArr;
			},
		},
		methods: {
			// 全选或者单个
			selectAll: function(all) {
				// 参数all可传入checks数组或者checks数组内的一个对象
				// all传入checks数组表示全选
				// all传入一个对象表示某个全选
				if (all instanceof Array) {
					var bool = !this.isSelectedAll;
					// var bool = false;
					for (var i = 0; i < all.length; i++) {
						var childCh = all[i].childCh;
						for (var j = 0; j < childCh.length; j++) {
							childCh[j].isSelected = bool;
						}
					}
				} else {
					var index = this.checks.indexOf(all);
					var bool1 = !this.isShopSelectedAll[index];
					for (var k = 0; k < all.childCh.length; k++) {
						all.childCh[k].isSelected = bool1;
					}
				}
			},
			addCharacter() {
				/* this.editVisible = false; */
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

			handleEdit(index, row) {
				console.log(index, row)
				this.editVisible = false;
			}
		},
	}
</script>


<style scoped>
	li {
		list-style: none;
	}
	#editCharacter{
		background: #fff;
		padding: 2.875rem 1.25rem;
	}
	.powerlist li {
		width: 15%;
		display: inline-block;
	}
	.powerRole {
		border-bottom: 1px solid #eee;
	}
	ul.check-list>li {
		margin-bottom: 0.625rem;
	}
	* {
		padding: 0;
		margin: 0;
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
