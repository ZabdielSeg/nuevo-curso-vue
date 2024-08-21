<template>
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <hr />
  <MyCounter :value="34" text="hola" />
  <MyCounterScriptVue :value="3" />
  <MyCounterScriptVue2 :value="10" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScriptVue from './components/MyCounterScript.vue';
import MyCounterScriptVue2 from './components/MyCounterScript/MyCounterScript2.vue';
</script>

<style scoped></style>
