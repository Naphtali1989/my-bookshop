export default {
    template: `
        <section class="main-header">
            <div class="header-logo" @click="openHome()">My Book Store</div>
            <nav class="main-navbar"> 
                <router-link to="/">Home Page</router-link>
                <router-link to="/books">Our Books</router-link>
                <router-link to="/about">About</router-link>
            </nav>
        </section>
    `,
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        openHome() {
            this.$router.push('/')
        }
    },
}