const itemBases = {}
itemBases["Iron Gauntlets"] = {
	type: "Gloves",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_armour: true, },
	armour: { ArmourBase: 6, },
	req: { str: 6, },
}
itemBases["Plated Gauntlets"] = {
	type: "Gloves",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_armour: true, },
	armour: { ArmourBase: 39, },
	req: { level: 11, str: 20, },
}
itemBases["Bronze Gauntlets"] = {
	type: "Gloves",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_armour: true, },
	armour: { ArmourBase: 77, },
	req: { level: 23, str: 36, },
}
itemBases["Steel Gauntlets"] = {
	type: "Gloves",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_armour: true, },
	armour: { ArmourBase: 116, },
	req: { level: 35, str: 52, },
}
itemBases["Antique Gauntlets"] = {
	type: "Gloves",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_armour: true, },
	armour: { ArmourBase: 129, },
	req: { level: 39, str: 58, },
}
itemBases["Ancient Gauntlets"] = {
	type: "Gloves",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_armour: true, },
	armour: { ArmourBase: 154, },
	req: { level: 47, str: 68, },
}
itemBases["Goliath Gauntlets"] = {
	type: "Gloves",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_armour: true, },
	armour: { ArmourBase: 174, },
	req: { level: 53, str: 76, },
}
itemBases["Vaal Gauntlets"] = {
	type: "Gloves",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_armour: true, },
	armour: { ArmourBase: 232, },
	req: { level: 63, str: 100, },
}
itemBases["Titan Gauntlets"] = {
	type: "Gloves",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_armour: true, },
	armour: { ArmourBase: 242, },
	req: { level: 69, str: 98, },
}
itemBases["Spiked Gloves"] = {
	type: "Gloves",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, not_for_sale: true, atlas_base_type: true, glovesatlasstr: true, str_armour: true, },
	implicit: "(16-20)% increased Melee Damage",
	armour: { ArmourBase: 220, },
	req: { level: 70, str: 95, },
}

itemBases["Rawhide Gloves"] = {
	type: "Gloves",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_armour: true, },
	armour: { EvasionBase: 13, },
	req: { dex: 9, },
}
itemBases["Goathide Gloves"] = {
	type: "Gloves",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_armour: true, },
	armour: { EvasionBase: 32, },
	req: { level: 9, dex: 17, },
}
itemBases["Deerskin Gloves"] = {
	type: "Gloves",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_armour: true, },
	armour: { EvasionBase: 71, },
	req: { level: 21, dex: 33, },
}
itemBases["Nubuck Gloves"] = {
	type: "Gloves",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_armour: true, },
	armour: { EvasionBase: 109, },
	req: { level: 33, dex: 50, },
}
itemBases["Eelskin Gloves"] = {
	type: "Gloves",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_armour: true, },
	armour: { EvasionBase: 125, },
	req: { level: 38, dex: 56, },
}
itemBases["Sharkskin Gloves"] = {
	type: "Gloves",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_armour: true, },
	armour: { EvasionBase: 148, },
	req: { level: 45, dex: 66, },
}
itemBases["Shagreen Gloves"] = {
	type: "Gloves",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_armour: true, },
	armour: { EvasionBase: 177, },
	req: { level: 54, dex: 78, },
}
itemBases["Stealth Gloves"] = {
	type: "Gloves",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_armour: true, },
	armour: { EvasionBase: 231, },
	req: { level: 62, dex: 97, },
}
itemBases["Slink Gloves"] = {
	type: "Gloves",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_armour: true, },
	armour: { EvasionBase: 242, },
	req: { level: 70, dex: 95, },
}
itemBases["Gripped Gloves"] = {
	type: "Gloves",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, not_for_sale: true, atlas_base_type: true, glovesatlasdex: true, dex_armour: true, },
	implicit: "(14-18)% increased Projectile Attack Damage",
	armour: { EvasionBase: 220, },
	req: { level: 70, dex: 95, },
}

