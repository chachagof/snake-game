<script setup>
import { ref } from 'vue'

const scoreElement = ref('Score: 0')
const highScoreElement = ref('High Score: 0')
const playBoard = ref(null)

</script>

<template>

  <div class="wrapper">
    <div class="game-details">
      <span class="score">
        {{ scoreElement }}
      </span>
      <span class="high-score">
        {{ highScoreElement }}
      </span>
    </div>

    <div class="play-board">
      {{ playBoard }}
    </div>

    <div class="controls">
        <i><font-awesome-icon :key="ArrowLeft" icon="fa-solid fa-arrow-left-long" /></i>
        <i><font-awesome-icon :key="ArrowUp" icon="fa-solid fa-arrow-up-long" /></i>
        <i><font-awesome-icon :key="ArrowRight" icon="fa-solid fa-arrow-right-long" /></i>
        <i><font-awesome-icon :key="ArrowDown" icon="fa-solid fa-arrow-down-long" /></i>
      </div>
    </div>

</template>

<style scoped>

</style>
