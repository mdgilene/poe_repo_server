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
import { Implicit } from "./Implicit";
import { Explicit } from "./Explicit";

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

  @Column()
  base_item: string;

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

  @OneToMany(type => Implicit, modifier => modifier.item, { eager: true })
  implicits: Implicit[];

  @OneToMany(type => Explicit, modifier => modifier.item, { eager: true })
  explicits: Explicit[];

  @Column()
  corrupted: boolean;

  @Column()
  shaper: boolean;

  @Column()
  elder: boolean;
}
