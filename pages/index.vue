<template>
  <div class="container">
    <div class="main__banner">
      <img src="/img/banner.png" alt="banner" class="main__banner-img">
    </div>
    <div class="filters main__filters">
      <InputText/>
      <InputSelect/>
    </div>
    <div class="main__persons">
      <div class="main__persons-item" v-for="character in characters" :key="character.id">
        <Card :user="character"/>
      </div>
    </div>
  </div>
</template>

<script setup>

  const {data: characters} = await useFetch("https://rickandmortyapi.com/api/character")

</script>

<style lang="scss" scoped>

</style>