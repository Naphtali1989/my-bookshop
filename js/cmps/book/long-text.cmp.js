export default {
    props: ['txt'],
    template: `
        <section >
            <p class="book-desc">{{showDesc}}
                <button class="toggle-words-btn" @click="toggleDesc">{{changeButtonTxt}}</button>
            </p>
        </section>
    `,
    data() {
        return {
            isDescFull: false,
        }
    },
    computed: {
        showDesc() {
            if (this.isDescFull) return this.txt
            return this.txt.substring(0, 100) + '...';
        },
        changeButtonTxt() {
            if (!this.isDescFull) return 'Show more...';
            else return 'Show less';
        },
    },
    methods: {
        toggleDesc() {
            this.isDescFull = !this.isDescFull
        }
    },
}