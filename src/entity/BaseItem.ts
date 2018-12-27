import { BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, Entity, ManyToMany, JoinTable } from "typeorm";
import { ItemModifier } from "./ItemModifier";

@Entity()
export class BaseItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  subType: string;

  @ManyToOne(type => ItemModifier)
  implicit: ItemModifier;

  @Column()
  level_req: number;

  @Column()
  str_req: number;

  @Column()
  dex_req: number;

  @Column()
  int_req: number;

  @Column()
  socket_limit: number;

  @Column()
  base_armour: number;

  @Column()
  base_evasion: number;

  @Column()
  base_energy_shield: number;

  @Column()
  base_phys_min: number;

  @Column()
  base_phys_max: number;

  @Column({type: "float"})
  base_crit_chance: number;

  @Column({type: "float"})
  base_aps: number;

  @Column()
  base_flask_life: number;

  @Column()
  base_flask_mana: number;

  @Column({type: "float"})
  base_flask_duration: number;

  @Column()
  base_flask_charges_used: number;

  @Column()
  base_flask_charges_max: number;

  @ManyToMany(type => ItemModifier)
  @JoinTable({name: "flask_buffs"})
  flask_buffs: ItemModifier[];
}