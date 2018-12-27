const itemBases = {}
itemBases["Plate Vest"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	armour: { ArmourBase: 19, MovementPenalty: 3, },
	req: { str: 12, },
}
itemBases["Chestplate"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	armour: { ArmourBase: 68, MovementPenalty: 5, },
	req: { level: 6, str: 25, },
}
itemBases["Copper Plate"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	armour: { ArmourBase: 176, MovementPenalty: 5, },
	req: { level: 17, str: 53, },
}
itemBases["War Plate"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	armour: { ArmourBase: 216, MovementPenalty: 5, },
	req: { level: 21, str: 63, },
}
itemBases["Full Plate"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	armour: { ArmourBase: 284, MovementPenalty: 5, },
	req: { level: 28, str: 81, },
}
itemBases["Arena Plate"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	armour: { ArmourBase: 324, MovementPenalty: 5, },
	req: { level: 32, str: 91, },
}
itemBases["Lordly Plate"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	armour: { ArmourBase: 353, MovementPenalty: 5, },
	req: { level: 35, str: 99, },
}
itemBases["Bronze Plate"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	armour: { ArmourBase: 373, MovementPenalty: 5, },
	req: { level: 37, str: 104, },
}
itemBases["Battle Plate"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	armour: { ArmourBase: 412, MovementPenalty: 5, },
	req: { level: 41, str: 114, },
}
itemBases["Sun Plate"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	armour: { ArmourBase: 451, MovementPenalty: 5, },
	req: { level: 45, str: 124, },
}
itemBases["Colosseum Plate"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	armour: { ArmourBase: 491, MovementPenalty: 5, },
	req: { level: 49, str: 134, },
}
itemBases["Majestic Plate"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	armour: { ArmourBase: 530, MovementPenalty: 5, },
	req: { level: 53, str: 144, },
}
itemBases["Golden Plate"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	armour: { ArmourBase: 559, MovementPenalty: 5, },
	req: { level: 56, str: 152, },
}
itemBases["Crusader Plate"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	armour: { ArmourBase: 601, MovementPenalty: 5, },
	req: { level: 59, str: 160, },
}
itemBases["Astral Plate"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	implicit: "+(8-12)% to all Elemental Resistances",
	armour: { ArmourBase: 711, MovementPenalty: 5, },
	req: { level: 62, str: 180, },
}
itemBases["Gladiator Plate"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	armour: { ArmourBase: 738, MovementPenalty: 5, },
	req: { level: 65, str: 177, },
}
itemBases["Glorious Plate"] = {
	type: "Body Armour",
	subType: "Armour",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_armour: true, },
	armour: { ArmourBase: 776, },
	req: { level: 68, str: 191, },
}

itemBases["Shabby Jerkin"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	armour: { EvasionBase: 29, MovementPenalty: 3, },
	req: { dex: 14, },
}
itemBases["Strapped Leather"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	armour: { EvasionBase: 98, MovementPenalty: 3, },
	req: { level: 9, dex: 32, },
}
itemBases["Buckskin Tunic"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	armour: { EvasionBase: 176, MovementPenalty: 3, },
	req: { level: 17, dex: 53, },
}
itemBases["Wild Leather"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	armour: { EvasionBase: 255, MovementPenalty: 3, },
	req: { level: 25, dex: 73, },
}
itemBases["Full Leather"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	armour: { EvasionBase: 284, MovementPenalty: 3, },
	req: { level: 28, dex: 81, },
}
itemBases["Sun Leather"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	armour: { EvasionBase: 324, MovementPenalty: 3, },
	req: { level: 32, dex: 91, },
}
itemBases["Thief's Garb"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	armour: { EvasionBase: 353, MovementPenalty: 3, },
	req: { level: 35, dex: 99, },
}
itemBases["Eelskin Tunic"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	armour: { EvasionBase: 373, MovementPenalty: 3, },
	req: { level: 37, dex: 104, },
}
itemBases["Frontier Leather"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	armour: { EvasionBase: 412, MovementPenalty: 3, },
	req: { level: 41, dex: 114, },
}
itemBases["Glorious Leather"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	armour: { EvasionBase: 451, MovementPenalty: 3, },
	req: { level: 45, dex: 124, },
}
itemBases["Coronal Leather"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	armour: { EvasionBase: 491, MovementPenalty: 3, },
	req: { level: 49, dex: 134, },
}
itemBases["Cutthroat's Garb"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	armour: { EvasionBase: 530, MovementPenalty: 3, },
	req: { level: 53, dex: 144, },
}
itemBases["Sharkskin Tunic"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	armour: { EvasionBase: 559, MovementPenalty: 3, },
	req: { level: 56, dex: 152, },
}
itemBases["Destiny Leather"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	armour: { EvasionBase: 601, MovementPenalty: 3, },
	req: { level: 59, dex: 160, },
}
itemBases["Exquisite Leather"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	armour: { EvasionBase: 704, MovementPenalty: 3, },
	req: { level: 62, dex: 170, },
}
itemBases["Zodiac Leather"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	armour: { EvasionBase: 854, MovementPenalty: 3, },
	req: { level: 65, dex: 197, },
}
itemBases["Assassin's Garb"] = {
	type: "Body Armour",
	subType: "Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_armour: true, },
	implicit: "3% increased Movement Speed",
	armour: { EvasionBase: 737, },
	req: { level: 68, dex: 183, },
}

