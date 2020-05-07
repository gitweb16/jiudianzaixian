<template>
	<el-form :inline="true" :model="formInline" class="demo-form-inline">
		<el-form-item>
			<el-select v-model="formInline.user" placeholder="账号">
				<el-option label="" value="shanghai"></el-option>
				<el-option label="" value="beijing"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item>
			<el-input v-model="formInline.content" placeholder="请输入搜索内容"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">查询</el-button>
		</el-form-item>
	</el-form>
</template>
<script>
	export default {
		data() {
			return {
				formInline: {
					user: '',
					content: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			}
		}
	}
</script>
<style></style>
