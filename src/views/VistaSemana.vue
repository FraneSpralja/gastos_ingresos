<script setup>
import { onMounted, ref } from '@vue/runtime-core';

const week = ref()

const getActualWeek = () => {
    const date = new Date().getDate();
    const monthWeek = Math.ceil(date / 7)

    week.value = monthWeek
}

onMounted(() => {
    getActualWeek()
})


</script>

<template>
    <div>
        <h1>Vista Semana: {{week}}</h1>
    </div>
</template>

<style scoped>

</style>