const itemBases = {}
itemBases["Glass Shank"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "30% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 6, PhysicalMax: 10, CritChanceBase: 6, AttackRateBase: 1.5, },
	req: { dex: 9, int: 6, },
}
itemBases["Skinning Knife"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "30% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 5, PhysicalMax: 19, CritChanceBase: 6, AttackRateBase: 1.3, },
	req: { level: 5, dex: 16, int: 11, },
}
itemBases["Carving Knife"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "30% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 3, PhysicalMax: 27, CritChanceBase: 6.3, AttackRateBase: 1.4, },
	req: { level: 10, dex: 18, int: 26, },
}
itemBases["Stiletto"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "30% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 7, PhysicalMax: 27, CritChanceBase: 6.1, AttackRateBase: 1.5, },
	req: { level: 15, dex: 30, int: 30, },
}
itemBases["Boot Knife"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "30% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 9, PhysicalMax: 35, CritChanceBase: 6.3, AttackRateBase: 1.4, },
	req: { level: 20, dex: 31, int: 45, },
}
itemBases["Copper Kris"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "50% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 12, PhysicalMax: 46, CritChanceBase: 6.5, AttackRateBase: 1.2, },
	req: { level: 24, dex: 28, int: 60, },
}
itemBases["Skean"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "30% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 11, PhysicalMax: 43, CritChanceBase: 6.3, AttackRateBase: 1.45, },
	req: { level: 28, dex: 42, int: 60, },
}
itemBases["Imp Dagger"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "40% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 15, PhysicalMax: 59, CritChanceBase: 6.5, AttackRateBase: 1.2, },
	req: { level: 32, dex: 36, int: 78, },
}
itemBases["Prong Dagger"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, not_for_sale: true, maraketh: true, },
	implicit: "4% Chance to Block Attack Damage",
	weapon: { PhysicalMin: 14, PhysicalMax: 57, CritChanceBase: 6.2, AttackRateBase: 1.3, },
	req: { level: 36, dex: 55, int: 77, },
}
itemBases["Flaying Knife"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "30% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 16, PhysicalMax: 64, CritChanceBase: 6, AttackRateBase: 1.2, },
	req: { level: 35, dex: 73, int: 51, },
}
itemBases["Butcher Knife"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "30% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 7, PhysicalMax: 59, CritChanceBase: 6.3, AttackRateBase: 1.4, },
	req: { level: 38, dex: 55, int: 79, },
}
itemBases["Poignard"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "30% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 13, PhysicalMax: 52, CritChanceBase: 6.1, AttackRateBase: 1.5, },
	req: { level: 41, dex: 72, int: 72, },
}
itemBases["Boot Blade"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "30% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 15, PhysicalMax: 59, CritChanceBase: 6.3, AttackRateBase: 1.4, },
	req: { level: 44, dex: 63, int: 90, },
}
itemBases["Golden Kris"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "50% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 19, PhysicalMax: 75, CritChanceBase: 6.5, AttackRateBase: 1.2, },
	req: { level: 47, dex: 51, int: 110, },
}
itemBases["Royal Skean"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "30% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 16, PhysicalMax: 64, CritChanceBase: 6.3, AttackRateBase: 1.45, },
	req: { level: 50, dex: 71, int: 102, },
}
itemBases["Fiend Dagger"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "40% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 22, PhysicalMax: 87, CritChanceBase: 6.5, AttackRateBase: 1.2, },
	req: { level: 53, dex: 58, int: 123, },
}
itemBases["Trisula"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, not_for_sale: true, maraketh: true, },
	implicit: "4% Chance to Block Attack Damage",
	weapon: { PhysicalMin: 21, PhysicalMax: 83, CritChanceBase: 6.2, AttackRateBase: 1.3, },
	req: { level: 55, dex: 89, int: 106, },
}
itemBases["Gutting Knife"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "30% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 24, PhysicalMax: 97, CritChanceBase: 6, AttackRateBase: 1.2, },
	req: { level: 56, dex: 113, int: 78, },
}
itemBases["Slaughter Knife"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "30% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 10, PhysicalMax: 86, CritChanceBase: 6.3, AttackRateBase: 1.4, },
	req: { level: 58, dex: 81, int: 117, },
}
itemBases["Ambusher"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "30% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 19, PhysicalMax: 74, CritChanceBase: 6.1, AttackRateBase: 1.5, },
	req: { level: 60, dex: 113, int: 113, },
}
itemBases["Ezomyte Dagger"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "30% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 20, PhysicalMax: 79, CritChanceBase: 6.3, AttackRateBase: 1.4, },
	req: { level: 62, dex: 95, int: 131, },
}
itemBases["Platinum Kris"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "50% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 24, PhysicalMax: 95, CritChanceBase: 6.5, AttackRateBase: 1.2, },
	req: { level: 64, dex: 76, int: 149, },
}
itemBases["Imperial Skean"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "30% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 19, PhysicalMax: 76, CritChanceBase: 6.3, AttackRateBase: 1.45, },
	req: { level: 66, dex: 95, int: 131, },
}
itemBases["Demon Dagger"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, },
	implicit: "40% increased Global Critical Strike Chance",
	weapon: { PhysicalMin: 24, PhysicalMax: 97, CritChanceBase: 6.5, AttackRateBase: 1.2, },
	req: { level: 68, dex: 76, int: 149, },
}
itemBases["Sai"] = {
	type: "Dagger",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, dagger: true, one_hand_weapon: true, not_for_sale: true, maraketh: true, },
	implicit: "6% Chance to Block Attack Damage",
	weapon: { PhysicalMin: 23, PhysicalMax: 90, CritChanceBase: 6.2, AttackRateBase: 1.3, },
	req: { level: 70, dex: 121, int: 121, },
}
module.exports = itemBases