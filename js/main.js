import headCmp from './cmps/site-cmps/head-cmp.cmp.js';
import footCmp from './cmps/site-cmps/foot-cmp.cmp.js';
import userMsg from './cmps/site-cmps/user-msg.cmp.js';
import { myRouter } from './routes.js';

const options = {
    el: '#my-app',
    router: myRouter,
    template: `
        <section class="my-app">
            <header>
                <head-cmp />
            </header>

            <main>   
                <router-view />
            </main>

            <user-msg />

            <footer>
                <foot-cmp />
            </footer>

        </section>
    `,
    components: {
        footCmp,
        headCmp,
        userMsg
    },
}

const app = new Vue(options);