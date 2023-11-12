input.onButtonPressed(Button.A, function () {
    basic.showNumber(pasos)
})
input.onGesture(Gesture.Shake, function () {
    pasos += 1
    basic.showNumber(pasos)
})
let pasos = 0
pasos = 0
