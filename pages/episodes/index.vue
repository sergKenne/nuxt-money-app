<template>
  <div class="container">
    <h2 class="main__title">Episodes</h2>
    <div class="episodes main__episodes">
      <div class="episodes__item" v-for="episode in episodes" :key="episode.id">
        <NuxtLink :to="`/episodes/${episode.id}`" class="episodes__card">
          <h5 class="episodes__name">{{ episode.name }}</h5>
          <p class="episodes__data">{{ episode.air_date }}</p>
          <span class="episodes__serie">{{ episode.episode }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  const {data: episodes} = await useFetch("https://rickandmortyapi.com/api/episode")
</script>

<style lang="scss" scoped>

</style>