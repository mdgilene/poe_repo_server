import * as fs from "fs";
import * as path from "path";
import { BaseItem } from "../entity/BaseItem";
import { ItemModifier } from "../entity/ItemModifier";

export default {
  async seed() {
    console.log("Seeding Base Item Table...");

    const files = fs.readdirSync(path.join(__dirname, "../data/bases"));

    for (const file of files) {
      const base_data = require(path.join(__dirname, "../data/bases", file));

      for (const base in base_data) {
        const db_base = new BaseItem();

        db_base.name = base;
        db_base.type = base_data[base].type;
        db_base.subType = base_data[base].subType;
        db_base.socket_limit = base_data[base].socketLimit;
        db_base.level_req = base_data[base].req.level;
        db_base.dex_req = base_data[base].req.dex;
        db_base.int_req = base_data[base].req.int;
        db_base.str_req = base_data[base].req.str;

        if (base_data[base].implicit) {
          let implicit = await ItemModifier.findOne({text: base_data[base].implicit});
          if (!implicit) {
            implicit = ItemModifier.create({text: base_data[base].implicit});
            await implicit.save();
          }
          db_base.implicit = implicit;
        }

        if (base_data[base].weapon) {
          const wep = base_data[base].weapon;
          db_base.base_phys_min = wep.PhysicalMin;
          db_base.base_phys_max = wep.PhysicalMax;
          db_base.base_crit_chance = wep.CritChanceBase;
          db_base.base_aps = wep.AttackRateBase;
        }

        if (base_data[base].armour) {
          const arm = base_data[base].armour;
          db_base.base_armour = arm.ArmourBase;
          db_base.base_evasion = arm.EvasionBase;
          db_base.base_energy_shield = arm.EnergyShieldBase;
        }

        if (base_data[base].flask) {
          const flask = base_data[base].flask;
          db_base.base_flask_life = flask.life;
          db_base.base_flask_duration = flask.duration;
          db_base.base_flask_charges_used = flask.chargesUsed;
          db_base.base_flask_charges_max = flask.chargesMax;
          if (flask.buff) {
            db_base.flask_buffs = [];
            for (const buff of flask.buff) {
              let db_buff = await ItemModifier.findOne({text: buff});
              if (!db_buff) {
                db_buff = ItemModifier.create({text: buff});
                await db_buff.save();
              }
              db_base.flask_buffs.push(db_buff);
            }
          }
        }

        await db_base.save();
      }
    }
  }
};
