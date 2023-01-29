<template>
    <div class="flex p-8 flex-col items-center ">
        <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
       
        <Meal :meals="meals"/>
       
       
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosInstance from '../axios.js'
import Meal from '../components/Meal.vue';

const meals =ref([])
onMounted(async ()=>{
    for(let i=0;i<10;i++){
        const response= await axiosInstance.get('random.php')
        meals.value.push(response.data.meals[0])
    }
  
})
</script>