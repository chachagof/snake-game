<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scoreElement = ref('Score: 0')
const highScoreElement = ref('High Score: 0')
const playBoard = ref(null)

let gameOver = false
let foodX, foodY
let snakeX = 5
let snakeY = 5
let velocityX = 0
let velocityY = 0
const snakeBody = ref([])
let score = 0
let setIntervalId

// get high score
let highScore = localStorage.getItem('high-score') || 0
highScoreElement.value = `High Score ${highScore}`

// random food
function updateFoodPosition () {
  foodX = Math.floor(Math.random() * 30) + 1
  foodY = Math.floor(Math.random() * 30) + 1
}

// game over
function gameOverHandler () {
  clearInterval(setIntervalId)
  alert('Game Over! Press OK to replay...')
  location.reload()
}

// change direction on button press
function changeDirection (e) {
  if (e.key === 'ArrowUp' && velocityY !== 1) {
    velocityX = 0
    velocityY = -1
  } else if (e.key === 'ArrowDown' && velocityY !== -1) {
    velocityX = 0
    velocityY = 1
  } else if (e.key === 'ArrowLeft' && velocityX !== 1) {
    velocityX = -1
    velocityY = 0
  } else if (e.key === 'ArrowRight' && velocityX !== -1) {
    velocityX = 1
    velocityY = 0
  }
}

// init game
function initGame () {
  // check game over
  if (gameOver) return gameOverHandler()
  let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`

  // check get food
  if (snakeX === foodX && snakeY === foodY) {
    updateFoodPosition()
    snakeBody.value.push([foodX, foodY])
    score += 10
    highScore = score > highScore ? score : highScore

    localStorage.setItem('high-score', highScore)
    scoreElement.value = `Score: ${score}`
    highScoreElement.value = `High Score: ${highScore}`
  }

  // move snake
  snakeX += velocityX
  snakeY += velocityY

  for (let i = snakeBody.value.length - 1; i > 0; i--) {
    snakeBody.value[i] = snakeBody.value[i - 1]
  }
  snakeBody.value[0] = [snakeX, snakeY]

  // check snake in legal area
  if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    gameOver = true
    return gameOver
  }

  // add snake body
  for (let i = 0; i < snakeBody.value.length; i++) {
    html += `<div class="head" style="grid-area: ${snakeBody.value[i][1]} / ${snakeBody.value[i][0]}"></div>`

    if (i !== 0 && snakeBody.value[0][1] === snakeBody.value[i][1] && snakeBody.value[0][0] === snakeBody.value[i][0]) {
      gameOver = true
    }
  }

  playBoard.value.innerHTML = html
}

onMounted(() => {
  updateFoodPosition()
  window.addEventListener('keyup', changeDirection)
  setIntervalId = setInterval(initGame, 100)
})

onUnmounted(() => {
  window.removeEventListener('keyup', changeDirection)
  clearInterval(setIntervalId)
})

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

    <div class="play-board" ref="playBoard">
      {{ playBoard }}
    </div>

    <div class="controls">
        <i><font-awesome-icon @click="changeDirection({ key:'ArrowLeft' })" icon="fa-solid fa-arrow-left-long" /></i>
        <i><font-awesome-icon @click="changeDirection({ key:'ArrowUp' })" icon="fa-solid fa-arrow-up-long" /></i>
        <i><font-awesome-icon @click="changeDirection({ key:'ArrowRight' })" icon="fa-solid fa-arrow-right-long" /></i>
        <i><font-awesome-icon @click="changeDirection({ key:'ArrowDown' })" icon="fa-solid fa-arrow-down-long" /></i>
      </div>
    </div>

</template>

<style scoped>

</style>
