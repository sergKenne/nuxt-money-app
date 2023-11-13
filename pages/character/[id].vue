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
  import { useCharacterStore} from '~/store/characterStore';
  const store = useCharacterStore();
  const character = ref({});
  const loading = ref(true);

  onMounted(async() => {
    await store.fetchCharacterById(id);
    character.value = store.character
    loading.value = store.loading
  });
</script>

<style lang="scss" scoped>

</style>