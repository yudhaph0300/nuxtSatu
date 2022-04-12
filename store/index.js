import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'


Vue.use(Vuex)

// const persistedstate = createPersistedState({
//   paths: ["newsList"]
// })

export const state = () => ({
    newsList: [],
})
  
// contains your mutations
export const mutations = {
    setNewsList(state, payload){
        state.newsList = payload
    }
}

// contains your actions
export const actions = {
    fetchNews(store, keyword) {
        axios.get("https://newsapi.org/v2/everything?q="+ keyword + "&apiKey=f310f9860bd548daaf467f3d7ba56f51").then((response) => {
            store.commit("setNewsList", response.data.articles)
        })
    }
}