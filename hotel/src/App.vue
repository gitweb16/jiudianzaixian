<template>
	<div id="app">
		<div>
			<Header></Header>
			<Hello></Hello>

			<el-row class="tac">
				<el-col :span="4">
					<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"  @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>导航一</span>
							</template>
							<el-menu-item-group>
								<template slot="title">分组一</template>
								<el-menu-item index="2-1">选项1</el-menu-item>
								<el-menu-item index="1-2">选项2</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="分组2">
								<el-menu-item index="1-3">选项3</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="1-4">
								<template slot="title">选项4</template>
								<el-menu-item index="1-4-1">选项1</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="2">
							<i class="el-icon-menu"></i>
							<span slot="title">导航二</span>
						</el-menu-item>
						
						<el-menu-item index="4">
							<i class="el-icon-setting"></i>
							<span slot="title">导航四</span>
						</el-menu-item>
					</el-menu>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import Hello from './components/HelloWorld.vue'
	import Header from './components/publi/header.vue'
	export default ({
		name: 'App',
		components: {
			Hello,
			Header
		},
		data() {
			return {
				value1: true,
				value2: true

			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}

	})
</script>
<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
