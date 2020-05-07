<template>
	<div class='main'>
		<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
			<span class="tiao">基本信息</span>
			<div class="cent">
				<el-form-item label="房型名称" prop="age"><span style="color: red;">*</span> :
					<el-input type="text" placeholder="请输入房型名称" v-model="text" maxlength="10" show-word-limit size='small'></el-input>
				</el-form-item>
				<el-form-item label="售价" prop="age"><span style="color: red;">*</span> :
					<el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off" size='small' placeholder='￥0.00'><template
						slot="append">元</template></el-input>
					<br /><span class="sp01">未设置价格日历时，默认使用此价格</span>
				</el-form-item>
				<el-form-item label="房型面积" prop="age"><span style="color: red;">*</span> :
					<el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off" size='small' placeholder='0'><template
						slot="append">m²</template></el-input>
				</el-form-item>
				<el-form-item label="可住人数" prop="age"><span style="color: red;">*</span> :
					<el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off" size='small' placeholder='2'><template
						slot="append">人</template></el-input>
				</el-form-item>
			</div>
			<span class="tiao">展示信息</span>
			<div class="cent">
				<el-form-item label="房型图片" prop="age"><span style="color: red;">*</span> :
					<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview"
					:on-remove="handleRemove">
						<i class="el-icon-plus"><br/><i style="font-size: 12px;">上传</i></i>
					</el-upload>
					<el-dialog :visible.sync="dialogVisible">
						<img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>
				</el-form-item>
				<span class="sp">支持jpg.jpeg.bmp.png格式,大小不超过2M,最多上传20张,建议尺寸:750px * 375px</span>
				<el-form-item label="房型介绍" prop="age" style="margin-top: 20px;"><span style="color: red;">*</span> :
					<el-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="30" show-word-limit style="width: 420px;"></el-input>
				</el-form-item>
				<el-form-item label="房型标签" prop="age"><span style="color: red;">*</span> :
					<el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
						{{tag}}
					</el-tag>
					<el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"
					@keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
					</el-input>
					<el-button v-else type="text" size="small" @click="showInput" style="margin-left: 20px;">添加</el-button>
				</el-form-item>
				<el-form-item label="可否加床" prop="age">:
					<el-radio v-model="radio" label="1">不可加床</el-radio>
					<el-radio v-model="radio" label="2">免费加床</el-radio>
				</el-form-item>
				<el-form-item label="是否含早" prop="age">:
					<el-radio v-model="radio2" label="1">不含早</el-radio>
					<el-radio v-model="radio2" label="2">含早</el-radio>
				</el-form-item>
			</div>
			<span class="tiao">配套服务</span>
			<div class="cent">
				<el-row>
					<el-button plain style="border: 1px solid dodgerblue;">添加配套服务</el-button>
				</el-row>
			</div>
			<el-form-item style='text-align: center;margin-top: 10px;'>
				<router-link to="/publi/addfangxin">
					<router-link to="/publi/fangXin"><el-button plain size="small" style="margin-right: 20px;">返 回</el-button></router-link>
				</router-link>
				<el-button type="primary" @click="submitForm('numberValidateForm')" size="small">保 存</el-button>
			</el-form-item>
		</el-form>

	</div>
</template>
<script>
	export default {
		name: 'addfangxin',
		data() {
			return {
				numberValidateForm: {
					age: ''
				},
				text: '',
				textarea: '',
				dynamicTags: ['官方直销', '今日特惠', '标签名称'],
				inputVisible: false,
				inputValue: '',
				radio: '1',
				dialogImageUrl: '',
				dialogVisible: false,
				radio2:'1'
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			handleClose(tag) {
				this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			}
			/* ,
						showInput() {
						this.inputVisible = true;
						this.$nextTick(_=>{this.$refs.saveTagInput.$refs.input.focus();});
						} */
		}
	}
</script>

<style scoped="scoped">
	.main {
		width: 95%;
	}
	.el-tag{
		background-color: white;
		margin-left: 20px;
	}
	.tiao {
		margin-left: 50px;
		margin-top: 5px;
		display: inline-block;
		height: 40px;
		width: 820px;
		border-bottom: 1px solid #EBEEF5;
		line-height: 40px;
	}

	.sp01 {
		display: inline-block;
		margin-left: 35px;
		color: #b8b8b8;
		height: 10px;
		margin-top: -20px;
	}

	/*.input1 .el-input-group__append{
		border-left: none;
		background-color: white;
	}
	.input1,.input2{
		width: 400px;
	}
	.con-cen{
		margin-left: 50px;
		margin-top: 20px;
	} */

	.el-input {
		width: 400px;

	}

	.el-form-item {
		margin-top: -15px;
	}

	.cent {
		margin-left: 80px;
		margin-top: 30px;
	}

	.sp {
		display: inline-block;
		width: 280px;
		margin-left: 100px;
	}
</style>
