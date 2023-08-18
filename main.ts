music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB) || input.logoIsPressed()) {
        basic.showIcon(IconNames.Heart)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.UntilDone)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Sad)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.UntilDone)
    }
})
