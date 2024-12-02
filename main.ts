namespace SpriteKind {
    export const twoPlayersButton = SpriteKind.create()
    export const story_button = SpriteKind.create()
    export const mom = SpriteKind.create()
    export const losa = SpriteKind.create()
    export const Complete = SpriteKind.create()
    export const Building = SpriteKind.create()
    export const Npc = SpriteKind.create()
    export const drawable_map_npc = SpriteKind.create()
    export const npc_duel = SpriteKind.create()
    export const final_mom = SpriteKind.create()
    export const marker = SpriteKind.create()
}

//  Al empezar el juego cargamos el menú.
//  Este menú contiene dos tipos de botón y un cursor tipo jugador
function do_menu() {
    
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
                111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111fff1111ffffffffffffffffffffffffffffffffffff11fff1111ffff1111fff1111ffff1111fff1111ffff1111fff1111ffff1111fff111fffffffffffffffffffffffffffffffffff1111fff111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
    cursor = sprites.create(img`
            ......................fff
                    .....................ff1f
                    ...................ff11f.
                    ..................f6112f.
                    .................f61122..
                    ................f6f1222..
                    ...............f61122....
                    ..............f6f112.....
                    .............f611122.....
                    ............f6f11f2......
                    ...........f6111f........
                    .....ff...f6f11f.........
                    .....fffff6111f..........
                    .....ff1ff11ff...........
                    .....fff1fff.............
                    .......ff1ff.............
                    ......f1ff1ff............
                    .....f111ff1ff...........
                    ....f111f.ff1f...........
                    ...f111f...f1f...........
                    ..f111f....fff...........
                    ff111f....fff............
                    fff1f.....ff.............
                    f1fff....................
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
                    ..c555555555555555555c..
                    .c55555555555555555555c.
                    .c55555555555555555555c.
                    .c55555555555555555555c.
                    .c55555555555555555555c.
                    c555cccccccccccccccc555c
                    c55c5555555555555555c55c
                    c55c5555555555555555c55c
                    c55c5555555555555555c55c
                    c55c5555555555555555c55c
                    c55c5555555555555555c55c
                    cc55555555555555555555cc
                    cc55555555555555555555cc
                    cccccccccccccccccccccccc
                    ..ceec............ceec..
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
                    .22c2222222222222bcc4222
                    .22222bbb2bbbbb222bb4222
                    .222bbbbb2bbbbbbb2222222
                    .22222222222222222222222
                    .222222222ff22222f222ddd
                    .222222222ff222ff222222d
                    .222222222fffff222222222
                    .22ffffff222222fffff2222
                    ...f11111f2222f11111f22.
        `, SpriteKind.story_button)
    single_player_button.setScale(1.5, ScaleAnchor.BottomLeft)
    single_player_button.setPosition(130, 90)
}

