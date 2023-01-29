import axios from '../axios'

export function searchMeals({commit},keyword){
    axios.get(`search.php?s=${keyword}`).then(({data})=>{
        commit('setSearchMeals',data.meals)
    })
}
export function searchMealsByLetter({commit},letter){
    axios.get(`search.php?f=${letter}`).then(({data})=>{
        commit('setSearchMealsByLetter',data.meals)
    })
}
export function searchMealsByIngridients({commit},ingridient){
    axios.get(`filter.php?i=${ingridient}`).then(({data})=>{
        commit('setSearchMealsByIngridients',data.meals)
    })
}