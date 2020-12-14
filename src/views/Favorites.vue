<template>
  <div class="row">
        <div 
            class="col s12 m6 l6 xl4"
            v-for="film in favorites"
            :key="film.original_title"
        >
            <div>
                <Card :film="film.film" :filmId="film.film.id" />
            </div>
        </div>
    </div>
</template>

<script>
import Card from "@/components/Card";

export default {
    components: {
        Card,
    },
    data() {
        return {
            genre_ids: ''
        }
    },
    async mounted() {
        this.$store.dispatch("fetchFilms", {id: this.genre_ids.join(",").split(",").map(Number)});
    },
    computed: {
        films() {
            return this.$store.getters.films;
        },
        sortButtons() {
            return this.$store.getters.sortButtons;
        },
        favorites() {
            let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
            this.genre_ids = [...new Set(this.genre_ids)];
            return favorites;
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    margin-right: 10px;
}
</style>