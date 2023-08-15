<template>
	<div class="weather-wrapper" :class="type">
		<input
			v-model.trim="city"
			@keydown.enter="loadWeather"
			type="text" class="input"
			placeholder="Введите название города"
		>
		<p v-if="weather?.message" class="weather__error">{{weather.message}}</p>
		<WeatherInfo v-else />
	</div>
</template>

<script setup>
import store from "@/store";
import {computed, ref} from "vue";
import WeatherInfo from "@/components/WeatherInfo.vue";

const city = ref('')
const weather = computed(() => store.getters.getWeather)
const temp = computed(() => Math.round(store.getters.getWeather?.main?.temp - 273.15))
const type = computed(() => isNaN(temp.value) ? 'bg-warm' : temp.value >= 10 ? 'bg-warm' : 'bg-cold')

async function loadWeather() {
	await store.dispatch('loadWeather', city.value)
	city.value = ''
}
</script>