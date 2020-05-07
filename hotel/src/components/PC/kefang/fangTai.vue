<template>
	<div class="main">
		<div class="heads">
			<el-select v-model="value" placeholder="请选择房型">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-date-picker v-model="value2" type="month" placeholder="选择月" class='mouth'>
			</el-date-picker>
		</div>
		<div class="center-cont">
			<el-calendar v-model="value3" id="calendar" class="rili" size='mini'>
				<template slot="dateCell" slot-scope="{date, data}">
					<!--自定义内容-->
					<div>
						<el-button type="text" @click="dialogFormVisible = true">
							<div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
							<div v-for="item in calendarData" :key='item.value' class="par">
								<div v-if="(item.months).indexOf(data.day.split('-').slice(1)[0])!=-1">
									<div v-if="(item.days).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
										<el-tooltip class="item" effect="dark" :content="item.things" placement="right">
											<div class="is-selected">{{item.things}}<br />{{item.cont}}</div>
										</el-tooltip>
									</div>
									<div v-else></div>
								</div>
								<div v-else></div>
							</div>
						</el-button>
					</div>
				</template>
			</el-calendar>
		</div>
		<el-dialog title="" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<span class="tiao">调整房态/房量</span>
				<el-form-item label="设置房态 :" :label-width="formLabelWidth">
					<el-radio v-model="radio" label="1">维持不变</el-radio>
					<el-radio v-model="radio" label="2">设置开房</el-radio>
					<el-radio v-model="radio" label="3">设置关房</el-radio>
				</el-form-item>
				<el-form-item label="设置房量 :" :label-width="formLabelWidth">
					<el-radio v-model="radio2" label="1">维持不变</el-radio>
					<el-radio v-model="radio2" label="2">设为</el-radio>
					<el-input placeholder="0" v-model="input2" size="small" class='inputsr'>
					<template slot="append">间</template>
					</el-input>
				</el-form-item>
				<span class="tiao">价格调整</span>
				<el-form-item label="价格" :label-width="formLabelWidth" class='items'><span style="color: red;">*</span> :
					<el-input v-model="form.name" autocomplete="off" style='width: 400px;' size="small" value='item.things'></el-input>
				</el-form-item>
				<el-form-item label="重复" :label-width="formLabelWidth"><span style="color: red;">*</span> :
					<el-select v-model="form.region" placeholder="仅当天" style='width: 400px;' size="small">
						<el-option label="仅当天" value="shanghai"></el-option>
						<el-option label="明天" value="beijing"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false" size="small">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false" size="small">保 存</el-button>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	export default {
		name: "fangtai",
		data() {
			return {
				options: [{
					value: '选项1',
					label: '途选大床房'
				}, {
					value: '选项2',
					label: '途享大床房'
				}, {
					value: '选项3',
					label: '途奢大床房'
				}, {
					value: '选项4',
					label: '途选双床房'
				}, {
					value: '选项5',
					label: '途客家庭房'
				}],
				value: '',
				value2: '',
				calendarData: [{
					months: ['05'],
					days: ['22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
					things: '￥304.00',
					cont: '余11间 / 售0间'
				}],
				value3: new Date(),
				dialogFormVisible: false,
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
				formLabelWidth: '120px',
				radio: '1',
				radio2: '1',
				input2:''
			}
		}
	}
</script>

<style>
	.tiao{
		font-weight: bold;
		margin-left: 20px;
		display: inline-block;
		height:40px;
		width: 520px;
		border-bottom: 1px solid #EBEEF5;
		line-height: 40px;
	}
	.el-dialog{
		width: 45%;
	}
	.el-calendar__header {
		display: none;
	}

	.main {
		width: 100%;
	}

	.mouth {
		margin-left: 15px;
	}

	.heads {
		margin-left: 30px;
		padding-top: 30px;

	}

	.calendar-day {
		color: #202535;
		line-height: 30px;
		font-size: 12px;
	}
     .par{
		position: relative;
		top: 0px;
		left: 0px;
		
	}
	.is-selected {
		color: black;
		font-size: 14px;
		
	}

	/* #calendar .el-button-group>.el-button:not(:first-child):not(:last-child):after {
		content: '当月';
	} */
	.el-calendar-table th {
		border-right: 1px solid #e4e4e4;
		border-top: 1px solid #e4e4e4;
		background-color: #f6fafe;
		font-weight: bold;
	}

	.el-calendar-table th:nth-of-type(1) {
		border-left: 1px solid #e4e4e4;
	}
	.inputsr{
		width: 200px;
		
	}
	.items{
		margin-top: 20px;
	}
	.dialog-footer{
		text-align: center;
	}
	.el-calendar-table__row td{
		width: 50px;
		height: 50px;
	}
</style>
