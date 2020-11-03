export default {
    props: ['review'],
    template: `
            <section class="book-review">
                <h3>Name: {{review.reviewerName}}</h3>
                <h4>rating: <section class="ratings-section" >
                        <span v-for="index in 5" 
                        class="far fa-star" 
                        :class="{ 'fas fa-star checked': review.rating >= index  }">
                        </span>
                    </section>
                </h4>
                <h5>Read at: {{review.readOn}}</h5>
                <p>review: "{{review.review}}"</p>
                <button class="delete-review-btn" @click="emitDeleteReview">X</button>
            </section>
            `,
    methods: {
        emitDeleteReview() {
            this.$emit('deleted', this.review.id);
        }
    }

}