<template>
	<div class="border">
		<div class="xiaodatou">
			<span>
				订单管理><router-link tag="span" to="/publi/character">住宿记录</router-link>
			</span>
			<span>
				<router-link tag="a" to="">返回</router-link>
			</span>
		</div>
		<div class="block">
			入离时间:
			<el-date-picker size="small" v-model="value2" type="datetimerange" :picker-options="pickerOptions" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="left" class="wid">

			</el-date-picker>

			<el-input size="small" placeholder="请输入姓名/手机号/房号" v-model="input3" class="input-with-select">
				<el-button slot="append">搜索</el-button>
			</el-input>
			<div class="daxiaofen">
				<el-dropdown>
					<el-button type="primary" class="daxiao" size="small">
						导出<i class="el-icon-arrow-down el-icon--right"></i>
					</el-button>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			
		</div>
		<div class="table">
			<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 98%" @selection-change="handleSelectionChange" :header-cell-style="{background:'#fafafa',color:'#606266'}">
				<el-table-column type="selection" show-overflow-tooltip>
				</el-table-column>
				<el-table-column label="房型名称" show-overflow-tooltip>
					<template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column prop="name" label="房号" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="address" label="房客信息" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="didian" label="抵店时间" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="lidian" label="离店时间" show-overflow-tooltip>
				</el-table-column>
			</el-table>
		</div>
		<div class="fenye">
			<div class="block">
				<el-pagination background :current-page.sync="currentPage1" :page-sizes="[100, 200, 300, 400]" layout="total, sizes" :total="400">
				</el-pagination>
			</div>
			<div class="mar">
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="100" layout="prev, pager, next,sizes,jumper" :total="400">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'zhusujilu',
		data() {
			return {
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4,
				tableData: [{
					date: '涂轩大床房',
					name: '1004',
					address: '张三/132435442',
					didian:'2019-09-19 14:38-54',
					lidian:'2019-09-20 12:00-00' 
					
				}, {
					date: '涂轩大床房',
					name: '1004',
					address: '张三/132435442',
					didian:'2019-09-19 14:38-54',
					lidian:'2019-09-20 12:00-00' 
				}, {
					date: '涂轩大床房',
					name: '1004',
					address: '张三/132435442',
					didian:'2019-09-19 14:38-54',
					lidian:'2019-09-20 12:00-00' 
				}, {
					date: '涂轩大床房',
					name: '1004',
					address: '张三/132435442',
					didian:'2019-09-19 14:38-54',
					lidian:'2019-09-20 12:00-00' 
				}, {
					date: '涂轩大床房',
					name: '1004',
					address: '张三/132435442',
					didian:'2019-09-19 14:38-54',
					lidian:'2019-09-20 12:00-00' 
				}, {
					date: '涂轩大床房',
					name: '1004',
					address: '张三/132435442',
					didian:'2019-09-19 14:38-54',
					lidian:'2019-09-20 12:00-00' 
				}, {
					date: '涂轩大床房',
					name: '1004',
					address: '张三/132435442',
					didian:'2019-09-19 14:38-54',
					lidian:'2019-09-20 12:00-00' 
				}],
				multipleSelection: [],
				pickerOptions: {
					shortcuts: [{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
				value: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
				value2: '',
				input3:''
			};
		}
	};
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
	.border {
		margin-left: 30px;
		margin-top: 30px;
	}

	.el-select .el-input {
		width: 130px;
	}
.block{
	margin-top: 20px;
	margin-left: 20px;
}
	.input-with-select .el-input-group__prepend {
		background-color: #fff;
	}

	.input-with-select {
		margin-left: 40px;
		width: 270px;
	}

	.daxiao {
		background-color: white;
		color: #000000;
		width: 90px;
		border: 1px solid #E4E4E4;
	}
	.daxiaofen{
		margin-top: -32px;
		margin-left: 1000px;
	}

	.table {
		margin-top: 30px;
	}
	.fenye {
		margin-left: 100px;
	}
	
	.mar {
		margin-top: -30px;
		margin-left: 495px;
	}
	.wid{
		margin-top: 20px;
	}
	.el-table td,
	.el-table th {
		text-align: center;
	}
</style>
