<template>
    <div class="flex p-8 flex-col items-center ">
        <div class="w-full">
            <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals">

        </div>
        
        <div class="flex gap-2 justify-center mt-2">
            <RouterLink :to="{name:'byLetter',params:{letter}}" v-for="letter of letters" :key="letter">
               {{ letter }}
            </RouterLink>
        </div>

       
    </div>

</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosInstance from '../axios.js'

const ingredients =ref([])
onMounted(async ()=>{
  const response= await axiosInstance.get('list.php?i=list')
  ingredients.value=response.data
})
const meals = computed(()=>store.state.meals)
const letters = "ABCDEFGHIGKLMNOPQRSTUVWXYZ".split('')
</script>