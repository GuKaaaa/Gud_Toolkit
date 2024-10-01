StartupEvents.registry('sound_event', event => {
    event.create("gud_toolkit:father_of_all_glitches")
})
  


StartupEvents.registry('item', event => {
    event.create("gud_toolkit:father_of_all_glitches_disc", "music_disc")
        .song("gud_toolkit:father_of_all_glitches", 193)
        .analogOutput(1)
        .texture("gud_toolkit:item/father_of_all_glitches_disc")
        .displayName("Music Disc: Father of All Glitches")
        .maxStackSize(1)
        .group("kubejs.gud_toolkit")
})