const itemBases = {}
itemBases["Iron Greaves"] = {
	type: "Boots",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_armour: true, },
	armour: { ArmourBase: 6, },
	req: { str: 8, },
}
itemBases["Steel Greaves"] = {
	type: "Boots",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_armour: true, },
	armour: { ArmourBase: 32, },
	req: { level: 9, str: 21, },
}
itemBases["Plated Greaves"] = {
	type: "Boots",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_armour: true, },
	armour: { ArmourBase: 77, },
	req: { level: 23, str: 44, },
}
itemBases["Reinforced Greaves"] = {
	type: "Boots",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_armour: true, },
	armour: { ArmourBase: 109, },
	req: { level: 33, str: 60, },
}
itemBases["Antique Greaves"] = {
	type: "Boots",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_armour: true, },
	armour: { ArmourBase: 122, },
	req: { level: 37, str: 67, },
}
itemBases["Ancient Greaves"] = {
	type: "Boots",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_armour: true, },
	armour: { ArmourBase: 151, },
	req: { level: 46, str: 82, },
}
itemBases["Goliath Greaves"] = {
	type: "Boots",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_armour: true, },
	armour: { ArmourBase: 177, },
	req: { level: 54, str: 95, },
}
itemBases["Vaal Greaves"] = {
	type: "Boots",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_armour: true, },
	armour: { ArmourBase: 220, },
	req: { level: 62, str: 117, },
}
itemBases["Titan Greaves"] = {
	type: "Boots",
	subType: "Armour",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_armour: true, },
	armour: { ArmourBase: 241, },
	req: { level: 68, str: 120, },
}

itemBases["Rawhide Boots"] = {
	type: "Boots",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_armour: true, },
	armour: { EvasionBase: 13, },
	req: { dex: 11, },
}
itemBases["Goathide Boots"] = {
	type: "Boots",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_armour: true, },
	armour: { EvasionBase: 42, },
	req: { level: 12, dex: 26, },
}
itemBases["Deerskin Boots"] = {
	type: "Boots",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_armour: true, },
	armour: { EvasionBase: 74, },
	req: { level: 22, dex: 42, },
}
itemBases["Nubuck Boots"] = {
	type: "Boots",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_armour: true, },
	armour: { EvasionBase: 113, },
	req: { level: 34, dex: 62, },
}
itemBases["Eelskin Boots"] = {
	type: "Boots",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_armour: true, },
	armour: { EvasionBase: 129, },
	req: { level: 39, dex: 70, },
}
itemBases["Sharkskin Boots"] = {
	type: "Boots",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_armour: true, },
	armour: { EvasionBase: 145, },
	req: { level: 44, dex: 79, },
}
itemBases["Shagreen Boots"] = {
	type: "Boots",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_armour: true, },
	armour: { EvasionBase: 180, },
	req: { level: 55, dex: 97, },
}
itemBases["Stealth Boots"] = {
	type: "Boots",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_armour: true, },
	armour: { EvasionBase: 220, },
	req: { level: 62, dex: 117, },
}
itemBases["Slink Boots"] = {
	type: "Boots",
	subType: "Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_armour: true, },
	armour: { EvasionBase: 246, },
	req: { level: 69, dex: 120, },
}

itemBases["Wool Shoes"] = {
	type: "Boots",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, int_armour: true, },
	armour: { EnergyShieldBase: 4, },
	req: { int: 11, },
}
itemBases["Velvet Slippers"] = {
	type: "Boots",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, int_armour: true, },
	armour: { EnergyShieldBase: 8, },
	req: { level: 9, int: 21, },
}
itemBases["Silk Slippers"] = {
	type: "Boots",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, int_armour: true, },
	armour: { EnergyShieldBase: 15, },
	req: { level: 22, int: 42, },
}
itemBases["Scholar Boots"] = {
	type: "Boots",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, int_armour: true, },
	armour: { EnergyShieldBase: 21, },
	req: { level: 32, int: 59, },
}
itemBases["Satin Slippers"] = {
	type: "Boots",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, int_armour: true, },
	armour: { EnergyShieldBase: 25, },
	req: { level: 38, int: 69, },
}
itemBases["Samite Slippers"] = {
	type: "Boots",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, int_armour: true, },
	armour: { EnergyShieldBase: 29, },
	req: { level: 44, int: 79, },
}
itemBases["Conjurer Boots"] = {
	type: "Boots",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, int_armour: true, },
	armour: { EnergyShieldBase: 34, },
	req: { level: 53, int: 94, },
}
itemBases["Arcanist Slippers"] = {
	type: "Boots",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, int_armour: true, },
	armour: { EnergyShieldBase: 45, },
	req: { level: 61, int: 119, },
}
itemBases["Sorcerer Boots"] = {
	type: "Boots",
	subType: "Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, int_armour: true, },
	armour: { EnergyShieldBase: 49, },
	req: { level: 67, int: 123, },
}

