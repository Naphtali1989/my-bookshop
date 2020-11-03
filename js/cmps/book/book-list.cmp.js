import bookPreview from './book-preview.cmp.js';

export default {
    props: ['books'],
    template: `
        <section class="container">
            <ul class="book-list">
                <li v-for="book in books" :key="book.id" >
                    <book-preview :book="book" @click.native="openDetails(book.id)" @deletedBook="emitDelete(book.id)"/>
                </li>
            </ul>
        </section>
    `,
    methods: {
        openDetails(bookId) {
            this.$router.push('/books/' + bookId);
        },
        emitDelete(bookId) {
            this.$emit('deleteBook', bookId)
        }
    },
    components: {
        bookPreview,
    }
}