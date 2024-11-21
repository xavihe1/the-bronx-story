namespace SpriteKind {
    export const twoPlayersButton = SpriteKind.create()
    export const storyButton = SpriteKind.create()
    export const mom = SpriteKind.create()
    export const losa = SpriteKind.create()
    export const Complete = SpriteKind.create()
    export const Building = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.storyButton, function (sprite, otherSprite) {
    cursor.sayText("Press A to play")
    if (controller.A.isPressed()) {
        if (mainName == "" || mainName == "undefined") {
            mainName = game.askForString("Username", 8)
        }
        storyMode()
    }
})
function storyModeDestroy () {
    sprites.destroy(cursor)
    sprites.destroy(single_player_button)
    sprites.destroy(two_players_button)
}
function TwoPlayersScreen () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffceccc8cfffffffffffffffffffffffff8cfffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffebbceecffffffffffffffffffbbfffff8cfffffffffffffffffffffffffffffffffffffffffccffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddbddbbbcfffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfcccecccccccfffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcefccffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffc88cc88cc8fffcbcfffcfeddeedddcfcc88ccffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffccccccccccfcbbbefffffffccccbbcfccccffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffcccccccccfccccffffffffffffffffcccccfcfffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffcccccccfffffffffffffffffffffccccccffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcffffffffcffcccfffffffffffcfffffffffccccfcffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffccfffffffbeebbbcffcccffccccffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffcffffebffffffffffedbbfcccffffffffffffffffffffffffffffffffffc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffccfffffcfffffffffffffffccccffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffccffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffcbffcbfffffcccfffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceffffffccfcccccfffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffceffcbfcccfffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffcffcbcccffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffccffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffccfecffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffcffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffff6fffffffffffffffffffffffffffffffcfffffffffffcfffffffffffffffffffffffffffffffffff
        ccccccfcceffffffffffffbbefceecfffffffffffeffffffffffffffffffffcbffffffcffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffff
        cccccccccbcccccccccccccbccceeeeecccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccbcccccc68cceeeccbcccccccccccccccbccccbbcccccccccbccccbbcccccccccbccccbbccccccccccccccbbcccccccccbccccccccccbccccbccccbbccccbcccccccccbbcccccccc
        bbbbbbbbbbbbbbbbbbbbbcc6cccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbcffccb6ffcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbcfffffcccccbcbbcfffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbcffffffffffffffffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbcffffffffffffffffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cbbccbcbbccbbccccffffffffffffffffcbccbcbbccbbccbbcbbcbbbbccbbccccbbccbbbbccbbccccbbccbbbbbbbbbbccbbccbbbbccbbccbbcbbccbbcccbbccbbcbbccbbcccbbccccbbccbcbbccbbcc
        cccbccccccbcbcbcccccccffffffcccccccbccccccbcbcbcccccccccccbcbcbccccbccccccbcbcbccccbcccccccccccccccbccccccbcbcbccccccbcbbbbcbcbccccccbcbbbbcbcbccccbccccccbcbcb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbbcbbbbcbbbccbbccbbbbcbcbbbbccbbbbcbbbcbcccbccbbbbcbbbbcbbbbccbbbbcbbbbcbbbbccbbbbcbce2ecbcbccbbbbcbbbbcbbbbccbbbbcbbbbcbbbbccbbbbcbbbbbbbcbccbbbbcbbbbcbbb
        bbcbbbbbbbbbbcbbbcbbcbbcbcbbbcbbbbcbbbbbbbbcccbbbbcbbbbbbbbbbcbbbbcbbbbbbbbbbcbbbbcbbbbc22e2ebbceecbbbbbbbbbbcbbbbcbbbbbbbbbbcbbbbcbbbbbbbbbccbbbbcbbbbbbbbbbcb
        bbbbbbbbbbbbbbbcbbbbcccbbcbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee22e2ebbbe22bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbcbbbbbbbbbbbbbbbb
        bbcbbcbbbbbbbcbbbcccbbbbbcbbbcbbbbcbbcbbbbccbbcbbbcbbcbbbbbbbcbbbbcbbcbbbbbbbcbbbbcbcee22e2ecccbbe2ebcbbbbbbbcbbbbcbbcbbbbbbbcbbbbcbbcbbbbbebbcbbbcbbcbbbbbbbcb
        cccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccce2e2ee2ccccceeecccccccccccccccccccccccccccccccceeccccceebcccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebce2eee22bbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbcbbbb2ebbbbe22ebbbbbbbbbbbbbbbbbb
        bcbbcbccbcbbcbbcbcbbcbccbcbbcbbcbcbbcbccbcbbcbbcbcbbcbccbcbbcbbcbcbbcbccbbbcbbbcbcbbcbcce222222cbcbbcbccbcbbcbbcbcbbebceebcbceecbce22eccbe222ebcbeebcbccccbbcee
        bbcbbbbbbcbbbccbbbcbbbbbbcbbbccbbbcbbbbbbcbbbccbbbcbbbbbbcbbbccbbbcbbbbbbbbccccbbbcbbbbe22222e2bbbcbbbbbbcbbbccbbececbb22ecee22ee22e22e2e22ee22ee2ebbbbeecbce2e
        cbbbbcbbbbccbbbccbbbbcbbbbccbbbccbbbbcbbbbccbbbccbbbbcbbbbccbbbccbbbbcbbbbccbbbccbbbbcbeeee222eccbbbbcbbbbceebbce2ecbce2e222e22222e22e2222eeee222ebebce2ebccbeb
        bbcbbcbbbccbbccbbbcbbcbbbccbbccbbbcbbcbbbccbbccbbbcbbcbbbccbbccbbbcbbcbbbcccbccbbbcbbcbceebeeecbbbcbbebbbce22eee2e2eee22ee22222efe22222fffccffee2bcbbe2ebcceeee
        cccbbcccbbccccbbcccbbcccbbccccbbcccbbcccbbccccbbcccbbcccbbccccbbcccbbcccbbbcbbbbcccbbcccbbbccbbbcccce2eece22e2222eee22efffccfeffff2222ffcb33cfe2eccbbcccbbcccee
        bbbbbbcbbbbbcccbbbbbbbcbbbbcbbbbbbbbbbcbbbbbbbbbbbbbbbcbbbcbcbcbbbbbbbcbbbbbbbbbbbbbbbcbbbbcbeeebce22222eeee22efffccfffcb333bcfa3cee2ec3333bff22eecbbbcbbbbcebb
        bbcbbbbbbbbcccbbbbcbbbbbbbbbbcbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbe2222eee2ee22e2effcb333bfc3333333fb3ce22fe33cffff22eccbbbbbbcce2ec
        bbbbbcbbbbcccbcbbbbbbcbbbbcbbbbbbbbbbcbbbbcbbbbbbdbbbcbbbbbbcbbbbbbbbcbbbbbbbbbbbdbbbcbbbbcbb22efcccffee222fffb333333cc33bfc33fb3be22fcbbcabafe2eebbbeebbbce222
        cbcbbcbccbbbbccbcbcbbcbccbbbbcbbcbcbbcbccbbbdbbbbbbbbcbcccbccccbcbcbbcbccbbbdbbbbbbbbcbccbbe22ecb3333cfffeffbab33cfb3cfc3bfc3bfcbbfe2efabbbbcfe222eee22ece22e22
        ccccccccccccccccccccccccccccccccccccccccccccbbdbbbbccccccccccccccccccccccccbbbdbbbdbcccccceeefcb33b33bbbffffbbc3afcb3cffabcbbcfcbcffeeffaccffffeeeeeeeeeeeeee2e
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe222e33cfa3333cfef3bcbbbb3bc2ebbbbacffbbf22efcacfffffe22222222222222e
        bcbbcbbbbcbbcbcbbcbbbcbbccbbcbcbbcbbbbcbcbbbbbbccccbcbbbbcbbcbcbbcbbcbbbbcbbbbbbbbbbbcbbccbee2cb3ccbbccbcfffabfbbbbbcfefcbccffefccffffffccccccff22eee22e2ffffff
        bbcbbbbbbbbbbcbbbbcbbbbccbbbbcbbbbcbbccbcbbbbbcbbbbbbbbbbbbbbcbbbbcbbbbbbbbbbbbbbbbbbbbccbbe22fcbbbbbfcbcfffccfabccabffefccffeefccfcccffcccccfff2efffe2efa333af
        cbbbbcbbbccbbbcccbbbbcbcbbcbbbcccbbbcccbbbcbbbbbbbbbbcbbbccbbbcccbbbbcbbbcbbbbbbbbbbbcbcbbe2e2ecabbafffbafffccfccfffccfffccff2efccccccfffffffffefffbcfffc33333c
        cbcbbcbccbcbbcbbcbcbbbccbccbbcbbcbcbbbbbcccbbcbbcbcbbcbccbcbbcbbcbcbbcbccbcbbcbbcbcbbbccbe2e222ecacffefcccffccfccfffccfffcccf22ffccffffffffffe2ffc333cffb3bfc33
        ccbbbcbbbcbccbbbccbbbccbbbbccbbbccbbbbcbbbbccbbbccbbbccbbbbccbbbccbbbccbbbbccbbbccbbbccbbc22222ecccff2efcccccffccffffccffffff2effffffe22fcbcfeefc333bcffbbfffbb
        bbbbbbccbcbbbcbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbcbbbbbbbbbbbbe2ee22fccff22fffccffffffe2ffffefffe2effffffe22e33bffff33cfffffbbfffcb
        bbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22e22fccff222fffffe2ffe2e2eee2effeefccbbbcffec333cffcbbffffffcbfffcb
        bbbbbbbccbcbbcbbbbbbbcbbbbcbbcbbbbbbbcbbbbcbbcbbbbbbbcbbbbcbbcbbbbbbbcbbbbcbbcbbbbbbbcbbbbc222eeefcffe222ef2e222222e22efffffffc333333bcffbbbbffabcfffcffcacffcc
        cbcbcbcccbcccccbcbcbbcbccccccccbcbcbbcbccccccccbcbcbbcbccccccccbcbcbbcbccccccccbcbcbbcbccce2e2222ffffe2e2222ee22e2222ffcbb33afb33acc3befcbbcbcfcbcffabcffcccccc
        cccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbcccccee2222effe222222222222222efc3bbbb3cc33cfcbbfffbcfcbcfccffcccfffccccf
        bcbbcbccbbbbcbbbbcbbcbccbbbbcbbbbbbbcbccbbbbcbbbbcbbcbccbbcbcbbbbcbbcbccbbbbcbbbbcbcbbbbbbbbe22e22222e2222e2eeee22222fb3affcbbfbbbcbbbfecbbcbacfcccfcccffffffff
        bbbbbbbbbcbbbbcbbbbbbbbbbcbbbbcccbbcbbbbbcbbbbcbbbbbbbbbbccbbccbbbbbbbbbbcbbbbbbbbbbbbbbbcbbbeee22e22222ee2ecbcbe2e22fc3bfffcbccbbbbbcfffcccccccffccccccfeefff2
        cbbbbccbbbccbbbbcbbbbccbbbccbbbbbbbbbccbbbbbbbbbbbbbbccbbbbbccbbcbbbbccbbbccbbbcbbbbcbbbbbccbe22ebce222ebbecbecbc22222fcbcfffbcfbbccaccffccfffccfffffffff2ee222
        bbcbbcbbbccbbccbbbcbbcbbbccbbbbbbbbbbcbbbbcbccbbbbcbbcbbbcbbccbbbbcbbcbbbccbbcccbbbbbbcbbccbbeebbccce2ebcccbbcebc222e2efacfffbcfccfffccffccffffcfffffffe222e2ee
        cbcbbcbccbccccbccbcbbcbccbbbbcbbbbbcbbbbbbbbbcbbbbbbbcbccbbcbbcccbcbbcbccbcbcccbbcccbbbccbccccbbccbbbebccceeccbce22eeeefcaffcccfccfffcccfccfeeffff2222e22222222
        ccbbbbcbbbbcbbbbccbbbbcbbbbcbbbbcbbbbbbbcccccbbbbbbbcbcbbbbcbbbbccbbbbcccbbccccbbbbbcbbbbcbcbbbbccbbbbeee2ecbbbbecee222fcccfccffccffffffffffe22ee222e2222e2ebce
        bbcbbbbbcbbbbcbbbbcbbbbbcbbbbbbbcccbbbcbbbbbbbbcbbbbbbbbcbbbbcbbbbcbbbccbccccbccccbbbbbbbbbbbcbbbbcbbc2222ebe2ebbbcbe2eefcccccfffffe2effeeee2e2e22e22222222bbcb
        bbbbbcbbbbcbbbbbbbbbbcbbbbbbbbbcccbbccccccccbccbbbbbbbbbbbcbbbbbbbbbbcccbbbbbbbbbbbbbcbbcbbbbbbbbbbbbe2222e2e222eebeee22fccccfffffe2e222e2e22ee22eee22cbeeebbbb
        bbcbbbbbcbbbbcbbbbcbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbcbbbbcbbbbbcbbbbbbbbbbbbbbbbbbbbcbbbbcbbbbe2ebe22ebbbe22222fffffe222222e2e2e22ee222ebcbbebbbcbbcbb
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeccccccee22ffffe22e2222222e22ecccecccccccccecccaac
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbe22222222222222ebbeebbbbbbbbbbbbbbbbbbbbb
        bcbbbcbcbcbbcbbcbcbbcbccbcbbcbbbbbbcbbbbbbbcbbbbbcbbbbbbbbbbcbbcbcbbcbccbbbcccbbcbbcbbcccccbceecbcbbbcbcbcbbcbbcbcbbcbc222e2ee2eee22ebccbebcbcbceebbcbccbccbcbc
        bbcbbbbccbbbbcbbbbcbbbbccbbbbcbbbcccccccbbbcbbbbbccbbbbbcbbbbcbbbbcbbbbcbbbbbbbbbcbcbbcbbbcb22ebbbcbbbbccbbbbcbbbbcbbbbe2ebe22eccbbebbbecbbccccbe22bbbbccbbbbcb
        cbbbbbccbbccbbcccbbbbcbbbcccbbbbbbbbbbbbbbbbccbbbbbbbcbbbbccbbcccbbbbcbbbbbbbbbbbbbcbbbbbbcbeecceecbbbccbbccbbcccbbbbcbeecccbecbbbcbbcbbbcccbcbcce2ebcbbbcbbccb
        bbcbbbccbcbbbcbbbbcbbbbccbbbbcbbbccbbbcbbbbbbccbbbbcbbbbbcbbbcbbbbcbbbbccbcffccffbbbbbbbbbbbe22e2ccbbbccbcbbbcbbbbcbbebccbbbbcbbbccbbbbccbbcbbcbeeebbbbccbbccbc
        cccccccbccccccbccccccccccbccccbbbcbbbbbbbbbbbbbbbbbccbbbcbccccbccccccccccccccccccccccccccccccceecccccccbccccccbccccccccccbccccbcccbbcccccbbccccccccccccccbbcbbc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccc66ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc6cccccccccccccccccccccccccccccccccccccccccc6c
        6cf666666ccf66c6666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc6cc66cccccccccccc66666cccccccccccf6cf6ccf66c6666ccccccc6cf6666666
        6ccccccc6cccc6cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc6ccccccccccccc6ccccccc6cccccccccccccccccccc6c
        bccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccbccccccccccbccccccccccccccccccccbccccccccccbccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cbcbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbccbcbbbbbbbbbbbbbcbcb
        bbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbcccccccfccccccfcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccffccccccccfccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccffccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cccccccccbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cccccbccccccccbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbcccccccccccccccbbbdbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbb
        dbbbbbccccccccbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bccccccccccbcccccccccbbcccccccccbccccccccccbcccccccccbbcccccccccbccccccccccbcccccccccbbcccccccccbccccccccccbcccccccccbbcccccccccbccccccccccbcccccccccbbcccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    sprites.destroy(two_players_button)
    sprites.destroy(single_player_button)
    sprites.destroy(cursor)
}
function storyMode () {
    storyModeDestroy()
    createPlayer()
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    scene.setBackgroundColor(11)
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(player_1, tiles.getTileLocation(7, 12))
    mom2 = sprites.create(img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b f 4 4 4 4 4 e e b b f . 
        . . f e f b d d d e 4 4 4 f . . 
        . . e 4 c d d d d e 4 4 e f . . 
        . . e f b b d b d d e e f . . . 
        . . . f f 1 1 d 1 d 1 f f . . . 
        . . . . . f b b f f f . . . . . 
        `, SpriteKind.mom)
    tiles.placeOnTile(mom2, tiles.getTileLocation(15, 2))
    DialogMode = true
}
function doMenu () {
    scene.setBackgroundImage(img`
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666699999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666661111116666666666666666666666666666666699999966666666666666666666666666666666666666661116666666666666666666666666666666666666666666666
        66666666666666666666666111ffffff111166666611111111111111111666669999999666666666666666666666666666666666666661fff1666661116666666666666666666666666666666666666
        66666666666666666666661fffffffffffff166661fffffffffffffffff166669999999966666661111166666666666666666666666661fff166661fff1666666666666666666666999999996666666
        66666666999999966666661fffffffffddfff16661ffffffffffffffffff1666999999996666661fffff11111999966666611116666661fdf166661fff1666666661116666669999999999999666666
        66669999999999966666661fffff11ffffdfff1661fffffffffffffffffff16699999999666611fffffffffff1999996661ffff1166661fdff16661ffff16666661fff1666669999999999999966666
        666999999999999666666661ffdf16111ffdff1661fffff1111111111fffff16669999996661fffddfffffddf1119996661ffffff16661ffdf16661fdff1666661fddf1666669999999999999966666
        666999999999999666666661ffdf1666611fdff1661fffff1666666661ffff16666699996661ffdff1fffffddfff1196661ffffff16661ffdf166661fdff16661fffff1666666999999999999966666
        666999999999999666666661ffdf1666661ffff1661fffff16666666661ffff166666666661ffdff16111ffffddfff166661ffffff16661fdf166661fddf16661ffff16666666999999999999999996
        6669999999999666666666661fdf16666661fff16661ffdff1666666611ffff166666666661ffff16666911fffdfff166661fffffff1661fdf1666661fdff161ffff166666666999999999999999996
        6669996666666666666666661fdf16666661fff16661ffdfff1661111ffffff166666666661fff166666999111ffff1666661fffffff161fff1666661fdff11fffff166666666699999999999999996
        6666666666666666666666661fdf1666111ffff16661ffddff161ffffffffff166666bbbbb1fff1bbbb69999991ffff166661fffffff161fff16666661fdff1ffff1666666666666999999999999996
        666666666666666666666661ffdf1611ffffff1666661ffddf161fffffffff1666666bcccc1fff1cccb66669991ffff166661ffffffff11fff16666661fdffffff16666666666666666666999999996
        666666666666666666666661ffdf11fffffff166666661ffdff11fffffffff1166666bcbcc1fff1cccb666699991fff1666661ffffffff1ffff16666661fffffff16666666666666666666699999996
        666666666666666666666661fdd161ffff1116666666661fdfff11ffffffffff11166bcccc1ffff1ccb666669991fff1666661dfffffff1ffff166666611fffff166666666666666666666669999666
        6bbbbbbbbbbbbb6666666661fff161fffff116669996661ffdfff1111ffffffffff11bcbcc1ffff1ccb666669991fff1666661dff1ffdff1fff1666111fffffff166666666666666666666666666666
        6bcccccccccccb666666661ffff166111ffff1669999961ffdfff1666111fffffffff11bccc1ffff1cb66666661ffff1666661fdf11fddfffff1661fffffffffff16666666666666666666666666666
        6bcccccccccccb666666661ffff166661ffff16999999661fdfff166666611fffffffff11cc1ffdff1b66666661ffff1666661fdf11ffddffff1611fffdffffffff1166666666666666666666666666
        6bcccccccccccb66666661fffff1666661fff19999999961ffdff166666666111ffffffff1cc1ffddf11666661ffff16666661fdf161ffddfff11fffddff111ffffff11666666666666666666666666
        6bcccccccccccb6666661fffff16666661fff19999999961ffdfff1666666666611fffffff1cc1ffddff116661ffff1666661ffdf1661ffdfff11fffff116661fffffff116666666666666666666666
        6bcccccccccccb6666661fffff1111111ffff199999999661fdfff166666666666611fffff1ccc1ffddfff111fffff199661ffddf1661ffddff11ffff16666661ffffffff1666666666666666666666
        6bbcbbcccccccb6666661ffffffffffffffdf199999999661ffdff16666666666666611ffff1ccc1ffddfffffffff1666661ffdff16661ffdff1611116666666611ffddff1666666666666666666666
        6bcccccccccccb6666661fffffffffdddddff166999999661ffdff166666666666666b1ffff1cccc11ffffffffff16666661ffff1666661ffff166666666666666611fddf1666666666666666666666
        6bcccccccccccb6666666111ffffffffffff1666699999661fddff166666666666666bc1fff1ccccbb11fffffff16666b661fff16699961ffff16666666666666666611116666666666666666666666
        6bcccccccccccb6666666666111111111111666666666666611111666666666666666bc1fff11cccccc6111111166666666611166999999111166666666666666666666666666666666666666666666
        6bccbccccccccb6666666666666666666666666666666666666666666666666666666bc1fffff1ccccb6666666666bbbbbbbb999999999966bbbbbbbbbbbbb666666666666666666666666666666666
        6bccccbccccccb666666666666666666666666bbbbbbbbbbbbb666666666666666666bcb1ffff1ccccb6666666666bccccccb999999999966bcccccccccccb666666666666666666666666666666666
        6bccbbbbcccccb666666666666666666666666bcccccccccccb666666666999996666bccc1fff1ccccb666cc69999bcbbcbcb999999999966bcbbbcccccccb666666666666666666666666666666666
        6bcccccccccccb66666666666bbbbbbbbbbbbbbcccccccccccb666666699999999999bcbcc111cccccb66cc999999bccccccb999999999966bcccccccccbcb666666666666666666666669999966666
        6bcccccccccccb66666666666bccccccccccccbbbcccbbbcccb666669999999999999bcbccccccccccb66c9999999bccbbccb999999999966bccccccbbbbcb666666666666666666666669999999666
        6bcccccccccccb66666666666bbbbcccccccccbcccccccccccb666699999999999999bccccccccbcccb66c9999999bccccccb999999999669bcccccccccccb666666666666666666666699999999966
        6bccbbbccccccb66666666666bccccccccccccbcbcccccccbcb666699999999999999bcbccccccbcccb9999999999bcbccccb999999999999bccbbcccccccb66666666666666699d699999999999999
        6bcbbccccccccb66666666666bccccccccccccbccccccbbbbcb666699999999999999bccccccccccccb9999999999bcbccccb999999999bbbbcccccccccccb666666666666669999999999999999999
        6bcccccccccccb66d99666666bccccccccbbccbcccccccbbccb666699999999999999bcbccccccccccb999996ccc6bccbbbcb6bbbb9999bccccccccccccccb99969999996699999999999bbb6999999
        6bcccccccccccb69999996666bccccccccccccbcccccccccccb666699999999999996bccccccbbbbccb6699966666bccccccbbbcccb996bcbbccbccbbbbbcb9999999999999999999999dbcb6bb9999
        6bcccccccccccb6999999669dbccbbbcccccccbccbbcccccccb666669999999966666bcbccccccccccbbbbbbbbbbbbcbcccccccccccbb6bcccccbccccccccb99999999999999996bb9999bcb6bbb6db
        6bcccccccccccb69999969996bccccccccccccbcccccccccbcb666666666699666666bcbccccccccccccccccccccccccbccbbbbbbbbbbbbccccccccccccccb999999999999999dbbbb696bcbbbcb6db
        6bbcbbbbcccccb69999969996bccccccccccbcbcccccccbbbcb666666666666666666bcccccbbccccccccccccccccccccccbcccccccbccccbbbbccbbbccccb66666666bbbb666dbccb666bcccccbb6b
        6bbbcbbccccccb69999969996bcbccccccccccbcccbbbccbbcb66666666bbbbbbbbbbbccccccccccbbccbcccbbbbcccccccbcbbccccbcccccccccccccccccbbbb666bbbccb6666bbcb66bbbccbbcb6b
        6bcccccccccccb699d6666666bcbccbbbcccccbcccccccccccb66666666bcccccccccbccccccccccccccbccccccccccccccbcccccccbcccbbbbbbbbbbbbbccccbbbbbcbccb666bbccb6bbccccbccb6b
        6bcccccccccccb699bbbbbbb6bccccbcccccccbcbcccccccccb66666666bccbbbcccbbcbbccccccccccccccccccbbbbbbbbbbbcccbcbcccbcccccccccccbcccccccccccccbb6bbcccbbbccccccccb6b
        6bcccccccccccb699bcccccb6bccccccccccccbcbccbbbbbccb66666666bcccccccccbcccccbbbbbbbbccccccccbcccccccccbccbbcbcccbcbccbccccccbccccbbbcccccccbbbcbbcccccbcbbbbcb6b
        6bcccccccccccb699bcccccb6bccccccccbbbcbcccccccccccb66666666bccccbbbbcbcccccbccccccbccccccccbcbcccccccbcccccbcccbccbbccbbbccbccccccccccbccccccccccccccbccccccbbb
        6bccccbccccccb666bcbbccb6bccccccccccccbcbcccccccccbbbbbbbbbbcccccccccbcccccbbbbcccbccbccbccbccccccbccbcccccbcccbcccccccccccbcccccccccccccccccccccbbcccccccccccc
        6bcccccccccccb66bbcccccb6bcbbbccbcccccbccccccffffffccccccccccccccccccbcccccbccccccbccccccccbccbbccbccbcbbccbcccbcccccccccccbcfffffffffffffffffffcccccccccccbbbb
        6bcccccccccccb666bccbbcb6bccccccbbbcccbcccffffffffffffffffffffcccccccbbbbbbfffccbcbccccccccbccccccbccbcccccbcccbcccccccccccfffffffffffffffffffffffbbbbbcccccccc
        6bccbbcccccccbbbbbcccccbbbccccccccccccbcccffffffffffffffffffffcccccccbcccffffffffcbcccbccccbcccccccccbcccccbcccbccccccccbccfffffffffffffffffffffffccccbccccbccc
        6bccccccccccccccccccccccccccccccccccccbcccfffffffffffffffbbbfffffffffffffffffffffffccccccccbcccccccccbcccbcbcccbccbbbcccbccfffffffffffffffffffffffbbccbcccccccc
        bbccccccccccccccccccccccccccccccccccccbcccffffffbffffffffffffcfffbcccccccccffffffffccccccccbcbbccccccbcccccbcccbccccccccbccfffffffffffffffffffffffccccbcfffffcc
        bbcccccccccccccccccccccccccccccbbbbbbbbcccffffffbffffffffffffcfffcbbcccceeeffffffffcccbbbbcbcccbbccbcbcccccbcccbcccccccccccfff3bee4eeee33ccc3e33ffccbffffffffff
        cccccccccccccccccccccccccccccccbccccccbcccffffffbffffffffffffcfffcbc34bceeeffffffffccccccccbcccccccbcbbbbccbcccbccccccbccccffff4eb3eeee44ccc4e43fffffffffffffff
        cccccccccccbbbbbbbbbbbbccccccccbbcccbcbcccfbbfff2222222ffffffcfffcbc44bccccc444ffffccccccccbcccccccbcbcccccbcccbcbccbbbccccffffbeb3eeeb34ccc4e44fffffffffffffff
        bbbbbbcccccbccccccccccbccccccccbccbcccbcccfccffffffff22ffffffcfffcbc44bccccc443ffffccbbccccbcccccccccbcccbcbcccbcbccccbbbbcffffbeb3eeeb33ccc4b33fffffffffffffff
        cccccbcccccbcbbccccbbcbccccccccbcccbbcbcfffbbccbcbfffffffffffcfffcbc44bceeec443ffffccccccccbcbccbbcccbcccccbcccbcccccccccccfffffffffecccccccfffffffffffffffffff
        bccbcbcccccbcccccccccffffffffffffffffffffffbfffffffffffffffffcfffcbc43bceeec333ffffccccccccbcccccccbcbcbbccbcccbccccbbccfffffffffffffcccccccfffffffffffffffffff
        bccccbcccccbcccccbffffcccccccccccccccccffffbfffffffffffffffffcfffcbc33bceeec33bffffccffffffffffffffccbcccccbcccbcccccccffffffffffffffcccccccffffcfff45555ffffff
        bccccbcccccbcbccffffffc443444b4444bccffffffcfffffffffffffcccfcfffceccccceeeccccffffffffffffffffffffccbccfffffffffffffffffffffffffffffccccccccccccfff445ffffffff
        cccccbcccccbcbccffffffc44334444444bccffffffcccccfffffffffcfcfcfffebbeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffccbccccceccccccccccccffffffffffffff
        ccccffffffffffffffffffc44334444444bccffffffbeb3cfffffffffcccfcffffffffffffffffffffffffebefffffffffffffffffffffffffffffffffffccbbeebeeeebbcccbebbcffffffff444fff
        bbbcfbbbbbbccccccccccfc44334444444bccffffffcccccffffffffffccfcfffffffffffffffffffffceeeeeeeeeecceffffffffffffffff222ffffffffcc3bbe4eeeb34ccc4e44cffffffff5555ff
        ccccfbcbbcbbcccccccccfc44334444444bccffffffcceecffffffffffccfcc6fffffffffffffffffffccccccccccccccfffffffffffffff2222ffffffffcc3bee4eeeb33ccc4e44cffffffffffffff
        ccccfbb4b4bbcc4eccbbcfc44344444444bccffffffcccccfffcffffffccfcc6ccccfffffffffffffffccccccccccccccfffffffbbffffff22222fffffffcc3bee3eeeb33ccc3e33cffffffffffffff
        ccccfcb4b4bccc4bccb3cfc44444444444bccffffffccccfffc6cccfffccfc6cfcbcb4bfffffb4effffb333bcb333bcb3333ffffbbfffffff2222fffffffccccccccecfccccccccccffff222fffffff
        ccbcfbb3b4bbcc4bccb3cfc44444444444eccffffffbcccfff6cccfcccfcfcc6fcbcb4bfffff44effffb333bcb333bcb3333ffffbbffffffff444444ffffccceececcccccccccccccffff5fffffffff
        ccbcfbb4b4bbcc4bccb3cfc4444444444eeccffffffbcccffff6ccc6ccccfccffcbcb4bccecc44bffff3333beb333eeb3333ffffbbffffffff4444444fffcccccccccfcccccccccffffffffffffffff
        ccccfbb4b4bbcc4bccb3cfc44444444beecccffffffbbcbffffffffffffffccccebcb4bcecccbbcffff3334beb334bcb3344ffffbbbfffffffffffffffffcccccccccccccccccccccffffffffffffff
        ccccfbb3b3bbcc3bccb3cfcbeeeeeeeeeeeccffffffccccfffbbfffffffffcccfcecb4bccccffbcffffb444beb444bcb4444ffffbbbfffffffffffffffffcccccccccccccccccccccffffffffffffff
        ccccfccfccccccffcfffcceecccccccccccccffffffccccffbbbbfffbffffffffcecb4bfffff33bffffbbbbbbbbbbbbbccccffffffffffffffffffffffffcc4beb4ceee44ccc4b43cfffffffff55fff
        ccccfbbbbbbbcccccccccfffffffffffffffffffffffcccfffbbbfffbbbbfffffceffffffffffffffffcccccccccccccccccffffffffffffffffffffffffcc3beb4eeeb34ccc4e44cfffffffff55fff
        cbbcfbbccccccccccccccfcccccccccccccccccccffffffffffffffffffffffffcecfffffffffffffffbbbbbbbcbbcebbbccffffffffffffbbbbbbbfffffcc3beb4eeeb33ccc4e44cfff444ffffffff
        ccccfccccccccccccccccfeeeeeccccccccccccccfffccccfffffffffffffffffffffffffffffffffffcccccccccccccccccfffffffbbbbbbbbbbbbbffffccdbeb3eeeb33ccc3b33cffff54ffffffff
        ccccffffffffffffffffffeeeecccccccccccccccfccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfccccecffcccfccffcfffff4ffffffff
        cbccfbcbbbbbfff555fffffffffffffffffffffffffffffffffb44fffffb44ffffffffffffffffffffffffffffcfffffffffcccffbbbbbffffffffffffffcccccccccccccccccccccffffffffffffff
        ccccfbbbbbbcffffffffffffffffcccccccccccccffffffffffbbbfffffbbbfffcccccccccfffffffceeeeceeecccceeeeeecccffbb443ffb444444444fffffffffffffffffffffffffffffffffffff
        cbbcfbbcccbbffffffffff8fffffbeeebccccccccfcfffccfffffffffffffffffccccccccccccccfcce33334ccccccee33333ccffbb333ffb333333444ffcccccccccccccccccfffcffffffffffffff
        ccccfbbc4bbbce4fffffff8fff5fb444beccccffffcfff6cfffffffffffffffffccccccccccccccfcce33343ecccccbe33344ccffbb333ffb444444443ffcfffcccccccccccccfffcfc6fffffffffff
        ccccfbbc4bbbce4fffffff8fffffb444bcccfffffff6cc6cfffffffffffffffffccbbebccccccccfcce34443ecccccee34444ccffbe444ffb333343333ffcfffbcbccccc33b33fffcff6fffffb3bfff
        ccccfbbc4bbbce3fffffff8fffffbb44becccccfffc6c6ccfffffffffffffffffcce4ebccccccccfcccbcceeecccccecbccccccffbb33effb333343333ffcfffbebc666c33b34fffcfc6fffffb4bfff
        bcccfbbbbcbbffffffffff8fff5fbb4eeecfcccfffc6c6ccfffb3bfffffb3bfffcce4ebccccccccfcccccccecccccccccccccccffbb333ffb333333333ffcfffbebccccc33b34fffcff6fffffb4bfff
        bccbfbbbbbbfffffffffff8fffffbbb4eecfcccffff66cccfffbbbfffffbbbfffcce4ebccccccccfccccccccccccccccccccccfffbb333ffb333343444ffcfff33ec6fffffffffffcffffffffb4bfff
        ccbbffffffffff5f5fffff8fffffbbb4eeffffffffc66cccfffffffffffffffffcce4ebccccccccfcffffcffffffffffccccccfffbb333ffbbbbbbbbbbffcfffb3efffffffffffffcffffffffebbfff
        ccccffffffffffffffffff55ffffbbbbbecfcccffff6ccccfffffffffffffffffcce4ebccccccccffccccccccccccccfccccccfffbfbbfffffffffffffffcfffbbefffffffffffffcffffffffcccfff
        ccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffff
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        111fff1111ffffffffffffffffffffffffffffffffffff11fff1111ffff1111fff1111ffff1111fff1111ffff1111fff1111ffff1111fff11ffffffffffffffffffffffffffffffffffff1111fff111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    cursor = sprites.create(img`
        ......................fff
        .....................ff1f
        ...................ff11f.
        ..................f611ef.
        .................f611ee..
        ................f6f1eee..
        ...............f611ee....
        ..............f6f11e.....
        .............f6111ee.....
        ............f6f11fe......
        ...........f6111f........
        .....ff...f6f11f.........
        .....fffff6111f..........
        .....fffff11ff...........
        .....fffffff.............
        .......fffff.............
        ......f1fffff............
        .....fffffffff...........
        ....f1fff.ffff...........
        ...fffff...fff...........
        ..f1fff....fff...........
        ffffff....fff............
        f11ff.....ff.............
        f11ff....................
        ffff.....................
        `, SpriteKind.Player)
    cursor.z = 1000
    controller.moveSprite(cursor)
    two_players_button = sprites.create(img`
        ........................
        ...11111.......1111.....
        ..1.....1......1...1....
        ........1......1....1...
        ........1......1....1...
        .......11......1...1....
        .....111..111..1111.....
        ...111.........1........
        ..11...........1........
        ..1............1........
        ..11..1111.....1........
        ...1111........1........
        ........................
        ........................
        ...cccccccccccccccccc...
        ..cd5555555555555555dc..
        .c55555555555555555555c.
        .c55333333333333333355c.
        .c53333333333333333335c.
        .c53333333333333333335c.
        c333cccccccccccccccc333c
        c55c3555555555555553c55c
        c55c5555555555555555c55c
        c55c5555555555555555c55c
        c55c5555555555555555c55c
        c35c5555555555555555c53c
        cc33333333333333333333cc
        cc33333333333333333333cc
        cccccccccccccccccccccccc
        ..cbbc............cbbc..
        `, SpriteKind.twoPlayersButton)
    two_players_button.setScale(1.5, ScaleAnchor.BottomLeft)
    two_players_button.setPosition(30, 90)
    single_player_button = sprites.create(img`
        ........................
        1111....................
        1...1...111.............
        1....1111..........1..1.
        11.11111..111..111.1..1.
        .11....1.11.11.1.1.1111.
        ..111..1.1...1.1.1....1.
        ....11.1.1...1.111....1.
        1...11.1.11.11.11.....1.
        11111..1..111..1.1...11.
        ..11...1.......1.1..11..
        1..................11...
        .1111111111111111111....
        ........................
        ........................
        ........................
        ........................
        ......222222222222......
        ....2242222222222c22....
        ...2cc42222222222ccc2...
        .22ccc44444444422ccc422d
        .22c22eeeeeeeeeeebcc4222
        .222eebbbebbbbbeeebb4222
        .22ebbbbbebbbbbbbe222222
        .eee22222e22222222ee2222
        .eeeeeeeeeffeeeeefee2ddd
        .eeeeeeeeeffeeeffeeee22d
        .eeeeeeeeefffffeeeeeeeee
        .eeffffffeeeeeefffffeeee
        ...f11111feeeef11111fee.
        `, SpriteKind.storyButton)
    single_player_button.setScale(1.5, ScaleAnchor.BottomLeft)
    single_player_button.setPosition(130, 90)
}
function mapLevel () {
    destroyLevelOne()
    tiles.setCurrentTilemap(tilemap`level4`)
    tienda = sprites.create(img`
        ....ffffffffffffffffffffff....
        ...f8998989989899898998989f...
        ..f998899988999889998899988f..
        ..f999999999999999999999999f..
        ..f999999999999999999999999f..
        ..f999999999999999999999999f..
        ..f999999999999999999999999f..
        ..f999999999999999999999999f..
        ...f8888c888888888888c8888f...
        ...f6666c666666666666c6666f...
        ...f666dddddddddddddddd666f...
        ...f666dbbdbbdbdddd777d666f...
        ...f666dbbdbddbbdd777dd666f...
        ...f666dddddddddddddddd666f...
        ...f6666888888888888888866f...
        ...f6666666666666666666666f...
        ...f666666666ccccc66666666f...
        ...f66999666ccc9ccc8669996f...
        ...f66939366cc999cc8639993f...
        ...f63979766cc999cc8679397f...
        ...f6eeeee66ccc9ccc86eeeeef...
        ...f6eeeee66ccccccc86eeeeef...
        ...f66666666ccccccc8666666f...
        ...f66666666ccccccc8666666f...
        ...ffffffffffffffffffffffff...
        `, SpriteKind.Building)
    edificio = sprites.create(img`
        ..........................................................
        ..........................................................
        ..........................................................
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddd999ddd999ddd999ddd999dd999ddd999ddd999ddd999ddd999dd.
        ddddd999ddd999ddd999ddd999dd999ddd999ddd999ddd999ddd999dd.
        ddddd999ddd999ddd999ddd999dd999ddd999ddd999ddd999ddd999dd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddd999ddd999ddd999ddd999dd999ddd999ddd999ddd999ddd999dd.
        ddddd999ddd999ddd999ddd999dd999ddd999ddd999ddd999ddd999dd.
        ddddd999ddd999ddd999ddd999dd999ddd999ddd999ddd999ddd999dd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ddddddddddddddddddddddddddeeeeedddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddeeeeedddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddeeeeedddddddddddddddddddddddddd.
        dd999ddd999ddd999ddddddddd99999ddddddddd999ddd999ddd999dd.
        dd999ddd999ddd999ddddddddd99999ddddddddd999ddd999ddd999dd.
        dd999ddd999ddd999ddddddddd99999ddddddddd999ddd999ddd999dd.
        ddddddddddddddddddddddddddeeeeedddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddeeeeedddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddeeeeedddddddddddddddddddddddddd.
        `, SpriteKind.Building)
    tileUtil.createSpritesOnTiles(assets.tile`myTile13`, img`
        ....ffffffffffffffffffffff....
        ...f8998989989899898998989f...
        ..f998899988999889998899988f..
        ..f999999999999999999999999f..
        ..f999999999999999999999999f..
        ..f999999999999999999999999f..
        ..f999999999999999999999999f..
        ..f999999999999999999999999f..
        ...f8888c888888888888c8888f...
        ...f6666c666666666666c6666f...
        ...f666dddddddddddddddd666f...
        ...f666dbbdbbdbdddd777d666f...
        ...f666dbbdbddbbdd777dd666f...
        ...f666dddddddddddddddd666f...
        ...f6666888888888888888866f...
        ...f6666666666666666666666f...
        ...f666666666ccccc66666666f...
        ...f66999666ccc9ccc8669996f...
        ...f66939366cc999cc8639993f...
        ...f63979766cc999cc8679397f...
        ...f6eeeee66ccc9ccc86eeeeef...
        ...f6eeeee66ccccccc86eeeeef...
        ...f66666666ccccccc8666666f...
        ...f66666666ccccccc8666666f...
        ...ffffffffffffffffffffffff...
        `, SpriteKind.Building)
    tileUtil.createSpritesOnTiles(assets.tile`myTile34`, img`
        ..........................................................
        ..........................................................
        ..........................................................
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddd999ddd999ddd999ddd999dd999ddd999ddd999ddd999ddd999dd.
        ddddd999ddd999ddd999ddd999dd999ddd999ddd999ddd999ddd999dd.
        ddddd999ddd999ddd999ddd999dd999ddd999ddd999ddd999ddd999dd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddd999ddd999ddd999ddd999dd999ddd999ddd999ddd999ddd999dd.
        ddddd999ddd999ddd999ddd999dd999ddd999ddd999ddd999ddd999dd.
        ddddd999ddd999ddd999ddd999dd999ddd999ddd999ddd999ddd999dd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        dd999ddd999ddd999ddd999ddd99ddd999ddd999ddd999ddd999ddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
        ddddddddddddddddddddddddddeeeeedddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddeeeeedddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddeeeeedddddddddddddddddddddddddd.
        dd999ddd999ddd999ddddddddd99999ddddddddd999ddd999ddd999dd.
        dd999ddd999ddd999ddddddddd99999ddddddddd999ddd999ddd999dd.
        dd999ddd999ddd999ddddddddd99999ddddddddd999ddd999ddd999dd.
        ddddddddddddddddddddddddddeeeeedddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddeeeeedddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddeeeeedddddddddddddddddddddddddd.
        `, SpriteKind.Building)
    tiles.placeOnTile(player_1, tiles.getTileLocation(1, 9))
    scene.cameraFollowSprite(player_1)
}
function createPlayer () {
    player_1 = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    player_1.z = 100
    controller.moveSprite(player_1)
    scene.cameraFollowSprite(player_1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.twoPlayersButton, function (sprite3, otherSprite3) {
    cursor.sayText("Press A to play")
    if (controller.A.isPressed()) {
        TwoPlayersScreen()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.mom, function (sprite2, otherSprite2) {
    DialogMode = true
    game.showLongText("Talk with mom", DialogLayout.Bottom)
    story.printCharacterText("" + mainName + "!" + " They took it... They took everything from me!", "Mom")
    story.printCharacterText("\"Who, Ma? What happened?\"", mainName)
    story.printCharacterText("\"That gang... Those thieves! They stormed in, took my jewelry, my savings... everything! You gotta do something!\"", "Mom")
    story.printCharacterText("\"Don't worry, Ma. I'll find them. They won't get away with this.\"", mainName)
    story.showPlayerChoices("Get Out", "Stay")
    if (story.checkLastAnswer("Get Out")) {
        mom2.setKind(SpriteKind.Complete)
        mapLevel()
    } else if (story.checkLastAnswer("Stay")) {
        pause(1000)
    }
})
function destroyLevelOne () {
    sprites.destroy(mom2)
}
let edificio: Sprite = null
let tienda: Sprite = null
let DialogMode = false
let mom2: Sprite = null
let player_1: Sprite = null
let two_players_button: Sprite = null
let single_player_button: Sprite = null
let mainName = ""
let cursor: Sprite = null
doMenu()
game.onUpdate(function () {
    if (story.isMenuOpen()) {
        controller.moveSprite(player_1, 0, 0)
    } else {
        controller.moveSprite(player_1, 100, 100)
    }
})
