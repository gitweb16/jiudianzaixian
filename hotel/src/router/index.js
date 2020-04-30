import Vue from 'vue'
import VueRouter from 'vue-router'
import publi from './publi.js'

Vue.use(VueRouter)



export default new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [	
		publi,
		{
			path: '/*',
			redirect:'/publi'
		}

	]
})



