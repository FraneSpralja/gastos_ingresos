<script setup>
import { computed, onMounted, onUpdated, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import BtnSemanaMes from './components/BtnSemanaMes.vue';

const newDay = ref('');
const nameMes = ref('');

const getNewDay = () => {
  const day = new Date().getDay();

  switch (day) {
    case 1:
      newDay.value = 'Lu';
      break;
    case 2:
      newDay.value = 'Ma';
      break;
    case 3:
      newDay.value = 'Mi';
      break;
    case 4:
      newDay.value = 'Ju';
      break;
    case 5:
      newDay.value = 'Vi';
      break;
    case 6:
      newDay.value = 'Sa';
      break;
    case 7:
      newDay.value = 'Do';
      break;
    default:
      newDay.value = '';
  }
}

const meses = () => {
    const mes = new Date().getMonth();

    switch (mes + 1) {
        case 1:
            nameMes.value = 'Ene';
            break;
        case 2:
            nameMes.value = 'Feb';
            break;
        case 3:
            nameMes.value = 'Mar';
            break;
        case 4:
            nameMes.value = 'Abr';
            break;
        case 5:
            nameMes.value = 'May';
            break;
        case 6:
            nameMes.value = 'Jun';
            break;
        case 7:
            nameMes.value = 'Jul';
            break;
        case 8:
            nameMes.value = 'Ago';
            break;
        case 9:
            nameMes.value = 'Sep';
            break;
        case 10:
            nameMes.value = 'Oct';
            break;
        case 11:
            nameMes.value = 'Nov';
            break;
        case 12:
            nameMes.value = 'Dic';
            break;
        default:
            nameMes.value = 'Mes';
    }
}

const actualDay = computed(() => {
  return new Date().toLocaleDateString()
})

const actualWeek = computed(() => {
  return Math.ceil(new Date().getDate() / 7)
})

onMounted(() => {
  getNewDay();
  meses();
})

</script>

<template>
  <div class="actual-day">
    <span
    >{{newDay}} - {{actualDay}} - week: {{actualWeek}}</span>
  </div>
  <div class="semana-mes_btns">
        <div class="btn-semanas">
            <BtnSemanaMes
            :name="1"
            />
            <BtnSemanaMes
            :name="2"
            />
            <BtnSemanaMes
            :name="3"
            />
            <BtnSemanaMes
            :name="4"
            />
        </div>
        <div class="btn-mes">
            <BtnSemanaMes
            :name="nameMes"
            />
        </div>
    </div>

  <RouterView />
</template>

<style scoped>
  .actual-day {
    padding: 10px;
    border: 1px solid green;
    width: fit-content;
    border-radius: 7px;
    background: lightgreen;
    font-family: sans-serif;
    color: #454545;
    font-weight: bold;
    margin: auto;
    margin-bottom: 40px;
  }

  .semana-mes_btns {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

</style>