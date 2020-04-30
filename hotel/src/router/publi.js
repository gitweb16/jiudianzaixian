export default {
	path: '/publi',
	component: () => import('../views/PC/pubLi.vue'),
	children: [{
		path: 'fanghao',
		component: () => import('../components/PC/kefang/fangHao.vue')
	}],
}
