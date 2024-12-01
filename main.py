@namespace
class SpriteKind:
    twoPlayersButton = SpriteKind.create()
    storyButton = SpriteKind.create()
    mom = SpriteKind.create()
    losa = SpriteKind.create()
    Complete = SpriteKind.create()
    Building = SpriteKind.create()
    Npc = SpriteKind.create()
    drawable_map_npc = SpriteKind.create()
    npc_duel = SpriteKind.create()

def on_on_overlap(sprite22, otherSprite22):
    global is_shoot_done
    # Si el sprite de tipo bala es la bala del otro jugador y el sprite con el que colisiona es el del primer jugador entonces gana el segundo jugador else el otro
    if otherSprite22 == main_character_bullet and npc_football == sprite22 and not (is_shoot_done):
        is_shoot_done = True
        sprites.destroy(otherSprite22, effects.fire, 500)
        npc_football.set_image(img("""
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
        """))
        game.splash("You win")
        story.sprite_say_text(npc_football, "X.X")
        pause(1000)
        story.sprite_say_text(npc_football, "Aggh ffs")
sprites.on_overlap(SpriteKind.npc_duel, SpriteKind.projectile, on_on_overlap)

def on_up_pressed():
    if isPlayerLive and not (isTalking):
        animation.run_image_animation(main_character,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            500,
            True)
    elif isPlayerLive:
        animation.stop_animation(animation.AnimationTypes.ALL, main_character)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap2(sprite, otherSprite):
    global mainName
    cursor.say_text("Press A to play")
    if controller.A.is_pressed():
        if mainName.is_empty() or mainName == "undefined":
            mainName = game.ask_for_string("Username", 7)
            if mainName.is_empty() or mainName == "":
                mainName = "Kyrie"
        storyMode()
sprites.on_overlap(SpriteKind.player, SpriteKind.storyButton, on_on_overlap2)

def on_b_pressed():
    global can_show_minimap, showMinimap, isTalking, myMinimap
    if is_on_map_level:
        can_show_minimap = not (can_show_minimap)
        if can_show_minimap:
            showMinimap = True
            isTalking = True
            myMinimap = minimap.minimap(MinimapScale.EIGHTH, 2, 15)
            minimap.include_sprite(myMinimap, main_character, MinimapSpriteScale.OCTUPLE)
            minimap.include_sprite(myMinimap, npc_start, MinimapSpriteScale.QUADRUPLE)
            if show_npc_football_map:
                minimap.include_sprite(myMinimap, npc_football, MinimapSpriteScale.QUADRUPLE)
            elif show_npc_building:
                minimap.include_sprite(myMinimap, npc_building, MinimapSpriteScale.QUADRUPLE)
            miniMapa.set_image(minimap.get_image(myMinimap))
            miniMapa.set_position(scene.camera_property(CameraProperty.X),
                scene.camera_property(CameraProperty.Y))
            miniMapa.z = 999
        else:
            isTalking = False
            miniMapa.set_image(img("""
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
            """))
            showMinimap = False
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_on_overlap3(sprite222, otherSprite222):
    global isTalking
    game.show_long_text("Talk with mom", DialogLayout.BOTTOM)
    isTalking = True
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
        isTalking = False
        mapLevel()
    elif story.check_last_answer("Stay"):
        isTalking = False
        pause(1000)
sprites.on_overlap(SpriteKind.player, SpriteKind.mom, on_on_overlap3)

def on_a_pressed():
    global main_character_bullet
    if is_npc_duel:
        main_character_bullet = sprites.create_projectile_from_sprite(img("""
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
            """),
            main_character,
            50,
            0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_player2_button_a_pressed():
    global player_2_bullet, player_2_can_shoot
    if player_2_can_shoot:
        player_2_bullet = sprites.create_projectile_from_sprite(img("""
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
            """),
            mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)),
            -50,
            0)
        player_2_can_shoot = False
controller.player2.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player2_button_a_pressed)

def on_left_pressed():
    if isPlayerLive and not (isTalking):
        animation.run_image_animation(main_character,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            500,
            True)
    elif isPlayerLive:
        animation.stop_animation(animation.AnimationTypes.ALL, main_character)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def instantiate_npcs():
    global npc_football, show_npc_football_map, npc_building, show_npc_building, npc_start
    npc_football = sprites.create(img("""
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
        """),
        SpriteKind.Npc)
    show_npc_football_map = False
    tiles.place_on_tile(npc_football, tiles.get_tile_location(39, 8))
    npc_building = sprites.create(img("""
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
        """),
        SpriteKind.Npc)
    show_npc_building = False
    tiles.place_on_tile(npc_building, tiles.get_tile_location(9, 46))
    npc_start = sprites.create(img("""
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
        """),
        SpriteKind.Npc)
    tiles.place_on_tile(npc_start, tiles.get_tile_location(6, 7))

