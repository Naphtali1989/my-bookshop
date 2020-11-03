import headCmp from './cmps/site-cmps/head-cmp.cmp.js';
import footCmp from './cmps/site-cmps/foot-cmp.cmp.js';
import userMsg from './cmps/site-cmps/user-msg.cmp.js';
import { myRouter } from './routes.js';

const options = {
    el: '#my-app',
    router: myRouter,
    template: `
        <section class="my-app">

            <head-cmp />

            <router-view class="router-view"/>

            <user-msg />

            <foot-cmp />

        </section>
    `,
    components: {
        footCmp,
        headCmp,
        userMsg
    },
}

const app = new Vue(options);