itemBases["Wool Gloves"] = {
	type: "Gloves",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, int_armour: true, },
	armour: { EnergyShieldBase: 4, },
	req: { int: 9, },
}
itemBases["Velvet Gloves"] = {
	type: "Gloves",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, int_armour: true, },
	armour: { EnergyShieldBase: 9, },
	req: { level: 12, int: 21, },
}
itemBases["Silk Gloves"] = {
	type: "Gloves",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, int_armour: true, },
	armour: { EnergyShieldBase: 17, },
	req: { level: 25, int: 39, },
}
itemBases["Embroidered Gloves"] = {
	type: "Gloves",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, int_armour: true, },
	armour: { EnergyShieldBase: 24, },
	req: { level: 36, int: 54, },
}
itemBases["Satin Gloves"] = {
	type: "Gloves",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, int_armour: true, },
	armour: { EnergyShieldBase: 27, },
	req: { level: 41, int: 60, },
}
itemBases["Samite Gloves"] = {
	type: "Gloves",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, int_armour: true, },
	armour: { EnergyShieldBase: 30, },
	req: { level: 47, int: 68, },
}
itemBases["Conjurer Gloves"] = {
	type: "Gloves",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, int_armour: true, },
	armour: { EnergyShieldBase: 35, },
	req: { level: 55, int: 79, },
}
itemBases["Arcanist Gloves"] = {
	type: "Gloves",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, int_armour: true, },
	armour: { EnergyShieldBase: 43, },
	req: { level: 60, int: 95, },
}
itemBases["Sorcerer Gloves"] = {
	type: "Gloves",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, int_armour: true, },
	armour: { EnergyShieldBase: 47, },
	req: { level: 69, int: 97, },
}
itemBases["Fingerless Silk Gloves"] = {
	type: "Gloves",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, not_for_sale: true, atlas_base_type: true, glovesatlasint: true, int_armour: true, },
	implicit: "(12-16)% increased Spell Damage",
	armour: { EnergyShieldBase: 43, },
	req: { level: 70, int: 95, },
}

itemBases["Fishscale Gauntlets"] = {
	type: "Gloves",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_dex_armour: true, },
	armour: { ArmourBase: 9, EvasionBase: 9, },
	req: { str: 5, dex: 5, },
}
itemBases["Ironscale Gauntlets"] = {
	type: "Gloves",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_dex_armour: true, },
	armour: { ArmourBase: 28, EvasionBase: 28, },
	req: { level: 15, str: 14, dex: 14, },
}
itemBases["Bronzescale Gauntlets"] = {
	type: "Gloves",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_dex_armour: true, },
	armour: { ArmourBase: 50, EvasionBase: 50, },
	req: { level: 27, str: 22, dex: 22, },
}
itemBases["Steelscale Gauntlets"] = {
	type: "Gloves",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_dex_armour: true, },
	armour: { ArmourBase: 65, EvasionBase: 65, },
	req: { level: 36, str: 29, dex: 29, },
}
itemBases["Serpentscale Gauntlets"] = {
	type: "Gloves",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_dex_armour: true, },
	armour: { ArmourBase: 78, EvasionBase: 78, },
	req: { level: 43, str: 34, dex: 34, },
}
itemBases["Wyrmscale Gauntlets"] = {
	type: "Gloves",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_dex_armour: true, },
	armour: { ArmourBase: 88, EvasionBase: 88, },
	req: { level: 49, str: 38, dex: 38, },
}
itemBases["Hydrascale Gauntlets"] = {
	type: "Gloves",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_dex_armour: true, },
	armour: { ArmourBase: 106, EvasionBase: 106, },
	req: { level: 59, str: 45, dex: 45, },
}
itemBases["Dragonscale Gauntlets"] = {
	type: "Gloves",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_dex_armour: true, },
	armour: { ArmourBase: 121, EvasionBase: 121, },
	req: { level: 67, str: 51, dex: 51, },
}

