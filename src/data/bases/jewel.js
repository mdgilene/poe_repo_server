const itemBases = {}
itemBases["Crimson Jewel"] = {
	type: "Jewel",
	tags: { default: true, jewel: true, not_dex: true, not_int: true, not_for_sale: true, strjewel: true, },
	req: { },
}
itemBases["Viridian Jewel"] = {
	type: "Jewel",
	tags: { default: true, jewel: true, not_str: true, not_int: true, not_for_sale: true, dexjewel: true, },
	req: { },
}
itemBases["Cobalt Jewel"] = {
	type: "Jewel",
	tags: { default: true, jewel: true, not_dex: true, not_str: true, not_for_sale: true, intjewel: true, },
	req: { },
}
itemBases["Prismatic Jewel"] = {
	type: "Jewel",
	tags: { default: true, jewel: true, intjewel: true, dexjewel: true, strjewel: true, not_for_sale: true, },
	req: { },
}

itemBases["Ghastly Eye Jewel"] = {
	type: "Jewel",
	subType: "Abyss",
	tags: { default: true, not_for_sale: true, abyss_jewel_summoner: true, abyss_jewel: true, },
	req: { },
}
itemBases["Hypnotic Eye Jewel"] = {
	type: "Jewel",
	subType: "Abyss",
	tags: { default: true, not_for_sale: true, abyss_jewel_caster: true, abyss_jewel: true, },
	req: { },
}
itemBases["Murderous Eye Jewel"] = {
	type: "Jewel",
	subType: "Abyss",
	tags: { default: true, not_for_sale: true, abyss_jewel_melee: true, abyss_jewel: true, },
	req: { },
}
itemBases["Searching Eye Jewel"] = {
	type: "Jewel",
	subType: "Abyss",
	tags: { default: true, not_for_sale: true, abyss_jewel_ranged: true, abyss_jewel: true, },
	req: { },
}
module.exports = itemBases