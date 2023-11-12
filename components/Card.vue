<template>
  <div class="card">
    <NuxtLink :to="`/character/${user.id}`">
      <img :src="user.image" alt="picture" class="card__img">
    </NuxtLink>
    <div class="card__body">
      <NuxtLink :to="`/character/${user.id}`" class="card__name">{{ user.name }}</NuxtLink>
      <p class="card__species">{{ user.species }}</p>
      <div class="card__episode" v-if="props.isWithEpisodes">
        <NuxtLink :to="`/episodes/${getEpisodeId(episode)}`" v-for="episode in episodes" :key="episode"  class="card__badge">
          episode - {{ getEpisodeId(episode) }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props =  defineProps({
    isWithEpisodes: {
      type: Boolean,
      default: true
    },
    user: {}
  })

const episodes = computed(() => props.user.episode.slice(0, 5));
const getEpisodeId = (episode) => episode.split("/").slice(-1)[0];
   
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 4px;
    background: #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 4px 0px rgba(0, 0, 0, 0.12),
        0px 1px 5px 0px rgba(0, 0, 0, 0.2);
    &__img {
        display: block;
        width: 100%;
        cursor: pointer;
    }
    &__body {
        padding: 12px 16px 20px 16px;
    }
    &__name {
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0.15px;
        cursor: pointer;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        &:hover {
            color: #ee6e73;
        }
    }
    &__species {
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.25px;
    }
    &__episode {
        display: flex;
        justify-content: center;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 10px;
    }
    &__badge {
        background-color: #fafafa;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
            rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        color: rgba(0, 0, 0, 0.6);
        height: 30px;
        line-height: 30px;
        padding-left: 8px;
        padding-right: 8px;
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px,
                rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
        }
    }
  }
</style>