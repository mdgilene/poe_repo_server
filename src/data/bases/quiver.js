const itemBases = {}
itemBases["Cured Quiver"] = {
	type: "Quiver",
	hidden: true,
	tags: { default: true, quiver: true, },
	implicit: "Adds 2 to 4 Fire Damage to Attacks",
	req: { },
}
itemBases["Rugged Quiver"] = {
	type: "Quiver",
	hidden: true,
	tags: { default: true, quiver: true, },
	implicit: "Adds 2 to 3 Cold Damage to Attacks",
	req: { },
}
itemBases["Conductive Quiver"] = {
	type: "Quiver",
	hidden: true,
	tags: { default: true, quiver: true, },
	implicit: "Adds 1 to 5 Lightning Damage to Attacks",
	req: { },
}
itemBases["Heavy Quiver"] = {
	type: "Quiver",
	hidden: true,
	tags: { default: true, quiver: true, },
	implicit: "Adds 1 to 4 Physical Damage to Attacks",
	req: { level: 5, },
}
itemBases["Light Quiver"] = {
	type: "Quiver",
	hidden: true,
	tags: { default: true, quiver: true, },
	implicit: "+(30-40) to Dexterity",
	req: { level: 12, },
}
itemBases["Serrated Arrow Quiver"] = {
	type: "Quiver",
	tags: { default: true, quiver: true, },
	implicit: "Adds 1 to 4 Physical Damage to Bow Attacks",
	req: { level: 5, },
}
itemBases["Two-Point Arrow Quiver"] = {
	type: "Quiver",
	tags: { default: true, quiver: true, },
	implicit: "(20-30)% increased Global Accuracy Rating",
	req: { level: 4, },
}
itemBases["Sharktooth Arrow Quiver"] = {
	type: "Quiver",
	tags: { default: true, quiver: true, },
	implicit: "+(3-4) Life gained for each Enemy hit by your Attacks",
	req: { level: 10, },
}
itemBases["Blunt Arrow Quiver"] = {
	type: "Quiver",
	tags: { default: true, quiver: true, },
	implicit: "(25-35)% increased Stun Duration on Enemies",
	req: { level: 16, },
}
itemBases["Fire Arrow Quiver"] = {
	type: "Quiver",
	tags: { default: true, quiver: true, },
	implicit: "Adds 4 to 8 Fire Damage to Bow Attacks",
	req: { level: 22, },
}
itemBases["Broadhead Arrow Quiver"] = {
	type: "Quiver",
	tags: { default: true, quiver: true, },
	implicit: "Adds 6 to 12 Physical Damage to Bow Attacks",
	req: { level: 28, },
}
itemBases["Penetrating Arrow Quiver"] = {
	type: "Quiver",
	tags: { default: true, quiver: true, },
	implicit: "Arrows Pierce an additional Target",
	req: { level: 36, },
}
itemBases["Spike-Point Arrow Quiver"] = {
	type: "Quiver",
	tags: { default: true, quiver: true, },
	implicit: "(20-30)% increased Global Critical Strike Chance",
	req: { level: 45, },
}
module.exports = itemBases