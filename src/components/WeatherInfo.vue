<template>
	<div class="weather__info" v-if="weather">
		<h1 class="weather__city">{{weather.name}}</h1>
		<h2 class="weather__day-anchor">{{weather.weather[0].main}}</h2>
		<h1 class="weather__temp">{{Math.round(weather.main.temp - 273.15)}}&deg;</h1>
		<h3 class="weather__feels-like">Ощущается как {{Math.round(weather.main.feels_like - 273.15)}}&deg;</h3>
	</div>
</template>

<script setup>
import store from "@/store";
import {computed} from "vue";

const weather = computed(() => store.getters.getWeather)
</script>