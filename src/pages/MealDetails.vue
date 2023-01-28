<template>
    <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" alt="">
    
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
       <div>
        <strong class="font-bold">Category:</strong> {{meal.strCategory  }}
       </div>
       <div>
        <strong class="font-bold">Area:</strong> {{meal.strArea }}
       </div>
       <div>
        <strong class="font-bold">Category:</strong> {{meal.strTags }}
       </div>
    </div>
    <div class="my-3">
        {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="mb-5">
            <h2 class="text-2xl font-semibold mb-3">Ingridients</h2>
            <ul>
                <template v-for ="(elem,ind) of new Array(20)" >
                  <li v-if="meal[`strIngredient${ind+1}`]">{{ ind+1 }}. {{ meal[`strIngredient${ind+1}`] }}</li>
                </template>
            </ul>
        </div>
        <div class="mb-5">
            <h2 class="text-2xl font-semibold mb-3">Measures</h2>
            <ul>
                <template v-for ="(elem,ind) of new Array(20)" >
                  <li v-if="meal[`strMeasure${ind+1}`]">{{ ind+1 }}. {{ meal[`strMeasure${ind+1}`] }}</li>
                </template>
            </ul>
        </div>
       <div>
        <YouTubeButton :href="meal.strYoutube" />
        <a :href="meal.strSource"
        class="ml-3 px-3 py-2 rounded text-indigo-600 hover:bg-indigo-600 hover:text-white"
        target="_blank">
            View Original Source
        </a>
       </div>
    </div>
</div>
</template>
<script setup>
import axios from '../axios';
import { ref, onMounted } from 'vue';
import {useRoute} from 'vue-router'
import YouTubeButton from '../components/YouTubeButton.vue';

const route=useRoute()
const meal=ref({})
onMounted(()=>{
    console.log(route.params.id);
    axios.get(`lookup.php?i=${route.params.id}`)
    .then(({data})=>{
        meal.value=data.meals[0]
         console.log(meal.value)})
    // axios.get()
})
</script>