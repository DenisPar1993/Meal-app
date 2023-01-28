<template>
     <div :key="meal.idMeal"  class="bg-white shadow rounded-xl">
            <router-link :to="{path:`/meals/${meal.idMeal}`}">
            <img :src="meal.strMealThumb"
             :alt="meal.strMeal"
             class="rounded-t-xl w-full h-50 object-cover">
            </router-link>
             <div class="p-3">
            <h3 class=" font-semibold">{{ meal.strMeal }}</h3>
            <p class="mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, tenetur.
            </p>
            <div class="">
                <YouTubeButton :href="meal.strYoutube"/>
            </div>
        </div>
        </div>
</template>
<script setup>
import YouTubeButton from './YouTubeButton.vue';
  const {meal}=defineProps({
    meal:Object
  })
</script>