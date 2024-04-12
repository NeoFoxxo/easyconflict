<script setup lang="ts">
import Navbar from "./components/Navbar.vue"
</script>

<template>
	<header class="flex-wrap justify-center">
		<Navbar />
		<div class="mt-10">
			<RouterView />
		</div>
	</header>
</template>