itemBases["Leatherscale Boots"] = {
	type: "Boots",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_dex_armour: true, },
	armour: { ArmourBase: 12, EvasionBase: 12, },
	req: { level: 6, str: 9, dex: 9, },
}
itemBases["Ironscale Boots"] = {
	type: "Boots",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_dex_armour: true, },
	armour: { ArmourBase: 34, EvasionBase: 34, },
	req: { level: 18, str: 19, dex: 19, },
}
itemBases["Bronzescale Boots"] = {
	type: "Boots",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_dex_armour: true, },
	armour: { ArmourBase: 55, EvasionBase: 55, },
	req: { level: 30, str: 30, dex: 30, },
}
itemBases["Steelscale Boots"] = {
	type: "Boots",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_dex_armour: true, },
	armour: { ArmourBase: 65, EvasionBase: 65, },
	req: { level: 36, str: 35, dex: 35, },
}
itemBases["Serpentscale Boots"] = {
	type: "Boots",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_dex_armour: true, },
	armour: { ArmourBase: 76, EvasionBase: 76, },
	req: { level: 42, str: 40, dex: 40, },
}
itemBases["Wyrmscale Boots"] = {
	type: "Boots",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_dex_armour: true, },
	armour: { ArmourBase: 92, EvasionBase: 92, },
	req: { level: 51, str: 48, dex: 48, },
}
itemBases["Hydrascale Boots"] = {
	type: "Boots",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_dex_armour: true, },
	armour: { ArmourBase: 106, EvasionBase: 106, },
	req: { level: 59, str: 56, dex: 56, },
}
itemBases["Dragonscale Boots"] = {
	type: "Boots",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_dex_armour: true, },
	armour: { ArmourBase: 121, EvasionBase: 121, },
	req: { level: 65, str: 62, dex: 62, },
}
itemBases["Two-Toned Boots (Armour/Evasion)"] = {
	type: "Boots",
	subType: "Armour/Evasion",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, not_for_sale: true, atlas_base_type: true, bootsatlas2: true, str_dex_armour: true, },
	implicit: "+(15-20)% to Fire and Cold Resistances",
	armour: { ArmourBase: 126, EvasionBase: 126, },
	req: { level: 70, str: 62, dex: 62, },
}

