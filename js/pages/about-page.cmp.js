export default {
    template: `
        <section class="about-page">
            <h1 >Nothing to see here yet</h1>
            <h2>Work in progress</h2>
        </section>
    `,
    data() {
        return {
            aboutInterval: null,
        }
    },
    created() {
        this.aboutInterval = setInterval(() => {
            console.log('Why cant we read more books?');
        }, 1000);
    },
    destroyed() {
        clearInterval(this.aboutInterval);
        console.log('Exited about');
    }
}