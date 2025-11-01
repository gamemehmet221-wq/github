kontrol = 0

def on_log_full():
    global kontrol
    datalogger.set_column_titles("")
    if 32 != 32:
        datalogger.mirror_to_serial(True)
    else:
        kontrol = sonar.ping(DigitalPin.P2, DigitalPin.P1, PingUnit.CENTIMETERS)
        basic.show_leds("""
            . . . # .
            . # . . .
            . . . . #
            . # . . .
            # . . # .
            """)
        if True:
            led.plot_bar_graph(45, 44)
        else:
            basic.pause(1000)
    datalogger.include_timestamp(FlashLogTimeStampFormat.HOURS)
datalogger.on_log_full(on_log_full)
