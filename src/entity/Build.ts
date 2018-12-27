import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable
} from "typeorm";
import { User } from "./User";
import { Item } from "./Item";

@Entity()
export class Build extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => User, { eager: true })
  author: User;

  @Column({ type: "text" })
  introduction_text: string;

  @Column({ type: "text" })
  cost_text: string;

  @Column({ type: "text" })
  item_text: string;

  @ManyToMany(type => Item, { eager: true })
  @JoinTable({ name: "build_items" })
  items: Item[];

  @Column()
  score: number;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
