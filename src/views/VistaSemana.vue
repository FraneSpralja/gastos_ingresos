<script setup>
import { onMounted, onUpdated, ref } from '@vue/runtime-core';

const props = defineProps(['week','ingresos','gastos'])


const getGastos = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length == 0) {
            arr[i].push('no hubo gastos')
        }
    }
}
const getIngresos = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length == 0) {
            arr[i].push('no hubo Ingresos')
        }
    }
}

onMounted(() => {
    setTimeout(() => {
        getGastos(props.gastos)
        getIngresos(props.ingresos)
    }, 1500)
})


</script>

<template>
    <div>
        <h1>Vista Semana: {{week}}</h1>
    </div>
    <div>
        <h3>Ingresos</h3>
        <ul v-for="(valores, i) in ingresos" :key="i">
            <li v-if="i == 0">
                Lu
            </li>
            <li v-else-if="i == 1">
                Ma
            </li>
            <li v-else-if="i == 2">
                Mi
            </li>
            <li v-else-if="i == 3">
                Ju
            </li>
            <li v-else-if="i == 4">
                Vi
            </li>
            <li v-else-if="i == 5">
                Sa
            </li>
            <li v-else>
                Do
            </li>
            <li v-for="(ingreso, i) in valores" :key="i">
                <span>{{ingreso}}</span>
            </li>
        </ul>
    </div>
    <div>
        <h3>Gastos</h3>
        <ul v-for="(valores, i) in gastos" :key="i">
            <li v-if="i == 0">
                Lu
            </li>
            <li v-else-if="i == 1">
                Ma
            </li>
            <li v-else-if="i == 2">
                Mi
            </li>
            <li v-else-if="i == 3">
                Ju
            </li>
            <li v-else-if="i == 4">
                Vi
            </li>
            <li v-else-if="i == 5">
                Sa
            </li>
            <li v-else>
                Do
            </li>
            <li v-for="(gasto, i) in valores" :key="i">
                <span>{{gasto}}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>