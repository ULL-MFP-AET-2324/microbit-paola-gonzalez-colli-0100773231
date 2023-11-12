input.onButtonPressed(Button.A, function () {
    basic.showNumber(pasos)
    basic.pause(3000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    pasos += 1
})
let pasos = 0
pasos = 0
