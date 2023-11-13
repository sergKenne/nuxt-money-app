<template>
  <div class="container">
    <div class="main__banner">
      <img src="/img/banner.png" alt="banner" class="main__banner-img">
    </div>
    <div class="filters main__filters">
      <InputText :inputsFilters="inputsFilters"/>
      <InputSelect :inputsFilters="inputsFilters"/>
    </div>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else class="main__persons">
      <div class="main__persons-item" v-for="character in characters" :key="character.id">
        <Card :user="character"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {useCharacterStore} from '~/store/characterStore'

  const inputsFilters = reactive({
    name: "",
    status: ""
  })

  const store = useCharacterStore();
  const characters = ref([]);
  const loading = ref(true);
  
  watch(() => inputsFilters, async (currentValue, oldValue) => {
    const status = currentValue.status === "All" ? "" : currentValue.status;
    const name = currentValue?.name;
      await store.fetchCharacters({ name, status});
      characters.value = store.characters
      loading.value = store.loading
  },{ deep: true });

  onMounted(async() => {
    await store.fetchCharacters({name:"", status:""});
    characters.value = store.characters
    loading.value = store.loading
  });
</script>

<style lang="scss" scoped>

</style>