itemBases["Simple Robe"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	armour: { EnergyShieldBase: 12, MovementPenalty: 3, },
	req: { int: 17, },
}
itemBases["Silken Vest"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	armour: { EnergyShieldBase: 27, MovementPenalty: 3, },
	req: { level: 11, int: 37, },
}
itemBases["Scholar's Robe"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	armour: { EnergyShieldBase: 39, MovementPenalty: 3, },
	req: { level: 18, int: 55, },
}
itemBases["Silken Garb"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	armour: { EnergyShieldBase: 52, MovementPenalty: 3, },
	req: { level: 25, int: 73, },
}
itemBases["Mage's Vestment"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	armour: { EnergyShieldBase: 58, MovementPenalty: 3, },
	req: { level: 28, int: 81, },
}
itemBases["Silk Robe"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	armour: { EnergyShieldBase: 65, MovementPenalty: 3, },
	req: { level: 32, int: 91, },
}
itemBases["Cabalist Regalia"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	armour: { EnergyShieldBase: 71, MovementPenalty: 3, },
	req: { level: 35, int: 99, },
}
itemBases["Sage's Robe"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	armour: { EnergyShieldBase: 74, MovementPenalty: 3, },
	req: { level: 37, int: 104, },
}
itemBases["Silken Wrap"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	armour: { EnergyShieldBase: 82, MovementPenalty: 3, },
	req: { level: 41, int: 114, },
}
itemBases["Conjurer's Vestment"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	armour: { EnergyShieldBase: 89, MovementPenalty: 3, },
	req: { level: 45, int: 124, },
}
itemBases["Spidersilk Robe"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	armour: { EnergyShieldBase: 96, MovementPenalty: 3, },
	req: { level: 49, int: 134, },
}
itemBases["Destroyer Regalia"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	armour: { EnergyShieldBase: 104, MovementPenalty: 3, },
	req: { level: 53, int: 144, },
}
itemBases["Savant's Robe"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	armour: { EnergyShieldBase: 109, MovementPenalty: 3, },
	req: { level: 56, int: 152, },
}
itemBases["Necromancer Silks"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	armour: { EnergyShieldBase: 117, MovementPenalty: 3, },
	req: { level: 59, int: 160, },
}
itemBases["Occultist's Vestment"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	implicit: "(3-10)% increased Spell Damage",
	armour: { EnergyShieldBase: 130, MovementPenalty: 3, },
	req: { level: 62, int: 180, },
}
itemBases["Widowsilk Robe"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	armour: { EnergyShieldBase: 150, MovementPenalty: 3, },
	req: { level: 65, int: 187, },
}
itemBases["Vaal Regalia"] = {
	type: "Body Armour",
	subType: "Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, int_armour: true, },
	armour: { EnergyShieldBase: 163, MovementPenalty: 3, },
	req: { level: 68, int: 194, },
}

