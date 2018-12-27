const itemBases = {}
itemBases["Nailed Fist"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "+3 Life gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 4, PhysicalMax: 11, CritChanceBase: 6.2, AttackRateBase: 1.6, },
	req: { dex: 11, int: 11, },
}
itemBases["Sharktooth Claw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "+6 Life gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 7, PhysicalMax: 18, CritChanceBase: 6.5, AttackRateBase: 1.4, },
	req: { level: 7, dex: 14, int: 20, },
}
itemBases["Awl"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "+7 Life gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 7, PhysicalMax: 24, CritChanceBase: 6.3, AttackRateBase: 1.5, },
	req: { level: 12, dex: 25, int: 25, },
}
itemBases["Cat's Paw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "+8 Life gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 12, PhysicalMax: 22, CritChanceBase: 6, AttackRateBase: 1.6, },
	req: { level: 17, dex: 39, int: 27, },
}
itemBases["Blinder"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "+12 Life gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 12, PhysicalMax: 32, CritChanceBase: 6.3, AttackRateBase: 1.5, },
	req: { level: 22, dex: 41, int: 41, },
}
itemBases["Timeworn Claw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "+19 Life gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 16, PhysicalMax: 43, CritChanceBase: 6.5, AttackRateBase: 1.3, },
	req: { level: 26, dex: 39, int: 56, },
}
itemBases["Sparkling Claw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "+15 Life gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 14, PhysicalMax: 38, CritChanceBase: 6, AttackRateBase: 1.6, },
	req: { level: 30, dex: 64, int: 44, },
}
itemBases["Fright Claw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "+20 Life gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 12, PhysicalMax: 46, CritChanceBase: 6.3, AttackRateBase: 1.5, },
	req: { level: 34, dex: 61, int: 61, },
}
itemBases["Double Claw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, not_for_sale: true, maraketh: true, },
	implicit: "+15 Life gained for each Enemy hit by Attacks\n+6 Mana gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 15, PhysicalMax: 44, CritChanceBase: 6.3, AttackRateBase: 1.5, },
	req: { level: 36, dex: 67, int: 67, },
}
itemBases["Thresher Claw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "+25 Life gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 20, PhysicalMax: 53, CritChanceBase: 6.5, AttackRateBase: 1.3, },
	req: { level: 37, dex: 53, int: 77, },
}
itemBases["Gouger"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "+24 Life gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 15, PhysicalMax: 51, CritChanceBase: 6.3, AttackRateBase: 1.5, },
	req: { level: 40, dex: 70, int: 70, },
}
itemBases["Tiger's Paw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "1.6% of Physical Attack Damage Leeched as Life",
	weapon: { PhysicalMin: 23, PhysicalMax: 43, CritChanceBase: 6, AttackRateBase: 1.6, },
	req: { level: 43, dex: 88, int: 61, },
}
itemBases["Gut Ripper"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "+44 Life gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 20, PhysicalMax: 53, CritChanceBase: 6.3, AttackRateBase: 1.5, },
	req: { level: 46, dex: 80, int: 80, },
}
itemBases["Prehistoric Claw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "2% of Physical Attack Damage Leeched as Life",
	weapon: { PhysicalMin: 26, PhysicalMax: 68, CritChanceBase: 6.5, AttackRateBase: 1.3, },
	req: { level: 49, dex: 69, int: 100, },
}
itemBases["Noble Claw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "+40 Life gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 21, PhysicalMax: 56, CritChanceBase: 6, AttackRateBase: 1.6, },
	req: { level: 52, dex: 105, int: 73, },
}
itemBases["Eagle Claw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "2% of Physical Attack Damage Leeched as Life",
	weapon: { PhysicalMin: 17, PhysicalMax: 69, CritChanceBase: 6.3, AttackRateBase: 1.5, },
	req: { level: 55, dex: 94, int: 94, },
}
itemBases["Twin Claw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, not_for_sale: true, maraketh: true, },
	implicit: "+28 Life gained for each Enemy hit by Attacks\n+10 Mana gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 21, PhysicalMax: 64, CritChanceBase: 6.3, AttackRateBase: 1.5, },
	req: { level: 57, dex: 103, int: 103, },
}
itemBases["Great White Claw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "+46 Life gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 30, PhysicalMax: 78, CritChanceBase: 6.5, AttackRateBase: 1.3, },
	req: { level: 58, dex: 81, int: 117, },
}
itemBases["Throat Stabber"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "+40 Life gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 21, PhysicalMax: 73, CritChanceBase: 6.3, AttackRateBase: 1.5, },
	req: { level: 60, dex: 113, int: 113, },
}
itemBases["Hellion's Paw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "1.6% of Physical Attack Damage Leeched as Life",
	weapon: { PhysicalMin: 29, PhysicalMax: 55, CritChanceBase: 6, AttackRateBase: 1.6, },
	req: { level: 62, dex: 131, int: 95, },
}
itemBases["Eye Gouger"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "+50 Life gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 26, PhysicalMax: 68, CritChanceBase: 6.3, AttackRateBase: 1.5, },
	req: { level: 64, dex: 113, int: 113, },
}
itemBases["Vaal Claw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "2% of Physical Attack Damage Leeched as Life",
	weapon: { PhysicalMin: 29, PhysicalMax: 76, CritChanceBase: 6.5, AttackRateBase: 1.3, },
	req: { level: 66, dex: 95, int: 131, },
}
itemBases["Imperial Claw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "+46 Life gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 25, PhysicalMax: 65, CritChanceBase: 6, AttackRateBase: 1.6, },
	req: { level: 68, dex: 131, int: 95, },
}
itemBases["Terror Claw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, },
	implicit: "2% of Physical Attack Damage Leeched as Life",
	weapon: { PhysicalMin: 18, PhysicalMax: 71, CritChanceBase: 6.3, AttackRateBase: 1.5, },
	req: { level: 70, dex: 113, int: 113, },
}
itemBases["Gemini Claw"] = {
	type: "Claw",
	socketLimit: 3,
	tags: { default: true, weapon: true, onehand: true, claw: true, one_hand_weapon: true, not_for_sale: true, maraketh: true, },
	implicit: "+38 Life gained for each Enemy hit by Attacks\n+14 Mana gained for each Enemy hit by Attacks",
	weapon: { PhysicalMin: 23, PhysicalMax: 68, CritChanceBase: 6.3, AttackRateBase: 1.5, },
	req: { level: 72, dex: 121, int: 121, },
}
module.exports = itemBases