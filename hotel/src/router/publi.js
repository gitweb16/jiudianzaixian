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
			component: () => import('../components/PC/huiyuan/huiList.vue')
		},
		{
			path: 'chongzjl',
			component: () => import('../components/PC/huiyuan/chonZhiJiLu.vue')
		},
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
			path: 'welcome',
			component: () => import('../components/PC/welcome/welcome.vue')
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
		}, {
			path: 'fangxin',
			component: () => import('../components/PC/kefang/fangXin.vue')
		}, {
			path: 'addfangxin',
			component: () => import('../components/PC/kefang/addfangXin.vue')
		},
		{
			path: '/*',
			redirect: '/publi/welcome'
		}
	]
}
