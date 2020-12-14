import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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
        }
    },
    actions: {
        async fetchFilms({ commit }, {id=28, sortBy="popularity.desc"}) {
            const res = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=4237669ebd35e8010beee2f55fd45546&with_genres=${id}&sort_by=${sortBy}`
            );
            const films = await res.json();

            commit("loadFilms", films.results);
        },
        async fetchGenres({ commit }) {
            const res = await fetch(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=4237669ebd35e8010beee2f55fd45546`
            );
            const genres = await res.json();
            commit("loadGenres", genres.genres);
        },
        setCurrentGenre({ commit }, id) {
            commit("setGenre", id);
        }
    },
    getters: {
        films: (st) => st.films,
        genres: (st) => st.genres,
        sortName: (st) => st.sortName,
        sortButtons: (st) => st.sortButtons,
    },
    modules: {},
});
