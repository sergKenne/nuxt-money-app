<template>
  <div class="container">
    <button class="back-btn main__btn">
      <img src="/img/arrow_back.svg" alt="arrow icon">
      <NuxtLink to="/episodes">GO BACK</NuxtLink>
    </button>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else class="episode-detail">
      <h6 class="episode-detail__name">{{ episode.name }}</h6>
      <div class="episode-detail__info">
        <div class="episode-detail__item">
          <p class="episode-detail__label">Episode</p>
          <p class="episode-detail__value">{{ episode.episode }}</p>
        </div>
        <div class="episode-detail__item">
          <p class="episode-detail__label">Date</p>
          <p class="episode-detail__value">{{ episode.air_date }}</p>
        </div>
      </div>
    </div>
    <div class="main__persons">
      
    </div>
  </div>
</template>

<script setup>
const { params: { id } } = useRoute();
const {data: episode} = await useFetch(`https://rickandmortyapi.com/api/episode/${id}`)
  
</script>

<style lang="scss" scoped>

</style>