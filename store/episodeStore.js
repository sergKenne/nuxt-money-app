import { defineStore } from 'pinia'
import axios from 'axios'
const BASE_URL = 'https://rickandmortyapi.com/api'

export const useEpisodeStore = defineStore({
  id: 'episodeStore',

  state: () => ({
    episodes: [],
    episode: {},
    loading: false,
    error: '',
  }),

  actions: {
    async fetchEpisodes() {
      try {
        this.loading = true
        const { data } = await axios.get(BASE_URL + '/episode')
        if (data) {
          this.loading = false
          this.episodes = data.results
        }
      } catch (error) {
        this.loading = false
        this.error = error
      }
    },
    async fetchEpisodeById(id) {
      try {
        this.loading = true
        const { data } = await axios.get(BASE_URL + `/episode/${id}`)
        if (data) {
          this.loading = false
          this.episode = data
        }
      } catch (error) {
        this.loading = false
        this.error = error
      }
    },
  },

  getters: {},
})