// Función: on_player_overlap_with_two_players_button
//  - Muestra un mensaje en el cursor indicando que se debe presionar "A" para jugar.
//  - Si el jugador presiona el botón "A", se activa la pantalla de dos jugadores.
sprites.onOverlap(SpriteKind.Player, SpriteKind.twoPlayersButton, function on_player_overlap_with_two_players_button(sprite3: Sprite, otherSprite3: Sprite) {
    cursor.sayText("A para jugar")
    if (controller.A.isPressed()) {
        two_players_screen()
    }
    
})
//  Si escoge el modo dos jugadores realiza lo siguiente:
//  Si nos chocamos y presionamos A cargamos dos jugadores y un mapa,
//  Una vez cargado manejamos las variables de que puedan disparar, empezamos un temporizador con un tiempo random de duelo
//  Cuando termine el temporizador llamará automáticamente a la funcion on_countdown_end
function two_players_screen() {
    
    is_shoot_done = false
    can_shoot = false
    player_1_can_shoot = false
    player_2_can_shoot = false
    isDuel = true
    random_countdown_time = randint(1, 10)
    info.startCountdown(random_countdown_time)
    scene.setBackgroundImage(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffff111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbfffffffffffffbbbbbbbbbbbbbbb1111111fffffffffffff1111111111ffffffffffffff1111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbffbffffffffffffbfff111fffffffbfffffffffffffb1111111111fffffff111bbbbbbbbbbbbffffffffffff1111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbffbffffffffffffb1111111ffffffbfffffffffffffb1111111111ffffffffbffffffffffffbffffffffffffff11
                fffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbffbfbffffffbbbfb11666116fffffbfffffffffffffb11111111ffffffffffbffffffffffffbffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffbffbbbbbbffffbffbfbbbbfffffffb11111116fffffbfffbbbbffffffb1111111fffffffffffbffbbbbffffffbffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbffbffffffffffffb11111116fffffbfffffffffffbfbbbbbbbbbbbbbbbffffbffffffffffffbffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbffbffffffffffffb111111fffffffbfffffffffffbfbfffffffffffffbffffbfffffffffbffb111111ffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff111111fffbffffffffffffbffbffffffffffffb1111fffffffffbfffffffffffbfbfffffffffffffbffffbfffbfffffbffb11111111ffffffff
                ffffffffffffffffffffffffffffffffffffffff111111111111fbfffffffbbfffbffbffffffffffffbfffffffffffffbfffbfffffffbfbfffffffffffffbf111bfffbbffffbffb11111111ffffffff
                ffffffffffffffffffffffffffffffffffffffff1111166111111bffffffffffffbffbffffffffffffbfffffffffffffbfffffffffffffbffbbbbfffffffbf111bfffffffffbffb11111111ffffffff
                fffffffffffffffffffffffffffffffffffffffff111656661111bffffffffffffbffbffffbbbbbbffbfffffffffffffbfffffffffffffbffffffffffbffbff11bfffffffffbffb11111111ffffffff
                fffffffffffffffffffffffffffffffffffffffffff1551511111bffffffffffffbffbfffffffffbffbffbbbbbbbbbbbbfffffffffffffbffffffffffbffbffffbffffffffffffb11111111ffffffff
                fffffffffffffffffffffffffffffffffffffffffff5556551111bffffffffffffbffbffffffffffffbffbffffffffffbfffffffffffffbfffbbbffffbffbffffbffffffffffffbf1111111ffffffff
                fffffffffffffffffffffffffffffffffffffffffff555665511fbfffbffffffffbffbffffffffffffbffbffffffffffbfffffbbbbbbffbffffffffffbffbffffbfffbbbbbffffbffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff55555555ffbffffffffffffbffbffbfffffffffbffbffbbbbffffbfffffffffffffbfffffffffffffbffffbffffffffffffbffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff55555555ffbfffffffffbffbffbffbfffffffffbffbffffffffffbfbfffffffffffbfffffffffffffbffffbffffffffffffbffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffff111555555fffbfffffffffbffbffbffffffbbbfffbffbffffffffffbfbfffffffffffbfffffffbfffffbffffbffffffffffffbffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff1111111ffffbffbfffbbbbffbffbffffffffffffbffbfffffffbffbfbbffffffffffbffbffffbfffffbffffbffffffffffffbffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff116661fffffbffbfffbbbbffbffbffffffffffffbffbfffffffbffbffffffffffbbfbffbffffffffffbffffbfffffffbbbffbfffffbbbbbbbbbbb
                fffffffffffffffffffffffffffffffffffffffffff161fffffffbffbfffffffffbffbffffffffffffbffbffbffffbffbffffffbbbbfffbffbffffffffffbffffbffffffffffffbfffffbffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbffbfffbbbffffffbffbfffffffbffbfffffbfffffffbffbffffffffffbffffbffbfffffffffbf1111bffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbffbffffffffffffbffbffffffffffbfffffffffffffbfffffffbbbbffbffffbffbbffffffffb11111bffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbffbffffffffffffbffbffffbbffffbffffffffffbffbfffffffffffffbffffbfffbbbffffffb11111bffbffffbff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffbbbbffbffbffffffffffffbffbffffffffffbfffffffffffffbfffffffffffffbffffbffffffffffffbf11ffbfffffffbff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbffbffffffffffffbffbffffffffffbfffffffffffffbfffffffffffffbffffbffffffffffffbfffffbfffffffbff
                ffffffffffcccccccccccccbccceeeeecccccccffffffccccccccccccccccccbcccccccccccfccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccfffbfffffbffffffffff
                fffffffffcccccccbcccccc68cceeeccbcccccccfffcccccbccccbbcccccccccbccccbbcccccccccbccccbbccccccccccccccbbcccccccccbccccccccccbccccbccccbbccccccccfffffbffffffffff
                fffffffffbbbbbbbbbbbbcc6cccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcfffffbffbbbbffff
                fffffffffbbbbbbbbbfffffffffffffffbbbbbbbbbbbbbbbbbbccccbcbcbcccbbbbbccbbccbbbccbbcbbccbbbcbbbbccbccccbbccbbcccbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbccfffbffffffffff
                bbbbfffffbbbbbbcffffffffffffffffffcbbbbbbbbbbbbbbbbbcbbbcbcbcbbbbbbbcccbcbcbcbbcbccbcbcbcbbbbcbbbbbcbbcbbcbcbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccfbffffffffff
                bbbbbbbbbbbbbbcffffffffffffffffffffcbbbbbbbbbbbbbbbbcbbbcccbcbbbbbbbcbcbcccbbccbbcbccbbcbbbbbbccbbbcbbcbcbbcccbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffffffbf
                bbbbbbbbbbbbbbcffffffffffffffffffffcbbbbbbbbbbbbbbbbcbbbcbcbccccbbbbccbbcbbcbbbbcbbbcbcbcbbbbbbbcbbcbbbcbbccbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcffffffffff
                cbbccbcbbccbbccccffffffffffffffffcbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbcccffbffffff
                cccbccccccbcbcbcccccccffffffcccccccbccccccbcbcbcccccccccccbcbcbccccbccccccbcbcbccccbbbbbbbbbbbbbbbbbbbbbbbbbbcbccccccbcbbbbcbcbccccccbcbbbbcbcbccccbcccffffffff
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffff
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
                ccbbbbcbbbbcbbbccbbccbbbbcbcbbbbccbbbbcbbbcbcccbccbbbbcbbbbcbbbbccbbbbcbbbbcbbbbccbbbbbbbbbbbbbbbbbbbbcbbbbcbbbbccbbbbcbbbbcbbbbccbbbbcbbbbbbbcbccbbbbcbbbbccff
                bbcbbbbbbbbbbcbbbcbbcbbcbcbbbcbbbbcbbbbbbbbcccbbbbcbbbbbbbbbbcbbbbcbbbbbbbbbbcbbbbcbbbbbcbbbbcbbbbbbcbbbbbbbbcbbbbcbbbbbbbbbbcbbbbcbbbbbbbbbccbbbbcbbbbbbbbbbcc
                bbbbbbbbbbbbbbbcbbbbcccbbcbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcccbcbbbbbbbbbbbbbbbb
                bbcbbbbcbbbbbcbbbcccbbbbbcbbbcbbbbcbbcbbbbccbbcbbbcbbcbbbbbbbcbbbbcbbcbbbbbbbcbbbbcbbbbbcbbcbbbbcbbbbcbbbbbbbcbbbbcbbcbbbbbbbcbbbbbbbbbbbbbbbbcbbbcbbcbbbbbbbcb
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                bbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbccbbb
                bcbbbcbbbbbbbbbbbbbbbbbbbbccccccbcbbcbccbcbbcbbcbcbbcbccbcbbcbbcbcbbcbccbbbcbbbcbcbbbbbbbbccbbbbbbbbbbccbcbbcbbcbbbbbcbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbccbbcbbb
                bbcbbbbbbbbcbccbbbbb55bbbbbccbbbbbcbbbbbbcbbbccbbbcbbbbbbcbbbccbbbcbbbbbbbbccccbbbcbbbbbbbcbbbbbbbbbbbbbbbbbbccbbbbbccbbccbbbbcbbbcbbbbb55555bbbcccccbccccbbbcb
                cbbbbbccbbbbbcbbbb551155bbbbbbbbbbbbbcbbbbccbbbccbbbbcbbbbccbbbccbbbbcbbbbccbbbccbbbbcbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbb55522522555bbbbccbbbbbbbcb
                bbcbccccbbbbbbbb5511551155bbbbbbcbcbbcbbbccbbccbbbcbbcbbbccbbccbbbcbbcbbbcccbccbbbcbbcbcbbbbbbbbbbbbcbbbbbbbbbbbbbbbbcccbbbbbcbbbbbb5225225225225bbbbbbbbbbccbb
                cccbcbccbbbbbbb515222222515bbbbbcccbbcccbbccccbbcccbbcccbbccccbbcccbbcccbbbcbbbbcccbbcccbbbbbbbbbbbbbbbbbbbbcccccccccccccccbcbbbbbbb5225225225225bbbbbbbbccbbbb
                bbbbbccbbcccbb52225255252225bbbbbbbbbbcbbbbbbbbbbbbbbbcbbbcbcbcbbbbbbbcbbbbbbbbbbbbbbbcbbccbbbbbcbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbb5255555555525bbbbbcbbbbbbbb
                bbcbbcbbbcbbbb55555555555555bbbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbcccbbbbbbbbbbbbbbcccbbccbbbccccbbbbbbbbbbcbbbbbbbbbbbbbb555fffff555bbbbcbbccbbbbcb
                bbbbbbbbbbbbbbb555852258555bbbbcbbbbbcbbbbcbbbbbbbbbbcbbbbbbcbbbbbbbbcbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbcbbbbbbbbbbcccbbbcbbbccccbbbcbbbfff22522fffbbbbcbbbbbbbbbb
                cbcbbbbbbbbbcbbb5111111115bbbcccbbcbbcbccbbbbbbbbbbbbcbcccbccccbcbcbbcbccbbbbbccbcbbbcbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf22222552225fbbbccbccccbbbb
                ccccbbbcccbccbbb1555555551bbbbbcbcccccccccccbbbbbbbccccccccccccccccccccccccbbbbcccbbccccccbbbbccccccccccccccccccccccccccccccccbbbbbf55222fff52522fbbbcbbbbbcccc
                bbbbbbbbbbccbbb551111111155bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbf522fff188fff252fbbbbbbbbbbbb
                bcbbbbbbbbbbbb51111111111115bbbbbcbbbbcbcbbbbbbccccbcbbbbcbbcbcbbcbbcbbbbcbbbcbbbbcbbcbbccbbbbbbbbbbbbbbbbbcbbbbbccccccbbbbbbbbbbf222f111888111f252fbbbbbbbbbbb
                bbcbbbccbbbbb5115511111155115bbbcbcbbccbcbbbbbcbbbbbbbbbbbbbbcbbbbcbbbbbbbbbbcbbbbbccbbbbbbbccbbbcbbbbccccccbbbbbbbbbbbbbbcbbbbbf252f11188811188f222fbbbbcbbbcb
                cbbbbbbbbbbb511588555555515115bbbbbbcccbbbcbbbbbbbbbbcbbbccbbbcccbbbbcbbbcbbbbbbbbbbbcbbbbbccbbbbcbbbbccbbbbbbbbbcbbbbbbbbcbbcbbf22f1118881118881f25fbbbbbbbbcb
                cbcbbbbbbbbb515885851115111515bbbbcbbbbbcccbbcbbcbcbbcbccbcbbcbbcbcbbcbccbcbbcbbcbcbbbcbbbccbbbbccbbbbbbbbbbbbbbcbbbbbbcbbbbccbbf52f1188811188811f55fbbbcbbbbcb
                ccbbbbbcbbb51588588851515111515bbcbbbbcbbbbccbbbccbbbccbbbbccbbbccbbbccbbbbccbbbccbbbccbbbbcbbbbbbbbbbcbbbbbbbbbcbbbbbbbbbbbcbbf22f11888111888111f222fbbcccccbb
                bbbbbbccbbb51518588885111111515bbbbbbbbbbbbbbcbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbcbbbbbbbbbbbbbccbbbccbbbcbccbbbbbbbbbbbcccbbbbbbbbf22f188811188811188f22fbbbbbbbbb
                bbbbbbcbbbb51515888888811111515bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbccbbbbbccbbbbbcbbbbbf52f888111888111888f25fbbbbbbbbb
                bbbbbbcbbbb51515188855581111515bccbbbcbbbbcbbcbbbbbbbcbbbbcbbcbbbbbbbcbbbbcbbcbbbbbbbcbbbbbbbbbbbbccbbbbbbbbbbbbbbcbbbbbbccbbbbf22f881118881118881f22fbbbbbbbbb
                cbcccbbbbbb51511518858888111515bbbcbbcbccccccccbcbcbbcbccccccccbcbcbbcbccccccccbcbcbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbcbbbbf252f1118881118881f525fbbbccbbbc
                cccbbbbcbbb51511511855588811515bbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbccbcccccccccccccccccccccbbbbbbbcbbbbbccbbbf52f1188811188811f25fbbbbbbbbbc
                bcbbbbbccbb51511151158885881515bbbcbcbccbbbbcbbbbcbbcbccbbcbcbbbbcbbcbccbbbbcbbbbcbcbbbbbbbbbbbbbbcccccbbbbbbbbbccbbccbbbbccbbbbf22f1888111888111f22fbbbcbbcbbb
                bbbbbbcbbbbb515111515885888515bbbbccbbbbbcbbbbcbbbbbbbbbbccbbccbbbbbbbbbbcbbbbbbbbbbbbbbbbbbccbbbbbbbbbcccccccbbbbbbbbbbbbcbbbcbf525f88111888111f252fbbccbbbbbb
                cbbbbbcbbbbb511111155558888815bbcbbbbccbbbbbbbbbbbbbbccbbbbbccbbcbbbbccbbbccbbbcbbbbcbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbcbbf255f111888111f522fbbccbbbbbbb
                bbcbbbcbbbbbb5111111511888815bbbbcbbbcbbbbcbccbbbbcbbcbbbcbbccbbbbcbbcbbbccbbcccbbbbbbcbbcbbcccbbbbccccbbbbccbbcccbbbbbccccbbbcbbbf522fff881fff225fbbbbbbbcccbc
                cbcbbbcbbbcbbb51111111118815bbbbbcbcbbbbbbbbbcbbbbbbbcbccbbcbbcccbcbbcbccbcbcccbbcccbbbccbbbbccbbbcbbbbbccbbbbbbbbbbbbbbbbbbbbcbbbbf22525fff52222fbbbbbbbbbbbcc
                ccbbbbbbbbcbbbb511111111115bbbbbbbbbbbbbcccccbbbbbbbcbcbbbbcbbbbccbbbbcccbbccccbbbbbcbbbbcbbbcbbbbccbbbccbccbbbcbbbbbbbcbbccbbbbbbbbf22522252225fbbbbbbbccccccc
                bbcbbbbbbbbbbbbb5551111555bbbbbccccbbbcbbbbbbbbcbbbbbbbbcbbbbcbbbbcbbbccbccccbccccbbbbbbbbbbbbbbbbbbccccbbbbbbbccccbccccbbbbbbbbbbbbbfff55222fffbbbbbbcbbbbbbbb
                bbbbbbbbbbbbbbbbbbb5555bbbbbbcccbcbbccccccccbccbbbbbbbbbbbcbbbbbbbbbbcccbbbbbbbbbbbbbcbbcbbbbcbbbbbbbbbbbbbbccbbcbcbbbbccccccccbbbbbbbbbfffffbbbbbbbbbcbbbbbbbb
                bbcbbccbcbbcbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccbbbbbbbbbbbbcbbbbbbbbbbbbbbcbbbcbbbbbcbb
                cccbbbbbccbbbbbcccccbbbbbcbcbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbcccbbbbbcbbbbbbbccaac
                bbbbccccbccbbbbbbbbccbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbccbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bcbbbbbbbbbbbbcbcccccbbbbbccbbbbbbbcbbbbbbbcbbbbbcbbbbbbbbbbcbbcbcbbcbccbbbcccbbcbbcbbcccccbbcccbbccbcbcbcbbcbbbbcccccbbcbbbcbcbcbbbbbbccccbbbcccbbbcbccbccbcbc
                bbcbbbbbbbbbbbbbbbbbbbbbcccbbbcbbcccccccbbbcbbbbbccbbbbbcbbbbcbbbbcbbbbcbbbbbbbbbcbcbbcbbbcbbcbccbbcbbbccbbbbcbbbbcccbbbcbbbcbccbbbbbbbbbbbbbcbbbbbbbbbccbbbbcb
                cbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbccbbbbbbbcbbbbccbbcccbbbbcbbbbbbbbbbbbbcbbbbbbcbbccbbbbcbbccbbccbbcccbbccbbbbbbccbbbbbbbbbbbbccbbbccbbbcccbbbcbbccb
                bbcbbbccbcbbbcbbbbcbbbbccbbbbcbbbccbbbcbbbbbbccbbbbcbbbbbcbbbcbbbbcbbbbccbcffccffbbbbbbbbbbbbbbbbbbbbbccbcbbbcbbbbcbbebccbbbbcbbbccbbbbccbbcbbbccbbbbbbccbbccbc
                cccccccbccccccbccccccccccbccccbbbcbbbbbbbbbbbbbbbbbccbbbcbccccbccccccccccccccccccccccccccccccccccccccccbccccccbccccccccccbccccbcccbbcccccbbccccccccccccccbbcbbc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
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
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
                . . . . . . . . . . . . . . . .
                        . . . . . f f f f f f . . . . .
                        . . . f f e e e e f 2 f . . . .
                        . . f f e e e e f 2 2 2 f . . .
                        . . f e e e f f e e e e f . . .
                        . . f f f f e e 2 2 2 2 e f . .
                        . . f e 2 2 2 f f f f e 2 f . .
                        . f f f f f f f e e e f f f . .
                        . f f e 4 4 e b f 4 4 e e f . .
                        . f e e 4 d 4 1 f d d e f f . .
                        . . f e e e 4 d d d d f d d f .
                        . . . . f e e 4 e e e f b b f .
                        . . . . f 2 2 2 4 d d e b b f .
                        . . . f f 4 4 4 e d d e b f . .
                        . . . f f f f f f e e f f . . .
                        . . . . f f . . . f f f . . . .
            `, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
                . . . . . f f f f f . . . .
                        . . . . f e e e e e f f . .
                        . . . f e e e e e e e f f .
                        . . f e e e e e e e f f f f
                        . . f e e 4 e e e f f f f f
                        . . f e e 4 4 e e e f f f f
                        . . f f e 4 4 4 4 4 f f f f
                        . . f f e 4 4 f f 4 e 4 f f
                        . . . f f d d d d 4 d 4 f .
                        . . . . f b b d d 4 f f f .
                        . . . . f e 4 4 4 e e f . .
                        f f f d d 1 1 1 e d d 4 . .
                        . . f . f 1 1 1 e d d e . .
                        . . . . f 6 6 6 f e e f . .
                        . . . . . f f f f f f . . .
                        . . . . . . . f f f . . . .
            `, SpriteKind.Player))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(40, 90)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(120, 90)
}

