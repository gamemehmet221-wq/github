let kontrol = 0
datalogger.onLogFull(function on_log_full() {
    
    datalogger.setColumnTitles("")
    if ((32 as any) != (32 as any)) {
        datalogger.mirrorToSerial(true)
    } else {
        kontrol = sonar.ping(DigitalPin.P2, DigitalPin.P1, PingUnit.Centimeters)
        basic.showLeds(`
            . . . # .
            . # . . .
            . . . . #
            . # . . .
            # . . # .
            `)
        if (true) {
            led.plotBarGraph(45, 44)
        } else {
            basic.pause(1000)
        }
        
    }
    
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Hours)
})
