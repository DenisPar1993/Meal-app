<template>
    <div class="p-8">
        <input type="text"
        v-model="keyword"
         class="rounded border-2 border-gray-200 w-full"
         @change="searchMeals"
         placeholder="Search for meals">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
         
         <MealItem v-for="meal of meals" :meal="meal" />
        </div>
    </div>
</template>
<script setup>
import axios from '../axios';
import {ref,computed,onMounted} from 'vue';
import { useRouter, useRoute } from 'vue-router'
import store from '../store';
import YouTubeButton from '../components/YouTubeButton.vue';
import MealItem from '../components/MealItem.vue';
const route = useRoute()

const keyword=ref('')
const meals= computed(()=>store.state.meals)

const searchMeals=()=>{
    store.dispatch('searchMeals',keyword.value)
}
onMounted(()=>{
    console.log(route.params);
    keyword.value=route.params.name
    if(keyword.value){
        searchMeals()
    }
})
</script>