itemBases["Scale Vest"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 27, EvasionBase: 27, MovementPenalty: 3, },
	req: { str: 10, dex: 10, },
}
itemBases["Light Brigandine"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 48, EvasionBase: 48, MovementPenalty: 3, },
	req: { level: 8, str: 16, dex: 16, },
}
itemBases["Scale Doublet"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 97, EvasionBase: 97, MovementPenalty: 3, },
	req: { level: 17, str: 28, dex: 28, },
}
itemBases["Infantry Brigandine"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 119, EvasionBase: 119, MovementPenalty: 3, },
	req: { level: 21, str: 34, dex: 34, },
}
itemBases["Full Scale Armour"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 156, EvasionBase: 156, MovementPenalty: 3, },
	req: { level: 28, str: 43, dex: 43, },
}
itemBases["Soldier's Brigandine"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 178, EvasionBase: 178, MovementPenalty: 3, },
	req: { level: 32, str: 48, dex: 48, },
}
itemBases["Field Lamellar"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 194, EvasionBase: 194, MovementPenalty: 3, },
	req: { level: 35, str: 53, dex: 53, },
}
itemBases["Wyrmscale Doublet"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 210, EvasionBase: 210, MovementPenalty: 3, },
	req: { level: 38, str: 57, dex: 57, },
}
itemBases["Hussar Brigandine"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 232, EvasionBase: 232, MovementPenalty: 3, },
	req: { level: 42, str: 62, dex: 62, },
}
itemBases["Full Wyrmscale"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 254, EvasionBase: 254, MovementPenalty: 3, },
	req: { level: 46, str: 68, dex: 68, },
}
itemBases["Commander's Brigandine"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 275, EvasionBase: 275, MovementPenalty: 3, },
	req: { level: 50, str: 73, dex: 73, },
}
itemBases["Battle Lamellar"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 297, EvasionBase: 297, MovementPenalty: 3, },
	req: { level: 54, str: 79, dex: 79, },
}
itemBases["Dragonscale Doublet"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 313, EvasionBase: 313, MovementPenalty: 3, },
	req: { level: 57, str: 83, dex: 83, },
}
itemBases["Desert Brigandine"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 376, EvasionBase: 376, MovementPenalty: 3, },
	req: { level: 60, str: 96, dex: 96, },
}
itemBases["Full Dragonscale"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 470, EvasionBase: 373, MovementPenalty: 3, },
	req: { level: 63, str: 115, dex: 94, },
}
itemBases["General's Brigandine"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 415, EvasionBase: 415, MovementPenalty: 3, },
	req: { level: 66, str: 103, dex: 103, },
}
itemBases["Triumphant Lamellar"] = {
	type: "Body Armour",
	subType: "Armour/Evasion",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_armour: true, },
	armour: { ArmourBase: 380, EvasionBase: 477, MovementPenalty: 3, },
	req: { level: 69, str: 95, dex: 116, },
}

itemBases["Chainmail Vest"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 27, EnergyShieldBase: 8, MovementPenalty: 5, },
	req: { str: 10, int: 10, },
}
itemBases["Chainmail Tunic"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 48, EnergyShieldBase: 12, MovementPenalty: 5, },
	req: { level: 8, str: 16, int: 16, },
}
itemBases["Ringmail Coat"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 97, EnergyShieldBase: 21, MovementPenalty: 5, },
	req: { level: 17, str: 28, int: 28, },
}
itemBases["Chainmail Doublet"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 119, EnergyShieldBase: 25, MovementPenalty: 5, },
	req: { level: 21, str: 34, int: 34, },
}
itemBases["Full Ringmail"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 156, EnergyShieldBase: 32, MovementPenalty: 5, },
	req: { level: 28, str: 43, int: 43, },
}
itemBases["Full Chainmail"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 178, EnergyShieldBase: 36, MovementPenalty: 5, },
	req: { level: 32, str: 48, int: 48, },
}
itemBases["Holy Chainmail"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 194, EnergyShieldBase: 39, MovementPenalty: 5, },
	req: { level: 35, str: 53, int: 53, },
}
itemBases["Latticed Ringmail"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 216, EnergyShieldBase: 43, MovementPenalty: 5, },
	req: { level: 39, str: 59, int: 59, },
}
itemBases["Crusader Chainmail"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 237, EnergyShieldBase: 47, MovementPenalty: 5, },
	req: { level: 43, str: 64, int: 64, },
}
itemBases["Ornate Ringmail"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 259, EnergyShieldBase: 51, MovementPenalty: 5, },
	req: { level: 47, str: 69, int: 69, },
}
itemBases["Chain Hauberk"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 281, EnergyShieldBase: 55, MovementPenalty: 5, },
	req: { level: 51, str: 75, int: 75, },
}
itemBases["Devout Chainmail"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 302, EnergyShieldBase: 59, MovementPenalty: 5, },
	req: { level: 55, str: 80, int: 80, },
}
itemBases["Loricated Ringmail"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 325, EnergyShieldBase: 63, MovementPenalty: 5, },
	req: { level: 58, str: 84, int: 84, },
}
itemBases["Conquest Chainmail"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 387, EnergyShieldBase: 75, MovementPenalty: 5, },
	req: { level: 61, str: 96, int: 96, },
}
itemBases["Elegant Ringmail"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 377, EnergyShieldBase: 87, MovementPenalty: 5, },
	req: { level: 64, str: 90, int: 105, },
}
itemBases["Saint's Hauberk"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 443, EnergyShieldBase: 73, MovementPenalty: 5, },
	req: { level: 67, str: 109, int: 94, },
}
itemBases["Saintly Chainmail"] = {
	type: "Body Armour",
	subType: "Armour/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_int_armour: true, },
	armour: { ArmourBase: 401, EnergyShieldBase: 91, MovementPenalty: 5, },
	req: { level: 70, str: 99, int: 115, },
}

