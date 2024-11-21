@namespace
class SpriteKind:
    twoPlayersButton = SpriteKind.create()
    storyButton = SpriteKind.create()
    mom = SpriteKind.create()
    losa = SpriteKind.create()
    Complete = SpriteKind.create()
    Building = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    global mainName
    cursor.say_text("Press A to play")
    if controller.A.is_pressed():
        mainName = game.ask_for_string("Username:", 8)
        storyMode()
sprites.on_overlap(SpriteKind.player, SpriteKind.storyButton, on_on_overlap)

def storyModeDestroy():
    sprites.destroy(cursor)
    sprites.destroy(single_player_button)
    sprites.destroy(two_players_button)
def TwoPlayersScreen():
    scene.set_background_image(img("""
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
    """))
    sprites.destroy(two_players_button)
    sprites.destroy(single_player_button)
    sprites.destroy(cursor)
def storyMode():
    global mom2, DialogMode
    storyModeDestroy()
    mainName = game.ask_for_string("Username : ")
    scene.set_background_image(img("""
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
    """))
    scene.set_background_color(11)
    tiles.set_current_tilemap(tilemap("""
        level2
    """))
    tiles.place_on_tile(player_1, tiles.get_tile_location(7, 12))
    mom2 = sprites.create(img("""
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
        """),
        SpriteKind.mom)
    tiles.place_on_tile(mom2, tiles.get_tile_location(15, 2))
    DialogMode = True
