<template>
	<div class="xiaodatou">
		<span>
			<router-link tag="a" to="/publi/welcome">{{title}}</router-link>
		</span>							
		<span>
			<router-link tag="a" to="">返回</router-link>
		</span>
	</div>
</template>

<script>
	export default ({
		name: 'Header',
		props: {
			title: String,
			default: '首页'
		}
	})
</script>

<style scoped>
	/* 私有化属性 */
	.xiaodatou {
		background: #fff;
		margin: -4px 0px 0px 0px;
		padding: 6px;
		width: 100%
	}
	
	.xiaodatou>span:last-of-type {
		float: right
	}
</style>
