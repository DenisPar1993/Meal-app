<template>
    <div class="flex gap-2 justify-center mt-2">
            <RouterLink :to="{name:'byLetter',params:{letter}}" v-for="letter of letters" :key="letter">
               {{ letter }}
            </RouterLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.mealId" :meal="meal" />
    </div>
</template>
<script setup>
import {ref,computed,onMounted,watch} from 'vue';
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