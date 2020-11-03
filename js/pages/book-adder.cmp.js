import { bookService } from '../services/book-service.js';
import bookAddOptions from '../cmps/book/book-add-options.cmp.js';

export default {
    name: 'book-adder',
    template: `
         <section class="book-adder">
             <h2 class="secondary-title">The book adder</h2>
             <input ref="txtInput" type="text" placeholder="Search for books" class="book-adder-search-txt-input" v-model="term"/>
             <p>*requiered ^</p>
             <input type="text" placeholder="Search by author" class="book-adder-search-auth-input" v-model="author"/> 
             <p>*not requiered ^</p>
             <button class="submit-google-search-btn" @click="activateGoogleSearch">Search with Google</button>

             <book-add-options :options="results" v-if="results" />

         </section>
         `,
    data() {
        return {
            term: null,
            author: null,
            results: null
        }
    },
    computed: {

    },
    methods: {
        activateGoogleSearch() {
            if (!this.term) return console.log('no term stated!')
            bookService.queryGoogleBooks(this.term, this.author)
                .then(res => this.results = res)
        }
    },
    mounted() {
        this.$refs.txtInput.focus();
    },
    components: {
        bookAddOptions,
    }
}