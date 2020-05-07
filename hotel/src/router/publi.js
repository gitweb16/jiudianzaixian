export default {
	path: '/publi',
	component: () => import('../views/PC/pubLi.vue'),
	children: [{
			path: 'fanghao',
			component: () => import('../components/PC/kefang/fangHao.vue')
		}, {
			path: 'fangtai',
			component: () => import('../components/PC/kefang/fangTai.vue')
		},
		{
			path: 'huiList',
<<<<<<< HEAD
			component: ()=>import ('../components/PC/huiyuan/huiList.vue')
		}
		,
=======
			component: () => import('../components/PC/huiyuan/huiList.vue')
		},
>>>>>>> f64edd13242423fbe55468b0a557326c983d0251
		{
			path: 'userguanli',
			component: () => import('../views/PC/userGuanLi.vue')
		},
		{
			path: 'character',
			component: () => import('../views/PC/character.vue'),

		},
		{
			path: 'cha',
			component: () => import('../components/PC/admin/characterae.vue')

<<<<<<< HEAD
		},{
		path: 'kefangdingdan',
		component: () => import('../components/PC/dindan/keFangDingDan.vue')
		},{
		path: 'shangpingdingdan',
		component: () => import('../components/PC/dindan/shangPingDingDan.vue')
		},{
		path: 'zhusujilu',
		component: () => import('../components/PC/dindan/zhuShuJiLu.vue')
=======
		}, {
			path: 'kefangdingdan',
			component: () => import('../components/PC/dindan/keFangDingDan.vue')
		}, {
			path: 'shangpingdingdan',
			component: () => import('../components/PC/dindan/shangPingDingDan.vue')
		}, {
			path: 'zhusujilu',
			component: () => import('../components/PC/dindan/zhuShuJiLu.vue')
		},
		{
			path: 'youhui',
			component: () => import('../views/PC/youHuiJuan.vue')
		},
		{
			path: 'shangplist',
			component: () => import('../components/PC/shangping/shangpingList.vue')
		},
		{
			path: 'shangpType',
			component: () => import('../components/PC/shangping/shangpingType.vue')
		},
		
		{
			path: 'shangpingbianji',
			component: () => import('../components/PC/shangping/shangpingbianji.vue')
		},
		{
			path: '/*',
			redirect: '/publi/welcome'
>>>>>>> f64edd13242423fbe55468b0a557326c983d0251
		}
	]
}
