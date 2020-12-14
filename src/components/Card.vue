<template>
    <div class="card">
        <div class="card-image">
            <router-link :to="'/film/' + film.id">
                <img v-if="film.poster_path" :src="imageUrl + film.poster_path" />
                <img v-else :src="defaultImageUrl" />
            </router-link>
            <span class="card-title">{{ film.title }}</span>

            <a 
                v-if="favorites.find(el => el.id === film.id)"
                class="btn-floating halfway-fab waves-effect waves-light red"
                @click="removeFromFavorites(film.id)"
            >
                <i class="material-icons amber darken-2" title="Remove from favorites">remove</i>
            </a>

            <a v-else
                class="btn-floating halfway-fab waves-effect waves-light red"
                @click="addToFavorites(film.id, film.genre_ids, film)"
            >
                <i  class="material-icons" title="Add to favorites">add</i>
            </a>
        </div>
        <div class="card-content">
            <p>
                {{ film.overview }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        film: Object,
        filmId: Number
    },
    data() {
        return {
            imageUrl: "https://image.tmdb.org/t/p/w600_and_h900_bestv2",
            defaultImageUrl: require("../assets/images/default_image.jpg"),
            favorites: JSON.parse(localStorage.getItem("favorites") || "[]")
        }
    },
    methods: {
        addToFavorites(id, genre_ids, film) {
            let favoritesArray = JSON.parse(localStorage.getItem("favorites") || "[]");
            const obj = {
                id,
                genre_ids,
                film
            }
            if (!favoritesArray.includes(id)) {
                favoritesArray.push(obj);
            }
            localStorage.setItem("favorites", JSON.stringify(favoritesArray));
            this.favorites = favoritesArray;
        },
        removeFromFavorites(id) {
            let favoritesArray = JSON.parse(localStorage.getItem("favorites") || "[]");
            let updatedFavorites = favoritesArray.filter(el => el.id !== id);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            this.favorites = updatedFavorites;
        }
    },
};
</script>

<style lang="scss" scoped>
    .card-content {
        height: 130px;
        overflow-y: hidden;
        p {
            max-height: 90px;
            overflow-y: hidden;
        }
    }
</style>