def on_countdown_end():
    global textSprite, can_main_character_shoot, player_1_can_shoot, player_2_can_shoot
    textSprite = textsprite.create("YA", 15, 2)
    textSprite.set_scale(4, ScaleAnchor.MIDDLE)
    textSprite.set_position(76, 40)
    if is_npc_duel:
        can_main_character_shoot = True
    player_1_can_shoot = True
    player_2_can_shoot = True
info.on_countdown_end(on_countdown_end)

def on_on_overlap4(sprite223, otherSprite223):
    global is_shoot_done
    if otherSprite223 == player_2_bullet and mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)) == sprite223 and not (is_shoot_done):
        is_shoot_done = True
        sprites.destroy(otherSprite223, effects.fire, 500)
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).set_image(img("""
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
        """))
        game.splash("Player 2 Wins!")
        story.sprite_say_text(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
            "X.X")
        pause(1000)
        story.sprite_say_text(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
            "Aggh ffs")
        ask_wanna_play_again()
    elif otherSprite223 == player_1_bullet and mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)) == sprite223 and not (is_shoot_done):
        is_shoot_done = True
        sprites.destroy(otherSprite223, effects.fire, 500)
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).set_image(img("""
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
        """))
        game.splash("Player 1 Wins!")
        story.sprite_say_text(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)),
            "X.X")
        pause(1000)
        story.sprite_say_text(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)),
            "Aggh ffs")
        ask_wanna_play_again()
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap4)

def on_right_pressed():
    if isPlayerLive and not (isTalking):
        animation.run_image_animation(main_character,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            500,
            True)
    elif isPlayerLive:
        animation.stop_animation(animation.AnimationTypes.ALL, main_character)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap5(sprite2, otherSprite2):
    global isTalking, show_npc_football_map
    if not (showMinimap) and is_on_map_level:
        main_character.say_text("A to Talk", 500, False)
        if not (showMinimap) and controller.A.is_pressed():
            isTalking = True
            if otherSprite2 == npc_start and not (showMinimap):
                story.print_character_text("Hola, sé lo que ha pasado con tu madre...", "Emily")
                story.print_character_text("Vi a unos chavales con camisetas de futbol", "Emily")
                story.print_character_text("Oh, muchas gracias por la información, sabes donde puedo encontrar a alguien de ellos?",
                    mainName)
                story.print_character_text("Uno debería de estar en el campo de futbol con una Camiseta del Farça, no me gusta mucho ese equipo pero menos me gusta ese mezquino",
                    "Emily")
                story.print_character_text("De verdad, te lo agradezco", mainName)
                story.print_character_text("Te he dibujado en el mapa de tu bolsillo al maleante para que lo encuentres",
                    "Emily")
                show_npc_football_map = True
                story.print_dialog("Presiona B para ver el mapa!", 80, 90, 50, 150)
                isTalking = False
            elif otherSprite2 == npc_football and not (showMinimap):
                story.print_character_text("¡¡Eres uno de los que irrumpió y robo a mi madre!!",
                    mainName)
                story.print_character_text("Que hablas, yo estoy del chill jugando fuchibol", "Pedro")
                story.print_character_text("No te hagas el tonto y devuélvelo!!", mainName)
                npc_duel2(npc_football)
sprites.on_overlap(SpriteKind.player, SpriteKind.Npc, on_on_overlap5)

def storyModeDestroy():
    sprites.destroy(cursor)
    sprites.destroy(single_player_button)
    sprites.destroy(two_players_button)

