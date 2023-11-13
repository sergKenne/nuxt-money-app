<template>
  <div class="filters__item">
    <input 
      type="text" 
      class="filters__input" 
      placeholder="Filter by name..."
      v-model="inputsFilters.name"
    />
    <img src="/img/search.svg" alt="Search" class="filters__input-icon">
  </div>
</template>

<script setup>
  const props =  defineProps({
    inputsFilters:{}
  })
  
</script>

<style lang="scss" scoped>

</style>