import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
  BaseEntity
} from "typeorm";
import { Build } from "./Build";

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: ["normal", "magic", "rare", "unique"] })
  rarity: "normal" | "magic" | "rare" | "unique";

  @Column()
  base_item: string;

  @Column()
  icon: string;

  // "|" separated list of properties
  @Column({ type: "text" })
  properties: string;

  // "|" separated list of modifiers
  @Column({ type: "text" })
  modifiers: string;

  @ManyToOne(type => Build)
  build: Build;
}
