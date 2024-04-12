<script setup lang="ts">
import type { ConflictDetail } from "@/types/ConflictDetail";

defineProps<{
  details: ConflictDetail | undefined
}>()
</script>

<template>
  <div class="w-[50%] mx-auto">
    <table class="table table-md">
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
          <tr class="hover">
            <th>{{ details?.name }}</th>
            <td>{{ details?.thirdParty  }}</td>
            <td>{{ details?.description }}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>