const getters={
	indexprojects(state){
		return state.index?state.index.projects:[]
	},
	indexeancktop6(state){
		return state.index?state.index.rankTop6:[]
	},
	indexdesigis(state){
		return state.index?state.index.designs:[]
	},
	indexartists(state){
		return state.index?state.index.artists:[]
	},
	artistdata(state){
		return state.allartists?state.allartists.data:[]
	},
	artistpage(state){
		return state.allartists?state.allartists.page:''
	},
	artisttotalpage(state){
		return state.allartists?state.allartists.totalPage:''
	},
	commondsdata(state){
		return state.commonds?state.commonds.data:[]
	},
	commondspage(state){
		return state.commonds?state.commonds.page:''
	},
	commondstotalpage(state){
		return state.commonds?state.commonds.totalPage:''
	},
	chuArtistsdata(state){
		return state.chuArtists?state.chuArtists.data:[]
	},
	chuArtistspage(state){
		return state.chuArtists?state.chuArtists.page:''
	},
	chuArtiststotalpage(state){
		return state.chuArtists?state.chuArtists.totalPage:''
	},
	projectsdata(state){
		return state.projects?state.projects.data:[]
	},
	projectspage(state){
		return state.projects?state.projects.page:''
	},
	projectstotalpage(state){
		return state.projects?state.projects.totalPage:''
	},
	newworksdata(state){
		return state.newworks?state.newworks.data:[]
	},
	newworkspage(state){
		return state.newworks?state.newworks.page:''
	},
	newworkstotalpage(state){
		return state.newworks?state.newworks.totalPage:''
	},
	designsdata(state){
		return state.designs?state.designs.data:[]
	},
	designspage(state){
		return state.designs?state.designs.page:''
	},
	designstotalpage(state){
		return state.designs?state.designs.totalPage:''
	},
	collectsdata(state){
		return state.collects?state.collects.data:[]
	},
	collectspage(state){
		return state.collects?state.collects.page:''
	},
	collectstotalpage(state){
		return state.collects?state.collects.totalPage:''
	},
	eventsdata(state){
		return state.events?state.events.data:[]
	},
	eventspage(state){
		return state.events?state.events.page:''
	},
	eventstotalpage(state){
		return state.events?state.events.totalPage:''
	},
	accounts_worksdata(state){
		return state.accounts_works?state.accounts_works.data:[]
	},
	accounts_workspage(state){
		return state.accounts_works?state.accounts_works.page:''
	},
	accounts_workstotalpage(state){
		return state.accounts_works?state.accounts_works.totalPage:''
	},
	search_workdata(state){
		return state.search_work?state.search_work.data:[]
	},
	search_workpage(state){
		return state.search_work?state.search_work.page:''
	},
	search_worktotalpage(state){
		return state.search_work?state.search_work.totalPage:''
	},
	search_designdata(state){
		return state.search_design?state.search_design.data:[]
	},
	search_designpage(state){
		return state.search_design?state.search_design.page:''
	},
	search_designtotalpage(state){
		return state.search_design?state.search_design.totalPage:''
	}

}
export default getters