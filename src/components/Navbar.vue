<template>
    <nav class="blue darken-3">
        <div class="container">
            <div class="row">
                <div class="col s12 nav-wrapper">
                    <a href="#" class="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-menu" class="sidenav-trigger"
                        ><i class="material-icons">menu</i></a
                    >
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <router-link tag="li" to="/" exact active-class="active"
                            ><a>Home</a></router-link
                        >
                        <router-link tag="li" to="/favorites" exact active-class="active"
                            ><a>Favorites</a></router-link
                        >
                    </ul>
                </div>
                <ul class="sidenav" id="mobile-menu" ref="mobileMenu">
                    <router-link tag="li" to="/" exact active-class="active"
                        ><a>Home</a></router-link
                    >
                    <router-link tag="li" to="/favorites" exact active-class="active"
                        ><a>Favorites</a></router-link
                    >
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    mounted() {
        M.Sidenav.init(this.$refs.mobileMenu, {});
    },
};
</script>

<style lang="scss" scoped>
nav {
    margin-bottom: 50px;
}
.sidenav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: #1565c0;
    color: #fff;
    li {
        a {
            font-size: 1.6rem;
            padding: 16px;
            height: 100%;
            color: #fff;
        }
    }
}
</style>
