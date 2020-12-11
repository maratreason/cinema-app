<template>
    <div class="card">
        <div class="card-image">
            <router-link :to="'/film/' + film.id">
                <img :src="imageUrl + film.poster_path" />
            </router-link>
            <span class="card-title">{{ film.title }}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red"
                ><i class="material-icons">add</i></a
            >
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
    },
    data() {
        return {
            imageUrl: "https://image.tmdb.org/t/p/w600_and_h900_bestv2"
        }
    },
};
</script>

<style lang="scss" scoped>
    .card-content {
        max-height: 130px;
        overflow-y: hidden;
        p {
            max-height: 90px;
            overflow-y: hidden;
        }
    }
</style>
