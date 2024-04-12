<script setup lang="ts">
import type { SearchResult } from "@/types/SearchResult"

defineProps<{
	results: SearchResult | undefined
}>()
</script>

<template>
	<div v-if="results?.country.length === 0" class="w-[50%] mx-auto">
		<h2 class="text-lg">No conflicts found! 🥳</h2>
	</div>
	<div v-for="result in results?.country" class="w-[50%] mx-auto">
		<table class="table table-md">
			<thead>
				<tr>
					<th>Name</th>
					<th>Job</th>
					<th>Favorite Color</th>
				</tr>
			</thead>
			<tbody>
				<RouterLink :to="`/conflictdetails/${result.country_id}`">
					<tr class="hover">
						<th>{{ result.country_id }}</th>
						<td>{{ result.probability }}</td>
						<td>Quality Control Specialist</td>
					</tr>
				</RouterLink>
			</tbody>
		</table>
	</div>
</template>
