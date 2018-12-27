const itemBases = {}
itemBases["Rustic Sash"] = {
	type: "Belt",
	tags: { default: true, belt: true, },
	implicit: "(12-24)% increased Global Physical Damage",
	req: { },
}
itemBases["Chain Belt"] = {
	type: "Belt",
	tags: { default: true, belt: true, },
	implicit: "+(9-20) to maximum Energy Shield",
	req: { },
}
itemBases["Leather Belt"] = {
	type: "Belt",
	tags: { default: true, belt: true, },
	implicit: "+(25-40) to maximum Life",
	req: { level: 8, },
}
itemBases["Heavy Belt"] = {
	type: "Belt",
	tags: { default: true, belt: true, },
	implicit: "+(25-35) to Strength",
	req: { level: 8, },
}
itemBases["Cloth Belt"] = {
	type: "Belt",
	tags: { default: true, belt: true, },
	implicit: "(15-25)% increased Stun and Block Recovery",
	req: { level: 16, },
}
itemBases["Studded Belt"] = {
	type: "Belt",
	tags: { default: true, belt: true, },
	implicit: "(20-30)% increased Stun Duration on Enemies",
	req: { level: 16, },
}
itemBases["Vanguard Belt"] = {
	type: "Belt",
	tags: { default: true, belt: true, not_for_sale: true, atlas_base_type: true, beltatlas1: true, },
	implicit: "+(260-320) to Armour and Evasion Rating",
	req: { level: 78, },
}
itemBases["Crystal Belt"] = {
	type: "Belt",
	tags: { default: true, belt: true, not_for_sale: true, atlas_base_type: true, beltatlas2: true, },
	implicit: "+(60-80) to maximum Energy Shield",
	req: { level: 79, },
}
itemBases["Stygian Vise"] = {
	type: "Belt",
	tags: { default: true, belt: true, not_for_sale: true, },
	implicit: "Has 1 Abyssal Socket",
	req: { },
}

itemBases["Golden Obi"] = {
	type: "Belt",
	hidden: true,
	tags: { default: true, belt: true, not_for_sale: true, },
	implicit: "(20-30)% increased Rarity of Items found",
	req: { },
}
module.exports = itemBases