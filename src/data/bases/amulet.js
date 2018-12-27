const itemBases = {}
itemBases["Paua Amulet"] = {
	type: "Amulet",
	tags: { default: true, amulet: true, },
	implicit: "(20-30)% increased Mana Regeneration Rate",
	req: { },
}
itemBases["Coral Amulet"] = {
	type: "Amulet",
	tags: { default: true, amulet: true, },
	implicit: "(2-4) Life Regenerated per second",
	req: { },
}
itemBases["Amber Amulet"] = {
	type: "Amulet",
	tags: { default: true, amulet: true, },
	implicit: "+(20-30) to Strength",
	req: { level: 5, },
}
itemBases["Jade Amulet"] = {
	type: "Amulet",
	tags: { default: true, amulet: true, },
	implicit: "+(20-30) to Dexterity",
	req: { level: 5, },
}
itemBases["Lapis Amulet"] = {
	type: "Amulet",
	tags: { default: true, amulet: true, },
	implicit: "+(20-30) to Intelligence",
	req: { level: 5, },
}
itemBases["Gold Amulet"] = {
	type: "Amulet",
	tags: { default: true, amulet: true, },
	implicit: "(12-20)% increased Rarity of Items found",
	req: { level: 8, },
}
itemBases["Onyx Amulet"] = {
	type: "Amulet",
	tags: { default: true, amulet: true, },
	implicit: "+(10-16) to all Attributes",
	req: { level: 20, },
}
itemBases["Turquoise Amulet"] = {
	type: "Amulet",
	tags: { default: true, amulet: true, },
	implicit: "+(16-24) to Dexterity and Intelligence",
	req: { level: 16, },
}
itemBases["Agate Amulet"] = {
	type: "Amulet",
	tags: { default: true, amulet: true, },
	implicit: "+(16-24) to Strength and Intelligence",
	req: { level: 16, },
}
itemBases["Citrine Amulet"] = {
	type: "Amulet",
	tags: { default: true, amulet: true, },
	implicit: "+(16-24) to Strength and Dexterity",
	req: { level: 16, },
}
itemBases["Ruby Amulet"] = {
	type: "Amulet",
	hidden: true,
	tags: { default: true, amulet: true, not_for_sale: true, },
	implicit: "+(20-30)% to Fire Resistance",
	req: { },
}
itemBases["Blue Pearl Amulet"] = {
	type: "Amulet",
	tags: { default: true, amulet: true, not_for_sale: true, atlas_base_type: true, amuletatlas1: true, },
	implicit: "(48-56)% increased Mana Regeneration Rate",
	req: { level: 77, },
}
itemBases["Marble Amulet"] = {
	type: "Amulet",
	tags: { default: true, amulet: true, not_for_sale: true, atlas_base_type: true, amuletatlas2: true, },
	implicit: "(1.2-1.6)% of Life Regenerated per second",
	req: { level: 74, },
}

itemBases["Jet Amulet"] = {
	type: "Amulet",
	hidden: true,
	tags: { default: true, amulet: true, not_for_sale: true, },
	implicit: "+(8-12)% to all Elemental Resistances",
	req: { level: 12, },
}

itemBases["Black Maw Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "Has 1 Socket",
	req: { },
}
itemBases["Bonespire Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(20-30)% increased maximum Mana",
	req: { },
}
itemBases["Ashscale Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(20-30)% increased Fire Damage",
	req: { },
}
itemBases["Lone Antler Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(20-30)% increased Lightning Damage",
	req: { },
}
itemBases["Deep One Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(20-30)% increased Cold Damage",
	req: { },
}
itemBases["Breakrib Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(20-30)% increased Global Physical Damage",
	req: { },
}
itemBases["Deadhand Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(19-31)% increased Chaos Damage",
	req: { },
}
itemBases["Undying Flesh Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "+1 to maximum number of Zombies",
	req: { },
}
itemBases["Rot Head Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(30-40)% increased Fish Bite Sensitivity",
	req: { },
}
itemBases["Mandible Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(6-10)% increased Attack and Cast Speed",
	req: { },
}
itemBases["Chrysalis Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(20-30)% increased Spell Damage",
	req: { },
}
itemBases["Writhing Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(20-30)% increased Attack Damage",
	req: { },
}
itemBases["Hexclaw Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(40-50)% increased Global Critical Strike Chance",
	req: { },
}
itemBases["Primal Skull Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "2% of Life Regenerated per second",
	req: { },
}
itemBases["Wereclaw Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "+(24-36)% to Global Critical Strike Multiplier",
	req: { },
}
itemBases["Splitnewt Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(4-6)% chance to Freeze, Shock and Ignite",
	req: { },
}
itemBases["Clutching Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(15-25)% increased Global Defences",
	req: { },
}
itemBases["Avian Twins Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "50% of Fire Damage from Hits taken as Cold Damage",
	req: { },
}
itemBases["Avian Twins Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "50% of Fire Damage from Hits taken as Lightning Damage",
	req: { },
}
itemBases["Avian Twins Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "50% of Cold Damage from Hits taken as Fire Damage",
	req: { },
}
itemBases["Avian Twins Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "50% of Cold Damage from Hits taken as Lightning Damage",
	req: { },
}
itemBases["Avian Twins Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "50% of Lightning Damage from Hits taken as Cold Damage",
	req: { },
}
itemBases["Avian Twins Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "50% of Lightning Damage from Hits taken as Fire Damage",
	req: { },
}
itemBases["Fangjaw Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(8-12)% increased maximum Life",
	req: { },
}
itemBases["Horned Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "Projectiles Pierce 2 additional Targets",
	req: { },
}
itemBases["Spinefuse Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(6-10)% increased Quantity of Items found",
	req: { },
}
itemBases["Three Rat Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(12-16)% increased Attributes",
	req: { },
}
itemBases["Monkey Twins Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(5-8)% increased Area of Effect",
	req: { },
}
itemBases["Longtooth Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(4-6)% additional Physical Damage Reduction",
	req: { },
}
itemBases["Rotfeather Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "(25-35)% increased Damage",
	req: { },
}
itemBases["Monkey Paw Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "10% chance to gain a Power Charge on Kill",
	req: { },
}
itemBases["Monkey Paw Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "10% chance to gain a Frenzy Charge on Kill",
	req: { },
}
itemBases["Monkey Paw Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "10% chance to gain an Endurance Charge on Kill",
	req: { },
}
itemBases["Three Hands Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, talisman: true, },
	implicit: "Gain (6-12)% of Physical Damage as Extra Damage of a random Element",
	req: { },
}
itemBases["Greatwolf Talisman"] = {
	type: "Amulet",
	subType: "Talisman",
	tags: { default: true, amulet: true, },
	req: { },
}
module.exports = itemBases