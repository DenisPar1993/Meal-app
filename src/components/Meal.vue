<template>
    <div v-if="meals.length" class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.mealId" :meal="meal" />
    </div>
    <div v-if="!meals.length" class="flex justify-center items-center mt-8">
        There are no meals
    </div>
</template>
<script setup>
import MealItem from './MealItem.vue';

const {meals}=defineProps({
    meals:Array
})

</script>