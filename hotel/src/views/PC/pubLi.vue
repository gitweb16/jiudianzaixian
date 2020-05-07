<template>
	<div id="pub">
		<div class="zhu">
			<div class="shouye">
				<span>
					<i class="el-icon-s-home"></i>
					首页
				</span>
				<span>
					用户昵称
					<i class="el-icon-caret-bottom"></i>
				</span>
			</div>
			<div class="yaozhule">

				<div>
					<div class="daohang">
						<li>
							<span >会员管理</span>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="publi/huiList/" >会员列表</router-link>
								</div>
							</div>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="">充值设置</router-link>
								</div>
							</div>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="">积分设置</router-link>
								</div>
							</div>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="/chonZhiJiLu">充值记录</router-link>
								</div>
							</div>
						</li>
						<li>
							<span>优惠卷</span>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="">优惠卷管理</router-link>
								</div>
							</div>
						</li>
						<li>
							<span>商品管理</span>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="">

										商品列表</router-link>
								</div>
							</div>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="">商品分类</router-link>
								</div>
							</div>
						</li>
						<li>
							<span>订单管理</span>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="/publi/shangpingdingdan">商品订单</router-link>
								</div>
							</div>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="/publi/kefangdingdan">客房订单</router-link>
								</div>
							</div>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="/publi/zhusujilu">住宿记录</router-link>
								</div>
							</div>
						</li>
						<li>
							<span>客房管理</span>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="/publi/fangtai">房态管理</router-link>
								</div>
							</div>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="">房型管理</router-link>
								</div>
							</div>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="/publi/fanghao">房号管理</router-link>
								</div>
							</div>
						</li>
						<li>
							<span>投诉建议管理</span>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="">投诉建议</router-link>
								</div>
							</div>

						</li>
						<li>
							<span>用户管理</span>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="/publi/userguanli">管理员列表</router-link>
								</div>
							</div>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="/publi/character">角色管理</router-link>
								</div>
							</div>
						</li>
						<li>
							<span>设置</span>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="">微信设置</router-link>
								</div>
							</div>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="">酒店设置</router-link>
								</div>
							</div>
							<div>
								<div class="mg">
									<i class="el-icon-picture"></i>
									<router-link tag="span" to="">其他设置</router-link>
								</div>
							</div>
						</li>
					</div>
				</div>
				<div>
					<div class="node">
						
						<div class="content">
							<!-- <p>欢迎使用华景酒店后台管理系统</p> -->
							<router-view></router-view>
						</div>
					</div>
					<div class="xiad">

					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script src=""></script>
<script>
	//import Hello from './components/HelloWorld.vue'
	//import Header from './components/publi/pub.vue'
	export default ({
		name: 'publi',
		data(){
			return{				
					title:'首页'							
			}
		},
		methods:{
			getTitle(value){
				console.log(value)
			}
		}
	})
</script>
<style lang="scss">
	* {
		font-size: 0.9375rem;
	}
.shouye {
		background: #F2F2F2;
		margin: 0px 0px 0.375rem;
		padding: 10px 0px;
	}
	
	.shouye span:first-of-type {
	
		margin-left: 73px;
	}
	
	.shouye span:last-of-type {
		float: right;
		margin-right: 30px;
	}
	.xiad {
		padding: 69px 31px 0px 0px;
		background: #FFF;
		width: 100%;
		margin-left: -24px;
	}

	.content {
		margin: 1rem 0.5rem;
		background: #fff;
		height: 704px;
		width: 100%;
	}

	.content p {
		text-align: center;
		padding-top: 35%;
		color: #999;
		font-size: 1.2rem !important;
		height: 312px;
	}

	.yaozhule {
		display: flex;
	}

	.zhu {
		background: #F2F2F2;
	}

	.shouye {
		background: #F2F2F2;
		margin: 0px 0px 0.375rem;
		padding: 10px 0px;
	}

	.shouye span:first-of-type {

		margin-left: 73px;
	}

	.shouye span:last-of-type {
		float: right;
		margin-right: 30px;
	}

	.daohang {
		list-style: none;
		display: inline-block;
		background: #fff;
		margin: -0.25rem 0px 0px 0.1875rem;
		padding: 0.625rem 2rem;

	}

	.daohang li {
		margin: 1.125rem 0px;
		cursor: pointer
	}

	.daohang li>span {
		color: #D5D4DA;
	}

	.mg {
		margin: 5px 10px 10px 30px;
		color: #6B5E53;
	}

	.mg span {
		margin: 10px;

	}

	.yaozhule>div:first-of-type {
		width: 17%;
	}

	.yaozhule>div:nth-of-type(2) {
		width: 82%;
	}

	.node {
		vertical-align: top;

		margin-left: -1.125rem;
	}

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
