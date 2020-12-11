<template>
    <div id="app">
        <Navbar />
        <div class="container">
            <div class="row">
                <div class="col s3">
                    <Sitebar />
                </div>
                <div class="col s9">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Sitebar from "./components/Sitebar";

export default {
    components: {
        Navbar,
        Sitebar,
    },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
</style>
