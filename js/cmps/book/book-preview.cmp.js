export default {
    props: ['book'],
    template: `
        <section class="book-preview" >
            <img class="preview-img" :src="imgUrl" />
            <button class="edit-btn" @click.stop="enterEditMode(book.id)">Edit</button>
            <h4 class="book-preview-title">Title: {{book.title}}</h4>
            <h5 class="book-preview-price">Price: {{currency}} </h5>
            <button class="delete-book-btn" @click.stop="emitDeleteBook()">Delete</button>
        </section>
    `,
    computed: {
        imgUrl() {
            return this.book.thumbnail;
        },
        currency() {
            return this.book.listPrice.amount.toLocaleString(this.book.language, {
                style: 'currency',
                currency: this.book.listPrice.currencyCode
            });
        },
    },
    methods: {
        enterEditMode(bookId) {
            this.$router.push('/books/edit/' + bookId);
        },
        emitDeleteBook() {
            this.$emit('deletedBook');
        }
    }
}