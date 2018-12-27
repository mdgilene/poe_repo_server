import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany
} from "typeorm";
import { Variant } from "./Variant";
import { League } from "./League";
import { ItemModifier } from "./ItemModifier";
import { BaseItem } from "./BaseItem";

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: ["normal", "magic", "rare", "unique"] })
  rarity: "normal" | "magic" | "rare" | "unique";

  @Column()
  name: string;

  @Column()
  slot: string;

  @ManyToOne(type => BaseItem)
  base_item: BaseItem;

  @Column()
  level_req: number;

  @Column()
  stat_req: string;

  @Column()
  source: string;

  @Column()
  upgrade: string;

  @ManyToOne(type => League, { eager: true })
  league: League;

  @ManyToMany(type => Variant, { eager: true })
  @JoinTable({ name: "item_variants" })
  variants: Variant[];

  @ManyToMany(type => ItemModifier, {eager: true})
  @JoinTable({name: "item_implicit_modifiers"})
  implicits: ItemModifier[];

  @ManyToMany(type => ItemModifier,{ eager: true })
  @JoinTable({name: "item_explicit_modifiers"})
  explicits: ItemModifier[];

  @Column()
  corrupted: boolean;

  @Column()
  shaper: boolean;

  @Column()
  elder: boolean;
}
