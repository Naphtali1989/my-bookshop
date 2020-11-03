export default {
    props: ['book'],
    template: `
        <section class="book-preview" >
            <h4 class="book-preview-title">Title: {{book.title}}</h4>
            <h5 class="book-preview-price">Price: {{currency}} </h5>
            <img :src="imgUrl" />
            <button class="edit-btn" @click.stop="enterEditMode(book.id)">Edit</button>
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
            console.log('bookId is:', bookId)
            this.$router.push('/books/edit/' + bookId)
        }
    }
}