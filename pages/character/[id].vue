<template>
  <div class="container">
    <NuxtLink to="/">
      <button class="back-btn main__btn">
        <img src="/img/arrow_back.svg" alt="">
        <span>GO BACK</span>
      </button>
    </NuxtLink>
    <div class="detail main__detail">
      <img :src="character.image" alt="" class="detail__img">
      <div class="detail__info">
        <h6 class="detail__name">{{ character.name }}</h6>
        <p class="detail__species">{{ character.species }}</p>
        <p class="detail__location">{{ character.location?.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const {params:{id}} = useRoute()
  const {data: character} = await useFetch(`https://rickandmortyapi.com/api/character/${id}`)
</script>

<style lang="scss" scoped>

</style>