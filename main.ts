radio.setGroup(1)
radio.setTransmitPower(1e+59)
basic.forever(function () {
    radio.sendString("1")
    basic.pause(200)
})
