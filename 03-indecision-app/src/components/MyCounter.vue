<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square {{ squareCounter }}</h3>
        
        <div>
            <button @click="counter++">+1</button>
            <button @click="counter--">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

interface Props{
    value: number;
    text: string;
}

const props = defineProps<Props>();

const {counter, squareCounter} = useCounter(13)
// import { computed, ref } from 'vue';


    // const counter = ref(props.value);
    // const squareCounter = computed(() => counter.value * counter.value);

</script>