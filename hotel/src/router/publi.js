export default {
	path: '/publi',
	component: () => import('../views/PC/pubLi.vue'),
	children: [{ //房号
			path: 'fanghao',
			component: () => import('../components/PC/kefang/fangHao.vue')
		},
		{ //房号
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
		},
		{
			path: '/*',
			redirect: '/publi/welcome'
		}
	],

}
