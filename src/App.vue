<template>
  <div :class="type">
    <main>
      <div class="wrapper">
        <input v-model="city" @keydown.enter="getWeather" type="text" class="input-field" placeholder="Введите город">
        <weather-info></weather-info>
      </div>
    </main>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import WeatherInfo from "@/components/WeatherInfo";

export default {
  setup() {
    const store = useStore()

    const city = ref('')
    const temp = computed(() => store.getters.getWeather?.main?.temp - 273.15)
    const type = computed(() => {
      if (temp.value >= 15) return 'bg-warm'
      else return 'bg-cold'
    })

    async function getWeather() {
      await store.dispatch('loadWeather', city.value)
      city.value = ''
    }

    return { city, getWeather, type }
  },
  components: { WeatherInfo },
  name: 'App',
}
</script>
