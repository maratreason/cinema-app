<template>
    <div class="row">
      <div class="col s12" style="margin-bottom:20px;">
        <button class="btn blue darken-3">По популярности</button>
        <button class="btn blue darken-3">По рейтингу</button>
        <button class="btn blue darken-3">По новизне</button>
      </div>
        <div class="col s12 m6 l6 xl4" v-for="film in films" :key="film.id">
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
    },
    async mounted() {
        this.$store.dispatch("fetchFilms", this.$route.params.id);
    },
};
</script>

<style lang="scss" scoped>
  button {
    margin-right: 10px;
  }
</style>