itemBases["Chain Boots"] = {
	type: "Boots",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_int_armour: true, },
	armour: { ArmourBase: 11, EnergyShieldBase: 3, },
	req: { level: 5, str: 8, int: 8, },
}
itemBases["Ringmail Boots"] = {
	type: "Boots",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_int_armour: true, },
	armour: { ArmourBase: 25, EnergyShieldBase: 5, },
	req: { level: 13, str: 15, int: 15, },
}
itemBases["Mesh Boots"] = {
	type: "Boots",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_int_armour: true, },
	armour: { ArmourBase: 51, EnergyShieldBase: 10, },
	req: { level: 28, str: 28, int: 28, },
}
itemBases["Riveted Boots"] = {
	type: "Boots",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_int_armour: true, },
	armour: { ArmourBase: 65, EnergyShieldBase: 13, },
	req: { level: 36, str: 35, int: 35, },
}
itemBases["Zealot Boots"] = {
	type: "Boots",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_int_armour: true, },
	armour: { ArmourBase: 73, EnergyShieldBase: 14, },
	req: { level: 40, str: 38, int: 38, },
}
itemBases["Soldier Boots"] = {
	type: "Boots",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_int_armour: true, },
	armour: { ArmourBase: 88, EnergyShieldBase: 17, },
	req: { level: 49, str: 47, int: 47, },
}
itemBases["Legion Boots"] = {
	type: "Boots",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_int_armour: true, },
	armour: { ArmourBase: 104, EnergyShieldBase: 20, },
	req: { level: 58, str: 54, int: 54, },
}
itemBases["Crusader Boots"] = {
	type: "Boots",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, str_int_armour: true, },
	armour: { ArmourBase: 121, EnergyShieldBase: 24, },
	req: { level: 64, str: 62, int: 62, },
}
itemBases["Two-Toned Boots (Armour/Energy Shield)"] = {
	type: "Boots",
	subType: "Armour/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, not_for_sale: true, atlas_base_type: true, bootsatlas3: true, str_int_armour: true, },
	implicit: "+(15-20)% to Fire and Lightning Resistances",
	armour: { ArmourBase: 126, EnergyShieldBase: 24, },
	req: { level: 70, str: 62, int: 62, },
}

itemBases["Wrapped Boots"] = {
	type: "Boots",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_int_armour: true, },
	armour: { EvasionBase: 12, EnergyShieldBase: 3, },
	req: { level: 6, dex: 9, int: 9, },
}
itemBases["Strapped Boots"] = {
	type: "Boots",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_int_armour: true, },
	armour: { EvasionBase: 30, EnergyShieldBase: 6, },
	req: { level: 16, dex: 18, int: 18, },
}
itemBases["Clasped Boots"] = {
	type: "Boots",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_int_armour: true, },
	armour: { EvasionBase: 50, EnergyShieldBase: 10, },
	req: { level: 27, dex: 27, int: 27, },
}
itemBases["Shackled Boots"] = {
	type: "Boots",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_int_armour: true, },
	armour: { EvasionBase: 62, EnergyShieldBase: 12, },
	req: { level: 34, dex: 34, int: 34, },
}
itemBases["Trapper Boots"] = {
	type: "Boots",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_int_armour: true, },
	armour: { EvasionBase: 74, EnergyShieldBase: 15, },
	req: { level: 41, dex: 40, int: 40, },
}
itemBases["Ambush Boots"] = {
	type: "Boots",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_int_armour: true, },
	armour: { EvasionBase: 85, EnergyShieldBase: 17, },
	req: { level: 47, dex: 45, int: 45, },
}
itemBases["Carnal Boots"] = {
	type: "Boots",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_int_armour: true, },
	armour: { EvasionBase: 99, EnergyShieldBase: 19, },
	req: { level: 55, dex: 52, int: 52, },
}
itemBases["Assassin's Boots"] = {
	type: "Boots",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_int_armour: true, },
	armour: { EvasionBase: 121, EnergyShieldBase: 24, },
	req: { level: 63, dex: 62, int: 62, },
}
itemBases["Murder Boots"] = {
	type: "Boots",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, dex_int_armour: true, },
	armour: { EvasionBase: 185, EnergyShieldBase: 17, },
	req: { level: 69, dex: 82, int: 42, },
}
itemBases["Two-Toned Boots (Evasion/Energy Shield)"] = {
	type: "Boots",
	subType: "Evasion/Energy Shield",
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, not_for_sale: true, atlas_base_type: true, bootsatlas1: true, dex_int_armour: true, },
	implicit: "+(15-20)% to Cold and Lightning Resistances",
	armour: { EvasionBase: 126, EnergyShieldBase: 24, },
	req: { level: 70, dex: 62, int: 62, },
}

itemBases["Golden Caligae"] = {
	type: "Boots",
	hidden: true,
	socketLimit: 4,
	tags: { default: true, armour: true, boots: true, not_for_sale: true, },
	implicit: "+(8-16)% to all Elemental Resistances",
	armour: { },
	req: { level: 12, },
}
module.exports = itemBases