<script setup>
import { onMounted, onUpdated, ref, watch, watchEffect } from 'vue';
import {useRoute} from 'vue-router'

const dataSemana = ref([]);
const adquirido = ref([]);
const egresos = ref([]);

const route = useRoute()

const props = defineProps(['totalData'])

const getDataSemana = (arr) => {
    const newArr = []
    for(let i = 0; i < arr.length; i++) {
        const newObj = arr[i]
        if((i + 1) == route.params.semanas) {
            for(let valores in newObj){
                newArr.push(newObj[valores])
            }
        }
    }

    dataSemana.value = [...newArr]
}

const showDataSemana = (arr) => {
    const gasto = [];
    const ingreso = [];
    for(let i = 0; i < arr.length; i++) {
        const obj = arr[i];
        for(let data in obj){
            gasto.push(obj[data].gasto)
            ingreso.push(obj[data].ingreso)
        }
    }
    adquirido.value = [...ingreso]
    egresos.value = [...gasto]
}

watchEffect(() => {
    getDataSemana(props.totalData)
})

onUpdated(() => {
    showDataSemana(dataSemana.value)
})


</script> 

<template>
    <div>
        <h2>Ingresos</h2>
        <ul v-for="data in adquirido" :key="data">
            <li v-for="(valor, i) in data" :key="i">
                <span v-if="i == 0">Lu : </span>
                <span v-else-if="i == 1">Ma : </span>
                <span v-else-if="i == 2">Mi : </span>
                <span v-else-if="i == 3">Ju : </span>
                <span v-else-if="i == 4">Vi : </span>
                <span v-else-if="i == 5">Sa : </span>
                <span v-else-if="i == 6">Do : </span>
                <span>
                    ${{valor}}
                </span>
            </li>
        </ul>
    </div>
    <div>
        <h2>Gastos</h2>
        <ul v-for="data in egresos" :key="data">
            <li v-for="(valor, i) in data" :key="i">
                <span v-if="i == 0">Lu : </span>
                <span v-else-if="i == 1">Ma : </span>
                <span v-else-if="i == 2">Mi : </span>
                <span v-else-if="i == 3">Ju : </span>
                <span v-else-if="i == 4">Vi : </span>
                <span v-else-if="i == 5">Sa : </span>
                <span v-else-if="i == 6">Do : </span>
                <span>
                    ${{valor}}
                </span>
            </li>
        </ul>
    </div>
</template>