itemBases["Chain Gloves"] = {
	type: "Gloves",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_int_armour: true, },
	armour: { ArmourBase: 14, EnergyShieldBase: 3, },
	req: { level: 7, str: 8, int: 8, },
}
itemBases["Ringmail Gloves"] = {
	type: "Gloves",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_int_armour: true, },
	armour: { ArmourBase: 35, EnergyShieldBase: 7, },
	req: { level: 19, str: 16, int: 16, },
}
itemBases["Mesh Gloves"] = {
	type: "Gloves",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_int_armour: true, },
	armour: { ArmourBase: 58, EnergyShieldBase: 12, },
	req: { level: 32, str: 26, int: 26, },
}
itemBases["Riveted Gloves"] = {
	type: "Gloves",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_int_armour: true, },
	armour: { ArmourBase: 67, EnergyShieldBase: 13, },
	req: { level: 37, str: 29, int: 29, },
}
itemBases["Zealot Gloves"] = {
	type: "Gloves",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_int_armour: true, },
	armour: { ArmourBase: 78, EnergyShieldBase: 15, },
	req: { level: 43, str: 34, int: 34, },
}
itemBases["Soldier Gloves"] = {
	type: "Gloves",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_int_armour: true, },
	armour: { ArmourBase: 92, EnergyShieldBase: 18, },
	req: { level: 51, str: 40, int: 40, },
}
itemBases["Legion Gloves"] = {
	type: "Gloves",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_int_armour: true, },
	armour: { ArmourBase: 103, EnergyShieldBase: 20, },
	req: { level: 57, str: 44, int: 44, },
}
itemBases["Crusader Gloves"] = {
	type: "Gloves",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, str_int_armour: true, },
	armour: { ArmourBase: 121, EnergyShieldBase: 24, },
	req: { level: 66, str: 51, int: 51, },
}

itemBases["Wrapped Mitts"] = {
	type: "Gloves",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_int_armour: true, },
	armour: { EvasionBase: 11, EnergyShieldBase: 3, },
	req: { level: 5, dex: 6, int: 6, },
}
itemBases["Strapped Mitts"] = {
	type: "Gloves",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_int_armour: true, },
	armour: { EvasionBase: 30, EnergyShieldBase: 6, },
	req: { level: 16, dex: 14, int: 14, },
}
itemBases["Clasped Mitts"] = {
	type: "Gloves",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_int_armour: true, },
	armour: { EvasionBase: 57, EnergyShieldBase: 11, },
	req: { level: 31, dex: 25, int: 25, },
}
itemBases["Trapper Mitts"] = {
	type: "Gloves",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_int_armour: true, },
	armour: { EvasionBase: 65, EnergyShieldBase: 13, },
	req: { level: 36, dex: 29, int: 29, },
}
itemBases["Ambush Mitts"] = {
	type: "Gloves",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_int_armour: true, },
	armour: { EvasionBase: 81, EnergyShieldBase: 16, },
	req: { level: 45, dex: 35, int: 35, },
}
itemBases["Carnal Mitts"] = {
	type: "Gloves",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_int_armour: true, },
	armour: { EvasionBase: 90, EnergyShieldBase: 18, },
	req: { level: 50, dex: 39, int: 39, },
}
itemBases["Assassin's Mitts"] = {
	type: "Gloves",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_int_armour: true, },
	armour: { EvasionBase: 104, EnergyShieldBase: 20, },
	req: { level: 58, dex: 45, int: 45, },
}
itemBases["Murder Mitts"] = {
	type: "Gloves",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, dex_int_armour: true, },
	armour: { EvasionBase: 121, EnergyShieldBase: 24, },
	req: { level: 67, dex: 51, int: 51, },
}

itemBases["Golden Bracers"] = {
	type: "Gloves",
	hidden: true,
	socketLimit: 4,
	tags: { default: true, armour: true, gloves: true, not_for_sale: true, },
	implicit: "+(20-30) to maximum Life",
	armour: { },
	req: { level: 12, },
}
module.exports = itemBases