def doMenu():
    global cursor, two_players_button, single_player_button
    scene.set_background_image(img("""
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666699999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666699999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                66666666666666666666666666ffffff666666666666666666666666666666669999999666666666666666666666666666666666666666fff6666666666666666666666666666666666666666666666
                66666666666666666666666fffffffffffff666666fffffffffffffffff666669999999966666666666666666666666666666666666666fff666666fff6666666666666666666666999999996666666
                66666666999999966666666fffffffffddfff66666ffffffffffffffffff6666999999996666666fffff66666999966666666666666666fdf666666fff6666666666666666669999999999999666666
                66669999999999966666666fffff66ffffdfff6666fffffffffffffffffff66699999999666666fffffffffff9999996666ffff6666666fdff66666ffff66666666fff6666669999999999999966666
                666999999999999666666666ffdf66666ffdff6666fffff6666666666fffff66669999996666fffddfffffddf9999996666ffffff66666ffdf66666fdff6666666fddf6666669999999999999966666
                666999999999999666666666ffdf6666666fdff6666fffff6666666666ffff66666699996666ffdff6fffffddfff9996666ffffff66666ffdf666666fdff66666fffff6666666999999999999966666
                666999999999999666666666ffdf6666666ffff6666fffff66666666666ffff666666666666ffdff66666ffffddfff666666ffffff66666fdf666666fddf66666ffff66666666999999999999999996
                6669999999999666666666666fdf66666666fff66666ffdff6666666666ffff666666666666ffff66666999fffdfff666666fffffff6666fdf6666666fdff666ffff666666666999999999999999996
                6669996666666666666666666fdf66666666fff66666ffdfff6666666ffffff666666666666fff666666999999ffff6666666fffffff666fff6666666fdff66fffff666666666699999999999999996
                6666666666666666666666666fdf6666666ffff66666ffddff666ffffffffff666666bbbbbbfffbbbbb69999999ffff666666fffffff666fff66666666fdff6ffff6666666666666999999999999996
                666666666666666666666666ffdf6666ffffff6666666ffddf666fffffffff6666666bcccccfffccccb66669999ffff666666ffffffff66fff66666666fdffffff66666666666666666666999999996
                666666666666666666666666ffdf66fffffff666666666ffdff66fffffffff6666666bcbcccfffccccb666699999fff6666666ffffffff6ffff66666666fffffff66666666666666666666699999996
                666666666666666666666666fdd666ffff6666666666666fdfff66ffffffffff66666bcccccffffcccb666669999fff6666666dfffffff6ffff666666666fffff666666666666666666666669999666
                6ccccccccccccc6666666666fff666fffff666669996666ffdfff6666ffffffffff66bcbcccffffcccb666669999fff6666666dff6ffdff6fff6666666fffffff666666666666666666666666666666
                6ccccccccccccc666666666ffff666666ffff6669999966ffdfff6666666fffffffffbcbccccffffccb66666666ffff6666666fdf66fddfffff6666fffffffffff66666666666666666666666666666
                6ccccccccccccc666666666ffff666666ffff66999999666fdfff666666666fffffffffcccccffdffcb66666666ffff6666666fdf66ffddffff6666fffdffffffff6666666666666666666666666666
                6ccccccccccccc66666666fffff6666666fff69999999966ffdff666666666666ffffffffccccffddfb6666666ffff66666666fdf666ffddfff66fffddff666ffffff66666666666666666666666666
                6ccccccccccccc6666666fffff66666666fff69999999966ffdfff6666666666666fffffffccccffddff666666ffff6666666ffdf6666ffdfff66fffff666666fffffff666666666666666666666666
                6ccccccccccccc6666666fffff6666666ffff699999999666fdfff666666666666666fffffcccccffddfff666fffffd99666ffddf6666ffddff66ffff66666666ffffffff6666666666666666666666
                6bbcbbcccccccc6666666ffffffffffffffdf699999999666ffdff666666666666666bcffffcccccffddfffffffff6666666ffdff66666ffdff6666666666666666ffddff6666666666666666666666
                6ccccccccccccc6666666fffffffffdddddff666999999666ffdff666666666666666bbffffcccccccffffffffff66666666ffff6666666ffff666666666666666666fddf6666666666666666666666
                6ccccccccccccc6666666666ffffffffffff6666699999666fddff666666666666666bccfffcccccbbbcfffffffc6666b66bfff66699966ffff66666666666666666666666666666666666666666666
                6ccccccccccccc6666666666666666666666666666666666666666666666666666666bccfffcccccccc6666666666666666666666999999666666666666666666666666666666666666666666666666
                6cccbccccccccc6666666666666666666666666666666666666666666666666666666bcbfffffcccccb6666666666cccccccc999999999966ccccccccccccc666666666666666666666666666666666
                6cccccbccccccc666666666666666666666666ccccccccccccc666666999999996666bcbcffffcccccb6666666666cccccccc999999999966ccccccccccccc666666666666666666666666666666666
                6cccbbbbcccccc66666666666ccc6666666666bcccccccccccc666699999999996666bccccfffcccccb666cc69999cccccccc999999999966ccccccccccccc666666666666666666666666666666666
                6ccccccccccccc66666666666ccccc66666666ccccfcccccccc666699999999996666bcbccccccccccb66cc999999cccccccc999999999966ccccccccccccc666666666666666666666669999966666
                6ccccccccccccc66666666666cccccc6666666cbbcccccccccc666699999999996666bcbccccccccccb66c9999999cccccccc999999999966ccccccccccccc666666666666666666666669999999666
                6ccccccccccccc66666666666ccccccc666666ccccccccccccc666699999999999666bccccccccbcccb66c9999999cccccccc999999999669bcccccccccccc666666666666666666666699999999966
                6cccbbbccccccc66666666666cccc6cc666666bcbcccccccccc666699999999999666bcbccccccbcccb9999999999cccccccc999999999999ccccccccccccc66666666666666699d699999999999999
                6ccbbccccccccc66666666666cccccccc66666ccccfcccccccc666699999999999666bccccccccccccb9999999999cccccccc999999999cccccccccccccccc666666666666669999999999999999999
                6ccccccccccccc66d996666666666cc6666666cccccccccfffc666699999999999666bcbccccccccccb999996ccc6cccccccc6cccc9999cccccccccccccccc99969999996699999999999bbc6999999
                6ccccccccccccc69999996666666ccc66c6666ccccccccccccc666699999999999666bccccccccccccb6699966666ccccccccbccccb996cccfccccccccccc69999999999999999999999dccc6cc9999
                6ccccccccccccc6999999669d666cc6ccc6666cccccccccfcb6666699999999996666bcbcccccccccccccccc6ccccccccccccbcccccc66cccfccccccccccc699999999999999996cc9999ccc6ccc6dc
                6ccccccccccccc69999969996666cc6ccc666cccccfcccccfcc666699999999996666bcbccccccccccfccfffffccccccccccc6cccccc6ccccfccccccccccc6999999999999999dcccc696ccccccc6db
                6bbcbbbbcccccc69999969996666cc6ccc66bccccccccfccc6c666669999666666666bccccccccccccccccccfffcccccccbccccccccccfccffffcccccccccc66666666cccc666dcccc666cccccccc6c
                6bbbcbbccccccc69999969996666cc6cccccccccccccfccf66666666666ccccccccccbcccccccccccccccffffffcccccbcbcccccccccccccffffccccccccccccc666cccccc6666cccc66ccccccccc6c
                6ccccccccccccc699d6666666666cc6cccc6cccccccccccfccc66666666ccccccccccbcccccccccccccccfffffcccccccccccbccccccccccffffcccccccccfffcccccccccc666ccccc6cccccccccc66
                6ccccccccccccc699ccccccc666ccc6ccccccccccccccccf66666666666ccccccccccbccccccccccccfccffffffcccccccccccccccccccccccffcccccccccfffccccccccccc6ccccccccccccccccc6c
                6ccccccccccccc699ccccccc66cccc6ccccccccccccccccf66666666666ccccccccccbcccccccccccffccffffffcccccccccccccccccccccffffcccccccccfffcccccbccccccccccccccccccccccc6b
                6ccccccccccccc699ccccccc6ccccc6ccccccccccccccccfccc66666666ccccccccccbccc6cccccccffffffffffcccccccccccccccccccccffffcbcccccccfffcccccbccccccccccccccccccccccccc
                6cccccbccccccc666bcccccc6ccc6c6cccccccccbccccccccccccccccccccccccccccbbbbccccccccccffffffffcccccccccccccccccbcccffffcbcccccfcfffccccccccccccccccccccccccccccccc
                6ccccccccccccc66bccccccc6ccc6cccccccccccccccccccbc6ccccccccccccccccccccccccccccccccfcccffffcccccccccccccccccccccffffcccccccfbecceebeeeeccccccccccfccccccccccccc
                6ccccccccccccc666ccccccc6ccc6cccccccccccccccccccccccccffffffffcccccccccccccfffffcfffcccffffcccccccccccccccccccccffffccccccccccccccccccccfffffffffffcccccccccfff
                6bccbbccccccccccccccccccccccccccccccccccccccccccccccccccccffffcccccccccccffffffffffcfffffffcccccccccccccccccccccffffcccccccccccccccccccccccccccccfccccccccccfff
                6cccccccccccccccccccccccccccccecccccccccccccccccccccccccccfcfcccccccccccfffffffffffcfffffffcbcccccccccccccccccccffffcccccccccccccccccccccccccccccfcccccccccccff
                ccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccfccccbcccccccccccccccffccccffffcbcccccccccccccccccccffffcccccccccccccccceccccccccccccffcfcffccccccc
                ccccccffcccccccccccccccccccc6cceccccccccccfcccccccccccccfffffcccccbbcccceeeccccccffccccffffcccccccccccbccbbcccccffffcccccccccc3bee4eeee33ccc3e33cfffffffcccffff
                ccccccccccc66cccccfccccccccc6cecccccccccccfcccccccccccccfffffcccccbc34bceeec34bccffcfffffffccccccccccccccccccccfffffcbcccccccc34eb3eeee44ccc4e43cfffffffcccffff
                cccccccccccccccccffccccccccccccccfccccccccfbbcccccccccccccccfcccccbc44bccccc444ccffccffffffccccccccccccccccccccfffffcccccccccc3beb3eeeb34ccc4e44cfcccfffccccfff
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccbc44bccccc443ccffcccfffffccccccccccccccccccccfffffcccccccccc3beb3eeeb33ccc4b33cfccffffccccfff
                ccccccccccccccccccccccccccccccccccccccccfffbbccbcbcccccccccffcccccbc44bceeec443ccffcccfffffcccccccccccccccccccffffffcccccccccccccccceccccccccccccfccffffcccffff
                bcccccccccccccccccccccccccccccccccccccfffffbccccccccccccccccfcccccbc43bceeec333ccffccceefcfcccccccccccccccccccffffffcccccccfccccccccccccccccffffffcccccccccffff
                cccccccccccccccccffffccccccccccccccccccffcfbccccccccccccccccfcccccbc33bceeec33bccffcccfffffcccccccccccccccccbbbcffffccccccccfccccccccccccccccccccfffffffcccccff
                bcccccccccccccccffffffc443444b4444bccffffcfcccccccccccccccccfccccceccccceeeccccccffcccccccccccccccccccccccccffffffffcccccccccccccccccccccccccccccfffffffccccffc
                ccccccccccccccccffffffc44334444444bccffffcfcccccccccccccccfcfccccebbeeeecccccccccffcccccccccccccccccccccccccffffffffccccccccccbccccceccccccccccccfffcfffccccfff
                cccccfffffffffffffffffc44334444444bccffffcfbeb3cccccccccccccfcccccccccccccccccccccfcccebecccccccccccccccccccfffffbbcccccccccccbbeebeeeebbcccbebbcfffffffccccfcf
                cccccbbbbbbccccccccccfc44334444444bccffffcfcccccccccccccccccfccccccccccccccccccccfcceeeeeeeeeeccecccccccccccfffffccfcccccccccc3bbe4eeeb34ccc4e44cfffffffccccfcf
                cccccbcbbcbbcccccccccfc44334444444bccffffcfcceecccccccccccccccc6cccccccccccccccccffccccccccccccccccffccccccccccccccccccccccccc3bee4eeeb33ccc4e44cfffffffccccfff
                cccccbb4b4bbcc4eccbbcfc44344444444bccffffcfcccccccccccccccccccc6ccccfffccccccccccffccccccccccccccccccfcccccccccccccccccccccccc3bee3eeeb33ccc3e33cffffc6cccccccc
                ccccccb4b4bccc4bccb3cfc44444444444bccffffcfcccccccc6cccccccccc6cfcbcb4bcccccb4eccffb333bcb333bcb3333cfffcbccccccccccccccccccccccccccecfccccccccccfffffccccccccc
                cccccbb3b4bbcc4bccb3cfc44444444444eccffffcfbcccccc6cccfcccfcccc6fcbcb4bccccc44ecccfb333bcb333bcb3333cfffcbbbccccccccccccccccccceececcccccccccccccfffffccccccccc
                cccccbb4b4bbcc4bccb3cfc4444444444eeccffffcfbccccccc6ccc6cccccccffcbcb4bccecc44bcccf3333beb333eeb3333cfffcbbbbbcccccccccccccccccccccccfcccccccccfffffffccccccccc
                cccccbb4b4bbcc4bccb3cfc44444444beecccffffcfbbcbccccccccccccccccccebcb4bcecccbbcccff3334beb334bcb3344cffffbbbbccccccccccccccccccccccccccccccccccccfffffccccccccc
                cccccbb3b3bbcc3bccb3cfcbeeeeeeeeeeeccffffcfcccccccccccccccccccccfcecb4bccccffbcccffb444beb444bcb4444cffffbbccccccccccccccccccccccccccccccccccccccfffffccccccccc
                cccccccfccccccffcfffcceecccccccccccccccccccccccffffffffffffffffffcecb4bccccc33bcccbbbbbbbbbbbbbbccccccfffbbbbccccccccccccccccc4beb4ceee44ccc4b43cfffffccccccccc
                cccccbbbbbbbcccccccccffffffffffffffffffffcffcccffffffffffffffffffcefcccccccfccccccfcccccccccccccccccfffffbbbbccccccccccccccccc3beb4eeeb34ccc4e44cfffffccccccccc
                cccccbbccccccccccccccfccccccccccccccccccccfffffffc6cccccccccccccfceccccccccccccccccbbbbbbbcbbcebbbccffffcbbbbbbbcccccccccccccc3beb4eeeb33ccc4e44cfffffccccccccc
                cccccccccccccccccccccfeeeeecccccccccccccccffccccfcccccccccccccccffcccccffcfffffcccccccccccccccccccccccccfcccccccccccccccccccccdbeb3eeeb33ccc3b33cfffffccccccccc
                cccccffffffffffffffffceeeeccccccccccccccccccfffffccfffcccccfffccfffffffffcfffffffffffffffffffffffffffffffccccccccccccccccccccfcfccccecffcccfccffcfffffccccccccc
                cccccbcbbbbbcccccccccfffffffffffffcffffffcfffffffccb44cccccb44ccfffffffffcffffffffffffffffcfffffffffcccfcbbbbbcccccccccccccccccccccccccccccccccccfffffccccccccc
                cccccbbbbbbccccccccccfccccceccccccccccccccfffffffccbbbcccccbbbccfcccccccccfffffffceeeeceeecccceeeeeecccfcbb443ccb444444444cccccffffffffffffffffffffccfccccccccc
                cccccbbcccbbcccccccccfccccccbeeebccccccccccfffccfcccccccccccccccfccccccccccccccfcce33334ccccccee33333ccfcbb333ccb333333444cccccccccccccccccccccccfffcfccccccccf
                cccccbbc4bbbce4ccccccfccccccb444beccccfffccfff6cfcccccccccccccccfccccccccccccccfcce33343ecccccbe33344ccfcbb333ccb444444443cccccccccccccccccccccccfc6ccccccccccf
                cccccbbc4bbbce4ccccccfccccccb444bcccfffffcf6cc6cfcccccccccccccccfccbbebccccccccfcce34443ecccccee34444ccfcbe444ccb333343333ccccccbcbccccc33b33ccccff6cfcccb3bccf
                cccccbbc4bbbce3ccccccfccccccbb44becccccffcc6c6ccfcccccccccccccccfcce4ebccccccccfcccbcceeecccccecbccccccfcbb33eccb333343333ccccccbebc666c33b34ccccfc6cccccb4bccf
                cccccbbbbcbbcccccccccfccccccbb4eeecfcccffcc6c6ccfccb3bcccccb3bccfcce4ebccccccccfcccccccecccccccccccccccfcbb333ccb333333333ccccccbebccccc33b34ccccff6cfcccb4bccf
                cccccbbbbbbcccccccccccccccccbbb4eecfcccffcf66ccccccbbbcccccbbbccfcce4ebccccccccfccccccccccccccccccccccffcbb333ccb333343444cccccc33ec6ccccccccccccffccfcccb4bccf
                cccccccccccccfffffffcfffccccbbb4eecfcccffcc66cccfcccccccccccccccfcce4ebccccccccfcffffcffffffffffccccccffcbb333ccbbbbbbbbbbccccccb3eccccccccccccccffffffccebbccf
                cccccccccccccfffffffccccccccbbbbbecfcccffcf6ccccfcccccccccccccccfcce4ebccccccccffccccccccccccccfcccccccffbcbbcccccccccccccccccccbbeccccccccccccccffffffcccccccf
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                bbcfffcbbbffffbbbcfffcbbbffffbbbcfffcbbbffffbbbcfffcbbbffffbbbcfffcbbbffffbbbcfffcbbbffffbbbcfffcbbbffffbbbcfffcbbbffffbbbcfffcbbbffffbbbcfffcbbbffffbbbcfffcbb
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    """))
    cursor = sprites.create(img("""
            .........................
                    ...................fffff.
                    ................fff22222f
                    ...............fddd22222f
                    ...............fddd22222f
                    ..............fdddddd222f
                    ............fffdddddd222f
                    ...........fddddddd22ddf.
                    .........fffddddddd22df..
                    ........fddddddd22222f...
                    .......ffddddddd2222f....
                    .....ffddddddddd222f.....
                    .....ffddddddddd22f......
                    .....ffffdddddddff.......
                    .....ffffddddddf.........
                    ....ff2fffffdddf...22....
                    ...ff22fffffdddf...22....
                    ..ff22552ffffff..........
                    .ff225522ffffff..........
                    ff225522fffffff..........
                    f225522ff................
                    f25522ff.................
                    f5522ff..................
                    f522ff...................
                    fffff....................
        """),
        SpriteKind.player)
    cursor.z = 1000
    controller.move_sprite(cursor)
    two_players_button = sprites.create(img("""
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
        """),
        SpriteKind.twoPlayersButton)
    two_players_button.set_scale(1.5, ScaleAnchor.BOTTOM_LEFT)
    two_players_button.set_position(30, 90)
    single_player_button = sprites.create(img("""
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
        """),
        SpriteKind.storyButton)
    single_player_button.set_scale(1.5, ScaleAnchor.BOTTOM_LEFT)
    single_player_button.set_position(130, 90)
