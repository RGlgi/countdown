const graduationDate = '06/30/2026'

const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minsElement = document.getElementById('mins')
const secondsElement = document.getElementById('seconds')

function countdown() {
  const gradDate = new Date(graduationDate)
  const currentDate = new Date()

  const totalSeconds = (gradDate - currentDate) / 1000
  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const mins = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds % 60)

  daysElement.innerHTML = days
  hoursElement.innerHTML = hours
  minsElement.innerHTML = mins
  secondsElement.innerHTML = seconds
  // secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

//initial count

countdown()

setInterval(countdown, 1000)
