<template>
    <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" :src="imageUrl + film.poster_path" />
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4"
                >{{ film.original_title }}<i class="material-icons right">more_vert</i></span
            >
            <p class="descr">{{ film.overview }}</p>
            <p><a href="#">This is a link</a></p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            film: {},
            imageUrl: "https://image.tmdb.org/t/p/w600_and_h900_bestv2",
        };
    },
    mounted() {
        this.$http
            .get(
                `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=4237669ebd35e8010beee2f55fd45546`
            )
            .then((response) => response.json())
            .then((film) => {
                return (this.film = film);
            });
    },
};
</script>

<style lang="scss" scoped>
.descr {
    margin: 10px 0 30px !important;
}
</style>
