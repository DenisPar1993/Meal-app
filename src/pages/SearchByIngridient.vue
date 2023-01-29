<template>
   <div class="text-4xl font-bold m-4">Ingridient</div>
   <div v-if="meals.length>1">
      <Meal :meals="meals"/>
   </div>
   
</template>
<script setup>
import MealItem from '../components/MealItem.vue';
import Meal from '../components/Meal.vue';
import axios from '../axios';
import {ref,computed,onMounted} from 'vue';
import { useRouter, useRoute } from 'vue-router'

import store from '../store';
const meals=computed(()=>store.state.mealsByIngridients)
const route= useRoute()
const ingridient=ref('')


onMounted(()=>{
    ingridient.value = route.params.ingridient
    console.log(ingridient.value);
   store.dispatch('searchMealsByIngridients',ingridient.value)
})


</script>