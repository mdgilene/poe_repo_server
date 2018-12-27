import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { BaseItem } from "./BaseItem";
import { Item } from "./Item";

@Entity()
export class ItemModifier extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  text: string;

  @OneToMany(type => BaseItem, baseItem => baseItem.implicit)
  baseItems: BaseItem[];
}
