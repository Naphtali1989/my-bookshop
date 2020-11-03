import { eventBus, EVENT_SHOW_MSG } from '../../services/event-bus-service.js'

export default {
    template: `
        <section v-if="msg" class="user-msg" :class="msg.type">
            <p>{{msg.txt}}</p>
            <button @click="closeMsg">x</button>
        </section>
    `,
    data() {
        return {
            msg: null,
            timer: null
        }
    },
    methods: {
        closeMsg() {
            this.msg = null
        }
    },
    created() {
        eventBus.$on(EVENT_SHOW_MSG, msg => {
            this.msg = msg;
            if (this.timer) clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.closeMsg();
            }, 3000)
        })
    }
}