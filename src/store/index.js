import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const api_key = "5f25842e6f31af00379cb3d4";

export default new Vuex.Store({
    state: {
        films: [],
        genres: [],
        sortButtons: [
            { id: 1, title: "По популярности", sortBy: "popularity.desc" },
            { id: 2, title: "По рейтингу", sortBy: "vote_average.desc" },
            { id: 3, title: "По новизне", sortBy: "release_date.desc" },
        ],
    },
    // стейт меняется через mutations
    mutations: {
        loadFilms(state, payload) {
            state.films = payload;
        },
        loadGenres(state, payload) {
            state.genres = payload;
        },
        setFilms(state, payload) {
            state.films = payload;
        }
    },
    actions: {
        async fetchFilms({ commit }, {id=28, sortBy="popularity.desc"}) {
            const res = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${id}&sort_by=${sortBy}`
            );
            console.log("res", res)
            const films = await res.json();

            commit("loadFilms", films.results);
        },
        async fetchGenres({ commit }) {
            const res = await fetch(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`
            );
            console.log("res", res)
            const genres = await res.json();
            commit("loadGenres", genres.genres);
        },
        setCurrentGenre({ commit }, id) {
            commit("setGenre", id);
        },
        async searchFilms({ commit }, searchText) {
            const res = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`
            );
            const result = await res.json();
            commit("setFilms", result.results);
        },
    },
    getters: {
        films: (st) => st.films,
        genres: (st) => st.genres,
        sortName: (st) => st.sortName,
        sortButtons: (st) => st.sortButtons,
    },
    modules: {},
});
