import { bookService } from '../services/book-service.js';
import bookList from '../cmps/book/book-list.cmp.js';
import bookFilter from '../cmps/book/book-filter.cmp.js';


export default {
    template: `
         <section v-if="books" class="book-app">
             <h2 class="secondary-title">Use the filter to find your books</h2>
             <book-filter  @filtered="setFilter"/>
             <p>*Click on a book to show details<br>
             or on the "Edit" button to edit</p>
             <router-link class="add-new-books-btn" to="/books/adder">Add a new book here!</router-link>
             <book-list :books="booksToShow" />
         </section>
         `,
    data() {
        return {
            books: null,
            filterBy: null,
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const txt = this.filterBy.byName.toLowerCase();
            return this.books.filter(book => book.title.toLowerCase().includes(txt) &&
                (
                    book.listPrice.amount > this.filterBy.fromPrice &&
                    book.listPrice.amount < this.filterBy.toPrice
                )
            )
        },
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
    },
    created() {
        bookService.getBooks()
            .then(books => this.books = books)
    },
    components: {
        bookList,
        bookFilter,
    }
}