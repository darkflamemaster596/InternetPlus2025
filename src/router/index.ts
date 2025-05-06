import {createRouter,createWebHistory} from 'vue-router'
import education from '../pages/education.vue';
import work from '../pages/work.vue';
import home from '../pages/home.vue';
import market from '../pages/market.vue';
import explore from '../pages/explore.vue';
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'home',
            path:'/',
            component:home
        },
        {
            name:'work',
            path:'/work',
            component:work
        },
        {
            name:'education',
            path:'/education',
            component:education
        },
        {
            name:'explore',
            path:'/explore',
            component:explore
        },
        {
            name:'market',
            path:'/market',
            component:market
        },
    ]
});
export default router;