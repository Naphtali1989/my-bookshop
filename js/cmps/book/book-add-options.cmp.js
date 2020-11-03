import bookOption from './book-option.cmp.js';

export default {
    name: 'book-add-options',
    props: ['options'],
    template: `
                <section class="book-add-options">
                    <h2>Here are some options to add:</h2>
                    <ul class="book-options">
                        <li v-for="option in options" :key="option.id" >
                            <book-option :book="option" />
                        </li>
                    </ul>
                </section>
                `,
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        bookOption,
    }
}