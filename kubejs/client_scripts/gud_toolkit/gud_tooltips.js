ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('gud_toolkit:recitative', (item, advanced, text) => {
        if (tooltip.shift && tooltip.ctrl) {
            text.add([Text.gray({ "translate": "gud_toolkit.tooltips.recita_aria.1" })]);
            text.add([Text.gray({ "translate": "gud_toolkit.tooltips.recita_aria.2" })]);
        } else {
            text.add([Text.gray({ "translate": "gud_toolkit.tooltips.aria" })]);
        }
    }),
    tooltip.addAdvanced('gud_toolkit:aria', (item, advanced, text) => {
        if (tooltip.shift && tooltip.ctrl) {
            text.add([Text.gray({ "translate": "gud_toolkit.tooltips.recita_aria.1" })]);
            text.add([Text.gray({ "translate": "gud_toolkit.tooltips.recita_aria.2" })]);
        } else {
            text.add([Text.gray({ "translate": "gud_toolkit.tooltips.aria" })]);
        }
    }),
    tooltip.addAdvanced('gud_toolkit:hateful_soul', (item, advanced, text) => {
        if (tooltip.ctrl) {
            text.add([Text.darkRed({ "translate": "gud_toolkit.tooltips.hateful_soul" }).bold()])}
    }),
    tooltip.addAdvanced('gud_toolkit:great_arcane_ingot', (item, advanced, text) => {
        text.add(Text.gray({ "translate": "gud_toolkit.tooltips.great_arcane_ingot" }));
    }),
    tooltip.addAdvanced('gud_toolkit:cast_burner', (item, advanced, text) => {
        text.add(Text.gray({ "translate": "gud_toolkit.tooltips.cast_burner" }));
    }),
    tooltip.addAdvanced('gud_toolkit:cursed_blade', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add([Text.gray({ "translate": "gud_toolkit.tooltips.cursed_blade.2" }), Text.gold({ "translate": "gud_toolkit.tooltips.cursed_blade.3" }), Text.gray({ "translate": "gud_toolkit.tooltips.cursed_blade.4" })]);
        } else {
            text.add([Text.gray({ "translate": "gud_toolkit.tooltips.cursed_blade.1" })]);
        }
    }),
    tooltip.addAdvanced('gud_toolkit:index_blade', (item, advanced, text) => {
        text.add(Text.gray({ "translate": "gud_toolkit.tooltips.index_blade" }));
    }),
    tooltip.addAdvanced('gud_toolkit:mana_developer', (item, advanced, text) => {
        text.add(Text.gray({ "translate": "gud_toolkit.tooltips.mana_developer" }));
    })
    tooltip.addAdvanced('gud_toolkit:etched_charm', (item, advanced, text) => {
        if (tooltip.ctrl) {
            text.add([Text.gray({ "translate": "gud_toolkit.tooltips.etched_charm.4" }).italic()]);
            text.add([Text.gray({ "translate": "gud_toolkit.tooltips.etched_charm.5" }).italic()]);
        } else {
            text.add([Text.gray({ "translate": "gud_toolkit.tooltips.etched_charm.1" }).italic(), Text.aqua({ "translate": "gud_toolkit.tooltips.etched_charm.2" }).italic(), Text.gray({ "translate": "gud_toolkit.tooltips.etched_charm.3" }).italic()]);
        }
    })
    tooltip.addAdvanced('gud_toolkit:ethereal_cape', (item, advanced, text) => {
        text.add(Text.darkPurple({ "translate": "gud_toolkit.tooltips.ethereal_cape" }));
    })
    tooltip.addAdvanced('gud_toolkit:sharp_shadow', (item, advanced, text) => {
        text.add(Text.darkPurple({ "translate": "gud_toolkit.tooltips.sharp_shadow.1" }));
        text.add(Text.darkPurple({ "translate": "gud_toolkit.tooltips.sharp_shadow.2" }));
    })
    tooltip.addAdvanced('gud_toolkit:purgatory_ring', (item, advanced, text) => {
        text.add(Text.darkPurple({ "translate": "gud_toolkit.tooltips.purgatory_ring.1" }));
        text.add(Text.darkPurple({ "translate": "gud_toolkit.tooltips.purgatory_ring.2" }));
    })
    tooltip.addAdvanced('gud_toolkit:vanity_crown', (item, advanced, text) => {
        text.add(Text.blue({ "translate": "gud_toolkit.tooltips.vanity_crown.1" }));
        text.add(Text.blue({ "translate": "gud_toolkit.tooltips.vanity_crown.2" }));
        text.add(Text.blue({ "translate": "gud_toolkit.tooltips.vanity_crown.3" }));
    })
    tooltip.addAdvanced('gud_toolkit:dead_luck', (item, advanced, text) => {
        text.add(Text.aqua({ "translate": "gud_toolkit.tooltips.dead_luck.1" }).italic());
        if (tooltip.shift) {
            text.add([Text.gold({ "translate": "gud_toolkit.tooltips.dead_luck.2" })]);
        } else {
            text.add([Text.white({ "translate": "gud_toolkit.tooltips.dead_luck.3" })]);
        };
        if (tooltip.ctrl) {
            text.add([Text.darkGray({ "translate": "gud_toolkit.tooltips.dead_luck.4" })])}
    })

})
