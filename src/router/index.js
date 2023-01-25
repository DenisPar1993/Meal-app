import {createRouter,createWebHistory} from 'vue-router';
import Home from '../pages/Home.vue';
import SearchByIngridient from '../pages/SearchByIngridient.vue'
import SearchByLetter from '../pages/SearchByLetter.vue'
import SearchByName from '../pages/SearchByName.vue'


const routes=[
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/by-name/:name?',
        name:'byName',
        component:SearchByName
    },  
    {
        path:'/by-ingridient/:ingridient?',
        name:'byIngridient',
        component:SearchByIngridient
    },  
    {
        path:'/by-letter/:letter?',
        name:'byLetter',
        component:SearchByLetter
    },

]


 const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router