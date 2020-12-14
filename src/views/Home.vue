<template>
    <div class="row">
        <div class="col s12" style="margin-bottom:20px;">
            <button
                class="btn blue darken-3"
                v-for="button of sortButtons"
                :key="button.id"
                @click="setSorting(button.sortBy)"
            >
                {{ button.title }}
            </button>
        </div>
        <div class="col s12 m6 l6 xl4" v-for="film in films" :key="film.original_title">
            <Card :film="film" />
        </div>
    </div>
</template>

<script>
import Card from "@/components/Card";

export default {
    components: {
        Card,
    },
    computed: {
        films() {
            return this.$store.getters.films;
        },
        sortButtons() {
            return this.$store.getters.sortButtons;
        }
    },
    async mounted() {
        this.$store.dispatch("fetchFilms", {id: this.$route.params.id});
    },
    methods: {
        setSorting(sortBy) {
            this.$store.dispatch("fetchFilms", {id: this.$route.params.id, sortBy});
        }
    },
};
</script>

<style lang="scss" scoped>
button {
    margin-right: 10px;
}
</style>
