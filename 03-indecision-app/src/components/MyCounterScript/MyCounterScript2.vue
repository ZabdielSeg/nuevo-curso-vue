<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square {{ squareCounter }}</h3>
        
        <div>
            <button class="btn btn-primary" @click="counter += initialCounter">+{{ initialCounter }}</button>
            <button @click="counter-=initialCounter">- {{ initialCounter }}</button>
        </div>
    </section>
</template>

<script lang="ts" src="./MyCounterScript2"></script>