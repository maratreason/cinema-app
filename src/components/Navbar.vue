<template>
    <nav class="blue darken-3">
        <div class="container">
            <div class="row">
                <div class="col s12 nav-wrapper">
                    <a href="#" class="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <router-link tag="li" to="/" exact active-class="active"
                            ><a>Home</a></router-link
                        >
                        <router-link tag="li" to="/favorites" exact active-class="active"
                            ><a>Favorites</a></router-link
                        >
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
    nav {
        margin-bottom: 50px;
    }
</style>
