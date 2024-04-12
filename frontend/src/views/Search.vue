<!-- 
  Get text from input (checkk)
  Send text to api (checkk)
  Return results below (checkk)
  Add table to results (checkk)
  Click on result to view conflict details on new page (check)
  Fetch the conflict details data
-->

<script setup lang="ts">
import { ref } from 'vue'
import { useMutation } from '@tanstack/vue-query'
import submitSearch from "../queries/submitSearch"
import SearchResults from "@/components/SearchResults.vue";

const search = ref("")

const { isPending, isError, error, mutate: goSearch, data: searchResults } = useMutation({
  mutationKey: ['submitSearch', search.value],
  mutationFn: () => submitSearch(search.value),
})

</script>

<template>
  <div class="text-center">

    <form @submit.prevent="goSearch()">
      <h1 class="font-bold text-6xl">Search for a client</h1>
      <input v-model="search" type="text" placeholder="Client name" 
      class="input input-bordered mt-5 input-primary w-full max-w-xs" required />
      <button class="btn btn-primary m-2" type="submit">Search</button>
    </form>

    <span v-if="isPending" class="loading loading-infinity loading-lg"></span>
    <h3 v-else-if="isError" class="text-lg text-error">An error occurred: {{ error?.message }}</h3>

    <SearchResults v-else="isSuccess" :results="searchResults" />
  </div>
</template>
