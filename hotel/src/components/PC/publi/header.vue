<template>
	<div id="header" >
		<span>
			<router-link tag="a" to="">{{title}}</router-link>
		</span>
		<span>
			<router-link tag="a" to="">返回</router-link>
		</span>
	</div>
</template>

<script>
	export default{
		name:'header',
		data(){
			return{				
					title:'首页'							
			}
		}
	}
</script>

<style>
	#header {
		background: #fff;
		margin: -4px 0px 0px 0px;
		padding: 6px;
		width: 100%;
		margin-bottom: 5px;
	}
	
	#header>span:last-of-type {
		float: right
	}
</style>
