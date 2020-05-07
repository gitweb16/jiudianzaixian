<template>
	<div class="ganan">
		<div class="pai1">
			<div><img src="../../../../public/img/jiantou.png" alt=""></div>
			<div><img src="../../../../public/img/jiantou.png" alt=""></div>
			<div><img src="../../../../public/img/jiantou.png" alt=""></div>
		</div>
		<div class="pai2">
			<div class="diyi">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="商品分类">
						<el-select v-model="formInline.region" placeholder="请选择">
							<el-option label="1" value="shanghai"></el-option>
							<el-option label="2" value="beijing"></el-option>
						</el-select>
						<el-select v-model="formInline.region" placeholder="请选择">
							<el-option label="1" value="shanghai"></el-option>
							<el-option label="2" value="beijing"></el-option>
						</el-select>

					</el-form-item>


					<el-form-item label="商品名称" prop="desc">
						<el-input type="text"></el-input>
					</el-form-item>
					<el-form-item label="商品货号" prop="desc">
						<el-input type="text"></el-input>
					</el-form-item>
					<h6 style="color: #efefef;margin: 5px;">如果不输入货号，我们将自动生辰一个唯一的货号</h6>
					<el-form-item label="商品货价" prop="desc">
						<el-input type="text"></el-input>
					</el-form-item>
				</el-form>
			</div>
			<div class="dier"><img src="../../../../public/img/liebian.jpg" alt="">
				<div class="tupu">
					<el-button type="primary">上传图片</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'shangpingbianji',
		data() {
			return {
				formInline: {
					user: '',
					region: ''
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

<style scoped>
	.ganan {
		border: 1px solid #efefef
	}

	.el-form-item {
		margin-bottom: 6px;
		margin-top: 2px 2px;
	}

	.ganan>div {
		display: inline-block;
	}

	.pai1 {
		background: #FCFCFC;
		width: 180px;
		border: 1px solid #efefef;
		margin-left: 11px;
	}

	.pai1>div {
		margin: 100px 0px;
	}

	.pai1>div:nth-of-type(2) {
		margin: 170px 0px;
	}

	.pai2 {
		width: 559px;

		vertical-align: top;
	}

	.diyi {
		vertical-align: top;
		width: 559px;
		margin-left: 251px;
		margin-top: 40px;
		margin-bottom: 20px;
	}

	.dier {
		margin-left: 31px;
	}

	.tupu {
		position: absolute;
		margin: -53px 0px 0px 20px
	}
</style>
