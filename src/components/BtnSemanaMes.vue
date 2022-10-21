<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

defineProps(['name'])

const actualWeek = computed(() => {
    return Math.ceil(new Date().getDate() / 7)
})

</script>

<template>
    <button v-if="name === 1 || name === 2 || name === 3 || name === 4" 
    :id="name"
    :class="actualWeek == name ? 'this-week' : ''"
    >
        <router-link :to="`/semana/${name}`">{{name}}</router-link>
    </button>
    <button v-else 
    :id="name">
        <router-link :to="`/mes/${name}`">{{name}}</router-link>
    </button>
</template>