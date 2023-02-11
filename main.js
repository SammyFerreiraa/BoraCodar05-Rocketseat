function valueDisplay(num) {
  const display = document.querySelector(`[data-action="display"]`)
  display.value += num
}

function calculate() {
  const display = document.querySelector(`[data-action="display"]`).value
  const dps = document.querySelector(`[data-action="calc"]`)
  dps.innerHTML = display

  document.querySelector(`[data-action="display"]`).value = eval(display)
}

function deleteAll() {
  document.querySelector(`[data-action="display"]`).value = ""
  document.querySelector(`[data-action="calc"]`).innerHTML = ""
}

function apagar() {
  const display = document.querySelector(`[data-action="display"]`).value

  document.querySelector(`[data-action="display"]`).value = display.substring(0, display.length - 1)
}

function invertValue() {
  calculate()

  const valorDisplay = document.querySelector(`[data-action="display"]`).value

  document.querySelector(`[data-action="display"]`).value = valorDisplay * -1
}