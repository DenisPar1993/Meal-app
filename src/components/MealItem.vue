<template>
     <div :key="meal.idMeal"  class="bg-white shadow rounded-xl hover:scale-105 transition-all">
            <router-link :to="{path:`/meals/${meal.idMeal}`}">
            <img :src="meal.strMealThumb"
             :alt="meal.strMeal"
             class="rounded-t-xl w-full h-50 object-cover">
            </router-link>
             <div class="p-3">
            <h3 class=" font-semibold">{{ meal.strMeal }}</h3>
            <p class="mb-4">{{ cutString(meal.strInstructions) }}</p>
            
            <div >
                <YouTubeButton :href="meal.strYoutube"/>
            </div>
        </div>
        </div>
</template>
<script setup>
import YouTubeButton from './YouTubeButton.vue';


   const cutString=(item)=>{
    if(!item) return ''

    return item.slice(0,20)
   }
  const {meal}=defineProps({
    meal:Object
  })
</script>