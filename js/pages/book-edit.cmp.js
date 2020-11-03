import { bookService } from '../services/book-service.js';
import { eventBus, EVENT_SHOW_MSG } from '../services/event-bus-service.js';

export default {
    template: `
        <section v-if="showEdit" class="book-edit">
            <h1 class="book-edit-title">book Edit</h1>
            <form  @submit.prevent="saveChanges">
                <div class="edit-form">        
                    <div class="edit-form-section1">
                        <div>
                            <p>Book name: {{book.title}}</p>
                            <input type="text" placeholder="Book Name" v-model="bookToEdit.title" />
                        </div>
                        <div>
                            <p>Book price: {{book.listPrice.amount}}</p>
                            <input type="number" placeholder="Price" v-model.number="bookToEdit.listPrice.amount" />
                        </div>
                        <div>
                            <p>Book subtitle: {{book.subtitle}}</p>
                            <input type="text" placeholder="Book subtitle" v-model="bookToEdit.subtitle" />
                        </div>
                        <div>
                            <p>Book authors: {{book.authors}}</p>
                            <input type="text" placeholder="array" v-model="bookToEdit.authors" />
                        </div>
                        <div>
                            <p>Book publish year: {{book.publishedDate}}</p>
                            <input type="number" placeholder="Year" v-model.number="bookToEdit.publishedDate" />
                        </div>
                    </div>
                    <hr>
                    <div class="edit-form-section2">
                        <div>
                            <p>Book page count: {{book.pageCount}}</p>
                            <input type="number" placeholder="Page count" v-model.number="bookToEdit.pageCount" />
                        </div>
                        <div>
                            <p>Book categories: {{book.categories}}</p>
                            <input type="text" placeholder="array" v-model="bookToEdit.categories" />
                        </div>
                        <div>
                            <p>Book thumbnail: {{book.thumbnail}}</p>
                            <input type="text" placeholder="thumbnail" v-model="bookToEdit.thumbnail" />
                        </div>
                        <div>
                            <p>Book language: {{book.language}}</p>
                            <input type="text" placeholder="Language" v-model="bookToEdit.language" />
                        </div>
                        <div>
                            <p>Is the book currently on sale?</p>
                            <input type="checkbox" v-model="bookToEdit.listPrice.isOnSale" />
                        </div>
                    </div>
                </div>
                    <div class="edit-form-section3">
                        <p>Book description: {{book.description}}</p>
                        <textarea type="text" maxLength="320" cols="70" rows="8" placeholder="Description" v-model="bookToEdit.description" ></textarea>
                    </div>
                <div class="edit-form-section4">
                    <button class="btn save-btn" @click="saveChanges">Save Changes</button>
                    <button class="btn discard-btn" @click="closeEditMode">Discard Changes</button>
                </div>
            </form>            
        </section>
    `,
    data() {
        return {
            bookToEdit: null,
            book: null,
        }
    },
    computed: {
        showEdit() {
            return this.bookToEdit || this.book
        }
    },
    methods: {
        saveChanges() {
            bookService.editBook(this.bookToEdit);
            const msg = {
                txt: 'You have succesfully edited this book!',
                type: 'success'
            }
            eventBus.$emit(EVENT_SHOW_MSG, msg);
            this.closeEditMode();
        },
        closeEditMode() {
            this.$router.push('/book');
        }
    },
    created() {
        const id = this.$route.params.bookId;
        bookService.getBookById(id)
            .then(book => {
                this.book = book;
                this.bookToEdit = JSON.parse(JSON.stringify(book))
                this.isSale = this.book.listPrice.isOnSale;
            })
    }
}