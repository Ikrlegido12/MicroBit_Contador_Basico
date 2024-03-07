input.onButtonPressed(Button.A, function () {
    numero += -1
})
input.onGesture(Gesture.Shake, function () {
    numero += 10
})
input.onButtonPressed(Button.AB, function () {
    numero = 0
})
input.onButtonPressed(Button.B, function () {
    numero += 1
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    numero += -10
})
let numero = 0
numero = 0
basic.forever(function () {
    basic.showNumber(numero)
    basic.pause(100)
})