def on_down_pressed():
    if isPlayerLive and not (isTalking):
        animation.run_image_animation(main_character,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            500,
            True)
    elif isPlayerLive:
        animation.stop_animation(animation.AnimationTypes.ALL, main_character)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def TwoPlayersScreen():
    global is_shoot_done, canShoot, player_1_can_shoot, player_2_can_shoot, isDuel, randomTime
    is_shoot_done = False
    canShoot = False
    player_1_can_shoot = False
    player_2_can_shoot = False
    isDuel = True
    randomTime = randint(1, 10)
    info.start_countdown(randomTime)
    scene.set_background_image(img("""
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
    """))
    sprites.destroy(two_players_button)
    sprites.destroy(single_player_button)
    sprites.destroy(cursor)
    mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.ONE),
        sprites.create(img("""
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
            """),
            SpriteKind.player))
    mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.TWO),
        sprites.create(img("""
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
            """),
            SpriteKind.player))
    mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).set_position(40, 90)
    mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).set_position(120, 90)
def ask_wanna_play_again():
    story.show_player_choices("Go Menu", "Replay")
    if story.check_last_answer("Go Menu"):
        destroy1v1()
        doMenu()
    else:
        destroy1v1()
        TwoPlayersScreen()

def on_player1_button_a_pressed():
    global player_1_bullet, player_1_can_shoot, main_character_bullet, can_main_character_shoot
    if player_1_can_shoot and not (is_npc_duel):
        player_1_bullet = sprites.create_projectile_from_sprite(img("""
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
            """),
            mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
            50,
            0)
        player_1_can_shoot = False
    elif can_main_character_shoot and is_npc_duel:
        main_character_bullet = sprites.create_projectile_from_sprite(img("""
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
            """),
            main_character,
            50,
            0)
        can_main_character_shoot = False
controller.player1.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player1_button_a_pressed)

def storyMode():
    global mom2, isTalking
    storyModeDestroy()
    createPlayer()
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
    tiles.place_on_tile(main_character, tiles.get_tile_location(7, 12))
    mom2 = sprites.create(img("""
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
        """),
        SpriteKind.mom)
    tiles.place_on_tile(mom2, tiles.get_tile_location(15, 2))
    isTalking = False
def doMenu():
    global cursor, two_players_button, single_player_button
    scene.set_background_image(img("""
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
    """))
    cursor = sprites.create(img("""
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
                    .22c2222222222222bcc4222
                    .22222bbb2bbbbb222bb4222
                    .222bbbbb2bbbbbbb2222222
                    .22222222222222222222222
                    .222222222ff22222f222ddd
                    .222222222ff222ff222222d
                    .222222222fffff222222222
                    .22ffffff222222fffff2222
                    ...f11111f2222f11111f22.
        """),
        SpriteKind.storyButton)
    single_player_button.set_scale(1.5, ScaleAnchor.BOTTOM_LEFT)
    single_player_button.set_position(130, 90)
def mapLevel():
    global can_show_minimap, can_talk, is_on_map_level, showMinimap
    destroyLevelOne()
    can_show_minimap = False
    can_talk = True
    is_on_map_level = True
    showMinimap = False
    scene.set_background_color(7)
    tiles.set_current_tilemap(tilemap("""
        level4
    """))
    tileUtil.create_sprites_on_tiles(assets.tile("""
            myTile13
        """),
        img("""
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
        """),
        SpriteKind.Building)
    tileUtil.create_sprites_on_tiles(assets.tile("""
            myTile34
        """),
        img("""
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
        """),
        SpriteKind.Building)
    tiles.place_on_tile(main_character, tiles.get_tile_location(1, 9))
    scene.camera_follow_sprite(main_character)
    instantiate_npcs()
def createPlayer():
    global isPlayerLive, main_character
    isPlayerLive = True
    main_character = sprites.create(img("""
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
        """),
        SpriteKind.player)
    main_character.z = 100
    controller.move_sprite(main_character)
    scene.camera_follow_sprite(main_character)
