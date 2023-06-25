import Sound from "./sounds.js"

const body = document.querySelector ('body')
/*botões time*/ 
const buttonPlay =  document.querySelector('.play')
const buttonStop =  document.querySelector('.stop')
const buttonUp =  document.querySelector('.up')
const buttonDown =  document.querySelector('.down')
/*botões clima*/ 
const buttonForest =  document.querySelector('.forest')
const buttonRain =  document.querySelector('.rain')
const buttonCoffe =  document.querySelector('.coffe')
const buttonFireplace =  document.querySelector('.fireplace')
/*minutess time*/ 
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number (minutesDisplay.textContent)
let timerTimeOut
/*volume som*/ 
const volForest = document.querySelector('#volForest')
const volRain = document.querySelector ('#volRain')
const volCoffe = document.querySelector('#volCoffe')
const volFireplace = document.querySelector('#volFireplace')

const sound = Sound()
function toggleAudioPlay(myAudio) {
  let isPaused = myAudio.paused
  if (isPaused) {
    myAudio.play()
  } else {
    myAudio.pause()
  }
}
/*timer*/
function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function reset() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    updateDisplay(minutes, 0)

    if (isFinished) {
      updateDisplay(minutes, seconds)
      return
    }

    if (seconds <= 0) {
      seconds = 60

      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}
/*botoes timer*/
buttonPlay.addEventListener('click', function(){
  countdown()
  sound.pressButton.play()
})

buttonStop.addEventListener('click', function() { 
  reset()
  sound.pressButton.play()
})
/* Aumentar e diminuir o tempo em 5 minutos */
buttonUp.addEventListener('click', function(){
 let minutes = Number(minutesDisplay.textContent)
 minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
})

buttonDown.addEventListener('click', function(){
  if ( minutes > 5 ) {
    minutes = Number(minutesDisplay.textContent)
    updateDisplay(String(minutes - 5),0)
  } 
  else {
    alert (' Não é possível diminuir o cronômetro para números negativos! Tente acrescentar mais minutos!')
  }
})
 /*botões do clima, com musica e mudança de cors*/
buttonForest.addEventListener('click', function() {
  toggleAudioPlay(sound.forestAudio)
  sound.rainAudio.pause()
  sound.coffeShopAudio.pause()
  sound.fireAudio.pause()
  /*cores*/
  buttonForest.classList.toggle ('blue')
  buttonRain.classList.remove ('blue')
  buttonCoffe.classList.remove ('blue')
  buttonFireplace.classList.remove ('blue')
})

buttonRain.addEventListener('click', function() {
  toggleAudioPlay(sound.rainAudio)
  sound.forestAudio.pause()
  sound.coffeShopAudio.pause()
  sound.fireAudio.pause()

  /*cores*/
  buttonRain.classList.toggle ('blue')
  buttonForest.classList.remove ('blue')
  buttonCoffe.classList.remove ('blue')
  buttonFireplace.classList.remove ('blue')
})

buttonCoffe.addEventListener('click', function() {
  toggleAudioPlay(sound.coffeShopAudio)
  sound.rainAudio.pause()
  sound.forestAudio.pause()
  sound.fireAudio.pause()

  /*cores*/
  buttonCoffe.classList.toggle ('blue')
  buttonForest.classList.remove ('blue')
  buttonRain.classList.remove ('blue')
  buttonFireplace.classList.remove ('blue')
})

buttonFireplace.addEventListener('click', function() {
  toggleAudioPlay(sound.fireAudio)
  sound.rainAudio.pause()
  sound.coffeShopAudio.pause()
  sound.forestAudio.pause()

  /*cores*/
  buttonFireplace.classList.toggle ('blue')
  buttonForest.classList.remove ('blue')
  buttonRain.classList.remove ('blue')
  buttonCoffe.classList.remove ('blue')
})

/*volume*/
volForest.addEventListener ('input', function () {
  sound.forestAudio.volume = volForest.value
})

volRain.addEventListener ('input', function () {
    sound.rainAudio.volume = volRain.value
})

volCoffe.addEventListener ('input', function () {
  sound.coffeShopAudio.volume = volCoffe.value
})

volFireplace.addEventListener ('input', function () {
  sound.fireAudio.volume = volFireplace.value
})

/*dark*/
const buttonLight = document.querySelector ('.light')
const buttonDark = document.querySelector ('.dark')

buttonLight.addEventListener('click', function() {
  btnLight()
  })
 
buttonDark.addEventListener('click', function() {
  btnDark()
  })
  
  function btnDark() {
    buttonLight.classList.remove('hide')
    buttonDark.classList.add('hide')
   }
  
   function btnLight() {
    buttonLight.classList.add('hide')
    buttonDark.classList.remove('hide') 
   }

buttonLight.addEventListener('click', function () {

    document.body.classList.toggle('dark');
    timer.classList.toggle('dark')
    controls.classList.toggle('dark')   
  })
  
  buttonDark.addEventListener('click', function (){
    document.body.classList.toggle('dark');
    timer.classList.toggle('dark')
    controls.classList.toggle('dark')   
  })
