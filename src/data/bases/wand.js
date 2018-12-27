const itemBases = {}
itemBases["Driftwood Wand"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, },
	implicit: "(8-12)% increased Spell Damage",
	weapon: { PhysicalMin: 4, PhysicalMax: 8, CritChanceBase: 7, AttackRateBase: 1.4, },
	req: { int: 14, },
}
itemBases["Goat's Horn"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, },
	implicit: "(10-14)% increased Spell Damage",
	weapon: { PhysicalMin: 7, PhysicalMax: 13, CritChanceBase: 7, AttackRateBase: 1.2, },
	req: { level: 6, int: 29, },
}
itemBases["Carved Wand"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, },
	implicit: "(11-15)% increased Spell Damage",
	weapon: { PhysicalMin: 8, PhysicalMax: 14, CritChanceBase: 7, AttackRateBase: 1.5, },
	req: { level: 12, int: 47, },
}
itemBases["Quartz Wand"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, },
	implicit: "(18-22)% increased Spell Damage",
	weapon: { PhysicalMin: 12, PhysicalMax: 22, CritChanceBase: 7, AttackRateBase: 1.3, },
	req: { level: 18, int: 65, },
}
itemBases["Spiraled Wand"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, },
	implicit: "(15-19)% increased Spell Damage",
	weapon: { PhysicalMin: 10, PhysicalMax: 31, CritChanceBase: 7, AttackRateBase: 1.3, },
	req: { level: 24, int: 83, },
}
itemBases["Sage Wand"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, },
	implicit: "(17-21)% increased Spell Damage",
	weapon: { PhysicalMin: 19, PhysicalMax: 35, CritChanceBase: 8, AttackRateBase: 1.2, },
	req: { level: 30, int: 119, },
}
itemBases["Pagan Wand"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, not_for_sale: true, maraketh: true, },
	implicit: "10% increased Cast Speed",
	weapon: { PhysicalMin: 18, PhysicalMax: 33, CritChanceBase: 7, AttackRateBase: 1.35, },
	req: { level: 34, int: 118, },
}
itemBases["Faun's Horn"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, },
	implicit: "(20-24)% increased Spell Damage",
	weapon: { PhysicalMin: 22, PhysicalMax: 40, CritChanceBase: 7, AttackRateBase: 1.2, },
	req: { level: 35, int: 116, },
}
itemBases["Engraved Wand"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, },
	implicit: "(22-26)% increased Spell Damage",
	weapon: { PhysicalMin: 17, PhysicalMax: 32, CritChanceBase: 7, AttackRateBase: 1.5, },
	req: { level: 40, int: 131, },
}
itemBases["Crystal Wand"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, },
	implicit: "(29-33)% increased Spell Damage",
	weapon: { PhysicalMin: 23, PhysicalMax: 43, CritChanceBase: 7, AttackRateBase: 1.3, },
	req: { level: 45, int: 146, },
}
itemBases["Serpent Wand"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, },
	implicit: "(26-30)% increased Spell Damage",
	weapon: { PhysicalMin: 18, PhysicalMax: 53, CritChanceBase: 7, AttackRateBase: 1.3, },
	req: { level: 49, int: 158, },
}
itemBases["Omen Wand"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, },
	implicit: "(27-31)% increased Spell Damage",
	weapon: { PhysicalMin: 27, PhysicalMax: 50, CritChanceBase: 8, AttackRateBase: 1.2, },
	req: { level: 53, int: 200, },
}
itemBases["Heathen Wand"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, not_for_sale: true, maraketh: true, },
	implicit: "10% increased Cast Speed",
	weapon: { PhysicalMin: 26, PhysicalMax: 48, CritChanceBase: 7, AttackRateBase: 1.35, },
	req: { level: 55, int: 184, },
}
itemBases["Demon's Horn"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, },
	implicit: "(31-35)% increased Spell Damage",
	weapon: { PhysicalMin: 32, PhysicalMax: 59, CritChanceBase: 7, AttackRateBase: 1.2, },
	req: { level: 56, int: 179, },
}
itemBases["Imbued Wand"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, },
	implicit: "(33-37)% increased Spell Damage",
	weapon: { PhysicalMin: 24, PhysicalMax: 44, CritChanceBase: 7, AttackRateBase: 1.5, },
	req: { level: 59, int: 188, },
}
itemBases["Opal Wand"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, },
	implicit: "(38-42)% increased Spell Damage",
	weapon: { PhysicalMin: 29, PhysicalMax: 54, CritChanceBase: 7, AttackRateBase: 1.3, },
	req: { level: 62, int: 212, },
}
itemBases["Tornado Wand"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, },
	implicit: "(35-39)% increased Spell Damage",
	weapon: { PhysicalMin: 21, PhysicalMax: 62, CritChanceBase: 7, AttackRateBase: 1.3, },
	req: { level: 65, int: 212, },
}
itemBases["Prophecy Wand"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, },
	implicit: "(36-40)% increased Spell Damage",
	weapon: { PhysicalMin: 29, PhysicalMax: 54, CritChanceBase: 8, AttackRateBase: 1.2, },
	req: { level: 68, int: 245, },
}
itemBases["Profane Wand"] = {
	type: "Wand",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, wand: true, ranged: true, one_hand_weapon: true, not_for_sale: true, maraketh: true, },
	implicit: "14% increased Cast Speed",
	weapon: { PhysicalMin: 27, PhysicalMax: 51, CritChanceBase: 7, AttackRateBase: 1.35, },
	req: { level: 70, int: 237, },
}
module.exports = itemBases