def npc_duel2(npc: Sprite):
    global is_npc_duel, can_main_character_shoot, randomTime, isTalking, is_on_map_level
    scene.set_background_image(img("""
        777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                dd1111111111111111111111111177777777777111111111111111111111111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777
                1d77d77d77d777d77d77dd77d11177777777777177777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777
                dddddddddddddddddddddddd111177777777771177777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777
                177d77d77ddd7dd7d77dd77d111177777777771777777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777
                17d777777d7dd777777d77dd111177777777711777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777
                dddddddddddddddddddddd111d1177777777717777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777
                1d77dd77d77d77dd77d77dd1171177777777117777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777
                1d77d777777d77d777d77d11d71177777777177777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777
                ddddd77dd7dd7dd7ddd7dd11771177777771177777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777
                dd7dd7d77ddd7dd7d777d11d771177777771777777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777
                d7dd77d77d77ddd7d77dd11d7d1177777711777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777
                17d777777d77d7777d7d1177d71177777717777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777
                dddddddddddddddddddd1177d71177777117777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
                1dd7dd7dddddddddddd11ddddd1177771177777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
                1d77d77d777d77d77dd11777d71177771177777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777
                1dddddddddddddddd111d7d77d1177711777777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777
                d77d77d77ddd7dd7dd117ddd771177711777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777
                17d777777d77d7777117777dd71177117777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777
                ddddddddddddddddd11dd77ddd1177117777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777
                1d777d77dd7d777d11d777ddd71171177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777
                1d77d77dd77d77dd117d7dd7dd1111177777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777
                d777d77d77d777d11777dd77d71111777777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777
                dddddddddddddd11177dd77d771111777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777
                1ddddddddddddd117dd77d7d7d1117777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777
                17d777777d77dd1177dd77dd771117777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777
                ddddddddddd7d117dd77d7d7d71177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777
                1d77dd77d77dd11dd7d7d77ddd1177777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777
                d111d11d11d1111111111111111777777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777
                dddddddddddd117777777777711777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777
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
                177117777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777111
                171117777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117
                171177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771117
                111177777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177
                111777777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
                111777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777
                117777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777111777
                117777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777
                177777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771117777
                777777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777
                777777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177777
                777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777
                777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777111777777
                777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777
                777777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771117777777
                777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777
                777777777777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177777777
                777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777
                777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777111777777777
                777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777
                777777777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771117777777777
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
                777777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777777777777
                777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777777777777
                777777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777777777777
                777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777777777777
                777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777777777777
                777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777777777777
                777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777777777777777
                777777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777777777777777
                777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777777777777777
                777777777777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777777777777777
                777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777777777777777
                777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777777777777777
                777777777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777777777777777777
    """))
    tiles.set_current_tilemap(tilemap("""
        nivel1
    """))
    is_npc_duel = True
    can_main_character_shoot = False
    npc.set_kind(SpriteKind.npc_duel)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Npc)
    randomTime = randint(1, 10)
    info.start_countdown(randomTime)
    isTalking = True
    is_on_map_level = False
    npc.set_position(120, 90)
    main_character.set_position(40, 90)
def escena_fabrica():
    global fabrica
    fabrica = sprites.create(img("""
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
        """),
        SpriteKind.player)
def destroy1v1():
    sprites.destroy_all_sprites_of_kind(SpriteKind.projectile)
    carnival.show_timer(False)
    sprites.destroy(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)))
    sprites.destroy(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)))
    info.stop_countdown()
    sprites.destroy(textSprite)

def on_on_overlap6(sprite3, otherSprite3):
    cursor.say_text("Press A to play")
    if controller.A.is_pressed():
        TwoPlayersScreen()
sprites.on_overlap(SpriteKind.player,
    SpriteKind.twoPlayersButton,
    on_on_overlap6)

def destroyLevelOne():
    tiles.destroy_sprites_of_kind(SpriteKind.mom)
    tiles.destroy_sprites_of_kind(SpriteKind.Building)
    tiles.destroy_sprites_of_kind(SpriteKind.Complete)
fabrica: Sprite = None
can_talk = False
randomTime = 0
isDuel = False
canShoot = False
two_players_button: Sprite = None
single_player_button: Sprite = None
player_1_bullet: Sprite = None
player_1_can_shoot = False
can_main_character_shoot = False
textSprite: TextSprite = None
player_2_bullet: Sprite = None
player_2_can_shoot = False
is_npc_duel = False
mom2: Sprite = None
npc_building: Sprite = None
show_npc_building = False
show_npc_football_map = False
npc_start: Sprite = None
myMinimap: minimap.Minimap = None
showMinimap = False
can_show_minimap = False
mainName = ""
cursor: Sprite = None
main_character: Sprite = None
isTalking = False
is_shoot_done = False
npc_football: Sprite = None
main_character_bullet: Sprite = None
is_on_map_level = False
miniMapa: Sprite = None
isPlayerLive = False
doMenu()
isPlayerLive = False
miniMapa = sprites.create(img("""
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
    """),
    SpriteKind.player)
is_on_map_level = False

def on_on_update():
    if isTalking:
        controller.move_sprite(main_character, 0, 0)
    else:
        controller.move_sprite(main_character, 100, 100)
game.on_update(on_on_update)
