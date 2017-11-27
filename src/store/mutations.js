import { Indicator } from 'mint-ui'

const mutations = {
  index(state, payload) {
    state.index = payload
    //console.log(state.index)
    Indicator.close()

  },
  allartists(state, payload) {
    state.allartists = payload
    //console.log(state.allartists)
    Indicator.close()
    scrollTo(0, 0)
  },
  account(state, payload) {
    state.account = payload
    console.log(payload)
  },
  commonds(state, payload) {
    state.commonds = payload
    //console.log(state.commonds)
    Indicator.close()
    scrollTo(0, 0)
  },
  chuArtists(state, payload) {
    state.chuArtists = payload
    //console.log(state.chuArtists)
    Indicator.close()
    scrollTo(0, 0)
  },
  projects(state, payload) {
    state.projects = payload
    //console.log(state.projects)
    Indicator.close()
    scrollTo(0, 0)
  },
  newworks(state, payload) {
    state.newworks = payload
    //console.log(state.newworks)
    Indicator.close()
    scrollTo(0, 0)
  },
  yesterday(state, payload) {
    state.yesterday = payload
    Indicator.close()
    //console.log(state.yesterday)
  },
  sevenday(state, payload) {
    state.sevenday = payload
    Indicator.close()
    //console.log(state.sevenday)
  },
  designs(state, payload) {
    state.designs = payload
    Indicator.close()
    //console.log(state.designs)
    scrollTo(0, 0)
  },
  collects(state, payload) {
    state.collects = payload
    //console.log(state.collects)
    // Indicator.close()
  },
  events(state, payload) {
    state.events = payload
    Indicator.close()
    //console.log(state.events)
  },
  qqun(state, payload) {
    state.qqun = payload
    Indicator.close()
    //console.log(state.qqun)
  },
  workdetail(state, payload) {
    state.workdetail = payload
    Indicator.close()
    //console.log(state.workdetail)
  },
  projectsdetail(state, payload) {
    state.projectsdetail = payload
    //console.log(payload)
    scrollTo(0, 0)
    Indicator.close()
  },
  accounts_works(state, payload) {
    state.accounts_works = payload
    scrollTo(0, 0)
    //console.log(state.accounts_works)
    Indicator.close()
  },
  collects_detail(state, payload) {
    state.collects_detail = payload
    scrollTo(0, 0)
    Indicator.close()
    //console.log(state.collects_detail)
  },
  search_work(state, payload) {
    state.search_work = payload
    scrollTo(0, 0)
    //console.log(state.search_work)
    Indicator.close()
  },
  search_design(state, payload) {
    state.search_design = payload
    scrollTo(0, 0)
    //console.log(state.search_design)
    Indicator.close()
  }
}


export default mutations
