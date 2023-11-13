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
      <div class="main__persons-item" v-for="episodeChar in getCharacterByEpisode(characters, episode.characters)" :key="episodeChar">
        <Card 
          :isWithEpisodes="false"
          :user = "episodeChar"
        /> 
      </div>
    </div>
  </div>
</template>

<script setup>
  const { params: { id } } = useRoute();

import {useEpisodeStore} from '~/store/episodeStore'
import {useCharacterStore} from '~/store/characterStore'
const episodeStore = useEpisodeStore();
  const characterStore = useCharacterStore()
  const episode = ref({});
  const loading = ref(true);
  const characters = ref([])
 
  
  const getCharacterByEpisode = (characters, charactersEpisodes) => {
    const charactersId = charactersEpisodes?.map(character => character.split("/").slice(-1)[0])
    const characterFiltered = characters?.reduce((acc, curr) => charactersId.includes(String(curr.id))? [...acc, curr]: acc, [])
    
    return characterFiltered 
}
  onMounted(async() => {
    await episodeStore.fetchEpisodeById(id);
    await characterStore.fetchCharacters({name:"", status:""})
    episode.value = episodeStore.episode
    loading.value = episodeStore.loading
    characters.value = characterStore.characters
    
  });
</script>

<style lang="scss" scoped>

</style>