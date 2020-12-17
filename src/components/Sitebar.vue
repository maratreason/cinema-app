<template>
    <div class="collection">
        <router-link 
            class="collection-item"
            v-for="genre of genres"
            tag="a"
            active-class="active"
            :to="'/films/' + genre.id"
            :key="genre.id"
        ><div @click="updateFilmsList(genre.id)">{{ genre.name }}</div></router-link>
    </div>
</template>

<script>
export default {
    async mounted() {
        this.$store.dispatch("fetchGenres");
    },
    methods: {
        updateFilmsList(id) {
            this.$store.dispatch("fetchFilms", {id});
        }
    },
    computed: {
        genres() {
            return this.$store.getters.genres;
        }
    },
};
</script>

<style lang="scss" scoped>
.collection {
    margin-top: 0;
    .collection-item {
        color: #1565c0;
        &.active {
            background-color: #1565c0;
        }
    }

    @media screen and (max-width: 992px) {
        display: none;
    }
}
</style>