itemBases["Padded Vest"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	armour: { EvasionBase: 27, EnergyShieldBase: 8, MovementPenalty: 3, },
	req: { dex: 10, int: 10, },
}
itemBases["Oiled Vest"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	armour: { EvasionBase: 54, EnergyShieldBase: 13, MovementPenalty: 3, },
	req: { level: 9, dex: 17, int: 17, },
}
itemBases["Padded Jacket"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	armour: { EvasionBase: 102, EnergyShieldBase: 22, MovementPenalty: 3, },
	req: { level: 18, dex: 30, int: 30, },
}
itemBases["Oiled Coat"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	armour: { EvasionBase: 124, EnergyShieldBase: 26, MovementPenalty: 3, },
	req: { level: 22, dex: 35, int: 35, },
}
itemBases["Scarlet Raiment"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	armour: { EvasionBase: 156, EnergyShieldBase: 32, MovementPenalty: 3, },
	req: { level: 28, dex: 43, int: 43, },
}
itemBases["Waxed Garb"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	armour: { EvasionBase: 178, EnergyShieldBase: 36, MovementPenalty: 3, },
	req: { level: 32, dex: 48, int: 48, },
}
itemBases["Bone Armour"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	armour: { EvasionBase: 194, EnergyShieldBase: 39, MovementPenalty: 3, },
	req: { level: 35, dex: 53, int: 53, },
}
itemBases["Quilted Jacket"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	armour: { EvasionBase: 221, EnergyShieldBase: 44, MovementPenalty: 3, },
	req: { level: 40, dex: 60, int: 60, },
}
itemBases["Sleek Coat"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	armour: { EvasionBase: 243, EnergyShieldBase: 48, MovementPenalty: 3, },
	req: { level: 44, dex: 65, int: 65, },
}
itemBases["Crimson Raiment"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	armour: { EvasionBase: 264, EnergyShieldBase: 52, MovementPenalty: 3, },
	req: { level: 48, dex: 71, int: 71, },
}
itemBases["Lacquered Garb"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	armour: { EvasionBase: 286, EnergyShieldBase: 56, MovementPenalty: 3, },
	req: { level: 52, dex: 76, int: 76, },
}
itemBases["Crypt Armour"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	armour: { EvasionBase: 308, EnergyShieldBase: 60, MovementPenalty: 3, },
	req: { level: 56, dex: 82, int: 82, },
}
itemBases["Sentinel Jacket"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	armour: { EvasionBase: 330, EnergyShieldBase: 64, MovementPenalty: 3, },
	req: { level: 59, dex: 86, int: 86, },
}
itemBases["Varnished Coat"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	armour: { EvasionBase: 387, EnergyShieldBase: 75, MovementPenalty: 3, },
	req: { level: 62, dex: 96, int: 96, },
}
itemBases["Blood Raiment"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	armour: { EvasionBase: 436, EnergyShieldBase: 70, MovementPenalty: 3, },
	req: { level: 65, dex: 107, int: 90, },
}
itemBases["Sadist Garb"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	armour: { EvasionBase: 427, EnergyShieldBase: 88, MovementPenalty: 3, },
	req: { level: 68, dex: 103, int: 109, },
}
itemBases["Carnal Armour"] = {
	type: "Body Armour",
	subType: "Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, dex_int_armour: true, },
	implicit: "+(20-25) to maximum Mana",
	armour: { EvasionBase: 353, EnergyShieldBase: 98, MovementPenalty: 3, },
	req: { level: 71, dex: 88, int: 122, },
}

itemBases["Sacrificial Garb"] = {
	type: "Body Armour",
	subType: "Armour/Evasion/Energy Shield",
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_int_armour: true, not_for_sale: true, },
	armour: { ArmourBase: 329, EvasionBase: 329, EnergyShieldBase: 64, MovementPenalty: 3, },
	req: { level: 72, str: 66, dex: 66, int: 66, },
}
itemBases["Golden Mantle"] = {
	type: "Body Armour",
	subType: "Armour/Evasion/Energy Shield",
	hidden: true,
	socketLimit: 6,
	tags: { default: true, armour: true, body_armour: true, str_dex_int_armour: true, not_for_sale: true, },
	implicit: "+(15-25)% to all Elemental Resistances",
	armour: { ArmourBase: 75, EvasionBase: 75, EnergyShieldBase: 16, },
	req: { level: 20, str: 8, dex: 8, int: 8, },
}
module.exports = itemBases