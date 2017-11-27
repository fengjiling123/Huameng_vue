import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
const store=new Vuex.Store({
	state:{
		index:null,
		allartists:null,
		account:null,
		commonds:null,
		chuArtists:null,
		projects:null,
		newworks:null,
		yesterday:[],
		sevenday:[],
		designs:null,
		collects:null,
		events:null,
		qqun:null,
		workdetail:null,
		projectsdetail:null,
		accounts_works:null,
		collects_detail:null,
		search_work:null,
		search_design:null
	},
	getters,
	actions,
	mutations,

})

export default store