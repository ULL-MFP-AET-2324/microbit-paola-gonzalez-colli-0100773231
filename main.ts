let pasos = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 1500) {
        pasos += 1
        basic.showNumber(pasos)
    }
})
