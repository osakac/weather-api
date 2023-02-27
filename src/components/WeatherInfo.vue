<template>
  <h2>{{weather?.name}}</h2>
  <div v-if="weather" class="weather-content">
    <span class="temperature">{{Math.round(weather?.main.temp - 273.15)}}&deg;</span>
    <small>Ощущается как: {{Math.round(weather?.main.feels_like - 273.15)}}&deg;</small>
  </div>
  <h3>{{weather?.weather[0].main}}</h3>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore()

    const weather = computed(() => store.getters.getWeather)

    return {weather}
  },
  name: "WeatherInfo"
}
</script>

<style scoped>

</style>