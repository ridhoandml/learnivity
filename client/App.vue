<script setup lang="ts">
import { onBeforeMount } from "vue";

let data: any;

onBeforeMount(async () => {
  const response = await fetch("http://localhost:3000/ping", {
    headers: { "Content-type": "application/json" },
  });
  const json = await response.json();
  data = json;
});

console.log(data);
</script>

<template>
  <div>
    <p>Berhasil {{ data }}</p>
  </div>
</template>

<style scoped></style>
