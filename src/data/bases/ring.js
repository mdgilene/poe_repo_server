const itemBases = {}
itemBases["Iron Ring"] = {
	type: "Ring",
	tags: { default: true, ring: true, },
	implicit: "Adds 1 to 4 Physical Damage to Attacks",
	req: { },
}
itemBases["Coral Ring"] = {
	type: "Ring",
	tags: { default: true, ring: true, },
	implicit: "+(20-30) to maximum Life",
	req: { },
}
itemBases["Paua Ring"] = {
	type: "Ring",
	tags: { default: true, ring: true, },
	implicit: "+(20-25) to maximum Mana",
	req: { },
}
itemBases["Gold Ring"] = {
	type: "Ring",
	tags: { default: true, ring: true, },
	implicit: "(6-15)% increased Rarity of Items found",
	req: { level: 20, },
}
itemBases["Topaz Ring"] = {
	type: "Ring",
	tags: { default: true, ring: true, },
	implicit: "+(20-30)% to Lightning Resistance",
	req: { level: 12, },
}
itemBases["Sapphire Ring"] = {
	type: "Ring",
	tags: { default: true, ring: true, },
	implicit: "+(20-30)% to Cold Resistance",
	req: { level: 8, },
}
itemBases["Ruby Ring"] = {
	type: "Ring",
	tags: { default: true, ring: true, },
	implicit: "+(20-30)% to Fire Resistance",
	req: { level: 16, },
}
itemBases["Prismatic Ring"] = {
	type: "Ring",
	tags: { default: true, ring: true, },
	implicit: "+(8-10)% to all Elemental Resistances",
	req: { level: 30, },
}
itemBases["Moonstone Ring"] = {
	type: "Ring",
	tags: { default: true, ring: true, },
	implicit: "+(15-25) to maximum Energy Shield",
	req: { level: 20, },
}
itemBases["Amethyst Ring"] = {
	type: "Ring",
	tags: { default: true, ring: true, },
	implicit: "+(9-13)% to Chaos Resistance",
	req: { level: 30, },
}
itemBases["Diamond Ring"] = {
	type: "Ring",
	tags: { default: true, ring: true, },
	implicit: "(20-30)% increased Global Critical Strike Chance",
	req: { level: 20, },
}
itemBases["Two-Stone Ring"] = {
	type: "Ring",
	tags: { default: true, ring: true, twostonering: true, },
	implicit: "+(12-16)% to Fire and Lightning Resistances",
	req: { level: 20, },
}
itemBases["Two-Stone Ring"] = {
	type: "Ring",
	hidden: true,
	tags: { default: true, ring: true, twostonering: true, },
	implicit: "+(12-16)% to Cold and Lightning Resistances",
	req: { level: 20, },
}
itemBases["Two-Stone Ring"] = {
	type: "Ring",
	hidden: true,
	tags: { default: true, ring: true, twostonering: true, },
	implicit: "+(12-16)% to Fire and Cold Resistances",
	req: { level: 20, },
}
itemBases["Unset Ring"] = {
	type: "Ring",
	tags: { default: true, ring: true, unset_ring: true, },
	implicit: "Has 1 Socket",
	req: { level: 5, },
}
itemBases["Two-Stone Ring (Fire/Lightning)"] = {
	type: "Ring",
	tags: { default: true, ring: true, twostonering: true, },
	implicit: "+(12-16)% to Fire and Lightning Resistances",
	req: { level: 20, },
}
itemBases["Two-Stone Ring (Cold/Lightning)"] = {
	type: "Ring",
	tags: { default: true, ring: true, twostonering: true, },
	implicit: "+(12-16)% to Cold and Lightning Resistances",
	req: { level: 20, },
}
itemBases["Two-Stone Ring (Fire/Cold)"] = {
	type: "Ring",
	tags: { default: true, ring: true, twostonering: true, },
	implicit: "+(12-16)% to Fire and Cold Resistances",
	req: { level: 20, },
}
itemBases["Steel Ring"] = {
	type: "Ring",
	tags: { default: true, ring: true, not_for_sale: true, atlas_base_type: true, ringatlas1: true, },
	implicit: "Adds (3-4) to (10-14) Physical Damage to Attacks",
	req: { level: 80, },
}
itemBases["Opal Ring"] = {
	type: "Ring",
	tags: { default: true, ring: true, not_for_sale: true, atlas_base_type: true, ringatlas2: true, },
	implicit: "(15-25)% increased Elemental Damage",
	req: { level: 80, },
}

itemBases["Breach Ring"] = {
	type: "Ring",
	tags: { default: true, ring: true, not_for_sale: true, },
	implicit: "Properties are doubled while in a Breach",
	req: { },
}
itemBases["Golden Hoop"] = {
	type: "Ring",
	hidden: true,
	tags: { default: true, ring: true, not_for_sale: true, },
	implicit: "+(8-12) to all Attributes",
	req: { level: 12, },
}
itemBases["Jet Ring"] = {
	type: "Ring",
	hidden: true,
	tags: { default: true, ring: true, not_for_sale: true, },
	implicit: "(5-10)% increased Global Defences",
	req: { },
}
module.exports = itemBases