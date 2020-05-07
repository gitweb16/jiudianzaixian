<template>
	<div class="main">
		<Header title="房态管理"></Header>
		<div class="heads">
			<el-select v-model="value" placeholder="请选择房型">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-date-picker v-model="value2" type="month" placeholder="选择月" class='mouth'>
			</el-date-picker>
		</div>
		<div class="center-cont">
			<el-calendar v-model="value3" id="calendar" class="rili">
				<template slot="dateCell" slot-scope="{date, data}">
					<!--自定义内容-->
					<div>
						<div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
						<div v-for="item in calendarData" :key='item.value'>
							<div v-if="(item.months).indexOf(data.day.split('-').slice(1)[0])!=-1">
								<div v-if="(item.days).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
									<el-tooltip class="item" effect="dark" :content="item.things" placement="right">
										<div class="is-selected">{{item.things}}<br/>{{item.cont}}</div>
									</el-tooltip>
								</div>
								<div v-else></div>
							</div>
							<div v-else></div>
						</div>
					</div>
				</template>
			</el-calendar>
		</div>
	</div>
</template>

<script>
	import Header from '../publi/header.vue'
	export default {
		name: "fangtai",
		components: {
			Header
		},
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
				calendarData: [
					{
						months: ['05'],
						days: ['22','23','24','25','26','27','28','29','30','31'],
						things: '￥304.00',
						cont:'余11间 / 售0间'
					}
				],
				value3: new Date()
			}
		}
	}
</script>

<style>
	.el-calendar__header{
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
	.is-selected {
		font-size: 14px;
		margin-left: 58px;
	}
	/* #calendar .el-button-group>.el-button:not(:first-child):not(:last-child):after {
		content: '当月';
	} */ 
	.el-calendar-table th{
		border-right: 1px solid #e4e4e4;border-top: 1px solid #e4e4e4;
		background-color: #f6fafe;
		font-weight: bold;
	}
	.el-calendar-table th:nth-of-type(1){
		border-left: 1px solid #e4e4e4;
		}
</style>