//  Cuando termina el cotundown enseñamos un mensaje que contiene "YA"
//  Si es un duelo de npc hacemos que el main_character y el npc puedan disparar
//  También hacemos que el jugador 1 y jugador 2 puedan disparar si no es un duelo contra npc
info.onCountdownEnd(function on_countdown_end() {
    
    textSprite = textsprite.create("YA", 15, 2)
    textSprite.setScale(4, ScaleAnchor.Middle)
    textSprite.setPosition(76, 40)
    if (is_npc_duel) {
        can_main_character_shoot = true
        npc_can_shoot = true
    } else {
        player_1_can_shoot = true
        player_2_can_shoot = true
    }
    
})
//  Si el jugador_1 presiona A
//  Puede disparar y no es un duelo contra NPC creamos la bala que la dispare desde ese jugador
//  Makecode arcade detecta jugador 1 también al protagonista así que manejamos también los duelos de npc,
//  Si el protagonista puede disparar y es un duelo contra un NPC disparamos desde el sprite del protagonista.
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_player1_button_a_pressed() {
    
    if (player_1_can_shoot && !is_npc_duel) {
        player_1_bullet = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . 2 2 2 2 . . .
                            . . . . . . . 2 2 1 1 1 1 2 . .
                            . . . . 2 2 3 3 1 1 1 1 1 1 . .
                            . . 3 3 3 3 1 1 1 1 1 1 1 1 . .
                            . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
                            . . 3 3 2 2 3 1 1 1 1 1 1 1 . .
                            . . . . . . 2 2 3 1 1 1 1 2 . .
                            . . . . . . . . . 2 2 2 2 . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50, 0)
        player_1_can_shoot = false
    } else if (can_main_character_shoot && is_npc_duel) {
        main_character_bullet = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . 2 2 2 2 . . .
                            . . . . . . . 2 2 1 1 1 1 2 . .
                            . . . . 2 2 3 3 1 1 1 1 1 1 . .
                            . . 3 3 3 3 1 1 1 1 1 1 1 1 . .
                            . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
                            . . 3 3 2 2 3 1 1 1 1 1 1 1 . .
                            . . . . . . 2 2 3 1 1 1 1 2 . .
                            . . . . . . . . . 2 2 2 2 . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
            `, main_character, 50, 0)
        can_main_character_shoot = false
    }
    
})
//  Si hay un segundo jugador en el modo multijugador arcade
//  Al presionar A si puede disparar realizará el disparo hacía el siguiente jugador
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_player2_button_a_pressed() {
    
    if (player_2_can_shoot) {
        player_2_bullet = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . 2 2 2 2 . . . . . . . . .
                            . . 2 1 1 1 1 2 2 . . . . . . .
                            . . 1 1 1 1 1 1 3 3 2 2 . . . .
                            . . 1 1 1 1 1 1 1 1 3 3 3 3 . .
                            . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
                            . . 1 1 1 1 1 1 1 3 2 2 3 3 . .
                            . . 2 1 1 1 1 3 2 2 . . . . . .
                            . . . 2 2 2 2 . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), -50, 0)
        player_2_can_shoot = false
    }
    
})
//  Si escoge el story_button realiza lo siguiente:
//  Si nos chocamos y presionamos A pedimos un nombre, si es nulo ponemos Kyrie
//  Una vez tengamos el nombre o lo pongamos por defecto llamamos al modo historia
sprites.onOverlap(SpriteKind.Player, SpriteKind.story_button, function overlap_story_button(sprite: Sprite, otherSprite: Sprite) {
    
    cursor.sayText("A para jugar")
    if (controller.A.isPressed()) {
        if (main_character_name.isEmpty() || main_character_name == "undefined") {
            main_character_name = game.askForString("Username", 7)
            if (main_character_name.isEmpty() || main_character_name == "") {
                main_character_name = "Kyrie"
            }
            
        }
        
        story_mode()
    }
    
})
//  Eliminamos todo el menú para cuando pasemos al modo historia no mantenga nada.
function menu_destroy() {
    sprites.destroy(cursor)
    sprites.destroy(single_player_button)
    sprites.destroy(two_players_button)
}

//  Llamamos al modo historia, destruimos el menu llamando a la funcion
//  creamos al jugador con create_main_character
function story_mode() {
    
    menu_destroy()
    create_main_character()
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
    tiles.setCurrentTilemap(tilemap`
        level2
    `)
    tiles.placeOnTile(main_character, tiles.getTileLocation(7, 12))
    mom2 = sprites.create(img`
            . . . . . . . f f . . . . . . .
                    . . . . . f f 3 3 f f . . . . .
                    . . . . f 3 3 3 3 3 3 f . . . .
                    . . . f 3 3 3 3 3 3 3 3 f . . .
                    . . f 3 3 3 3 3 3 3 3 3 3 f . .
                    . f 3 3 3 3 3 3 3 3 3 3 3 3 f .
                    . f 3 3 e 3 3 e e 3 3 e 3 3 f .
                    . f 3 3 f f e e e e f f 3 3 f .
                    f f 3 3 f b f e e f b f 3 3 f f
                    f 3 3 3 e 1 f e e f 1 e 3 3 3 f
                    . f 3 3 f e e e e e e e 3 3 f .
                    . . f e f d d d d d d d e f . .
                    . . e e c d d d d d d d e e . .
                    . . e f b d d d d d d d f e . .
                    . . . f f 1 d d 1 d 1 f f . . .
                    . . . . . f f f f f f . . . . .
        `, SpriteKind.mom)
    tiles.placeOnTile(mom2, tiles.getTileLocation(15, 2))
    is_player_talking = false
}

//  Cuando estemos encima de la madre del inicio
//  Si estamos encima y le damos a la A hablaremos con ella
//  Nos mostrará el juego dos opciones y según escojamos haremos una acción u otra.
sprites.onOverlap(SpriteKind.Player, SpriteKind.mom, function handle_overlap_mom(sprite222: Sprite, otherSprite222: Sprite) {
    
    game.showLongText("Hablar con mamá", DialogLayout.Bottom)
    is_player_talking = true
    story.printCharacterText("" + main_character_name + "!" + " Se lo llevaron... ¡Se llevaron todo!", "Mamá")
    story.printCharacterText("¿Quién, mamá? ¿Qué pasó?", main_character_name)
    story.printCharacterText("¡Esa banda... esos ladrones! Entraron a la fuerza, se llevaron mis joyas, mis ahorros... ¡todo! ¡Tienes que hacer algo!", "Mamá")
    story.printCharacterText("No te preocupes, mamá. Los encontraré. No se saldrán con la suya.", main_character_name)
    story.showPlayerChoices("Salir", "Quedarse")
    if (story.checkLastAnswer("Salir")) {
        mom2.setKind(SpriteKind.Complete)
        is_player_talking = false
        show_enemy_guard = false
        map_level()
    } else if (story.checkLastAnswer("Quedarse")) {
        is_player_talking = false
        pause(1000)
    }
    
})
//  Creamos el main_character con su sprite y marcamos que está vivo
function create_main_character() {
    
    isPlayerLive = true
    main_character = sprites.create(img`
            . . . . f f f f . . . . .
                    . . f f f f f f f f . . .
                    . f f f f f f c f f f . .
                    f f f f f f c c f f f c .
                    f f f c f f f f f f f c .
                    c c c f f f e e f f c c .
                    f f f f f e e f f c c f .
                    f f f b f e e f b f f f .
                    . f e 1 f 4 4 f 1 e f . .
                    . f e 4 4 4 4 4 4 e f . .
                    . f f f e e e e f f f . .
                    f f f e f e e f e f f f .
                    e e f e e e e e e f e e .
                    e e f e e e e e e f e e .
                    . . . f f f f f f . . . .
                    . . . f f . . f f . . . .
        `, SpriteKind.Player)
    main_character.z = 100
    controller.moveSprite(main_character)
    scene.cameraFollowSprite(main_character)
}

//  Cargamos el nivel del mapa que es donde procederá toda la historia
function map_level() {
    
    destroy_mom_story_level()
    is_shoot_done = false
    can_show_minimap = false
    can_talk = true
    is_on_map_level = true
    showMinimap = false
    scene.setBackgroundColor(7)
    tiles.setCurrentTilemap(tilemap`
        level4
    `)
    tileUtil.createSpritesOnTiles(assets.tile`
            myTile13
        `, img`
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
    tileUtil.createSpritesOnTiles(assets.tile`
            myTile34
        `, img`
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
    if (has_prev_location) {
        tiles.placeOnTile(main_character, prev_location_of_main_character)
    } else {
        tiles.placeOnTile(main_character, tiles.getTileLocation(1, 9))
    }
    
    scene.cameraFollowSprite(main_character)
    instantiate_npcs()
}

//  Destruimos el primer nivel de la madre y así con ello evitamos que aparezca en el siguiente nivel/mapa
function destroy_mom_story_level() {
    tiles.destroySpritesOfKind(SpriteKind.mom)
    tiles.destroySpritesOfKind(SpriteKind.Building)
    tiles.destroySpritesOfKind(SpriteKind.Complete)
}

//  Iniciamos los npcs en el mapa cambiamos el sprite según si estan derrotados o no.
function instantiate_npcs() {
    
    if (npc_football == spriteutils.nullConsts(spriteutils.NullConsts.Null) || npc_football == spriteutils.nullConsts(spriteutils.NullConsts.Undefined)) {
        npc_football = sprites.create(img`
                . . . . f f f f . . . .
                            . . f f e e e e f f . .
                            . f f e e e e e e f f .
                            f e e e 4 e e e e e f f
                            f e e 4 4 4 e e e e e f
                            f e e 4 4 4 4 e e e e e
                            f e e f f 4 4 f f e e e
                            f e 4 f d 4 4 f d 4 4 e
                            f e 4 4 4 4 4 4 4 4 e f
                            . f e 4 4 2 2 4 4 e f .
                            . f f e 4 4 4 4 e f f .
                            e 4 f 8 2 8 2 8 2 f 4 e
                            4 d f 8 2 8 2 5 2 f d 4
                            4 4 f 8 2 8 2 8 2 f 4 4
                            . . . f f f f f f . . .
                            . . . f f . . f f . . .
            `, SpriteKind.Npc)
        show_npc_football_map = false
    } else if (npc_football.kind() == SpriteKind.Complete) {
        npc_football = sprites.create(img`
                . . 4 4 e 2 2 f f f f f f . 2 2
                            . . 4 d 4 f f e e e e e e f . 2
                            . . f f f f e 4 4 e e e e f f .
                            f f 8 8 8 e 4 4 f f 4 4 e e f 2
                            f f 2 2 2 4 4 4 d f 4 4 4 e 2 2
                            2 f 8 8 8 4 2 4 4 4 4 4 2 2 2 f
                            2 f 2 2 2 4 2 4 4 4 4 e 2 2 e f
                            f f 8 5 8 4 4 4 f f e e 2 2 e f
                            f f 2 2 2 e 4 4 d f e e 2 2 2 2
                            2 2 f f f f e 4 4 e e 2 e 2 2 2
                            2 2 4 d 4 f f e 4 e 2 2 f f 2 .
                            . 2 2 4 e 2 2 f e e 2 f f . 2 2
            `, SpriteKind.Complete)
        show_npc_football_map = true
    }
    
    tiles.placeOnTile(npc_football, tiles.getTileLocation(39, 8))
    if (npc_building == spriteutils.nullConsts(spriteutils.NullConsts.Null) || npc_building == spriteutils.nullConsts(spriteutils.NullConsts.Undefined)) {
        npc_building = sprites.create(img`
                . . . . f f f f . . . .
                            . . f f f f f f f f . .
                            . f f f f f f f f f f .
                            f f f f f f f f f f f f
                            f f f e e e e e f f f f
                            f f e e e e e e e e f f
                            f e e f f e e f f e f f
                            f e e f d e e f d e f f
                            f e e e e e e e e e e f
                            . f e e e 2 2 e e e f .
                            . f f e e e e e e f f .
                            e e f f f e e 8 f f e e
                            e d f f f f 8 2 f f d e
                            e e f f f f 8 8 f f e e
                            . . . f f f f f f . . .
                            . . . f f . . f f . . .
            `, SpriteKind.Npc)
        show_npc_building = false
    } else if (npc_building.kind() == SpriteKind.Complete) {
        npc_building = sprites.create(img`
                . . e e e . 2 f f f f f f 2 2 2
                            . . e d e 2 2 e e e f f f f 2 2
                            . . f f f f e e e e e f f f 2 2
                            f f f f f e e e f f e e f f f 2
                            2 f f f f e e e d f e e f f f f
                            2 f f f e e 2 e e e e e f 2 f f
                            . f 8 8 e e 2 e e e e e f 2 2 f
                            f f 8 2 8 e e e f f e e f f 2 f
                            f f f f f e e e d f e f f f 2 .
                            2 2 f f f f e e e e e f f f 2 2
                            . . e d e f f e f f f f f f 2 2
                            . . e e 2 2 2 f f f f f f 2 2 2
            `, SpriteKind.Complete)
        show_npc_building = true
    } else {
        npc_building = sprites.create(img`
                . . . . f f f f . . . .
                            . . f f f f f f f f . .
                            . f f f f f f f f f f .
                            f f f f f f f f f f f f
                            f f f e e e e e f f f f
                            f f e e e e e e e e f f
                            f e e f f e e f f e f f
                            f e e f d e e f d e f f
                            f e e e e e e e e e e f
                            . f e e e 2 2 e e e f .
                            . f f e e e e e e f f .
                            e e f f f e e 8 f f e e
                            e d f f f f 8 2 f f d e
                            e e f f f f 8 8 f f e e
                            . . . f f f f f f . . .
                            . . . f f . . f f . . .
            `, SpriteKind.Npc)
    }
    
    tiles.placeOnTile(npc_building, tiles.getTileLocation(30, 40))
    npc_start = sprites.create(img`
            . f f f . f f f f . f f f .
                    f f f f f c c c c f f f f f
                    f f f f b c c c c b f f f f
                    f f f c 3 c c c c 3 c f f f
                    . f 3 3 c c c c c c 3 3 f .
                    . f c c c c 4 4 c c c c f .
                    . f f c c 4 4 4 4 c c f f .
                    . f f f b f 4 4 f b f f f .
                    . f f 4 1 f d d f 1 4 f f .
                    . . f f d d d d d d f f . .
                    . . e f e 4 4 4 4 e f e . .
                    . e 4 f b 3 3 3 3 b f 4 e .
                    . 4 d f 3 3 3 3 3 3 c d 4 .
                    . 4 4 f 6 6 6 6 6 6 f 4 4 .
                    . . . . f f f f f f . . . .
                    . . . . f f . . f f . . . .
        `, SpriteKind.Npc)
    tiles.placeOnTile(npc_start, tiles.getTileLocation(6, 7))
    if (show_enemy_guard) {
        enemy_guard = sprites.create(img`
                . . . f 2 2 2 2 2 2 2 2 f . . .
                            . f f 2 2 2 2 2 2 2 2 2 2 f f .
                            f f 2 2 2 2 2 2 2 2 2 2 2 2 f f
                            2 2 2 2 2 f f f f f f 2 2 2 2 2
                            2 2 2 2 f f f f f f f f 2 2 2 2
                            2 2 2 2 f f f f f f f f 2 2 2 2
                            2 2 2 2 f f f f f f f f 2 2 2 2
                            2 2 2 2 2 f f f f f f 2 2 2 2 2
                            f 2 2 2 2 2 f f f f 2 2 2 2 2 f
                            f f 2 2 2 2 2 2 2 2 2 2 2 f f .
                            . f f 2 2 2 2 2 2 2 2 2 f f . .
                            . . f f 2 2 2 2 2 2 2 f f . . .
                            . . . f f 2 2 2 2 2 f f . . . .
                            . . . . f 2 2 2 2 2 f . . . . .
                            . . . . . f 2 2 2 f . . . . . .
                            . . . . . . f 2 f . . . . . . .
            `, SpriteKind.marker)
        tiles.placeOnTile(enemy_guard, tiles.getTileLocation(57, 58))
    }
    
}

sprites.onOverlap(SpriteKind.npc_duel, SpriteKind.Projectile, function on_on_overlap(sprite22: Sprite, otherSprite22: Sprite) {
    
    //  Maneja las colisiones entre un NPC y un proyectil.
    //  Dependiendo del tipo de NPC (fútbol o edificio), se ejecutan diferentes acciones y se actualiza el estado del juego.
    // 
    //  :param sprite22: Sprite del NPC involucrado en la colisión.
    //  :param otherSprite22: Sprite del proyectil que colisiona con el NPC.
    // 
    // 
    //  Si el sprite de tipo bala es la bala del otro jugador y el sprite con el que colisiona es el del primer jugador entonces gana el segundo jugador else el otro
    if (otherSprite22 == main_character_bullet && npc_football == sprite22 && !is_shoot_done) {
        is_shoot_done = true
        sprites.destroy(otherSprite22, effects.fire, 500)
        npc_football.setImage(img`
            . . 4 4 e 2 2 f f f f f f . 2 2
                        . . 4 d 4 f f e e e e e e f . 2
                        . . f f f f e 4 4 e e e e f f .
                        f f 8 8 8 e 4 4 f f 4 4 e e f 2
                        f f 2 2 2 4 4 4 d f 4 4 4 e 2 2
                        2 f 8 8 8 4 2 4 4 4 4 4 2 2 2 f
                        2 f 2 2 2 4 2 4 4 4 4 e 2 2 e f
                        f f 8 5 8 4 4 4 f f e e 2 2 e f
                        f f 2 2 2 e 4 4 d f e e 2 2 2 2
                        2 2 f f f f e 4 4 e e 2 e 2 2 2
                        2 2 4 d 4 f f e 4 e 2 2 f f 2 .
                        . 2 2 4 e 2 2 f e e 2 f f . 2 2
        `)
        npc_football.setKind(SpriteKind.Complete)
        game.splash("You win")
        story.printCharacterText("Ahora dime donde encontrar a vuestra gente", main_character_name)
        story.printCharacterText("Vale, vale... pero no me hagas daño. Si me llevas a un hospital, te diré dónde están los demás.", "Pedro")
        story.printCharacterText("Trato hecho. Ahora, habla.", main_character_name)
        story.printCharacterText("Están en la parte más peligrosa de la ciudad. Aquí, te lo dibujo en el mapa.", "Pedro")
        pause(1000)
        story.spriteSayText(npc_football, "X.X")
        is_player_talking = false
        show_npc_building = true
        destroy_1v1()
        map_level()
        story.printDialog("Tienes dibujado al siguiente rival en el mapa", 80, 90, 50, 150)
    } else if (otherSprite22 == main_character_bullet && npc_building == sprite22 && !is_shoot_done) {
        is_shoot_done = true
        sprites.destroy(otherSprite22, effects.fire, 500)
        npc_building.setImage(img`
            . . e e e . 2 f f f f f f 2 2 2
                        . . e d e 2 2 e e e f f f f 2 2
                        . . f f f f e e e e e f f f 2 2
                        f f f f f e e e f f e e f f f 2
                        2 f f f f e e e d f e e f f f f
                        2 f f f e e 2 e e e e e f 2 f f
                        . f 8 8 e e 2 e e e e e f 2 2 f
                        f f 8 2 8 e e e f f e e f f 2 f
                        f f f f f e e e d f e f f f 2 .
                        2 2 f f f f e e e e e f f f 2 2
                        . . e d e f f e f f f f f f 2 2
                        . . e e 2 2 2 f f f f f f 2 2 2
        `)
        npc_building.setKind(SpriteKind.Complete)
        game.splash("You win")
        story.spriteSayText(npc_building, "X.X")
        pause(1000)
        story.spriteSayText(npc_building, "Aggh ffs")
        is_player_talking = false
        show_enemy_guard = true
        show_npc_building = true
        destroy_1v1()
        map_level()
        story.printDialog("Has enviado un mensaje a tu madre de donde tienen las cosas, aparte lo tienes en el mapa", 80, 90, 50, 150)
    }
    
})
//  Esta función gestiona los eventos de colisión entre un sprite (jugador o NPC) y un proyectil.
//  Dependiendo del origen del proyectil y del sprite impactado, realiza diferentes acciones:
//  - Marca el disparo como procesado para evitar duplicados.
//  - Destruye el proyectil con un efecto visual.
//  - Actualiza la imagen del sprite impactado para reflejar daño.
//  - Muestra mensajes en pantalla o inicia el fin del juego, según el caso.
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function handle_players_projectile_collision(sprite223: Sprite, otherSprite223: Sprite) {
    
    //  Si el proyectil pertenece al jugador 2 y golpea al jugador 1, habiendo el jugador 2 disparado antes este gana.
    if (otherSprite223 == player_2_bullet && mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)) == sprite223 && !is_shoot_done) {
        is_shoot_done = true
        sprites.destroy(otherSprite223, effects.fire, 500)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(img`
            . . . . . . . . . . . . . . . .
                        . . . . 2 2 2 2 2 . f f f . . .
                        . . 2 2 2 f f f f f d b b f . .
                        . 2 2 f f e 2 f e f d b b b f .
                        2 2 f 2 e 2 e f e e f f e e f f
                        2 f 2 2 e 2 f e 4 d d e d d e f
                        2 f f 2 e 2 f e 4 d d e d d e f
                        2 f f 2 2 2 f e f 4 f e 4 e f 2
                        2 f 2 2 2 2 f f 4 f d 4 2 4 f 2
                        2 f e 2 2 2 2 f f 4 f e 2 4 f 2
                        2 f 2 2 e f 2 f 4 4 e e 2 4 f f
                        2 2 2 e e f 2 f 4 4 4 f f f f f
                        2 2 f f e f e f e e f f 2 f f 2
                        2 2 2 f f 2 2 f f e f 2 2 2 2 2
                        2 . . 2 2 2 2 f f f 2 2 2 2 2 .
                        2 . 2 2 2 2 2 2 2 2 2 . 2 2 . .
        `)
        game.splash("Player 2 Wins!")
        story.spriteSayText(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), "X.X")
        pause(1000)
        story.spriteSayText(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), "Aggh ffs")
        ask_wanna_play_again()
    } else if (otherSprite223 == player_1_bullet && mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)) == sprite223 && !is_shoot_done) {
        //  Si el proyectil pertenece al jugador 1 y golpea al jugador 2, habiendo el jugador 1 disparado antes este gana.
        is_shoot_done = true
        sprites.destroy(otherSprite223, effects.fire, 500)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setImage(img`
            . . . . f . . . . . . . . . . .
                        . . . . f . . . . 2 2 2 2 . . .
                        . . . f f . . 2 f f f f f 2 2 .
                        . . . . d 2 2 f f f e e e f 2 .
                        . . f f d f f f e e e e e e f 2
                        2 2 6 1 1 e b d 4 4 4 4 e e e 2
                        2 f 6 1 1 4 b f 4 f 4 e e 2 e f
                        f f 6 1 1 4 d d f 4 e e e 2 2 f
                        f f f e e 4 d f 4 f e e 2 2 2 f
                        f f e d d e 4 4 4 4 e f 2 2 2 f
                        2 f e d d e f d e f f 2 2 e 2 .
                        2 2 f e 4 f f 4 4 f f 2 f f 2 2
                        2 2 2 2 2 2 f f f f 2 2 f f . 2
                        . . 2 2 2 . . . f f 2 f f . . 2
        `)
        game.splash("Player 1 Wins!")
        story.spriteSayText(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), "X.X")
        pause(1000)
        story.spriteSayText(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), "Aggh ffs")
        ask_wanna_play_again()
    } else if (otherSprite223 == npc_bullet && main_character == sprite223 && !is_shoot_done) {
        //  Si el proyectil pertenece a un NPC y golpea al personaje principal, habiendo el NPC disparado antes hacemos game_over
        is_shoot_done = true
        sprites.destroy(otherSprite223, effects.fire, 500)
        main_character.setImage(img`
            . . . . . . . . . . . 2 2 . . 2
                        . 2 2 2 2 2 2 2 2 2 2 . . 2 2 .
                        2 2 2 2 2 2 f f f 2 2 2 2 . . 2
                        2 2 2 f f c f f f f 2 2 2 f f 2
                        2 2 2 2 f c f f f f f f f f f f
                        2 2 f f c f f e e 4 4 f e e f f
                        2 f f c f f e e e 4 4 4 f e f f
                        2 f 2 2 f f f f f f 4 4 e e f 2
                        2 f 2 2 f c f f b 1 4 4 e e f 2
                        2 2 f 2 2 c f f f e e e e f f 2
                        . 2 2 2 f f f f e 4 f 4 4 e f f
                        . 2 2 f f f c f e e f 4 4 e f f
                        2 2 2 f f c c f f f f 4 e f f 2
                        2 . 2 2 f f f f f f 2 2 2 2 2 2
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
                        . . . 2 2 2 2 2 2 2 2 2 . . . .
        `)
        story.spriteSayText(main_character, "X.X")
        pause(1000)
        carnival.onGameOverExpanded(carnival.WinTypes.Lose)
    }
    
})
//  Pregunta si quiere volver a jugar, si dice que si recargamos la pantalla de nuevo
//  Si no quiere volver a jugar destrozamos la pantalla y cargamos el menú
function ask_wanna_play_again() {
    story.showPlayerChoices("Menú", "Volver a jugar")
    if (story.checkLastAnswer("Menú")) {
        destroy_1v1()
        do_menu()
    } else {
        destroy_1v1()
        two_players_screen()
    }
    
}

//  Destroza todo lo creado en el duelo arcade
//  para que no quede en pantalla en siguientes peleas o al pasar al modo historia
function destroy_1v1() {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    carnival.showTimer(false)
    sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
    info.stopCountdown()
    sprites.destroy(textSprite)
}

//  Esta función se ejecuta cuando el jugador presiona la flecha hacia el lado, dependiendo del lado hará una u otra.
//  Se verifica si el jugador está vivo para evitar acciones cuando está eliminado.
//  También se asegura de que el jugador no esté hablando, ya que el diálogo tiene prioridad sobre el movimiento.
//  Si las condiciones anteriores se cumplen:
//  - Se inicia una animación específica para el personaje principal.
controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    if (isPlayerLive && !is_player_talking) {
        animation.runImageAnimation(main_character, [img`
                    . . . . f f f f . . . . .
                                . . f f c c c c f f . . .
                                . f f c c c c c c f f . .
                                f f c c c c c c c c f f .
                                f f c c f c c c c c c f .
                                f f f f f c c c f c c f .
                                f f f f c c c f c c f f .
                                f f f f f f f f f f f f .
                                f f f f f f f f f f f f .
                                . f f f f f f f f f f . .
                                . f f f f f f f f f f . .
                                f e f f f f f f f f e f .
                                e 4 f e e e e e e c 4 e .
                                e e f f e e e e f f e e .
                                . . . f f f f f f . . . .
                                . . . f f . . f f . . . .
                `, img`
                    . . . . . . . . . . . . .
                                . . . . . f f f f . . . .
                                . . . f f c c c c f f . .
                                . f f f c c c c c c f f .
                                f f c c c c c c c c c f f
                                f c c c c f c c c c c c f
                                . f f f f c c c c f c c f
                                . f f f f c c f c c c f f
                                . f f f f f f f f f f f f
                                . f f f f f f f f f f f f
                                . . f f f f f f f f f f .
                                . . e f f f f f f f f f .
                                . . e f f f f f f f f e f
                                . . 4 c e e e e e e 4 4 e
                                . . e f f f f f f f e e .
                                . . . f f f . . . . . . .
                `, img`
                    . . . . . . . . . . . . .
                                . . . . . f f f f . . . .
                                . . . f f c c c c f f . .
                                . . f f c c c c c c f f .
                                . f f f c c c c c c c f f
                                f f f c c c c c c c c c f
                                f f c c c f c c c c c c f
                                . f f f f f c c c f c f f
                                . f f f f c c f f c f f f
                                . . f f f f f f f f f f f
                                . . f f f f f f f f f f .
                                . . f f f f f f f f f e .
                                . f e f f f f f f f f e .
                                . e 4 4 e e e e e e c 4 .
                                . . e e f f f f f f f e .
                                . . . . . . . . f f f . .
                `], 500, true)
    } else if (isPlayerLive) {
        animation.stopAnimation(animation.AnimationTypes.All, main_character)
    }
    
})
//  - Se inicia una animación específica para el personaje principal hacía abajo.
controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    if (isPlayerLive && !is_player_talking) {
        animation.runImageAnimation(main_character, [img`
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
                                f e f e f e e f e f e f .
                                e 4 f e e e e e e f 4 e .
                                e e f f f f f f f f e e .
                                . . . f f f f f f . . . .
                                . . . f f . . f f . . . .
                `, img`
                    . . . . . . . . . . . . .
                                . . . . . f f f f . . . .
                                . . . f f f f f f f f . .
                                . . f f f f f f c f f f .
                                f f f f f f f c c f f f c
                                f f f f c f f f f f f f c
                                . c c c f f f e e f f c c
                                . f f f f f e e f f c c f
                                . f f f b f e e f b f f f
                                . f f 4 1 f 4 4 f 1 4 f f
                                . . f e 4 4 4 4 4 e e f e
                                . f e f e f e e f 4 4 4 e
                                . e 4 f e e e e e 4 4 e .
                                . . . f f f f f f e e . .
                                . . . f f f f f f f . . .
                                . . . f f f . . . . . . .
                `, img`
                    . . . . . . . . . . . . .
                                . . . . f f f f . . . . .
                                . . f f f f f f f f . . .
                                . f f f c f f f f f f . .
                                c f f f c c f f f f f f f
                                c f f f f f f f c f f f f
                                c c f f e e f f f c c c .
                                f c c f f e e f f f f f .
                                f f f b f e e f b f f f .
                                f f 4 1 f 4 4 f 1 4 f f .
                                e f e e 4 4 4 4 4 e f . .
                                e 4 4 4 f e e f e f e f .
                                . e 4 4 e e e e e f 4 e .
                                . . e e f f f f f f . . .
                                . . . f f f f f f f . . .
                                . . . . . . . f f f . . .
                `], 500, true)
    } else if (isPlayerLive) {
        animation.stopAnimation(animation.AnimationTypes.All, main_character)
    }
    
})
//  - Se inicia una animación específica para el personaje principal hacía arriba.
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    if (isPlayerLive && !is_player_talking) {
        animation.runImageAnimation(main_character, [img`
                    . . . . . . . . . . . . .
                                . . . f f f f f f . . . .
                                . f f f f f f f f f . . .
                                . f f f f f f c f f f . .
                                f f f f c f f f c f f f .
                                f c f f c c f f f c c f f
                                f c c f f f f e f f f f f
                                f f f f f f f e e f f f .
                                f f e e f b f e e f f f .
                                f f e 4 e 1 f 4 4 f f . .
                                . f f f e 4 4 4 4 f . . .
                                . 4 4 4 e 4 4 4 f f . . .
                                . e 4 4 e e e f e f . . .
                                . f e e f e e e e f f . .
                                . f f f f f f f f f f . .
                                . . f f . . . f f f . . .
                `, img`
                    . . . . . . . . . . . . .
                                . . . f f f f f f . . . .
                                . f f f f f f f f f . . .
                                . f f f f f f c f f f . .
                                f f f f c f f f c f f f .
                                f c f f c c f f f c c f f
                                f c c f f f f e f f f f f
                                f f f f f f f e e f f f .
                                f f e e f b f e e f f . .
                                . f e 4 e 1 f 4 4 f f . .
                                . f f f e e 4 4 4 f . . .
                                . . f 4 4 f 4 4 f f . . .
                                . . f 4 4 f e f e f . . .
                                . f f f f e e e e f f . .
                                . f f f f f f f f f f . .
                                . . f f . . . f f f . . .
                `, img`
                    . . . f f f f f . . . . .
                                . f f f f f f f f f . . .
                                . f f f f f f c f f f . .
                                f f f f c f f f c f f . .
                                f c f f c c f f f c c f f
                                f c c f f f f e f f f f f
                                f f f f f f f e e f f f .
                                f f e e f b f e e f f . .
                                . f e 4 e 1 f 4 4 f . . .
                                . f f f e 4 4 4 4 f . . .
                                . . f e f f e e f f . . .
                                . . f 4 4 f e e e f . . .
                                . . f 4 4 e e f e f . . .
                                . . f f f f e e e f . . .
                                . . . f f f f f f . . . .
                                . . . . f f f . . . . . .
                `], 500, true)
    } else if (isPlayerLive) {
        animation.stopAnimation(animation.AnimationTypes.All, main_character)
    }
    
})
//  - Se inicia una animación específica para el personaje principal hacía la izquierda.
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    if (isPlayerLive && !is_player_talking) {
        animation.runImageAnimation(main_character, [img`
                    . . . . . f f f f f . . .
                                . . . f f f f f f f f f .
                                . . f f f c f f f f f f .
                                . . f f c f f f c f f f f
                                f f c c f f f c c f f c f
                                f f f f f e f f f f c c f
                                . f f f e e f f f f f f f
                                . . f f e e f b f e e f f
                                . . . f 4 4 f 1 e 4 e f .
                                . . . f 4 4 4 4 e f f f .
                                . . . f f e e e e e f . .
                                . . . f e f e e e 4 e . .
                                . . . f e e e e e 4 e . .
                                . . . f f f f f e e f . .
                                . . . . f f f f f f . . .
                                . . . . . . f f f . . . .
                `, img`
                    . . . . . . . . . . . . .
                                . . . . f f f f f f . . .
                                . . . f f f f f f f f f .
                                . . f f f c f f f f f f .
                                . f f f c f f f c f f f f
                                f f c c f f f c c f f c f
                                f f f f f e f f f f c c f
                                . f f f e e f f f f f f f
                                . . f f e e f b f e e f f
                                . . f f 4 4 f 1 e 4 e f .
                                . . . f 4 4 4 e e f f f .
                                . . . f f e e 4 4 e f . .
                                . . . f e f e 4 4 e f . .
                                . . f f f f f e e f f f .
                                . . f f f f f f f f f f .
                                . . . f f f . . . f f . .
                `, img`
                    . . . . . . . . . . . . .
                                . . . . f f f f f f . . .
                                . . . f f f f f f f f f .
                                . . f f f c f f f f f f .
                                . f f f c f f f c f f f f
                                f f c c f f f c c f f c f
                                f f f f f e f f f f c c f
                                . f f f e e f f f f f f f
                                . f f f e e f b f e e f f
                                . . f f 4 4 f 1 e 4 e f f
                                . . . f 4 4 4 4 e f f f .
                                . . . f f e e e e 4 4 4 .
                                . . . f e f e e e 4 4 e .
                                . . f f f f f f f e e f .
                                . . f f f f f f f f f f .
                                . . . f f f . . . f f . .
                `], 500, true)
    } else if (isPlayerLive) {
        animation.stopAnimation(animation.AnimationTypes.All, main_character)
    }
    
})
//  Cuando presionamos B
//  Si presionamos B y se cumple la condición de que estamos en el nivel del mapa
//  Miramos si abrimos el minimapa, cogemos el contrario del can_show_minimap booleano
//  por ende si lo abrimos y está en false pasa a true, y si le damos de nuevo pasa a false por ende se cierra.
//  Si podemos abrir el mapa lo enseñamos con los respectivos sprites.
//  Para casi cada sprite tiene un condicional si tenemos que enseñarlo o no segun el transcurso del juego.
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    
    if (is_on_map_level) {
        can_show_minimap = !can_show_minimap
        if (can_show_minimap) {
            showMinimap = true
            is_map_showing = true
            myMinimap = minimap.minimap(MinimapScale.Eighth, 2, 15)
            minimap.includeSprite(myMinimap, main_character, MinimapSpriteScale.Octuple)
            minimap.includeSprite(myMinimap, npc_start, MinimapSpriteScale.Quadruple)
            if (show_npc_football_map) {
                minimap.includeSprite(myMinimap, npc_football, MinimapSpriteScale.Quadruple)
            }
            
            if (show_npc_building) {
                minimap.includeSprite(myMinimap, npc_building, MinimapSpriteScale.Quadruple)
            }
            
            if (show_enemy_guard) {
                minimap.includeSprite(myMinimap, enemy_guard, MinimapSpriteScale.Quadruple)
            }
            
            miniMapa.setImage(minimap.getImage(myMinimap))
            miniMapa.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
            miniMapa.z = 999
        } else {
            is_map_showing = false
            miniMapa.setImage(img`
                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
            `)
            showMinimap = false
        }
        
    }
    
})
// Función: handle_player_npc_interaction
// 
// Gestiona las interacciones entre el jugador y los NPCs al colisionar.
// 
// Parámetros:
//  - sprite2: El sprite del jugador que colisiona.
//  - otherSprite2: El sprite del NPC con el que colisiona.
// 
// Descripción:
// - Muestra un mensaje para iniciar un diálogo al presionar "A".
// - Ejecuta diálogos y eventos según el NPC con el que colisiona:
//   - **Emily:** Proporciona pistas.
//  - **NPC del fútbol/Pedro:** Inicia una confrontación y registra la ubicación previa para cargar el mapa de nuevo.
//  - **Mbappez:** Desarrolla un enfrentamiento y registra la ubicación previa, revelandote el final.
//  - **Madre:** Revela la trama final y termina el juego.
// - Si no hay eventos disponibles, muestra un mensaje indicando que no se puede interactuar.
sprites.onOverlap(SpriteKind.Player, SpriteKind.Npc, function handle_player_npc_interaction(sprite2: Sprite, otherSprite2: Sprite) {
    
    if (!showMinimap && is_on_map_level) {
        main_character.sayText("A para hablar", 500, false)
        if (!showMinimap && controller.A.isPressed()) {
            is_player_talking = true
            if (otherSprite2 == npc_start && !showMinimap) {
                story.printCharacterText("Hola, sé lo que ha pasado con tu madre...", "Emily")
                story.printCharacterText("Vi a unos chavales con camisetas de futbol", "Emily")
                story.printCharacterText("Oh, muchas gracias por la información, sabes donde puedo encontrar a alguien de ellos?", main_character_name)
                story.printCharacterText("Uno debería de estar en el campo de futbol con una Camiseta del Barcelona.", "Emily")
                story.printCharacterText("De verdad, te lo agradezco", main_character_name)
                story.printCharacterText("Te he dibujado en el mapa de tu bolsillo al maleante para que lo encuentres", "Emily")
                show_npc_football_map = true
                story.printDialog("Presiona B para ver el mapa!", 80, 90, 50, 150)
                is_player_talking = false
            } else if (otherSprite2 == npc_football && !showMinimap) {
                story.printCharacterText("¡Eres uno de los que irrumpió y robó a mi madre!", main_character_name)
                story.printCharacterText("¿De qué hablas? Yo estoy tranquilo aquí jugando al fútbol.", "Pedro")
                story.printCharacterText("¡No te hagas el tonto! ¡Devuélveme lo que le robaste!", main_character_name)
                prev_location_of_main_character = main_character.tilemapLocation()
                has_prev_location = true
                has_completed_football = true
                start_npc_duel(npc_football)
            } else if (otherSprite2 == npc_building && !showMinimap && has_completed_football) {
                story.printCharacterText("¡Tú! ¡No te escondas, sé que estás con ellos!", main_character_name)
                story.printCharacterText("¿Qué? ¡No tengo idea de lo que hablas! Yo solo estoy de paso.", "Mbappez")
                story.printCharacterText("No me tomes por tonto. ¿Dónde guardáis lo que robáis?", main_character_name)
                story.printCharacterText(" ¿Robar? Nosotros no robamos, somos un equipo de fútbol humilde... Bueno, con algo de talento.", "Mbappez")
                story.printCharacterText("Sí, hombre. ¿Y el mapa que tienes en el bolsillo también es parte del \"equipo\"?", main_character_name)
                story.printCharacterText("¡Ah! Bueno, quizás haya... algo de información ahí, pero no es lo que crees.", "Mbappez")
                prev_location_of_main_character = main_character.tilemapLocation()
                has_prev_location = true
                has_completed_mbappez = true
                start_npc_duel(npc_building)
            } else if (otherSprite2 == final_mom_sprite && !showMinimap) {
                story.printCharacterText("¡Mamá, estoy aquí! ¿Estás bien?", main_character_name)
                story.printCharacterText("Oh, hijo... Estoy perfectamente. Mejor de lo que crees.", "Mamá")
                story.printCharacterText("¿Qué? Pero esos chicos... ¿Dónde están los ladrones?", main_character_name)
                story.printCharacterText("Fui yo. Todo esto lo planeé para quitarles lo poco que tenían. Pagué a Emily para que te diera esa información", "Mamá")
                story.printCharacterText("...", main_character_name)
                story.printCharacterText("¡¿Qué estás diciendo?! ¡Mamá, ellos no hicieron nada!", main_character_name)
                story.printCharacterText("Ellos no importan. Nosotros necesitábamos el dinero, y ahora lo tenemos.", "Mamá")
                story.printCharacterText("Lo hice por ti. Por nosotros.", "Mamá")
                story.printCharacterText("¡Entonces he dañado a esos pobres chavales para nada!", main_character_name)
                story.printCharacterText("Si dices algo, me perderás a mí también. ¿Estás dispuesto a tomar ese riesgo?", "Mamá")
                carnival.customGameOverExpanded("Terminaste el juego!", effects.confetti, music.bigCrash, carnival.ScoreTypes.None)
            } else {
                story.printDialog("No puedes hablar con el/ella ahora", 80, 90, 50, 150)
                is_player_talking = false
            }
            
        }
        
    }
    
})
// Función: start_npc_duel
// Inicia un duelo con un NPC, modificando el estado del juego y configurando la escena para el enfrentamiento.
// Parámetros:
// - npc: El sprite del NPC con el que se inicia el duelo.
// Descripción:
// - Detiene cualquier animación en curso del jugador.
// - Configura variables para indicar que el jugador está en un duelo con el NPC.
// - Cambia el tipo de sprite del NPC a `npc_duel` y destruye otros NPCs en la escena.
// - Asigna el NPC en duelo y establece un tiempo aleatorio para el contador.
// - Desactiva la posibilidad de disparar para el jugador y desactiva el mapa.
// - Si el NPC es `npc_football`, cambia la imagen de fondo de la escena a futbol.
// - Si el NPC es `npc_building`, cambia la imagen de fondo de la escena a building.
function start_npc_duel(npc: Sprite) {
    
    animation.stopAnimation(animation.AnimationTypes.All, main_character)
    main_character.setImage(img`
        . . . . . . . . . . . . . . . .
                . . . . . f f f f f f . . . . .
                . . . f f f f f f f f f . . . .
                . . . f f f f f f c f f f . . .
                . . f f f f c f f f c f f f . .
                . . f c f f c c f f f c c f f .
                . . f c c f f f f e f f f f f .
                . . f f f f f f f e e f f f . .
                . . f f e e f b f e e f f f . .
                . . f f e 4 e 1 f 4 4 f f . . .
                . . . f f f e 4 4 4 4 f . . . .
                . . . 4 4 4 e 4 4 4 f f . . . .
                . . . e 4 4 e e e f e f . . . .
                . . . f e e f e e e e f f . . .
                . . . f f f f f f f f f f . . .
                . . . . f f . . . f f f . . . .
    `)
    tiles.setCurrentTilemap(tilemap`
        nivel1
    `)
    is_npc_duel = true
    can_main_character_shoot = false
    npc.setKind(SpriteKind.npc_duel)
    sprites.destroyAllSpritesOfKind(SpriteKind.Npc)
    npc_dueling = npc
    random_countdown_time = randint(1, 10)
    info.startCountdown(random_countdown_time)
    is_player_talking = true
    is_on_map_level = false
    if (npc == npc_football) {
        scene.setBackgroundImage(img`
            777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        dd1111111111111111111111111177777777777111111111111111111111111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777
                        1d77d77d77d777d77d77dd77d11177777777777177777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777
                        dddddddddddddddddddddddd111177777777771177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777
                        177d77d77ddd7dd7d77dd77d111177777777771777777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777
                        17d777777d7dd777777d77dd111177777777711777777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777
                        dddddddddddddddddddddd111d1177777777717777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777
                        1d77dd77d77d77dd77d77dd1171177777777117777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777
                        1d77d777777d77d777d77d11d71177777777177777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777
                        ddddd77dd7dd7dd7ddd7dd11771177777771177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777
                        dd7dd7d77ddd7dd7d777d11d771177777771777777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777
                        d7dd77d77d77ddd7d77dd11d7d1177777711777777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777
                        17d777777d77d7777d7d1177d71177777717777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777
                        dddddddddddddddddddd1177d71177777117777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777
                        1dd7dd7dddddddddddd11ddddd1177771177777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
                        1d77d77d777d77d77dd11777d71177771177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777
                        1dddddddddddddddd111d7d77d1177711777777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777
                        d77d77d77ddd7dd7dd117ddd771177711777777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777
                        17d777777d77d7777117777dd71177117777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777
                        ddddddddddddddddd11dd77ddd1177117777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777
                        1d777d77dd7d777d11d777ddd71171177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777
                        1d77d77dd77d77dd117d7dd7dd1111177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777
                        d777d77d77d777d11777dd77d71111777777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777
                        dddddddddddddd11177dd77d771111777777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777
                        1ddddddddddddd117dd77d7d7d1117777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777
                        17d777777d77dd1177dd77dd771117777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777
                        ddddddddddd7d117dd77d7d7d71177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777
                        1d77dd77d77dd11dd7d7d77ddd1177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777
                        d111d11d11d1111111111111111777777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777
                        dddddddddddd117777777777711777777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777
                        7d7dddddd771177777777777717777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777
                        7dd777777dd1177777777777117777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777
                        d7d77d77d711777777777777177777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777
                        7dd7dd7ddd11777777777771177777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777
                        7d77d7777117777777777771777777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777
                        d777777dd117777777777711777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777
                        dddddddd1177777777777717777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777
                        777777dd1177777777777117777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777
                        77d777711777777777777177777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777
                        ddddddd11777777777771177777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777
                        7d77d7117777777777771777777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777
                        d777dd117777777777711777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        ddddd1177777777777117777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        d77d11177777777777117777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        77d711777777777771177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        77dd11777777777771177777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        ddd117777777777711777777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        7dd117777777777711777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        d71177777777777117777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        dd1177777777777117777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        711777777777771177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        d11777777777771177777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        117777777777711777777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        117777777777711777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        177777777777117777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        177777777777117777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        177777777771177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        177777777771177777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777111777777777777777777777777777777777777777777777
                        177777777711777777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777771111777777777777777777777777777777777777777777777
                        177777777711777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        177777777117777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        177777777117777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        177777771177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        177777771177777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        177777711777777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        177777711777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        177777117777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        177771117777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        177771177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771
                        177711177777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771
                        177711777777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711
                        177111777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711
                        177117777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117
                        171117777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117
                        171177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177
                        111177777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177
                        111777777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777
                        111777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777
                        117777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777
                        117777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777
                        177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777
                        777777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777
                        777777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777
                        777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777
                        777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777
                        777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777
                        777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777
                        777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777
                        777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777
                        777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777
                        777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777
                        777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777
                        777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777
                        777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777
                        777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777777
                        777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777777
                        777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777777
                        777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777777
                        777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777777
                        777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777777
                        777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777777777
                        777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777777777
                        777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777777777
                        777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777777777
                        777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777777777
                        777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777777777
                        777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777777777777
                        777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777777777777
                        777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777777777777
                        777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777777777777
                        777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777777777777
                        777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777777777777
                        777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777777777777777
                        777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777777777777777
                        777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777777777777777
                        777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777777777777777
                        777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777777777777777
                        777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777777777777777
                        777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777777777777777777
        `)
        npc.setPosition(120, 90)
        main_character.setPosition(40, 90)
    } else if (npc == npc_building) {
        scene.setBackgroundImage(img`
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999c9999999999999999999999999999
                        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999c9999999d99999c9999999999999999999999999999
                        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999c999999dc99999c9999999999999999999999999999
                        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999c999999dc99999c9999999999999999999999999999
                        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999c999999dc99999c9999999999999999999999999999
                        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999c999999dc99999c9999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999cd99999c999999dc999c9c9999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dc99999c999999dccccccc9999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999cd99999c99d9dcdddd99dcccdd9c9999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999cd99999c99c9dccccc99dc99999c9999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999cd99999c99c99c999999dc99999c9999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999cc9996cccdcddcd99999dc9997cc9999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911ddddddd11119dc19999c7ccccccccccccccccccc9999999999911999999999999999
                        999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddd1d1ddd9dddddd111dc19999cd9c99c991111ccdd999c9999999999111111111111111111
                        999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddd9ddddd111dc19999c9dc99c911111cc99999c9999999999911111111111111111
                        999999999999999999999999999999999999999999999999999999999999999999999999999999999999d99ddddddd99dddd11ddcdddddcddcddcddddddccdddddcd9999999999d1111111111111111
                        999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddd999dd11dddddbdddddddbddddddddceeeeeeb999999999911111dd1111111111
                        999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddd11ddddddddddddddddddddddceeeeeeb999999999911199991d11111111
                        99999999999999999999999999999999999999999999999999999999999999999999999999999999999911dd1ddddddddddd11ddddddddddddddddddddddceeffffb9d9999999911199999999111111
                        999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddd11ddddddddddddddddddddddceefffb9999999999911d99999999111111
                        999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddd9ddddd11dbbbbbbffffffffddfffffffffffb9999999999911999999999111111
                        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddd9ddd9d9ddd1d1bffbffffffffff9bfffffffffffb9999999999ddd99d999999111111
                        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddd9ddd9d9dddd11bff6ffffffffff9cffdffffffffbfd99999999d11d9ddb9999dddddd
                        999999999999999999999999999999999999999999999999999999999999999999999999999999999999d99dd99ddd9d9ddd11ddffbbfbbffbffbdccbdffffffffbf99999999991199dbe9999111111
                        999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddd9ddd1dddddddddddddddddddddddeeeeeeefd99999d999dddddbe999d111111
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999991ddddddddddddddd1dddddddddddddddddddddddeeeeeeef9999999999dd4eeeecccdd11111
                        999999999999999999999999999999999999999999999999999999999999999999999999999999999991dddddd1ddddddddd1dddddddddbdddddddddddddeeeffeef99999999991d9bbbe9991111111
                        99999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd1dd99ddddd9ddddddbdddddddddddddddeeeefeef99999999dddd9bbbc99d1111111
                        999999999999999cc9999999999999999999999999999999999999999999999999991d11111119999991ddd9dddddd999ddd1dddddddddddddddddddbdddfeeefeef999999999bd19dbbc99d111111d
                        999999999999999cc9999999999999999999999999999999d9999999999999999999ddddd1dd1ddddd111ddd9d1ddd999ddd1dd9ffff99ffffffffbcdffffffeffdf999999999cd19bbbc799d11111d
                        9999999999ccccccccccdd119999999999999999999991dddd999999999999999999ddddd1dd1ddddd11ddd999ddddd99ddd1dddffff67ffffbbffbbbffffffefffffb9999999cd19bbbcb99911111d
                        99999999991ddddcccdccd119999999999999999999991dddd999999999999999999dddddddd1dddddd1ddd9d99dddd9dddd1dddfffffbfffbddbf6bfffffffeff9f999999999cd19b6bcb99911111d
                        999999999911d11ccddd11119999999999999999999991dddd111199999999999999dd9ddddd1ddddddd1dddddddddd9dddd1ddddddddddddddddbdddbdbfffeffbf999999999c119bbbc999911111d
                        999999999911d11dc1dd11dd9999999999999999999111dddd111111111111111111dd9ddd9d1dd9dddd1dddddddd99dddddddddddddddddddddbdddddddeeeeeeeebbdddd999c119bbbc999911111d
                        999999999d11111dc11111dd9999999999999999999ddddddd11111dd1111111d111dd99dd9d1ddd99dddddddddd9ddddddddbbdddddddddddddbdddddddeeeeeeee4eb4eeeeee444eeeccccccbbbbb
                        999999999cccccccccccccccd199999999999999991dddddd11111dddd111111d111ddd9dd9dddddddddddddddbbbbbbbbbbbeedddddddddddddddddddddfeeefffb9bb9dbdb9c119bbbbbb6dd11ddd
                        99999999dcdddddcccccccccd1111999999999911119dddddd1111dddd111111d111ddddddddddddddddddddbbbbbbbbbbbdbffdddddddddddddddddddddfffeffbc9779dbbd9c1d9bdbb9bdd111d1d
                        99999999ddd11d1dcd1111dd11111d11199999911d1ddddddd11d1dddd111111d11dddddddddddddddddddddeffbfffbfffbbffbbbbbbdbfffbffbfffdfffffeff9b9db99bd99c1d9bbbb99d9dd9ddd
                        99999999dddddd1bcd1111dd111119d111111111dd1ddddddd11d1dddd11d111d119dddddd9dddddddd9ddddfffbfffbfffbbffbfffffbfffffff6fffdfffffeffdbddb9dbd9dc999d9bb99d9b9999b
                        99999999d1d1111dcd1111dbdddddd1dddd11111d91ddddddd11dddddd11ddddddddddddd99d1ddd9dd9ddddfffbfffbfffbbffffffbfffffffffbfffffffffeff9b9dcbd9dddc999d9bb99d9ddb99b
                        99999999d1d1111dcddddddddddbbbbbb6d11111d91ddddddd11dddddd119ddddd91ddd99ddd1dd99dd99dddfffbfffbfffbbffbddddddbdddddddbdddbbfffeffbb99bd9999dc99999bb99d919999b
                        99999999d1d111ddcdddddddddddddddddbdddddbbdddddddd11dddbbd119dddddd1dddddddd1dd99dddddddddddddddddddbffbdddddddddddddddddddbeeeefebbd9bdd999dc99999bb9dd9199ddb
                        99999999dddd1dbeceeeeeeeeeeeeeeeeeefffffeedddddddd11dddcdd11ddddddddddddddddddd99dddddddbffbbbbdbffdbffbdddddddddddddddddddbeeeeeeebbbbb44444e4444eecccccccccce
                        999999991d1d114fcfefffefffeffefffeefffffeedddddddbddb6cccddddddddddddddddddddddd9dddddddbffbfffbfffbbffbdddddbdddddddbdddddbfffeeebbddbddddddcdddddbbd9b999999b
                        999999991d1dd14fcfefffefffeffefffeeffffeeedddddddbddcbdcddbddddddddddddddddddddd9dddddddbffbfffbfffbbffbddddbddddddddbdddddbfffeffbdddddd999db99dddbb9db999999b
                        99999999dddddd4fcfefffefffeffefffefffffeeedddddddbddbddbddfdddddddddbdddddddddddddddddddbffbfffbfffbbffbbffffffffffbffddfffffffeffdddddddddddb9d9dfefd9d99999db
                        ddddddddddddddeeceeeeeeeeeeeeeeeeefffeeeeedddddddbddddbbdbfdddddddddbddddddddddddddd9dddbbbbbbbdbbbdbfffbfffffbbfffffffbbffffffeffddddddddffdbdddffefbdddd9dbef
                        dddddddddddddd4fcfefffefffeffefffefffeeeeeddddddddddddfbdbfbdddddddbcbbdddddddddd999dddddbbdddddddddbefbbffddbdbbfffffffbffffffbbbdddddddfffdbddddddfffbddbbeff
                        ddbddddddddddd4fcfefffefffeffefffeefeeeeeeddddd1dbcdddfd1fbdbddddbbdbdddddddddddddddddddbffbfffdfffdbffbddddddbddddddddddddbfffddddbddddffffcbdddddbffffddcbeff
                        ddbdddddddddbd4fcfefffefffeffefffeefeeeeeed11111dbcbddfbdf1ddd1bddbddbddddddddddddddddddbffbfffdfffbbffbddddddbddddddddddbdbeeebbdddddbeeeeeeccbbddbefffddcbfff
                        eddddddddddbddeeceeeeeeeeeeeeeeeeeeeeeeeeebd1111dbffdfffbbdbdb1bddcbdcbcd1ddddddddebddddbffbbffbfffbbffbdddddddddddddddddddbeeebdddddddcfcdddbcbdddbbfffbcebeff
                        dedddddb4dbbb4eecbddddddddd1dd1ddddeeeeeee6bd111dbffdfffbffbdebbcccddbddddddbb34442ee4cbbffbbffdbffdbffbddddddddddddbddddddbfffbbbbbbbdbbdbbdbbbbbbdfffffbffeff
                        ddbddddb4dbbe4eecedddddbddddddddddbeeeeeee66d111dddddddbddbddefbdddbdbdbbdddbd3e44e332cdddddddddddddbffbbffffffffffffffffffffffbffbbffbffbffbfffbfcdfffffbffbff
                        ddbddbdb4bbbe4cccc6666ff6666f6fff6eeeeeeeedd1111dbffdbfbdbfbdefbdddbddddedddebdedfedf2edbffbbffdbffbbffbbffffffffffffffffffffffbffbbffbffbffdfffbfcbfffffbffbff
                        ddddb4bcbbbdd4cfccff6ffff6666ffffbeeeeffffbddddddbffdeffbffbdffbddbddddddddd2bbeffeff2cbbffbbffdbffdbffbbffffffffffffffffffffffbffbbffbffbccdffbbccbfffffbffbeb
                        4bdbc4bb4bbbdbbcccfffffff6666ffffbeeeffffebddddddbffdeffdffbdffbbbdddddddddd2efeffeff2cbbffbbffdbffdbffbbffffffffffffffffffffffbbbdbffdbbdbbdbbbbbbbfffffbffbb4
                        dbbeb4444bbbddbbccffbcffffcc66fffbeeefffeedddddd3bee4effbefbbffffbddddddddddee2eff22e2cebee4eff4eee4efffbffffffffffffffffffffffbdddbffdddddddddddddbffeeeefbd44
                        ddddddddddbdddbbbcbbbbefffebbbbbbbbbffffbbdddddd44444efe44444eebeddddddddddd4444ff4444ee4444bff44444eeeebffffffffffffffffffffffbdddbfbddddddddddddddbbbbbbbddbb
                        44444444444444444c444444444444444444444444444444444ddd444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        44dd4444444444444c4444444444ddd4444ddd444444444444444444444444444444444ddd44444444444444444444444444444444d44444444444444444dddd44444444444444444ddd44444444444
                        b4bb44b4dddbbbbbbcbb4bbbdbbb44bbbb4bbb4b44dddbbbbbb4bbbbbbbb4bb44ddbbbb44bb4dbbbbbb44bbbb444bb4bbbbbbbbbb44bbbbdbb44bbbbbbbbbbbbb4bbbbbb44dbb44444444bbbb4bbddb
                        bbbbbbbbbbbbbbbbbcbeebbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbb44bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4bbbbbbbbbbbbbbbbbbbbbbbbbbbbb4bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bdbbbbbbbbbbbbbbbceeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbdbbbbbbb
                        bbbbbbbbbbdbbbbbbeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbeeeeeeeeeeebbbbbbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        111111111bbbbbb11eeeeeeeeeeeeffeeeff111111111bbbbbb111111111111bbbbbb111111111111bbbbbbb11111111111bbbbbbb111111111111bbbbbbbb11111111111bbbbbbbbb1111111111111
                        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeffeffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbeeefeeeeeeeffefffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbebbbebbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbeecfceeeeeeffeeefffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeffffeeeeeeeeeebbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbeecffeeeeeeeffeeeebbbbeecbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeefffffeeeeeffffeeeeeeeeeeeeebbbbbbbbbbbbb
                        bdbbbbbddddbbbbbbbeffffeeeeeeffefeeeeeeeeebdbbbbbbbbbbbbbbbddbdddbbbbbbddbbddbbbbbbbbbbdbdddbbbbbbbbbbbbbbddbbbbdbbbeeefffffeeeefffffeeeeeeeeffeeebbeebbb4bbbbb
                        44444dd44444444444444bfeeefeeeeeffeeffeeeffffffffffffeeeb4d4444444444444444444444444444d4d44444444444444444444444444beeefeeeeeeefffffeeeeeeeeeeeeeeeeeebb444444
                        44444d444444444444444ddd444ffffffffffffffffffffb4dd44dd4444444dd44444444444444444444444d4444444444444444444d4444444d44ff4d4deeeefffffeeeeeeeeebfffff444dd444444
                        4444444444d44444444444dd444444444444444444444444ddd444444444444444444444444444444444444444444444444d4444444d44444444444dd4ddfffffdffffbbbbbb4fff444444ddd444444
                        444444444444444444444444444444444444444444d44444d44d4444444444444444444dd444444444444444444dd444444ddd444444444444d444444d4d444fffff4444444444444d444444444444d
                        444444444444444444444444444dd444444444444444444444444444ddd44444444444dd4d4444444444444444444444444d4d44444444444d44444444444444444444d44444444444444444444444d
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        `)
        npc.setPosition(120, 120)
        main_character.setPosition(38, 120)
    }
    
}

//  Cada vez que recarga el juego
//  Si el jugador esta hablando o tiene el mapa abierto cancelamos las animaciones y el movimiento.
//  Si no es así se mueve con normalidad y sus animaciones.
game.onUpdate(function on_on_update() {
    if (is_player_talking || is_map_showing) {
        animation.stopAnimation(animation.AnimationTypes.All, main_character)
        controller.moveSprite(main_character, 0, 0)
    } else {
        controller.moveSprite(main_character, 100, 100)
    }
    
})
//  Cada vez que recarga en un intervalo de 100 ms.
//  Si cumple la condicion de que en el duelo el npc puede disparar realizamos el disparo despues de un tiempo
//  Este tiempo es para que el jugador pueda ganar el duelo con su tiempo de reacción normal y corriente.
game.onUpdateInterval(100, function on_update_interval() {
    
    if (npc_can_shoot) {
        timer.after(randint(350, 560), function on_after() {
            
            npc_can_shoot = false
            npc_bullet = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                                    . . . . . . . . . . . . . . . .
                                    . . . . . . . . . . . . . . . .
                                    . . . . . . . . . . . . . . . .
                                    . . . 2 2 2 2 . . . . . . . . .
                                    . . 2 1 1 1 1 2 2 . . . . . . .
                                    . . 1 1 1 1 1 1 3 3 2 2 . . . .
                                    . . 1 1 1 1 1 1 1 1 3 3 3 3 . .
                                    . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
                                    . . 1 1 1 1 1 1 1 3 2 2 3 3 . .
                                    . . 2 1 1 1 1 3 2 2 . . . . . .
                                    . . . 2 2 2 2 . . . . . . . . .
                                    . . . . . . . . . . . . . . . .
                                    . . . . . . . . . . . . . . . .
                                    . . . . . . . . . . . . . . . .
                                    . . . . . . . . . . . . . . . .
                `, npc_dueling, -50, 0)
        })
        npc_can_shoot = false
    }
    
})
//  Cuando se choca con el tile de las escaleras
//  Si cumple la condición de haber completado la batalla con mbappez entonces cargamos el nivel final_level
//  Si no la cumple no hace nada.
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function on_overlap_tile(sprite4: Sprite, location: tiles.Location) {
    if (has_completed_mbappez) {
        final_level()
    }
    
})
//  Función que configura el nivel final del juego
//  Esta función destruye sprites previos, configura el fondo, y crea los sprites de los personajes finales.
function final_level() {
    
    sprites.destroy(textSprite)
    sprites.destroyAllSpritesOfKind(SpriteKind.Npc)
    scene.setBackgroundColor(13)
    final_mom_sprite = sprites.create(img`
            . . . . . . . f f . . . . . . .
                    . . . . . f f 3 3 f f . . . . .
                    . . . . f 3 3 3 3 3 3 f . . . .
                    . . . f 5 5 3 3 3 3 5 3 f . . .
                    . . f 3 3 5 3 3 3 5 5 3 3 f . .
                    . f 3 3 3 3 3 3 3 3 3 3 3 3 f .
                    . f 3 3 e 3 3 e e 3 3 e 3 3 f .
                    . f 3 3 f f e e e e f f 3 3 f .
                    f f 3 3 f b f e e f b f 3 3 f f
                    f 3 3 3 e 1 f e e f 1 e 3 3 3 f
                    . f 3 3 f e e e e e e e 3 3 f .
                    . . f e f 5 5 d d d 5 5 e f . .
                    . . 5 e c d 5 9 9 9 5 d e 5 . .
                    . . e f b d d d 9 d d d f e . .
                    . . . f f 1 d d 1 d 1 f f . . .
                    . . . . . f f f f f f . . . . .
        `, SpriteKind.Npc)
    final_emily_sprite = sprites.create(img`
            . f f f . f f f f . f f f .
                    f f f f f c 5 5 5 f f f f f
                    f f f f b c c c c b 5 5 f f
                    f f 5 5 3 c c c c 3 c 5 f f
                    . f 3 3 c c c c c c 3 3 f .
                    . f c c c c 4 4 c c c c f .
                    . f f c c 4 4 4 4 c c f f .
                    . f f f b f 4 4 f b f f f .
                    . f f 4 1 f d d f 1 4 f f .
                    . . f f d d d d d d f f . .
                    . . e f f f 4 4 f f f e . .
                    . e 4 f b f 5 5 f b f 4 e .
                    . 5 d f 3 3 5 5 3 3 c d 5 .
                    . 4 4 f 6 6 6 6 6 6 f 4 4 .
                    . . . . f f f f f f . . . .
                    . . . . f f . . f f . . . .
        `, SpriteKind.Npc)
    //  Configurar el mapa y ubicar los sprites
    tiles.setCurrentTilemap(tilemap`
        nivel2
    `)
    tiles.placeOnTile(main_character, tiles.getTileLocation(11, 14))
    tiles.placeOnTile(final_mom_sprite, tiles.getTileLocation(6, 3))
    tiles.placeOnTile(final_emily_sprite, tiles.getTileLocation(9, 3))
}

