<template>
<header class="bg-white shadow h-16 flex justify-between items-stretch">
       <router-link :to="{name:'home'}" class="inline-flex items-center h-full px-2">
        Home
       </router-link>
       <div>
        <router-link :to="{name:'byName'}" class="inline-flex items-center px-2 h-full hover:bg-purple-200">Search Meals</router-link>
        <router-link :to="{name:'byLetter'}" class="inline-flex items-center px-2 h-full hover:bg-purple-200">Meals by Letter</router-link>
        <router-link :to="{name:'Ingridients'}" class="inline-flex items-center px-2 h-full hover:bg-purple-200">Meals by Ingredients</router-link>
       </div>
    </header>
</template>
<script setup>
</script>