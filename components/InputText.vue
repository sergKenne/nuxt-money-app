<template>
  <div class="filters__item">
    <input 
      type="text" 
      class="filters__input" 
      placeholder="Filter by name..."
      @input="(e) => {inputValue = e.target.value}"
    />
    <img src="img/search.svg" alt="Search" class="filters__input-icon">
  </div>
</template>

<script setup>
  const inputValue = ref("")
</script>

<style lang="scss" scoped>

</style>