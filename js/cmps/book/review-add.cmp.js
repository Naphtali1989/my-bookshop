import { bookService } from '../../services/book-service.js';
import { eventBus, EVENT_SHOW_MSG } from '../../services/event-bus-service.js';

export default {
    props: ['book'],
    template: `
            <section class="review-section">
                <form>
                    <p>Your name:</p>
                    <input ref="theInput" type="text" placeholder="Enter your name please" v-model.trim="reviewerName" />
                    <p>Read at:</p>
                    <input type="date" v-model="readOn" />
                    <p>Book name: {{book.title}}</p>
                    <textarea type="text" maxLength="320" cols="70" rows="8" placeholder="Enter your review please" v-model.trim="currReview" ></textarea>
                    
                    <section class="ratings-section" >
                        <a v-for="index in 5" 
                        class="far fa-star" 
                        :class="{ 'fas fa-star checked': rating >= index }" 
                        @click="rateThis(index)"></a>
                    </section>
                    
                    <div class="form-submit-btns">
                        <button class="review-submit-btn" @click.prevent="saveReview">Submit review</button>
                        <button class="review-cancel-btn" @click="closeReview">cancel</button>
                    </div>
                </form>
            </section>
    `,
    data() {
        return {
            reviewerName: 'Book reader',
            currReview: '',
            rating: 0,
            readOn: null,
            isReviewing: false,
        }
    },
    computed: {

    },
    methods: {
        saveReview() {
            const review = {
                reviewerName: this.reviewerName,
                review: this.currReview,
                rating: this.rating,
                readOn: this.readOn
            };
            bookService.saveBookReview(this.book, review)
                .then(res => {
                    this.reviewerName = '';
                    this.currReview = '';
                    this.rating = 0;
                }).then(res => this.closeReview())
                .then(res => {
                    const msg = {
                        txt: 'You have succesfully reviewed this book!',
                        type: 'success'
                    }
                    eventBus.$emit(EVENT_SHOW_MSG, msg);
                })
                // .catch(err , console.log('There has been an Error: ', err));
        },
        closeReview() {
            this.$emit('submitted');
        },
        rateThis(diff) {
            this.rating = diff;
        }

    },
    mounted() {
        this.$refs.theInput.focus();
    }

}