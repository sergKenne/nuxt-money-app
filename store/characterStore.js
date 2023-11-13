import { defineStore } from 'pinia'
import axios from 'axios'
const BASE_URL = 'https://rickandmortyapi.com/api'


export const useCharacterStore = defineStore({
  id: 'characterStore',

  state: () => ({
    characters: [],
    character: {},
    loading: false,
    error: '',
    noFounded: false
  }),

  actions: {
    async fetchCharacters({name, status}) {
      try {
        this.loading = true
        const { data } = await axios.get(`${BASE_URL}/character?name=${name}&status=${status}`)
        if (data) {
          this.loading = false
          this.characters = data.results
          this.noFounded = false
        }
      } catch (error) {
        console.log('error: Sommething went wrony' )
        this.loading = false
        this.error = 'Something went wrong'
        this.noFounded = true
      }
    },
    async fetchCharacterById(id) {
      try {
        this.loading = true
        const { data } = await axios.get(BASE_URL + `/character/${id}`)
        if (data) {
          this.loading = false
          this.character = data
        }
      } catch (error) {
        this.loading = false
        this.error = error
      }
    },
  },

  getters: {},
})
