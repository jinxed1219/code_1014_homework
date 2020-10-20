basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X, Y)
            basic.pause(100)
            basic.clearScreen()
            break;
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X + 1, 4 - Y)
            basic.pause(100)
            basic.clearScreen()
            break;
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X + 2, Y)
            basic.pause(100)
            basic.clearScreen()
            break;
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X + 3, 4 - Y)
            basic.pause(100)
            basic.clearScreen()
            break;
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X + 4, Y)
            basic.pause(100)
            basic.clearScreen()
            break;
        }
    }
})
