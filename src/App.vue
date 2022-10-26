<script setup>
import { computed, onMounted, onUpdated, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import axios from 'axios'

import BtnSemanaMes from './components/BtnSemanaMes.vue';

const newDay = ref('');
const week = ref('');
const nameMes = ref('');
const gastos = ref([]);
const ingresos = ref([]);
const totalData = ref([])

const getTotalData = async () => {
  const dataUno = await axios.get('http://localhost:3000/1');
  const dataDos = await axios.get('http://localhost:3000/2');
  const dataTres = await axios.get('http://localhost:3000/3');
  const dataCuatro = await axios.get('http://localhost:3000/4');

  totalData.value.push(dataUno.data)
  totalData.value.push(dataDos.data)
  totalData.value.push(dataTres.data)
  totalData.value.push(dataCuatro.data)
}

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
    case 0:
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

const actualWeek = () => {
  week.value = Math.ceil(new Date().getDate() / 7);
} 

const getData = async(week) => {

  const res = await fetch(`http://localhost:3000/${week}`);
  const data = await res.json();

  for(let valor in data) {
    const newValor = data[valor];
    for(let i = 0; i < newValor.length; i++){
      gastos.value.push(newValor[i].gasto)
      ingresos.value.push(newValor[i].ingreso)
    }
  }
}

const actualDay = computed(() => {
  return new Date().toLocaleDateString()
})

getTotalData()

onMounted(() => {
  getNewDay();
  meses();
  actualWeek();
  getData(week.value);
})


</script>

<template>
  <div class="actual-day">
    <span
    >{{newDay}} - {{actualDay}} - week: {{week}}</span>
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
        <div>
          <RouterView 
          :week="week"
          :ingresos="ingresos"
          :gastos="gastos"
          :totalData="totalData"
          />
        </div>
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