def on_forever():
    for X in range(5):
        for Y in range(5):
            if X == 0 and Y == 4:
                pass
            led.plot(X, Y)
            basic.pause(100)
            basic.clear_screen()
basic.forever(on_forever)
