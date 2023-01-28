<template>
    <h1 class="text-5xl font-bold mb-5">Ingridients</h1>
    <div class="my-5 font-size-xl p-3 bg-gray-200" v-for="meal of meals" :key="meal.idIngredient">
        <h2>{{ meal.strIngredient }}</h2>
        <p>{{ meal.strDescription }}</p>
    </div>
</template>
<script setup>
import axios from '../axios';
import {ref,computed,onMounted} from 'vue';
import { useRouter, useRoute } from 'vue-router'
const meals=ref([])


onMounted(()=>{
    axios.get('list.php?i=list')
    .then(({data})=>{
        debugger
        meals.value=data.meals
    })
})


</script>