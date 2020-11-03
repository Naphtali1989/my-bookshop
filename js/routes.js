import bookApp from './pages/book-app.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import homePage from './pages/home-page.cmp.js';
import bookEdit from './pages/book-edit.cmp.js';
import bookDetails from './pages/book-details.cmp.js';
import bookAdder from './pages/book-adder.cmp.js';

const myRoutes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/books',
        component: bookApp,
        children: []
    },
    {
        path: '/about',
        component: aboutPage,
        children: []
    },
    {
        path: '/books/adder',
        component: bookAdder
    },
    {
        path: '/books/edit/:bookId',
        component: bookEdit
    },
    {
        path: '/books/:bookId',
        component: bookDetails
    },

]

export const myRouter = new VueRouter({ routes: myRoutes })