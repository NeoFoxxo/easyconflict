<script setup lang="ts">
import ConflictDetailsTable from "@/components/ConflictDetailsTable.vue";
import getConflictDetails from "@/queries/getConflictDetails";
import { useQuery } from "@tanstack/vue-query";
import { useRoute } from 'vue-router'
const route = useRoute()

const conflictId = route.params.conflictid as string

const {isPending, data: conflictDetails, error, isError} = useQuery({
  queryKey: ["ConflictDetails"], 
  queryFn: () => getConflictDetails(conflictId)
})


</script>

<template>
  <div class="text-center">
    <h1 class="font-bold text-6xl">Conflict Details</h1>
    <h2 class="m-5 text-lg">Conflict {{ conflictId }}</h2>
    <span v-if="isPending" class="loading loading-infinity loading-lg"></span>
    <h3 v-else-if="isError" class="text-lg text-error">An error occurred: {{ error?.message }}</h3>

    <ConflictDetailsTable v-else="isSuccess" :details="conflictDetails" />
  </div>
</template>