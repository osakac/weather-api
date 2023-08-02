import { createStore } from 'vuex'

export default createStore({
  state: {
    weather: null
  },
  getters: {
    getWeather(state) {
      return state.weather
    }
  },
  mutations: {
    setWeather(state, data) {
      state.weather = data
    }
  },
  actions: {
    async loadWeather({commit}, city) {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.VUE_APP_WEATHER_API_KEY}`);
      const data = await response.json()
      commit('setWeather', data)
    }
  },
  modules: {
  }
})
