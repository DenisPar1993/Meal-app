<template>
    <div class="flex gap-2 justify-center mt-2">
            <RouterLink :to="{name:'byLetter',params:{letter}}" v-for="letter of letters" :key="letter"  class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">
               {{ letter }}
            </RouterLink>
        </div>
            <Meal :meals="meals" />
        
</template>
<script setup>
import {ref,computed,onMounted,watch} from 'vue';
import Meal from '../components/Meal.vue';
import { useRouter, useRoute } from 'vue-router'
import MealItem from '../components/MealItem.vue';
import store from '../store';

const route = useRoute()
const letter=ref('')
const meals= computed(()=>store.state.mealsByLetter)
const letters = "ABCDEFGHIGKLMNOPQRSTUVWXYZ".split('')

watch(route,()=>{
    letter.value=route.params.letter
    store.dispatch('searchMealsByLetter',letter.value)
})

onMounted(()=>{
    letter.value=route.params.letter
    if(letter.value){
        store.dispatch('searchMealsByLetter',letter.value)
    }
    console.log(route.params.letter);
    console.log(letter.value);
})
</script>