//  Variables que se usan en el juego (Esto lo realiza solo el makecode arcade)
let fabrica : Sprite = null
let npc_dueling : Sprite = null
let can_talk = false
let npc_bullet : Sprite = null
let player_1_bullet : Sprite = null
let random_countdown_time = 0
let isDuel = false
let can_shoot = false
let two_players_button : Sprite = null
let single_player_button : Sprite = null
let has_prev_location = false
let prev_location_of_main_character : tiles.Location = null
let has_completed_football = false
let player_1_can_shoot = false
let npc_can_shoot = false
let can_main_character_shoot = false
let is_npc_duel = false
let player_2_bullet : Sprite = null
let player_2_can_shoot = false
let mom2 : Sprite = null
let final_emily_sprite : Sprite = null
let final_mom_sprite : Sprite = null
let textSprite : TextSprite = null
let enemy_guard : Sprite = null
let show_npc_football_map = false
let npc_start : Sprite = null
let myMinimap : minimap.Minimap = null
let is_map_showing = false
let showMinimap = false
let can_show_minimap = false
let cursor : Sprite = null
let has_completed_mbappez = false
let main_character : Sprite = null
let show_enemy_guard = false
let show_npc_building = false
let is_player_talking = false
let main_character_name = ""
let npc_building : Sprite = null
let is_shoot_done = false
let npc_football : Sprite = null
let main_character_bullet : Sprite = null
let is_on_map_level = false
let miniMapa : Sprite = null
let isPlayerLive = false
do_menu()
isPlayerLive = false
miniMapa = sprites.create(img`
        . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
is_on_map_level = false
