export default {
    template: `
    <section class="book-filter">
        <input type="text" v-model="filterBy.byName" placeholder="Search by name" @input="emitFilter" />
        or:
        <input type="number" v-model="filterBy.fromPrice" placeholder="from price" @input="emitFilter" />
        <input type="number" v-model="filterBy.toPrice" placeholder="to price" @input="emitFilter" />
    </section>
`,
    data() {
        return {
            filterBy: { byName: '', fromPrice: -Infinity, toPrice: Infinity }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}