def mapLevel():
    global tienda, edificio
    scene.set_background_color(7)
    destroyLevelOne()
    createPlayer()
    tiles.set_current_tilemap(tilemap("""
        level4
    """))
    tienda = sprites.create(img("""
            ...ffffffffffffffffffffffffffffffffff...
                    .ff8999889989998898899988988999889889ff.
                    f99988899999888999998889999988899999888f
                    f99988899999888999998889999988899999888f
                    f99999999999999999999999999999999999999f
                    f99999999999999999999999999999999999999f
                    f99999999999999999999999999999999999999f
                    f99999999999999999999999999999999999999f
                    f99999999999999999999999999999999999999f
                    f99999999999999999999999999999999999999f
                    .ff888888cc888888888888888888cc888888ff.
                    .ff888888cc888888888888888888cc888888ff.
                    .ff666666cc666666666666666666cc666666ff.
                    .ff6666dddddddddddddddddddddddddd6666ff.
                    .ff6666ddbbbddbbbdbbdddddd77777dd6666ff.
                    .ff6666ddbbbddbbbdbbdddddd77777dd6666ff.
                    .ff6666ddbbbddbdddbbbbddd7777dddd6666ff.
                    .ff6666dddddddddddddddddddddddddd6666ff.
                    .ff6666dddddddddddddddddddddddddd6666ff.
                    .ff6666668888888888888888888888888666ff.
                    .ff6666666666666666666666666666666666ff.
                    .ff66666666666666cccccccc666666666666ff.
                    .ff66666666666666cccccccc666666666666ff.
                    .ff666999996666ccccc99cccc88666999996ff.
                    .ff666933993666ccc99999ccc88633999993ff.
                    .ff633977997666ccc99999ccc88677993997ff.
                    .ff633977997666ccc99999ccc88677993997ff.
                    .ff6eeeeeeee666ccccc99cccc886eeeeeeeeff.
                    .ff6eeeeeeee666ccccccccccc886eeeeeeeeff.
                    .ff666666666666ccccccccccc88666666666ff.
                    .ff666666666666ccccccccccc88666666666ff.
                    .ff666666666666ccccccccccc88666666666ff.
                    .ffffffffffffffffffffffffffffffffffffff.
        """),
        SpriteKind.Building)
    edificio = sprites.create(img("""
            ............................................................
                    ............................................................
                    ............................................................
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dd999ddd999ddd999ddd999ddd999dddd999ddd999ddd999ddd999dddddd
                    dd999ddd999ddd999ddd999ddd999dddd999ddd999ddd999ddd999dddddd
                    dd999ddd999ddd999ddd999ddd999dddd999ddd999ddd999ddd999dddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddd999ddd999ddd999ddd999ddd9999ddd999ddd999ddd999ddd999ddd
                    ddddd999ddd999ddd999ddd999ddd9999ddd999ddd999ddd999ddd999ddd
                    ddddd999ddd999ddd999ddd999ddd9999ddd999ddd999ddd999ddd999ddd
                    ddddd999ddd999ddd999ddd999ddd9999ddd999ddd999ddd999ddd999ddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dd999ddd999ddd999ddd999ddd999dddd999ddd999ddd999ddd999dddddd
                    dd999ddd999ddd999ddd999ddd999dddd999ddd999ddd999ddd999dddddd
                    dd999ddd999ddd999ddd999ddd999dddd999ddd999ddd999ddd999dddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddd999ddd999ddd999ddd999ddd9999ddd999ddd999ddd999ddd999ddd
                    ddddd999ddd999ddd999ddd999ddd9999ddd999ddd999ddd999ddd999ddd
                    ddddd999ddd999ddd999ddd999ddd9999ddd999ddd999ddd999ddd999ddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dd999ddd999ddd999ddd999ddd999dddd999ddd999ddd999ddd999dddddd
                    dd999ddd999ddd999ddd999ddd999dddd999ddd999ddd999ddd999dddddd
                    dd999ddd999ddd999ddd999ddd999dddd999ddd999ddd999ddd999dddddd
                    dd999ddd999ddd999ddd999ddd999dddd999ddd999ddd999ddd999dddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ddddddddddddddddddddddddddeeeeeeeddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddeeeeeeeddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddeeeeeeeddddddddddddddddddddddddddd
                    dd999ddd999ddd999ddddddddd9999999ddddddddd999ddd999ddd999ddd
                    dd999ddd999ddd999ddddddddd9999999ddddddddd999ddd999ddd999ddd
                    dd999ddd999ddd999ddddddddd9999999ddddddddd999ddd999ddd999ddd
                    ddddddddddddddddddddddddddeeeeeeeddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddeeeeeeeddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddeeeeeeeddddddddddddddddddddddddddd
        """),
        SpriteKind.Building)
    tiles.place_on_random_tile(tienda, assets.tile("""
        myTile13
    """))
    tileUtil.create_sprites_on_tiles(assets.tile("""
            myTile13
        """),
        img("""
            ...ffffffffffffffffffffffffffffffffff...
                    .ff8999889989998898899988988999889889ff.
                    f99988899999888999998889999988899999888f
                    f99988899999888999998889999988899999888f
                    f99999999999999999999999999999999999999f
                    f99999999999999999999999999999999999999f
                    f99999999999999999999999999999999999999f
                    f99999999999999999999999999999999999999f
                    f99999999999999999999999999999999999999f
                    f99999999999999999999999999999999999999f
                    .ff888888cc888888888888888888cc888888ff.
                    .ff888888cc888888888888888888cc888888ff.
                    .ff666666cc666666666666666666cc666666ff.
                    .ff6666dddddddddddddddddddddddddd6666ff.
                    .ff6666ddbbbddbbbdbbdddddd77777dd6666ff.
                    .ff6666ddbbbddbbbdbbdddddd77777dd6666ff.
                    .ff6666ddbbbddbdddbbbbddd7777dddd6666ff.
                    .ff6666dddddddddddddddddddddddddd6666ff.
                    .ff6666dddddddddddddddddddddddddd6666ff.
                    .ff6666668888888888888888888888888666ff.
                    .ff6666666666666666666666666666666666ff.
                    .ff66666666666666cccccccc666666666666ff.
                    .ff66666666666666cccccccc666666666666ff.
                    .ff666999996666ccccc99cccc88666999996ff.
                    .ff666933993666ccc99999ccc88633999993ff.
                    .ff633977997666ccc99999ccc88677993997ff.
                    .ff633977997666ccc99999ccc88677993997ff.
                    .ff6eeeeeeee666ccccc99cccc886eeeeeeeeff.
                    .ff6eeeeeeee666ccccccccccc886eeeeeeeeff.
                    .ff666666666666ccccccccccc88666666666ff.
                    .ff666666666666ccccccccccc88666666666ff.
                    .ff666666666666ccccccccccc88666666666ff.
                    .ffffffffffffffffffffffffffffffffffffff.
        """),
        SpriteKind.Building)
    tileUtil.create_sprites_on_tiles(assets.tile("""
            myTile34
        """),
        img("""
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    d999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddddd.
                    d999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddddd.
                    d999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    dddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999dd.
                    dddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999dd.
                    dddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999dd.
                    dddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999dd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    d999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddddd.
                    d999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddddd.
                    d999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    dddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999dd.
                    dddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999dd.
                    dddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999dd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    d999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddddd.
                    d999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddddd.
                    d999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddddd.
                    d999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddd999ddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                    dddddddddddddddddddddddddeeeeeedddddddddddddddddddddddddd.
                    dddddddddddddddddddddddddeeeeeedddddddddddddddddddddddddd.
                    dddddddddddddddddddddddddeeeeeedddddddddddddddddddddddddd.
                    d999ddd999ddd999ddddddddd999999ddddddddd999ddd999ddd999dd.
                    d999ddd999ddd999ddddddddd999999ddddddddd999ddd999ddd999dd.
                    d999ddd999ddd999ddddddddd999999ddddddddd999ddd999ddd999dd.
                    dddddddddddddddddddddddddeeeeeedddddddddddddddddddddddddd.
                    dddddddddddddddddddddddddeeeeeedddddddddddddddddddddddddd.
                    dddddddddddddddddddddddddeeeeeedddddddddddddddddddddddddd.
        """),
        SpriteKind.Building)
    tiles.place_on_random_tile(tienda, assets.tile("""
        myTile13
    """))
    tiles.place_on_tile(player_1, tiles.get_tile_location(1, 9))
    scene.camera_follow_sprite(player_1)
