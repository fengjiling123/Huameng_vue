import axios from 'axios'
const actions={
		banner(state,payload){
			axios.get(payload).then(res=>{
				//console.log(res.data)
				
			})
		},

		index(state,payload){
			axios.get(payload).then(res=>{
				//console.log(res)
				//console.log('index')
				console.log(state)
				state.commit('index',res.data)
				
			})
		},
		allartists(state,payload){
			axios.get(payload).then(res=>{
				//console.log('artists')
				//console.log(res)
				state.commit('allartists',res.data)
			})
		},
		account(state,payload){
			axios.get(payload).then(res=>{
				state.commit('account',res.data)
			})
		},
		commonds(state,payload){
			axios.get(payload).then(res=>{
				state.commit("commonds",res.data)
			})
		},
		chuArtists(state,payload){
			axios.get(payload).then(res=>{
				state.commit('chuArtists',res.data)
			})
		},
		projects(state,payload){
			axios.get(payload).then(res=>{
				state.commit('projects',res.data)
			})
		},
		newworks(state,payload){
			axios.get(payload).then(res=>{
				state.commit("newworks",res.data)
			})
		},
		yesterday(state,payload){
			axios.get(payload).then(res=>{
				state.commit('yesterday',res.data)
			})
		},
		sevenday(state,payload){
			axios.get(payload).then(res=>{
				state.commit('sevenday',res.data)
			})
		},
		designs(state,payload){
			axios.get(payload).then(res=>{
				state.commit('designs',res.data)
			})
		},
		collects(state,payload){
			axios.get(payload).then(res=>{
				state.commit('collects',res.data)
			})
		},
		events(state,payload){
			axios.get(payload).then(res=>{
				state.commit('events',res.data)
			})
		},
		qqun(state,payload){
			axios.get(payload).then(res=>{
				state.commit("qqun",res.data)
			})
		},
		workdetail(state,payload){
			axios.get(payload).then(res=>{
				state.commit('workdetail',res.data)
			})
		},
		projectsdetail(state,payload){
			axios.get(payload).then(res=>{
				state.commit('projectsdetail',res.data)
			})
		},
		accounts_works(state,payload){

			axios.get(payload).then(res=>{
				state.commit("accounts_works",res.data)
			})
		},
		collects_detail(state,payload){
			axios.get(payload).then(res=>{
				state.commit('collects_detail',res.data)
			})
		},
		search_work(state,payload){
			axios.get(payload).then(res=>{
				state.commit("search_work",res.data)
			})
		},
		search_design(state,payload){
			axios.get(payload).then(res=>{
				state.commit("search_design",res.data)
			})
		}
	}

export default actions