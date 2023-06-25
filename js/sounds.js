export default function (){
  const forestAudio = new Audio("https://github.com/andradeduuda/musicstimer/blob/main/musics/Floresta.wav?raw=true")
  const rainAudio = new Audio("https://github.com/andradeduuda/musicstimer/blob/main/musics/Chuva.wav?raw=true")
  const coffeShopAudio = new Audio("https://github.com/andradeduuda/musicstimer/blob/main/musics/Cafeteria.wav?raw=true")
  const fireAudio = new Audio("https://github.com/andradeduuda/musicstimer/blob/main/musics/Lareira.wav?raw=true")

  const pressButton = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
  
  
  forestAudio.loop = true
  rainAudio.loop = true
  coffeShopAudio.loop = true
  fireAudio.loop = true

  return{
    forestAudio,
    rainAudio,
    coffeShopAudio,
    fireAudio,
    pressButton
  }
}

