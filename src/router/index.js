import {createRouter,createWebHistory} from 'vue-router';
import Home from '../pages/Home.vue';
import SearchByIngridient from '../pages/SearchByIngridient.vue'
import SearchByLetter from '../pages/SearchByLetter.vue'
import SearchByName from '../pages/SearchByName.vue'
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestsLayout from '../components/GuestsLayout.vue';
import MealDetails from '../pages/MealDetails.vue';
import Ingridients from '../pages/Ingridients.vue'


const routes=[
    {
        path:'/',
        name:'DefaultLay',
        children:[
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
                path:'/ingridients',
                name:'Ingridients',
                component:Ingridients
            }, 
            {
                path:'/by-letter/:letter?',
                name:'byLetter',
                component:SearchByLetter
            },
            {
                path:'/meals/:id?',
                name:'mealDetails',
                component:MealDetails
            },
        ]
    },
    {
        path:'/guests',
        name:'Guests',
        component:GuestsLayout
    }
   

]


 const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router