def createPlayer():
    global player_1
    player_1 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    player_1.z = 100
    controller.move_sprite(player_1)
    scene.camera_follow_sprite(player_1)

def on_on_overlap2(sprite3, otherSprite3):
    cursor.say_text("Press A to play")
    if controller.A.is_pressed():
        TwoPlayersScreen()
sprites.on_overlap(SpriteKind.player,
    SpriteKind.twoPlayersButton,
    on_on_overlap2)

def on_on_overlap3(sprite2, otherSprite2):
    global DialogMode
    DialogMode = True
    game.show_long_text("Talk with mom", DialogLayout.BOTTOM)
    story.print_character_text("" + mainName + "!" + " They took it... They took everything from me!",
        "Mom")
    story.print_character_text("\"Who, Ma? What happened?\"", mainName)
    story.print_character_text("\"That gang... Those thieves! They stormed in, took my jewelry, my savings... everything! You gotta do something!\"",
        "Mom")
    story.print_character_text("\"Don't worry, Ma. I'll find them. They won't get away with this.\"",
        mainName)
    story.show_player_choices("Get Out", "Stay")
    if story.check_last_answer("Get Out"):
        mom2.set_kind(SpriteKind.Complete)
        mapLevel()
    elif story.check_last_answer("Stay"):
        pause(1000)
sprites.on_overlap(SpriteKind.player, SpriteKind.mom, on_on_overlap3)

def destroyLevelOne():
    sprites.destroy(mom2)
edificio: Sprite = None
tienda: Sprite = None
DialogMode = False
mom2: Sprite = None
player_1: Sprite = None
mainName = ""
two_players_button: Sprite = None
single_player_button: Sprite = None
mainName = ""
cursor: Sprite = None
mapLevel()

def on_on_update():
    if story.is_menu_open():
        controller.move_sprite(player_1, 0, 0)
    else:
        controller.move_sprite(player_1, 100, 100)
game.on_update(on_on_update)
