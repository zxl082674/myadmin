import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'

Vue.use(VueRouter);
/* 避免 ) NavigationDuplicated: Avoided redundant navigation to current location: "/dashboard" */
let originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
    return originalPush.call(this, location).catch((err) => {});
};

const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ("../components/Dashboard"),
        children: [{
            path: '',
            component: () =>
                import ("../components/Home")
        }]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router