<template>
    <h1 class="text-5xl font-bold mb-5">Ingridients</h1>
    <input type="text"
        v-model="keyword"
         class="rounded border-2 border-gray-200 w-full"
         placeholder="Search for meals">
         <div>{{ keyword }}</div>
    <router-link :to="{name:'byIngridient',params:{ingridient:meal.strIngredient}}" class="my-5 block font-size-xl p-3 bg-gray-200" v-for="meal of computedIngredients" :key="meal.idIngredient">
        <h2>{{ meal.strIngredient }}</h2>
        <p>{{ meal.strDescription }}</p>

        
    </router-link>
</template>
<script setup>
import axios from '../axios';
import {ref,onMounted} from 'vue';
import { computed } from '@vue/reactivity';
import { useRouter, useRoute } from 'vue-router'
const meals=ref([])
const keyword=ref('')

const computedIngredients=computed(()=>{
    if(!keyword.value) return  meals.value
       
    return meals.value.filter(item=>{
        return item.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    })
})

onMounted(()=>{
    axios.get('list.php?i=list')
    .then(({data})=>{
        meals.value=data.meals
    })
})


</script>